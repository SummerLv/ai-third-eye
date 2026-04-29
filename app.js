/**
 * AI 第三只眼 - MiniCPM-o 4.5 Realtime API Client
 * 版本: v1.0.9
 * 实现全双工实时音视频对话
 * 
 * v1.0.9 更新:
 * - 新增 4 个实用型人设（学习助手、健身教练、美食家、面试官）
 * - 新增快捷键帮助面板
 * - PWA shortcuts 扩展（人设、统计）
 * - manifest 添加版本号
 */

const APP_VERSION = 'v1.0.9';

class MiniCPMClient {
    constructor(options = {}) {
        this.wsEndpoint = options.wsEndpoint || 'wss://minicpmo45.modelbest.cn/v1/realtime';
        this.mode = options.mode || 'video';
        this.systemPrompt = options.systemPrompt || '你是一个友好的AI助手';
        this.ws = null;
        this.sessionId = null;
        this.isConnected = false;
        this.isListening = false;
        this.isMuted = false;
        this.kvCacheLength = 0;
        
        // Audio settings
        this.sampleRate = 16000;
        this.audioContext = null;
        this.audioProcessor = null;
        this.audioStream = null;
        this.audioQueue = [];
        this.isPlaying = false;
        
        // Video settings
        this.videoStream = null;
        this.canvas = null;
        this.ctx = null;
        this.frameInterval = null;
        this.fps = 1; // 1 frame per second
        
        // Reconnection settings
        this.reconnectAttempts = 0;
        this.maxReconnectAttempts = 3;
        this.reconnectDelay = 2000;
        this.autoReconnect = options.autoReconnect || true;
        
        // Callbacks
        this.onMessage = options.onMessage || (() => {});
        this.onStatusChange = options.onStatusChange || (() => {});
        this.onError = options.onError || (() => {});
        this.onReconnect = options.onReconnect || (() => {});
        this.onMuteChange = options.onMuteChange || (() => {});
        this.onInterrupt = options.onInterrupt || (() => {});
        this.onSpeakingChange = options.onSpeakingChange || (() => {});
    }
    
    async connect() {
        return new Promise((resolve, reject) => {
            const url = `${this.wsEndpoint}?mode=${this.mode}`;
            
            try {
                this.ws = new WebSocket(url);
                
                this.ws.onopen = () => {
                    console.log('WebSocket connected');
                    this.onStatusChange('connecting', '正在连接...');
                };
                
                this.ws.onmessage = async (event) => {
                    try {
                        const data = JSON.parse(event.data);
                        await this.handleMessage(data);
                        
                        if (data.type === 'session.queue_done') {
                            this.sendStatusUpdate('ready', '已就绪');
                            resolve();
                        }
                    } catch (e) {
                        console.error('Message parse error:', e);
                    }
                };
                
                this.ws.onerror = (error) => {
                    console.error('WebSocket error:', error);
                    this.onError(error);
                    reject(error);
                };
                
                this.ws.onclose = (event) => {
                    console.log('WebSocket closed:', event);
                    const wasConnected = this.isConnected;
                    this.isConnected = false;
                    
                    // Try to reconnect if was connected and auto reconnect enabled
                    if (wasConnected && this.autoReconnect && this.reconnectAttempts < this.maxReconnectAttempts) {
                        this.reconnectAttempts++;
                        const delay = this.reconnectDelay * this.reconnectAttempts;
                        this.onStatusChange('reconnecting', `连接断开，${delay/1000}秒后重试 (${this.reconnectAttempts}/${this.maxReconnectAttempts})`);
                        this.onMessage('system', `⚠️ 连接断开，正在重连... (${this.reconnectAttempts}/${this.maxReconnectAttempts})`);
                        
                        setTimeout(async () => {
                            try {
                                await this.connect();
                                this.reconnectAttempts = 0;
                                this.onReconnect();
                            } catch (e) {
                                console.error('Reconnect failed:', e);
                            }
                        }, delay);
                    } else {
                        this.onStatusChange('disconnected', '连接已断开');
                        this.cleanup();
                    }
                };
                
            } catch (e) {
                reject(e);
            }
        });
    }
    
    async handleMessage(data) {
        const type = data.type;
        
        switch (type) {
            case 'session.queued':
                this.onStatusChange('queued', `排队中 (${data.position}位)`);
                this.onMessage('system', `⏳ 排队中，前方还有 ${data.position - 1} 人...`);
                break;
                
            case 'session.queue_update':
                this.onStatusChange('queued', `排队中 (${data.position}位)`);
                break;
                
            case 'session.queue_done':
                this.onStatusChange('ready', 'Worker 已分配');
                // Send session update
                await this.sendSessionUpdate();
                break;
                
            case 'session.created':
                this.sessionId = data.session_id;
                this.isConnected = true;
                this.onStatusChange('connected', `会话已建立`);
                this.onMessage('system', `✅ AI 已就绪！Session: ${this.sessionId}`);
                
                // Start sending audio/video
                if (this.mode === 'video') {
                    this.startVideoStreaming();
                }
                this.startAudioStreaming();
                break;
                
            case 'response.output_audio.delta':
                // Handle AI response
                const text = data.text || '';
                const audio = data.audio;
                const endOfTurn = data.end_of_turn;
                this.kvCacheLength = data.kv_cache_length || 0;
                
                if (text) {
                    this.onMessage('ai', text, !endOfTurn);
                }
                
                if (audio && !this.isMuted) {
                    this.onSpeakingChange && this.onSpeakingChange(true);
                    await this.playAudio(audio);
                }
                
                if (endOfTurn) {
                    this.onSpeakingChange && this.onSpeakingChange(false);
                    this.updateAIStatus('listening', '正在听...');
                }
                break;
                
            case 'response.listen':
                this.isListening = true;
                this.updateAIStatus('listening', '正在听...');
                break;
                
            case 'session.closed':
                this.onMessage('system', `🚪 会话已关闭: ${data.reason}`);
                this.onStatusChange('closed', `已关闭: ${data.reason}`);
                this.cleanup();
                break;
                
            case 'error':
                this.onError(data.error);
                this.onMessage('system', `❌ 错误: ${data.error?.message || data.error}`);
                break;
                
            default:
                console.log('Unknown message type:', type, data);
        }
    }
    
    async sendSessionUpdate() {
        const msg = {
            type: 'session.update',
            session: {
                instructions: this.systemPrompt
            }
        };
        
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify(msg));
            console.log('Sent session.update');
        }
    }
    
    async startVideoStreaming() {
        try {
            // Get video stream
            this.videoStream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: 'user', width: 640, height: 480 },
                audio: false
            });
            
            // Create canvas for frame capture
            this.canvas = document.createElement('canvas');
            this.canvas.width = 320;
            this.canvas.height = 240;
            this.ctx = this.canvas.getContext('2d');
            
            // Create video element
            const video = document.getElementById('localVideo');
            video.srcObject = this.videoStream;
            
            // Start capturing frames
            this.frameInterval = setInterval(() => {
                if (this.isConnected) {
                    this.captureFrame();
                }
            }, 1000 / this.fps);
            
        } catch (e) {
            console.error('Video stream error:', e);
            this.onError(e);
        }
    }
    
    captureFrame() {
        if (!this.ctx || !this.canvas) return;
        
        const video = document.getElementById('localVideo');
        this.ctx.drawImage(video, 0, 0, this.canvas.width, this.canvas.height);
        
        // Convert to JPEG base64
        const jpegData = this.canvas.toDataURL('image/jpeg', 0.7);
        const base64Data = jpegData.split(',')[1];
        
        return base64Data;
    }
    
    async startAudioStreaming() {
        try {
            // Initialize audio context
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)({
                sampleRate: this.sampleRate
            });
            
            // Get audio stream
            this.audioStream = await navigator.mediaDevices.getUserMedia({
                audio: {
                    sampleRate: this.sampleRate,
                    channelCount: 1,
                    echoCancellation: true,
                    noiseSuppression: true
                }
            });
            
            const source = this.audioContext.createMediaStreamSource(this.audioStream);
            
            // Use ScriptProcessor for processing
            const processor = this.audioContext.createScriptProcessor(4096, 1, 1);
            
            processor.onaudioprocess = (event) => {
                if (!this.isConnected || this.isMuted) return;
                
                const inputData = event.inputBuffer.getChannelData(0);
                
                // Resample to 16kHz if needed
                const resampledData = this.resampleTo16kHz(inputData);
                
                // Convert to base64
                const base64Audio = this.float32ToBase64(resampledData);
                
                // Send to server
                this.sendAudioChunk(base64Audio);
            };
            
            source.connect(processor);
            processor.connect(this.audioContext.destination);
            
            this.audioProcessor = processor;
            
        } catch (e) {
            console.error('Audio stream error:', e);
            this.onError(e);
        }
    }
    
    resampleTo16kHz(data) {
        // Simple decimation (if original is 48kHz)
        const ratio = Math.round(this.audioContext.sampleRate / this.sampleRate);
        const result = [];
        
        for (let i = 0; i < data.length; i += ratio) {
            result.push(data[i]);
        }
        
        return new Float32Array(result);
    }
    
    float32ToBase64(float32Array) {
        // Convert Float32 to base64
        const buffer = new ArrayBuffer(float32Array.length * 4);
        const view = new DataView(buffer);
        
        for (let i = 0; i < float32Array.length; i++) {
            view.setFloat32(i * 4, float32Array[i], true);
        }
        
        // Convert to base64
        let binary = '';
        const bytes = new Uint8Array(buffer);
        for (let i = 0; i < bytes.length; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        
        return btoa(binary);
    }
    
    sendAudioChunk(audioBase64, videoFrames = null) {
        if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return;
        
        const msg = {
            type: 'input_audio_buffer.append',
            audio: audioBase64
        };
        
        // Add video frames in video mode
        if (this.mode === 'video' && videoFrames === null) {
            const frame = this.captureFrame();
            if (frame) {
                msg.video_frames = [frame];
            }
        } else if (videoFrames && videoFrames.length > 0) {
            msg.video_frames = videoFrames;
        }
        
        this.ws.send(JSON.stringify(msg));
    }
    
    // Audio playback queue to prevent overlapping
    audioPlaybackQueue = [];
    audioPlaybackContext = null;
    isAudioPlaying = false;
    
    async playAudio(audioBase64) {
        try {
            // Add to queue
            this.audioPlaybackQueue.push(audioBase64);
            
            // Process queue if not already playing
            if (!this.isAudioPlaying) {
                await this.processAudioQueue();
            }
        } catch (e) {
            console.error('Audio playback error:', e);
        }
    }
    
    async processAudioQueue() {
        if (this.audioPlaybackQueue.length === 0) {
            this.isAudioPlaying = false;
            return;
        }
        
        this.isAudioPlaying = true;
        this.updateAIStatus('speaking', '正在说话...');
        
        // Initialize audio context once
        if (!this.audioPlaybackContext) {
            this.audioPlaybackContext = new (window.AudioContext || window.webkitAudioContext)({
                sampleRate: 24000
            });
        }
        
        const audioBase64 = this.audioPlaybackQueue.shift();
        
        try {
            // Decode base64 to float32 PCM
            const binaryString = atob(audioBase64);
            const bytes = new Uint8Array(binaryString.length);
            for (let i = 0; i < binaryString.length; i++) {
                bytes[i] = binaryString.charCodeAt(i);
            }
            
            const float32View = new Float32Array(bytes.buffer);
            
            // Create audio buffer
            const audioBuffer = this.audioPlaybackContext.createBuffer(1, float32View.length, 24000);
            audioBuffer.getChannelData(0).set(float32View);
            
            // Play
            const source = this.audioPlaybackContext.createBufferSource();
            source.buffer = audioBuffer;
            source.connect(this.audioPlaybackContext.destination);
            
            await new Promise(resolve => {
                source.onended = resolve;
                source.start(0);
            });
        } catch (e) {
            console.error('Audio decode error:', e);
        }
        
        // Process next item in queue
        await this.processAudioQueue();
    }
    
    updateAIStatus(status, text) {
        const statusEl = document.getElementById('aiStatus');
        if (statusEl) {
            statusEl.textContent = text;
            statusEl.dataset.status = status;
        }
    }
    
    sendStatusUpdate(status, text) {
        this.onStatusChange(status, text);
    }
    
    // 🆕 静音功能
    setMuted(muted) {
        this.isMuted = muted;
        this.onMuteChange(muted);
        
        // 清空音频播放队列
        if (muted) {
            this.audioPlaybackQueue = [];
            this.isAudioPlaying = false;
        }
    }
    
    toggleMute() {
        this.setMuted(!this.isMuted);
        return this.isMuted;
    }
    
    // 🆕 打断功能
    interrupt() {
        // 清空音频播放队列并停止当前播放
        this.audioPlaybackQueue = [];
        this.isAudioPlaying = false;
        
        // 关闭播放上下文
        if (this.audioPlaybackContext) {
            this.audioPlaybackContext.close();
            this.audioPlaybackContext = null;
        }
        
        this.updateAIStatus('listening', '已打断，正在听...');
        this.onInterrupt();
        this.onMessage('system', '⏸️ 已打断 AI 发言');
    }
    
    close() {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify({
                type: 'session.close',
                reason: 'user_stop'
            }));
            this.ws.close();
        }
        this.cleanup();
    }
    
    cleanup() {
        this.isConnected = false;
        
        // Stop video
        if (this.frameInterval) {
            clearInterval(this.frameInterval);
            this.frameInterval = null;
        }
        
        if (this.videoStream) {
            this.videoStream.getTracks().forEach(track => track.stop());
            this.videoStream = null;
        }
        
        // Stop audio
        if (this.audioContext) {
            this.audioContext.close();
            this.audioContext = null;
        }
        
        if (this.audioProcessor) {
            this.audioProcessor.disconnect();
            this.audioProcessor = null;
        }
        
        if (this.audioStream) {
            this.audioStream.getTracks().forEach(track => track.stop());
            this.audioStream = null;
        }
        
        // Clean up playback
        if (this.audioPlaybackContext) {
            this.audioPlaybackContext.close();
            this.audioPlaybackContext = null;
        }
        this.audioPlaybackQueue = [];
        this.isAudioPlaying = false;
    }
}

/**
 * UI Controller
 */
class UIController {
    constructor() {
        this.client = null;
        this.currentMode = 'video';
        this.messages = [];
        this.partialMessage = '';
        
        this.init();
        this.initTheme();
        this.initStats();
    }
    
    init() {
        // Setup event listeners
        document.getElementById('startBtn').addEventListener('click', () => this.start());
        document.getElementById('stopBtn').addEventListener('click', () => this.stop());
        
        // 🆕 静音按钮
        const muteBtn = document.getElementById('muteBtn');
        if (muteBtn) {
            muteBtn.addEventListener('click', () => this.toggleMute());
        }
        
        // 🆕 打断按钮
        const interruptBtn = document.getElementById('interruptBtn');
        if (interruptBtn) {
            interruptBtn.addEventListener('click', () => this.interrupt());
        }
        
        // Global keyboard shortcuts
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));
        
        // Mode buttons
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentMode = btn.dataset.mode;
            });
        });
        
        // Settings
        document.getElementById('settingsBtn').addEventListener('click', () => {
            document.getElementById('settingsPanel').classList.add('show');
            this.loadPersonalityGrid();
        });
        
        document.getElementById('closeSettings').addEventListener('click', () => {
            document.getElementById('settingsPanel').classList.remove('show');
        });
        
        document.getElementById('saveSettings').addEventListener('click', () => {
            this.saveSettings();
            document.getElementById('settingsPanel').classList.remove('show');
        });
        
        // Random personality button
        document.getElementById('randomPersonalityBtn')?.addEventListener('click', () => {
            const personality = getRandomPersonality();
            this.selectPersonality(personality.key);
        });
        
        // Screenshot button
        document.getElementById('screenshotBtn')?.addEventListener('click', () => {
            this.takeScreenshot();
        });
        
        // 🆕 Clear messages button
        document.getElementById('clearBtn')?.addEventListener('click', () => {
            this.clearMessages();
        });
        
        // 🆕 Export messages button
        document.getElementById('exportBtn')?.addEventListener('click', () => {
            this.exportMessages();
        });
        
        this.loadSettings();
        this.initAudioVisualizer();
        this.showWelcomeTip();
        this.updateVersionDisplay();
    }
    
    // 🆕 更新版本显示
    updateVersionDisplay() {
        const versionBadge = document.getElementById('versionBadge');
        if (versionBadge) {
            versionBadge.textContent = APP_VERSION;
        }
    }
    
    // 🆕 主题系统
    initTheme() {
        this.themes = ['default', 'light', 'sunset', 'ocean'];
        this.themeNames = {
            'default': '🌙 暗夜',
            'light': '☀️ 明亮',
            'sunset': '🌅 日落',
            'ocean': '🌊 海洋'
        };
        
        // Load saved theme
        const savedTheme = localStorage.getItem('ai-third-eye-theme') || 'default';
        this.setTheme(savedTheme);
        
        // Theme button
        const themeBtn = document.getElementById('themeBtn');
        if (themeBtn) {
            themeBtn.addEventListener('click', () => this.cycleTheme());
            this.updateThemeButton();
        }
    }
    
    setTheme(theme) {
        document.body.className = '';
        if (theme !== 'default') {
            document.body.classList.add(`theme-${theme}`);
        }
        localStorage.setItem('ai-third-eye-theme', theme);
        this.currentTheme = theme;
        this.updateThemeButton();
    }
    
    cycleTheme() {
        const currentIndex = this.themes.indexOf(this.currentTheme);
        const nextIndex = (currentIndex + 1) % this.themes.length;
        this.setTheme(this.themes[nextIndex]);
        this.addMessage('system', `🎨 已切换到 ${this.themeNames[this.currentTheme]} 主题`);
    }
    
    updateThemeButton() {
        const themeBtn = document.getElementById('themeBtn');
        if (themeBtn) {
            // 显示 emoji + 主题名
            const [emoji, name] = this.themeNames[this.currentTheme].split(' ');
            themeBtn.innerHTML = `${emoji}`;
            themeBtn.title = `当前主题: ${name} (点击切换)`;
        }
    }
    
    // 🆕 统计系统
    initStats() {
        this.stats = this.loadStats();
        
        // Stats button
        const statsBtn = document.getElementById('statsBtn');
        if (statsBtn) {
            statsBtn.addEventListener('click', () => this.showStats());
        }
        
        // Reset stats button
        const resetStatsBtn = document.getElementById('resetStats');
        if (resetStatsBtn) {
            resetStatsBtn.addEventListener('click', () => this.resetStats());
        }
        
        // Close stats button
        const closeStatsBtn = document.getElementById('closeStats');
        if (closeStatsBtn) {
            closeStatsBtn.addEventListener('click', () => {
                document.getElementById('statsPanel').classList.remove('show');
            });
        }
        
        // 🆕 Help button
        const helpBtn = document.getElementById('helpBtn');
        if (helpBtn) {
            helpBtn.addEventListener('click', () => this.showHelp());
        }
        
        // Close help button
        const closeHelpBtn = document.getElementById('closeHelp');
        if (closeHelpBtn) {
            closeHelpBtn.addEventListener('click', () => {
                document.getElementById('helpPanel').classList.remove('show');
            });
        }
    }
    
    loadStats() {
        const saved = localStorage.getItem('ai-third-eye-stats');
        return saved ? JSON.parse(saved) : {
            sessions: 0,
            messages: 0,
            screenshots: 0,
            totalDuration: 0,
            lastSession: null
        };
    }
    
    saveStats() {
        localStorage.setItem('ai-third-eye-stats', JSON.stringify(this.stats));
    }
    
    incrementStat(key) {
        this.stats[key]++;
        this.saveStats();
    }
    
    recordSessionStart() {
        this.sessionStartTime = Date.now();
        this.stats.sessions++;
        this.saveStats();
    }
    
    recordSessionEnd() {
        if (this.sessionStartTime) {
            const duration = Math.floor((Date.now() - this.sessionStartTime) / 1000);
            this.stats.totalDuration += duration;
            this.stats.lastSession = new Date().toISOString();
            this.saveStats();
            this.sessionStartTime = null;
        }
    }
    
    showStats() {
        const panel = document.getElementById('statsPanel');
        const content = document.getElementById('statsContent');
        
        const formatDuration = (seconds) => {
            if (seconds < 60) return `${seconds}秒`;
            if (seconds < 3600) return `${Math.floor(seconds / 60)}分${seconds % 60}秒`;
            const hours = Math.floor(seconds / 3600);
            const mins = Math.floor((seconds % 3600) / 60);
            return `${hours}时${mins}分`;
        };
        
        content.innerHTML = `
            <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:15px;">
                <div style="background:rgba(0,0,0,0.2);padding:15px;border-radius:8px;text-align:center;">
                    <div style="font-size:24px;color:var(--accent-primary);">${this.stats.sessions}</div>
                    <div style="font-size:12px;color:var(--text-secondary);">会话次数</div>
                </div>
                <div style="background:rgba(0,0,0,0.2);padding:15px;border-radius:8px;text-align:center;">
                    <div style="font-size:24px;color:var(--accent-primary);">${this.stats.messages}</div>
                    <div style="font-size:12px;color:var(--text-secondary);">对话消息</div>
                </div>
                <div style="background:rgba(0,0,0,0.2);padding:15px;border-radius:8px;text-align:center;">
                    <div style="font-size:24px;color:var(--accent-primary);">${this.stats.screenshots}</div>
                    <div style="font-size:12px;color:var(--text-secondary);">截图保存</div>
                </div>
                <div style="background:rgba(0,0,0,0.2);padding:15px;border-radius:8px;text-align:center;">
                    <div style="font-size:24px;color:var(--accent-primary);">${formatDuration(this.stats.totalDuration)}</div>
                    <div style="font-size:12px;color:var(--text-secondary);">总时长</div>
                </div>
            </div>
            <div style="margin-top:15px;padding:10px;background:rgba(0,0,0,0.2);border-radius:8px;font-size:12px;">
                <div style="color:var(--text-secondary);">最后会话: ${this.stats.lastSession ? new Date(this.stats.lastSession).toLocaleString() : '暂无'}</div>
            </div>
        `;
        
        panel.classList.add('show');
    }
    
    resetStats() {
        this.stats = {
            sessions: 0,
            messages: 0,
            screenshots: 0,
            totalDuration: 0,
            lastSession: null
        };
        this.saveStats();
        this.showStats();
        this.addMessage('system', '📊 统计数据已重置');
    }
    
    // 🆕 显示帮助
    showHelp() {
        const panel = document.getElementById('helpPanel');
        if (panel) {
            panel.classList.add('show');
        }
    }
    
    handleKeyboard(e) {
        // Escape - 关闭设置面板
        if (e.key === 'Escape') {
            document.getElementById('settingsPanel').classList.remove('show');
        }
        // Space - 开始/结束对话（需要焦点不在输入框）
        if (e.key === ' ' && document.activeElement.tagName !== 'TEXTAREA' && document.activeElement.tagName !== 'INPUT') {
            e.preventDefault();
            if (this.client && this.client.isConnected) {
                this.stop();
            } else {
                this.start();
            }
        }
        // S - 截图
        if (e.key === 's' && e.ctrlKey && this.client && this.client.isConnected) {
            e.preventDefault();
            this.takeScreenshot();
        }
        // M - 静音切换
        if (e.key === 'm' && this.client && this.client.isConnected) {
            e.preventDefault();
            this.toggleMute();
        }
        // C - 清空对话
        if (e.key === 'c' && document.activeElement.tagName !== 'TEXTAREA' && document.activeElement.tagName !== 'INPUT') {
            e.preventDefault();
            this.clearMessages();
        }
        // E - 导出对话
        if (e.key === 'e' && document.activeElement.tagName !== 'TEXTAREA' && document.activeElement.tagName !== 'INPUT') {
            e.preventDefault();
            this.exportMessages();
        }
        // , - 设置面板
        if (e.key === ',' && e.ctrlKey === false && e.altKey === false) {
            const panel = document.getElementById('settingsPanel');
            panel.classList.toggle('show');
            if (panel.classList.contains('show')) {
                this.loadPersonalityGrid();
            }
        }
    }
    
    showWelcomeTip() {
        // 首次访问显示使用提示
        const hasVisited = localStorage.getItem('ai-third-eye-visited');
        if (!hasVisited) {
            setTimeout(() => {
                this.addMessage('system', '💡 使用提示: 空格键开始/结束对话，Ctrl+S截图，M静音，Esc关闭面板');
                localStorage.setItem('ai-third-eye-visited', 'true');
            }, 1500);
        }
    }
    
    loadPersonalityGrid() {
        const grid = document.getElementById('personalityGrid');
        if (!grid) return;
        
        grid.innerHTML = '';
        const personalities = getAllPersonalities();
        const savedPersonality = localStorage.getItem('ai-third-eye-personality');
        
        for (const [key, personality] of Object.entries(personalities)) {
            const btn = document.createElement('button');
            btn.className = 'btn btn-secondary';
            btn.style.cssText = 'padding: 8px; font-size: 11px; text-align: left;';
            btn.dataset.personality = key;
            btn.innerHTML = `${personality.name}<br><span style="color:#888">${personality.description}</span>`;
            
            if (savedPersonality === key) {
                btn.classList.remove('btn-secondary');
                btn.classList.add('btn-primary');
            }
            
            btn.addEventListener('click', () => this.selectPersonality(key));
            grid.appendChild(btn);
        }
    }
    
    selectPersonality(key) {
        const personality = getAllPersonalities()[key];
        if (!personality) return;
        
        localStorage.setItem('ai-third-eye-personality', key);
        document.getElementById('systemPrompt').value = personality.prompt;
        
        // Update grid buttons
        const grid = document.getElementById('personalityGrid');
        grid.querySelectorAll('button').forEach(btn => {
            btn.classList.remove('btn-primary');
            btn.classList.add('btn-secondary');
            if (btn.dataset.personality === key) {
                btn.classList.remove('btn-secondary');
                btn.classList.add('btn-primary');
            }
        });
        
        this.addMessage('system', `🎭 已切换到 ${personality.name} 人设`);
    }
    
    loadSettings() {
        const saved = localStorage.getItem('ai-third-eye-settings');
        if (saved) {
            const settings = JSON.parse(saved);
            document.getElementById('systemPrompt').value = settings.systemPrompt || '';
            document.getElementById('apiEndpoint').value = settings.apiEndpoint || '';
        }
        
        // Load saved personality
        const savedPersonality = localStorage.getItem('ai-third-eye-personality');
        if (savedPersonality && getAllPersonalities()[savedPersonality]) {
            const personality = getAllPersonalities()[savedPersonality];
            document.getElementById('systemPrompt').value = personality.prompt;
        }
    }
    
    saveSettings() {
        const settings = {
            systemPrompt: document.getElementById('systemPrompt').value,
            apiEndpoint: document.getElementById('apiEndpoint').value
        };
        localStorage.setItem('ai-third-eye-settings', JSON.stringify(settings));
    }
    
    initAudioVisualizer() {
        const visualizer = document.getElementById('audioVisualizer');
        for (let i = 0; i < 20; i++) {
            const bar = document.createElement('div');
            bar.className = 'bar';
            bar.style.height = '5px';
            visualizer.appendChild(bar);
        }
    }
    
    async start() {
        const startBtn = document.getElementById('startBtn');
        const stopBtn = document.getElementById('stopBtn');
        const muteBtn = document.getElementById('muteBtn');
        const interruptBtn = document.getElementById('interruptBtn');
        const screenshotBtn = document.getElementById('screenshotBtn');
        const loadingOverlay = document.getElementById('loadingOverlay');
        
        startBtn.disabled = true;
        loadingOverlay.classList.add('show');
        
        const systemPrompt = document.getElementById('systemPrompt').value;
        const apiEndpoint = document.getElementById('apiEndpoint').value;
        
        this.client = new MiniCPMClient({
            wsEndpoint: apiEndpoint,
            mode: this.currentMode,
            systemPrompt: systemPrompt,
            onMessage: (type, text, partial = false) => this.addMessage(type, text, partial),
            onStatusChange: (status, text) => this.updateStatus(status, text),
            onError: (error) => this.showError(error),
            onMuteChange: (muted) => this.updateMuteButton(muted),
            onInterrupt: () => this.onInterrupt(),
            onSpeakingChange: (speaking) => this.setAISpeakingAnimation(speaking)
        });
        
        try {
            await this.client.connect();
            
            startBtn.style.display = 'none';
            stopBtn.style.display = 'inline-flex';
            muteBtn.style.display = 'inline-flex';
            interruptBtn.style.display = 'inline-flex';
            screenshotBtn.style.display = 'inline-flex';
            loadingOverlay.classList.remove('show');
            
            // 🆕 记录会话开始
            this.recordSessionStart();
            
        } catch (e) {
            startBtn.disabled = false;
            loadingOverlay.classList.remove('show');
            this.addMessage('system', `❌ 连接失败: ${e.message}`);
        }
    }
    
    stop() {
        if (this.client) {
            this.client.close();
        }
        
        // 🆕 记录会话结束
        this.recordSessionEnd();
        
        document.getElementById('startBtn').style.display = 'inline-flex';
        document.getElementById('startBtn').disabled = false;
        document.getElementById('stopBtn').style.display = 'none';
        document.getElementById('muteBtn').style.display = 'none';
        document.getElementById('interruptBtn').style.display = 'none';
        document.getElementById('screenshotBtn').style.display = 'none';
        
        this.addMessage('system', '👋 对话已结束');
    }
    
    // 🆕 静音切换
    toggleMute() {
        if (this.client) {
            const muted = this.client.toggleMute();
            this.updateMuteButton(muted);
        }
    }
    
    updateMuteButton(muted) {
        const muteBtn = document.getElementById('muteBtn');
        if (muteBtn) {
            muteBtn.textContent = muted ? '🔊 取消静音' : '🔇 静音';
            muteBtn.classList.toggle('btn-warning', muted);
        }
    }
    
    // 🆕 打断AI发言
    interrupt() {
        if (this.client) {
            this.client.interrupt();
        }
    }
    
    onInterrupt() {
        // 打断后的UI更新
        this.updateStatus('listening', '正在听...');
        this.client && this.client.onSpeakingChange && this.client.onSpeakingChange(false);
    }
    
    // 🆕 清空对话记录
    clearMessages() {
        const container = document.getElementById('messagesContainer');
        container.innerHTML = `
            <div class="message system">
                <p>👋 对话记录已清空</p>
                <p class="message-time">系统提示</p>
            </div>
        `;
        this.messages = [];
        this.partialMessage = '';
    }
    
    // 🆕 导出对话记录
    exportMessages() {
        const container = document.getElementById('messagesContainer');
        const messages = container.querySelectorAll('.message');
        
        let exportText = `AI 第三只眼 - 对话记录导出\n`;
        exportText += `导出时间: ${new Date().toLocaleString()}\n`;
        exportText += `版本: ${APP_VERSION}\n`;
        exportText += `${'='.repeat(50)}\n\n`;
        
        messages.forEach(msg => {
            const text = msg.querySelector('p')?.textContent || '';
            const time = msg.querySelector('.message-time')?.textContent || '';
            const type = msg.classList.contains('ai') ? 'AI' : 
                        msg.classList.contains('user') ? '用户' : '系统';
            exportText += `[${time}] ${type}: ${text}\n`;
        });
        
        // 创建下载
        const blob = new Blob([exportText], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `ai-third-eye-chat-${new Date().toISOString().slice(0,10)}.txt`;
        a.click();
        URL.revokeObjectURL(url);
        
        this.addMessage('system', '📄 对话记录已导出！');
    }
    
    // 🆕 设置AI说话动画
    setAISpeakingAnimation(speaking) {
        const avatar = document.querySelector('.ai-avatar');
        if (avatar) {
            if (speaking) {
                avatar.classList.add('speaking');
            } else {
                avatar.classList.remove('speaking');
            }
        }
    }
    
    addMessage(type, text, partial = false) {
        const container = document.getElementById('messagesContainer');
        
        if (partial && type === 'ai') {
            // Update partial message
            this.partialMessage += text;
            
            let msgEl = container.querySelector('.message.ai.partial');
            if (!msgEl) {
                msgEl = document.createElement('div');
                msgEl.className = 'message ai partial';
                container.appendChild(msgEl);
            }
            
            msgEl.innerHTML = `<p>${this.partialMessage}</p><span class="message-time">${new Date().toLocaleTimeString()}</span>`;
            
            if (!partial) {
                msgEl.classList.remove('partial');
                this.partialMessage = '';
            }
        } else {
            // Remove partial if exists
            const partialEl = container.querySelector('.message.partial');
            if (partialEl) partialEl.remove();
            this.partialMessage = '';
            
            // Add new message
            const msgEl = document.createElement('div');
            msgEl.className = `message ${type}`;
            
            const icon = type === 'ai' ? '🤖' : type === 'user' ? '👤' : '📢';
            
            msgEl.innerHTML = `
                <p>${icon} ${text}</p>
                <span class="message-time">${new Date().toLocaleTimeString()}</span>
            `;
            
            container.appendChild(msgEl);
            
            // 🆕 记录消息统计（仅记录 AI 和用户消息）
            if (type === 'ai' || type === 'user') {
                this.incrementStat('messages');
            }
        }
        
        // Scroll to bottom
        container.scrollTop = container.scrollHeight;
        
        // Keep only last 50 messages
        while (container.children.length > 50) {
            container.removeChild(container.firstChild);
        }
    }
    
    updateStatus(status, text) {
        const dot = document.getElementById('connectionDot');
        const statusText = document.getElementById('connectionStatus');
        const sessionInfo = document.getElementById('sessionInfo');
        
        statusText.textContent = text;
        
        dot.className = 'status-dot';
        if (status === 'connected') {
            dot.classList.add('connected');
        } else if (status === 'speaking' || status === 'listening') {
            dot.classList.add('speaking');
        }
        
        if (this.client && this.client.sessionId) {
            // 🆕 更友好的显示方式
            const kvPercent = Math.round((this.client.kvCacheLength / 8192) * 100);
            sessionInfo.textContent = `记忆: ${kvPercent}%`;
            sessionInfo.title = `Session: ${this.client.sessionId} | KV Cache: ${this.client.kvCacheLength}/8192`;
        }
    }
    
    showError(error) {
        console.error('Error:', error);
        
        let message = '⚠️ 发生错误';
        
        if (error && error.code) {
            switch (error.code) {
                case 'not_ready':
                    message = '⚠️ 会话未建立，请稍后再试';
                    break;
                case 'unknown_event':
                    message = '⚠️ 发送了无效消息';
                    break;
                case 'missing_field':
                    message = '⚠️ 数据缺失: ' + (error.message || '');
                    break;
                case 'invalid_payload':
                    message = '⚠️ 音频/视频格式错误';
                    break;
                case 'service_unavailable':
                    message = '⚠️ 服务暂时不可用，请稍后重试';
                    break;
                case 'queue_full':
                    message = '⚠️ 排队已满，请稍后重试';
                    break;
                case 'worker_busy':
                    message = '⚠️ 服务器繁忙，请稍后重试';
                    break;
                case 'inference_error':
                    message = '⚠️ AI 推理出错，继续尝试...';
                    break;
                default:
                    message = '⚠️ 错误: ' + (error.message || error.code);
            }
        } else if (error && error.message) {
            message = '⚠️ ' + error.message;
        }
        
        this.addMessage('system', message);
    }
    
    takeScreenshot() {
        const video = document.getElementById('localVideo');
        if (!video) return;
        
        // Create canvas
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth || 640;
        canvas.height = video.videoHeight || 480;
        const ctx = canvas.getContext('2d');
        
        // Draw video frame (mirrored)
        ctx.translate(canvas.width, 0);
        ctx.scale(-1, 1);
        ctx.drawImage(video, 0, 0);
        
        // Get image data
        const dataUrl = canvas.toDataURL('image/png');
        
        // Create download link
        const a = document.createElement('a');
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        a.href = dataUrl;
        a.download = `ai-third-eye-${timestamp}.png`;
        a.click();
        
        // 🆕 记录截图统计
        this.incrementStat('screenshots');
        
        this.addMessage('system', '📸 截图已保存！');
        
        // Clean up
        canvas.remove();
    }
}

// Initialize
const app = new UIController();
