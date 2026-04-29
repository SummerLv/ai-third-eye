/**
 * AI 第三只眼 - MiniCPM-o 4.5 Realtime API Client
 * 版本: v1.7.8
 * 实现全双工实时音视频对话
 * 
 * v1.7.8 更新:
 * - 新增「摄影师」人设 - 拍照指导，构图建议
 * - 人设总数扩展至 19 种
 * 
 * v1.7.7 更新:
 * - 新增「再见」语音命令 - 说"再见"、"拜拜"自动结束会话
 * - 新增「结束」语音命令 - 快速结束当前对话
 * - 语音命令总数扩展至 24 种
 * 
 * v1.7.6 更新:
 * - 新增「安全卫士」人设 - 专注安全提醒，发现潜在危险
 * - 新增「语言老师」人设 - 语言学习辅助，纠正发音
 * - 人设总数扩展至 18 种
 * 
 * v1.7.4 更新:
 * - 新增「宠物专家」人设 - 关爱毛孩子，分享养宠知识
 * - 新增「技术顾问」人设 - 识别设备，解答技术问题
 * - 人设总数扩展至 16 种
 * - 优化智能推荐，下午时段推荐宠物专家
 * 
 * v1.7.3 更新:
 * - 同步更新所有文件版本号
 * - 修复版本号注释不一致问题
 * 
 * v1.5.9 更新:
 * - 新增「智能人设推荐」功能 - 根据时间段自动推荐合适的人设
 * - 早上推荐学习助手/健身教练
 * - 下午推荐美食家/旅行向导
 * - 晚上推荐故事大王/诗人
 * - 深夜推荐健康护士/小鹿
 *
 * v1.5.8 更新:
 * - 新增「旅行向导」人设 - 发现风景，讲述故事
 * - 新增「健康护士」人设 - 关注健康，提醒防护
 * - 人设总数扩展至 14 种
 *
 * v1.5.7 更新:
 * - 新增 PWA screenshots 支持
 * - README 开发日志同步更新
 *
 * v1.5.6 更新:
 * - 修复 manifest.json JSON 语法错误（多余括号导致 PWA 解析失败）
 *
 * v1.5.5 更新:
 * - 新增"AI正在思考"视觉指示器
 * - 优化用户语音识别反馈体验
 * - 改进连接状态视觉提示
 *
 * v1.5.3 更新:
 * - 新增语音命令触发动画反馈
 * - 新增关于面板（项目信息）
 * - 优化主题切换体验（颜色预览）
 * - 改进错误处理和 localStorage 容错
 * 
 * v1.5.2 更新:
 * - 修复版本号显示不一致
 * - 修复语音截图命令调用方法名错误
 * - 新增 CHANGELOG.md 记录版本变更
 * 
 * v1.5.1 更新:
 * - 新增语音命令：截图/拍照、大声点、小声点、慢一点、快一点
 * - 扩展常用语按钮：不明白、再说一遍、太棒了
 * - 优化用户体验，语音控制更丰富
 * 
 * v1.5.0 更新:
 * - 新增语音快捷命令系统（暂停/换话题/再说一遍/安静/看得清楚吗）
 * - AI 能识别用户意图并执行相应操作
 * - 添加命令提示面板，帮助用户快速掌握快捷命令
 * - 优化用户体验，减少手动点击操作
 * 
 * v1.4.2 更新:
 * - 修复用户语音转写正式保存到对话记录
 * - 用户说完话后，对话内容会持久保存
 * 
 * v1.4.1 更新:
 * - 完善用户语音识别实时显示功能
 * - 新增说话动态效果
 * 
 * v1.3.1 更新:
 * - 新增语音识别文字显示（用户说话时实时显示文字）
 * - 新增常用语快速发送按钮
 * - 优化用户消息显示样式
 * 
 * v1.3.0 更新:
 * - 新增网络状态警告横幅（断网时醒目提示）
 * - 改进音量指示器视觉效果（渐变颜色）
 * - 新增会话时长计时器
 * - 优化移动端按钮布局
 * 
 * v1.2.0 更新:
 * - 新增实时音量指示器（显示用户说话音量）
 * - 新增网络状态检测（断网时明显提示）
 * - 新增摄像头镜像开关
 * - 修复 Service Worker 缓存版本号同步问题
 *
 * v1.1.0 更新:
 * - 新增对话历史持久化（刷新页面后恢复对话）
 * - 清空对话时同步清除本地存储
 * - 修复 manifest.json 版本号同步问题
 *
 * v1.0.9 更新:
 * - 新增 4 个实用型人设（学习助手、健身教练、美食家、面试官）
 * - 新增快捷键帮助面板
 * - PWA shortcuts 扩展（人设、统计）
 * - manifest 添加版本号
 */

const APP_VERSION = 'v1.7.7';

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
        this.fps = options.fps || 1; // 帧率可配置，默认 1 fps
        
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
        this.onVolumeChange = options.onVolumeChange || (() => {}); // 🆕 音量回调
        
        // 🆕 镜像设置
        this.isMirrored = options.isMirrored !== undefined ? options.isMirrored : true;
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
                
            // 🆕 用户语音识别结果（实时显示用户说的话）
            case 'response.user_transcript':
            case 'input_audio_buffer.speech_started':
                // 用户开始说话
                this.onMessage('user_speaking', '', true);
                break;
                
            case 'response.transcript':
            case 'input_audio_buffer.transcript':
                // 用户说话的实时文字
                if (data.text || data.transcript) {
                    this.onMessage('user_transcript', data.text || data.transcript, true);
                }
                break;
                
            case 'input_audio_buffer.speech_stopped':
                // 用户停止说话
                this.onMessage('user_transcript_done', '', false);
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
            
            console.log(`Video streaming started at ${this.fps} fps`);
            
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
                
                // 🆕 计算音量 (RMS)
                const volume = this.calculateVolume(inputData);
                this.onVolumeChange(volume);
                
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
    
    // 🆕 计算音量 (RMS)
    calculateVolume(audioData) {
        let sum = 0;
        for (let i = 0; i < audioData.length; i++) {
            sum += audioData[i] * audioData[i];
        }
        const rms = Math.sqrt(sum / audioData.length);
        return Math.min(1, rms * 5); // 放大并限制到 0-1 范围
    }
    
    // 🆕 设置视频帧率
    setFps(fps) {
        const validFps = Math.max(0.5, Math.min(10, fps)); // 限制 0.5-10 fps
        this.fps = validFps;
        
        // 如果正在推流，重新设置间隔
        if (this.frameInterval && this.isConnected) {
            clearInterval(this.frameInterval);
            this.frameInterval = setInterval(() => {
                if (this.isConnected) {
                    this.captureFrame();
                }
            }, 1000 / this.fps);
        }
        
        return validFps;
    }
    
    // 🆕 设置视频镜像
    setMirrored(mirrored) {
        this.isMirrored = mirrored;
        const video = document.getElementById('localVideo');
        if (video) {
            video.style.transform = mirrored ? 'scaleX(-1)' : 'scaleX(1)';
        }
    }
    
    toggleMirror() {
        this.setMirrored(!this.isMirrored);
        return this.isMirrored;
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
        this.volumeLevel = 0; // 🆕 音量级别
        
        // 🆕 语音快捷命令系统
        this.voiceCommands = {
            '暂停': { action: 'pause', desc: '暂停AI发言', icon: '⏸️' },
            '停一下': { action: 'pause', desc: '暂停AI发言', icon: '⏸️' },
            '别说了': { action: 'pause', desc: '暂停AI发言', icon: '⏸️' },
            '安静': { action: 'quiet', desc: '切换安静模式', icon: '🤫' },
            '安静一下': { action: 'quiet', desc: '切换安静模式', icon: '🤫' },
            '换个话题': { action: 'changeTopic', desc: '请求换话题', icon: '🔄' },
            '换话题': { action: 'changeTopic', desc: '请求换话题', icon: '🔄' },
            '再说一遍': { action: 'repeat', desc: '重复上次内容', icon: '🔁' },
            '重复一遍': { action: 'repeat', desc: '重复上次内容', icon: '🔁' },
            '看得清楚吗': { action: 'checkVision', desc: '询问画面清晰度', icon: '👁️' },
            '看清楚了吗': { action: 'checkVision', desc: '询问画面清晰度', icon: '👁️' },
            '继续': { action: 'continue', desc: '继续AI发言', icon: '▶️' },
            '请继续': { action: 'continue', desc: '继续AI发言', icon: '▶️' },
            '总结一下': { action: 'summarize', desc: '请求总结', icon: '📝' },
            '帮我总结': { action: 'summarize', desc: '请求总结', icon: '📝' },
            // 🆕 v1.5.1 新增语音命令
            '截图': { action: 'screenshot', desc: '截图保存', icon: '📸' },
            '拍照': { action: 'screenshot', desc: '截图保存', icon: '📸' },
            '拍张照': { action: 'screenshot', desc: '截图保存', icon: '📸' },
            '大声点': { action: 'louder', desc: '请求大声说话', icon: '🔊' },
            '小声点': { action: 'quieter', desc: '请求小声说话', icon: '🔉' },
            '慢一点': { action: 'slower', desc: '请求慢点说', icon: '🐢' },
            '快一点': { action: 'faster', desc: '请求快点说', icon: '🐇' },
            // 🆕 v1.7.7 新增语音命令
            '再见': { action: 'goodbye', desc: '结束会话', icon: '👋' },
            '拜拜': { action: 'goodbye', desc: '结束会话', icon: '👋' },
            '下次见': { action: 'goodbye', desc: '结束会话', icon: '👋' },
            '结束': { action: 'endSession', desc: '结束对话', icon: '🛑' }
        };
        this.lastAIMessage = '';
        this.isQuietMode = false;
        
        // 🆕 v1.5.3: 初始化语音命令反馈动画样式
        this.initVoiceCommandStyles();
        
        // 🆕 v1.5.4: 思考指示器状态
        this.isAIThinking = false;
        this.thinkingTimeout = null;
        
        this.init();
        this.initTheme();
        this.initStats();
        this.initVolumeIndicator(); // 🆕 初始化音量指示器
        this.initNetworkStatus(); // 🆕 初始化网络状态检测
        this.initSessionTimer(); // 🆕 初始化会话计时器
        this.initFpsControl(); // 🆕 初始化帧率控制
        this.loadChatHistory(); // 加载历史对话
    }
    
    // 🆕 v1.5.3: 初始化语音命令反馈动画样式
    initVoiceCommandStyles() {
        if (document.getElementById('voiceCommandStyles')) return;
        const style = document.createElement('style');
        style.id = 'voiceCommandStyles';
        style.textContent = `
            .voice-command-toast {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) scale(0);
                background: rgba(0, 212, 255, 0.95);
                color: #000;
                padding: 20px 40px;
                border-radius: 16px;
                font-size: 24px;
                font-weight: bold;
                z-index: 99999;
                box-shadow: 0 10px 40px rgba(0, 212, 255, 0.5);
                animation: voiceCommandPop 0.6s ease forwards;
                display: flex;
                align-items: center;
                gap: 12px;
            }
            @keyframes voiceCommandPop {
                0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
                50% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
                100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            }
            @keyframes voiceCommandFade {
                0% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                100% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
            }
            /* 🆕 v1.5.4: AI思考指示器样式 */
            .ai-thinking-indicator {
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 8px 16px;
                background: rgba(0, 212, 255, 0.2);
                border: 1px solid rgba(0, 212, 255, 0.4);
                border-radius: 20px;
                animation: thinkingPulse 1.5s ease-in-out infinite;
            }
            @keyframes thinkingPulse {
                0%, 100% { opacity: 0.7; transform: scale(1); }
                50% { opacity: 1; transform: scale(1.02); }
            }
            .thinking-dots {
                display: flex;
                gap: 4px;
            }
            .thinking-dot {
                width: 6px;
                height: 6px;
                background: var(--accent-primary);
                border-radius: 50%;
                animation: thinkingDot 1.4s ease-in-out infinite;
            }
            .thinking-dot:nth-child(2) { animation-delay: 0.2s; }
            .thinking-dot:nth-child(3) { animation-delay: 0.4s; }
            @keyframes thinkingDot {
                0%, 80%, 100% { transform: scale(0.6); opacity: 0.5; }
                40% { transform: scale(1); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
    
    // 🆕 v1.5.3: 显示语音命令触发动画
    showVoiceCommandFeedback(icon, keyword) {
        const toast = document.createElement('div');
        toast.className = 'voice-command-toast';
        toast.innerHTML = `${icon} <span style="font-size:16px;font-weight:normal;">"${keyword}"</span>`;
        document.body.appendChild(toast);
        
        // 1秒后开始淡出
        setTimeout(() => {
            toast.style.animation = 'voiceCommandFade 0.3s ease forwards';
        }, 800);
        
        // 1.3秒后移除
        setTimeout(() => {
            toast.remove();
        }, 1100);
    }
    
    // 🆕 v1.5.4: 显示AI思考指示器
    showAIThinkingIndicator() {
        if (this.isAIThinking) return;
        this.isAIThinking = true;
        
        // 创建思考指示器
        const messagesContainer = document.getElementById('messagesContainer');
        if (!messagesContainer) return;
        
        const indicator = document.createElement('div');
        indicator.id = 'aiThinkingIndicator';
        indicator.className = 'message ai thinking-indicator';
        indicator.innerHTML = `
            <div class="ai-thinking-indicator">
                <span style="color:var(--accent-primary);font-size:14px;">AI 正在思考</span>
                <div class="thinking-dots">
                    <div class="thinking-dot"></div>
                    <div class="thinking-dot"></div>
                    <div class="thinking-dot"></div>
                </div>
            </div>
        `;
        messagesContainer.appendChild(indicator);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        
        // 设置超时自动隐藏（防止一直显示）
        this.thinkingTimeout = setTimeout(() => {
            this.hideAIThinkingIndicator();
        }, 10000);
    }
    
    // 🆕 v1.5.4: 隐藏AI思考指示器
    hideAIThinkingIndicator() {
        if (!this.isAIThinking) return;
        this.isAIThinking = false;
        
        if (this.thinkingTimeout) {
            clearTimeout(this.thinkingTimeout);
            this.thinkingTimeout = null;
        }
        
        const indicator = document.getElementById('aiThinkingIndicator');
        if (indicator) {
            indicator.remove();
        }
    }
    
    // 🆕 初始化会话计时器
    initSessionTimer() {
        this.sessionSeconds = 0;
        this.sessionTimer = null;
    }
    
    // 🆕 开始会话计时
    startSessionTimer() {
        this.sessionSeconds = 0;
        this.sessionTimer = setInterval(() => {
            this.sessionSeconds++;
            this.updateSessionTimerDisplay();
        }, 1000);
    }
    
    // 🆕 停止会话计时
    stopSessionTimer() {
        if (this.sessionTimer) {
            clearInterval(this.sessionTimer);
            this.sessionTimer = null;
        }
    }
    
    // 🆕 更新计时显示
    updateSessionTimerDisplay() {
        const timerEl = document.getElementById('sessionTimer');
        if (timerEl) {
            const mins = Math.floor(this.sessionSeconds / 60);
            const secs = this.sessionSeconds % 60;
            timerEl.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }
    }
    
    init() {
        // Setup event listeners
        document.getElementById('startBtn').addEventListener('click', () => this.start());
        document.getElementById('stopBtn').addEventListener('click', () => this.stop());
        
        // 🆕 v1.7.1: 显示首页推荐横幅
        this.showHomepageRecommendation();
        
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
        
        // 🆕 Mirror button
        document.getElementById('mirrorBtn')?.addEventListener('click', () => {
            this.toggleMirror();
        });
        
        this.loadSettings();
        this.initAudioVisualizer();
        this.initQuickPhrases(); // 🆕 初始化常用语按钮
        this.showWelcomeTip();
        this.updateVersionDisplay();
    }
    
    // 🆕 初始化常用语快速发送
    initQuickPhrases() {
        const phrasesContainer = document.getElementById('quickPhrases');
        if (!phrasesContainer) return;
        
        phrasesContainer.querySelectorAll('.phrase-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const phrase = btn.dataset.phrase;
                if (phrase && this.client && this.client.isConnected) {
                    this.addMessage('user', phrase);
                    // 发送文本消息给AI
                    this.sendTextMessage(phrase);
                }
            });
        });
    }
    
    // 🆕 发送文本消息
    sendTextMessage(text) {
        if (!this.client || !this.client.ws || this.client.ws.readyState !== WebSocket.OPEN) return;
        
        const msg = {
            type: 'input_text',
            text: text
        };
        this.client.ws.send(JSON.stringify(msg));
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
        this.themes = ['auto', 'default', 'light', 'sunset', 'ocean'];
        this.themeNames = {
            'auto': '🔄 跟随系统',
            'default': '🌙 暗夜',
            'light': '☀️ 明亮',
            'sunset': '🌅 日落',
            'ocean': '🌊 海洋'
        };
        
        // 🆕 监听系统主题变化
        this.systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
        this.systemDarkMode.addEventListener('change', (e) => {
            if (this.currentTheme === 'auto') {
                this.applyAutoTheme();
            }
        });
        
        // Load saved theme
        const savedTheme = localStorage.getItem('ai-third-eye-theme') || 'auto';
        this.setTheme(savedTheme);
        
        // Theme button
        const themeBtn = document.getElementById('themeBtn');
        if (themeBtn) {
            themeBtn.addEventListener('click', () => this.cycleTheme());
            this.updateThemeButton();
        }
    }
    
    // 🆕 应用自动主题（跟随系统）
    applyAutoTheme() {
        const isDark = this.systemDarkMode.matches;
        document.body.className = '';
        if (!isDark) {
            document.body.classList.add('theme-light');
        }
    }
    
    setTheme(theme) {
        this.currentTheme = theme;
        localStorage.setItem('ai-third-eye-theme', theme);
        
        document.body.className = '';
        if (theme === 'auto') {
            this.applyAutoTheme();
        } else if (theme !== 'default') {
            document.body.classList.add(`theme-${theme}`);
        }
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
        
        // 🆕 Voice commands button
        const voiceCmdBtn = document.getElementById('voiceCmdBtn');
        if (voiceCmdBtn) {
            voiceCmdBtn.addEventListener('click', () => this.showVoiceCommandsHelp());
        }
        
        // 🆕 v1.5.3: About button - click version badge to show
        const versionBadge = document.getElementById('versionBadge');
        if (versionBadge) {
            versionBadge.style.cursor = 'pointer';
            versionBadge.addEventListener('click', () => this.showAbout());
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
        
        // 🆕 v1.6.3: 获取人设使用统计
        let personalityStatsHtml = '';
        if (typeof getPersonalityUsageStats === 'function') {
            const topPersonalities = getPersonalityUsageStats().slice(0, 5);
            if (topPersonalities.length > 0) {
                personalityStatsHtml = `
                    <div style="margin-top:15px;padding:15px;background:rgba(0,0,0,0.2);border-radius:8px;">
                        <div style="color:var(--text-secondary);font-size:12px;margin-bottom:10px;">🎭 最常使用的人设</div>
                        <div style="display:flex;flex-direction:column;gap:8px;">
                            ${topPersonalities.map((p, i) => `
                                <div style="display:flex;align-items:center;justify-content:space-between;">
                                    <div style="display:flex;align-items:center;gap:8px;">
                                        <span style="color:var(--accent-secondary);font-size:12px;">#${i+1}</span>
                                        <span style="color:var(--text-primary);font-size:13px;">${p.name || p.key}</span>
                                    </div>
                                    <span style="color:var(--accent-primary);font-size:12px;">${p.count}次</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            }
        }
        
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
            ${personalityStatsHtml}
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
    
    // 🆕 v1.5.3: 显示关于面板
    showAbout() {
        const existing = document.getElementById('aboutPanel');
        if (existing) {
            existing.remove();
            return;
        }
        
        const panel = document.createElement('div');
        panel.id = 'aboutPanel';
        panel.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(26,26,46,0.98);
            border-radius: 16px;
            padding: 30px;
            z-index: 1000;
            min-width: 320px;
            max-width: 400px;
            border: 1px solid rgba(0,212,255,0.3);
            box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        `;
        
        panel.innerHTML = `
            <div style="text-align:center;margin-bottom:20px;">
                <div style="font-size:48px;margin-bottom:10px;">🦐</div>
                <h2 style="color:var(--accent-primary);margin:0;font-size:24px;">AI 第三只眼</h2>
                <div style="color:var(--accent-secondary);font-size:14px;margin-top:5px;">${APP_VERSION}</div>
            </div>
            
            <div style="background:rgba(0,0,0,0.2);border-radius:12px;padding:15px;margin-bottom:20px;">
                <p style="margin:0 0 10px 0;color:var(--text-primary);font-size:14px;line-height:1.6;">
                    基于 MiniCPM-o 4.5 的实时视觉助手<br>
                    边看边听边说，AI 主动提醒
                </p>
                <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px;">
                    <span style="background:rgba(0,212,255,0.2);padding:4px 8px;border-radius:4px;font-size:12px;">实时视觉</span>
                    <span style="background:rgba(0,255,136,0.2);padding:4px 8px;border-radius:4px;font-size:12px;">全双工对话</span>
                    <span style="background:rgba(255,165,0,0.2);padding:4px 8px;border-radius:4px;font-size:12px;">19种人设</span>
                    <span style="background:rgba(255,107,107,0.2);padding:4px 8px;border-radius:4px;font-size:12px;">PWA支持</span>
                </div>
            </div>
            
            <div style="margin-bottom:20px;">
                <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.1);">
                    <span style="color:var(--text-secondary);font-size:13px;">作者</span>
                    <span style="color:var(--text-primary);font-size:13px;">🦐 虾哥</span>
                </div>
                <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.1);">
                    <span style="color:var(--text-secondary);font-size:13px;">模型</span>
                    <span style="color:var(--text-primary);font-size:13px;">MiniCPM-o 4.5</span>
                </div>
                <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.1);">
                    <span style="color:var(--text-secondary);font-size:13px;">协议</span>
                    <span style="color:var(--accent-secondary);font-size:13px;">MIT License</span>
                </div>
            </div>
            
            <div style="display:flex;gap:10px;">
                <a href="https://github.com/SummerLv/ai-third-eye" target="_blank" 
                   style="flex:1;background:rgba(0,212,255,0.2);color:var(--accent-primary);padding:10px;border-radius:8px;text-decoration:none;text-align:center;font-size:13px;">
                    📦 GitHub
                </a>
                <button onclick="document.getElementById('aboutPanel').remove()" 
                        style="flex:1;background:rgba(255,255,255,0.1);color:var(--text-primary);padding:10px;border-radius:8px;border:none;cursor:pointer;font-size:13px;">
                    关闭
                </button>
            </div>
        `;
        
        document.body.appendChild(panel);
        
        // 点击外部关闭
        setTimeout(() => {
            document.addEventListener('click', function closeAbout(e) {
                if (!panel.contains(e.target)) {
                    panel.remove();
                    document.removeEventListener('click', closeAbout);
                }
            });
        }, 100);
    }
    
    // 🆕 初始化用户语音显示区域
    initUserSpeechDisplay() {
        let container = document.getElementById('userSpeechDisplay');
        if (!container) {
            const messagesContainer = document.getElementById('messagesContainer');
            if (messagesContainer) {
                container = document.createElement('div');
                container.id = 'userSpeechDisplay';
                container.style.cssText = `
                    display: none;
                    padding: 8px 12px;
                    background: rgba(0,255,136,0.2);
                    border: 1px solid rgba(0,255,136,0.4);
                    border-radius: 12px;
                    margin-bottom: 10px;
                    animation: fadeIn 0.3s ease;
                    align-self: flex-end;
                    max-width: 85%;
                `;
                container.innerHTML = '<span class="speech-icon">🎤</span><span class="speech-text"></span>';
                messagesContainer.appendChild(container);
            }
        }
    }
    
    // 🆕 更新用户语音显示
    updateUserSpeechDisplay(text, speaking = false, done = false) {
        const container = document.getElementById('userSpeechDisplay');
        if (!container) return;
        
        const textEl = container.querySelector('.speech-text');
        
        if (speaking && !text) {
            // 开始说话，显示打字效果
            container.style.display = 'block';
            if (textEl) textEl.innerHTML = '<span style="animation: blink 1s infinite;">正在听...</span>';
            // 重置转写缓存
            this.lastUserTranscript = '';
        } else if (text) {
            // 显示实时文字
            container.style.display = 'block';
            if (textEl) textEl.textContent = text;
            // 🆕 检测语音命令
            this.detectVoiceCommand(text);
            // 保存转写文字
            this.lastUserTranscript = text;
        } else if (done) {
            // 说话结束，将用户说的话正式添加到对话记录
            if (this.lastUserTranscript && this.lastUserTranscript.trim()) {
                this.addMessage('user', this.lastUserTranscript.trim());
            }
            // 🆕 v1.5.4: 显示AI思考指示器
            this.showAIThinkingIndicator();
            // 隐藏临时显示
            setTimeout(() => {
                if (container) container.style.display = 'none';
            }, 500);
        } else {
            container.style.display = 'none';
        }
    }
    
    // 🆕 检测并执行语音命令
    detectVoiceCommand(text) {
        if (!text || !this.client || !this.client.isConnected) return false;
        
        const normalizedText = text.trim().toLowerCase();
        
        for (const [keyword, cmd] of Object.entries(this.voiceCommands)) {
            if (normalizedText.includes(keyword.toLowerCase())) {
                this.executeVoiceCommand(cmd.action, keyword);
                return true;
            }
        }
        return false;
    }
    
    // 🆕 执行语音命令
    executeVoiceCommand(action, keyword) {
        const cmd = Object.values(this.voiceCommands).find(c => c.action === action);
        const icon = cmd ? cmd.icon : '⚡';
        
        switch (action) {
            case 'pause':
                this.interrupt();
                this.addMessage('system', `${icon} 已暂停AI发言`);
                break;
                
            case 'quiet':
                this.isQuietMode = !this.isQuietMode;
                if (this.isQuietMode) {
                    this.addMessage('system', `${icon} 已开启安静模式（减少主动描述）`);
                } else {
                    this.addMessage('system', `${icon} 已关闭安静模式`);
                }
                break;
                
            case 'changeTopic':
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '让我们换个话题吧，聊点别的有趣的事情。'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                    this.addMessage('system', `${icon} 正在切换话题...`);
                }
                break;
                
            case 'repeat':
                if (this.lastAIMessage) {
                    this.addMessage('ai', `好的，我再说一遍：${this.lastAIMessage}`);
                } else {
                    this.addMessage('system', `${icon} 暂无上次内容可重复`);
                }
                break;
                
            case 'checkVision':
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '你现在看得清楚吗？画面清晰度如何？'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                    this.addMessage('system', `${icon} 正在询问画面状态...`);
                }
                break;
                
            case 'continue':
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '请继续说'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                }
                break;
                
            case 'summarize':
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '请总结一下我们刚才聊的内容。'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                    this.addMessage('system', `${icon} 正在生成总结...`);
                }
                break;
            
            // 🆕 v1.5.1 新增命令处理
            case 'screenshot':
                this.takeScreenshot();
                break;
            
            case 'louder':
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '请你大声一点说话，我听得不太清楚。'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                    this.addMessage('system', `${icon} 正在请求大声说话...`);
                }
                break;
            
            case 'quieter':
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '请你小声一点说话，声音有点大。'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                    this.addMessage('system', `${icon} 正在请求小声说话...`);
                }
                break;
            
            case 'slower':
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '请你慢一点说话，我需要时间理解。'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                    this.addMessage('system', `${icon} 正在请求慢点说...`);
                }
                break;
            
            case 'faster':
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '请你快一点说话，我准备好了。'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                    this.addMessage('system', `${icon} 正在请求快点说...`);
                }
                break;
            
            // 🆕 v1.7.7 新增命令处理
            case 'goodbye':
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '我们要结束了，跟用户说再见吧！'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                    this.addMessage('system', `${icon} 正在告别...`);
                    // 3秒后自动结束会话
                    setTimeout(() => {
                        this.stop();
                        this.addMessage('system', '👋 会话已结束，期待下次相见！');
                    }, 3000);
                } else {
                    this.stop();
                    this.addMessage('system', `${icon} 会话已结束，再见！`);
                }
                break;
            
            case 'endSession':
                this.stop();
                this.addMessage('system', `${icon} 对话已结束`);
                break;
        }
    }
    
    // 🆕 显示语音命令帮助
    showVoiceCommandsHelp() {
        const existing = document.getElementById('voiceCommandsHelp');
        if (existing) {
            existing.remove();
            return;
        }
        
        const container = document.createElement('div');
        container.id = 'voiceCommandsHelp';
        container.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(26,26,46,0.98);
            border-radius: 12px;
            padding: 25px;
            z-index: 1000;
            min-width: 320px;
            max-width: 90vw;
            max-height: 80vh;
            overflow-y: auto;
            border: 1px solid rgba(255,255,255,0.1);
        `;
        
        let html = `
            <div style="color: #00d4ff; font-weight: bold; margin-bottom: 20px; font-size: 18px; display: flex; justify-content: space-between; align-items: center;">
                <span>🎤 语音快捷命令</span>
                <span style="cursor: pointer; font-size: 20px;" onclick="document.getElementById('voiceCommandsHelp').remove()">✕</span>
            </div>
            <div style="color: #888; font-size: 12px; margin-bottom: 15px;">
                💡 直接说出这些词，AI会自动识别并执行相应操作
            </div>
            <div style="display: grid; gap: 10px;">
        `;
        
        // 去重显示
        const shownActions = new Set();
        for (const [keyword, cmd] of Object.entries(this.voiceCommands)) {
            if (shownActions.has(cmd.action)) continue;
            shownActions.add(cmd.action);
            html += `
                <div style="display: flex; align-items: center; gap: 10px; padding: 10px; background: rgba(0,0,0,0.2); border-radius: 8px;">
                    <span style="font-size: 20px;">${cmd.icon}</span>
                    <div>
                        <div style="color: #e8e8e8; font-size: 14px;">${keyword}</div>
                        <div style="color: #888; font-size: 12px;">${cmd.desc}</div>
                    </div>
                </div>
            `;
        }
        
        html += '</div>';
        container.innerHTML = html;
        document.body.appendChild(container);
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
        // V - 语音命令帮助
        if (e.key === 'v' && document.activeElement.tagName !== 'TEXTAREA' && document.activeElement.tagName !== 'INPUT') {
            e.preventDefault();
            this.showVoiceCommandsHelp();
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
    
    // 🆕 v1.7.1: 首页智能推荐横幅
    showHomepageRecommendation() {
        // 检查今天是否已显示过
        const today = new Date().toDateString();
        const lastShown = localStorage.getItem('ai-third-eye-banner-date');
        const dismissed = localStorage.getItem('ai-third-eye-banner-dismissed');
        
        if (lastShown === today && dismissed === 'true') return;
        
        // 获取推荐人设
        const recommended = getRecommendedPersonality();
        
        // 创建横幅
        const banner = document.createElement('div');
        banner.id = 'homeRecommendationBanner';
        banner.style.cssText = `
            position: fixed;
            top: 80px;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(135deg, rgba(0,212,255,0.95), rgba(0,255,136,0.95));
            color: #000;
            padding: 14px 20px;
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(0,212,255,0.4);
            z-index: 9999;
            display: flex;
            align-items: center;
            gap: 12px;
            max-width: 420px;
            width: calc(100% - 40px);
            animation: bannerSlideIn 0.5s ease;
        `;
        
        banner.innerHTML = `
            <span style="font-size: 32px;">${recommended.name.split(' ')[0]}</span>
            <div>
                <div style="font-size: 14px; opacity: 0.8;">${recommended.timeDesc}，推荐人设</div>
                <div style="font-size: 20px; font-weight: bold;">${recommended.name}</div>
                <div style="font-size: 12px; opacity: 0.7; margin-top: 4px;">${recommended.description}</div>
            </div>
            <button id="useRecommendedPersonality" style="
                background: #000;
                color: #fff;
                border: none;
                padding: 10px 20px;
                border-radius: 8px;
                font-weight: bold;
                cursor: pointer;
                white-space: nowrap;
            ">✨ 立即使用</button>
            <button id="dismissBanner" style="
                background: transparent;
                border: none;
                color: #000;
                font-size: 20px;
                cursor: pointer;
                padding: 8px;
            ">✕</button>
        `;
        
        // 添加动画样式
        if (!document.getElementById('bannerAnimStyles')) {
            const style = document.createElement('style');
            style.id = 'bannerAnimStyles';
            style.textContent = `
                @keyframes bannerSlideIn {
                    from { opacity: 0; transform: translateX(-50%) translateY(-20px); }
                    to { opacity: 1; transform: translateX(-50%) translateY(0); }
                }
                @keyframes bannerSlideOut {
                    from { opacity: 1; transform: translateX(-50%) translateY(0); }
                    to { opacity: 0; transform: translateX(-50%) translateY(-20px); }
                }
            `;
            document.head.appendChild(style);
        }
        
        document.body.appendChild(banner);
        
        // 绑定事件
        document.getElementById('useRecommendedPersonality').addEventListener('click', () => {
            this.selectPersonality(recommended.key);
            this.removeBanner(banner);
        });
        
        document.getElementById('dismissBanner').addEventListener('click', () => {
            this.removeBanner(banner);
            localStorage.setItem('ai-third-eye-banner-dismissed', 'true');
            localStorage.setItem('ai-third-eye-banner-date', today);
        });
        
        // 10秒后自动隐藏
        setTimeout(() => {
            this.removeBanner(banner);
        }, 10000);
    }
    
    removeBanner(banner) {
        if (banner && banner.parentNode) {
            banner.style.animation = 'bannerSlideOut 0.3s ease forwards';
            setTimeout(() => banner.remove(), 300);
        }
    }
    
    showWelcomeTip() {
        // 首次访问显示使用提示
        const hasVisited = localStorage.getItem('ai-third-eye-visited');
        if (!hasVisited) {
            setTimeout(() => {
                this.addMessage('system', '💡 使用提示: 空格键开始/结束对话，Ctrl+S截图，M静音，V语音命令，Esc关闭面板');
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
        const favorites = getFavoritePersonalities();
        
        // 🆕 v1.6.0: 收藏区域
        if (favorites.length > 0) {
            const favDiv = document.createElement('div');
            favDiv.style.cssText = 'grid-column: 1 / -1; margin-bottom: 10px; padding: 10px; background: rgba(255,215,0,0.1); border-radius: 12px; border: 1px solid rgba(255,215,0,0.3);';
            favDiv.innerHTML = `<div style="font-size:12px; color:#ffd700; margin-bottom:8px;">⭐ 我的收藏</div><div style="display:flex;flex-wrap:wrap;gap:8px;" id="favoriteButtons"></div>`;
            grid.appendChild(favDiv);
            
            const favContainer = favDiv.querySelector('#favoriteButtons');
            favorites.forEach(key => {
                if (personalities[key]) {
                    const p = personalities[key];
                    const btn = document.createElement('button');
                    btn.className = 'btn btn-secondary';
                    btn.style.cssText = 'padding: 4px 10px; font-size: 12px; border-color: rgba(255,215,0,0.5);';
                    btn.innerHTML = `${p.name}`;
                    btn.addEventListener('click', () => this.selectPersonality(key));
                    favContainer.appendChild(btn);
                }
            });
        }
        
        // 🆕 v1.5.9: 智能人设推荐
        const recommended = getRecommendedPersonality();
        const recommendationDiv = document.createElement('div');
        recommendationDiv.style.cssText = 'grid-column: 1 / -1; margin-bottom: 10px; padding: 12px; background: linear-gradient(135deg, rgba(0,212,255,0.1), rgba(0,255,136,0.1)); border-radius: 12px; border: 1px solid rgba(0,212,255,0.3);';
        recommendationDiv.innerHTML = `
            <div style="display:flex; align-items:center; gap:10px;">
                <span style="font-size:20px;">💡</span>
                <div>
                    <div style="font-size:13px; color:#888;">${recommended.timeDesc}，推荐人设</div>
                    <div style="font-size:16px; font-weight:600; color:var(--accent-primary); margin-top:4px;">${recommended.name}</div>
                </div>
                <button id="useRecommendedBtn" style="margin-left:auto; padding:6px 12px; font-size:12px; border-radius:6px;" class="btn btn-primary">使用</button>
            </div>
            <div style="font-size:12px; color:#888; margin-top:8px;">${recommended.description}</div>
        `;
        grid.appendChild(recommendationDiv);
        
        // 绑定推荐按钮事件
        document.getElementById('useRecommendedBtn')?.addEventListener('click', () => {
            this.selectPersonality(recommended.key);
        });
        
        // 🆕 v1.6.2: 自定义人设区域
        const customPersonalities = typeof getCustomPersonalities === 'function' ? getCustomPersonalities() : {};
        const customKeys = Object.keys(customPersonalities);
        
        if (customKeys.length > 0) {
            const customDiv = document.createElement('div');
            customDiv.style.cssText = 'grid-column: 1 / -1; margin-bottom: 10px; padding: 10px; background: rgba(138,43,226,0.1); border-radius: 12px; border: 1px solid rgba(138,43,226,0.3);';
            customDiv.innerHTML = `<div style="font-size:12px; color:#ba55d3; margin-bottom:8px;display:flex;justify-content:space-between;align-items:center;"><span>✨ 我的自定义人设</span><button id="addCustomBtn" style="padding:2px 8px;font-size:11px;border-radius:4px;" class="btn btn-secondary">+ 新建</button></div><div style="display:flex;flex-direction:column;gap:6px;" id="customList"></div>`;
            grid.appendChild(customDiv);
            
            const customList = customDiv.querySelector('#customList');
            customKeys.forEach(key => {
                const p = customPersonalities[key];
                const item = document.createElement('div');
                item.style.cssText = 'display:flex;align-items:center;gap:6px;padding:6px;background:rgba(0,0,0,0.2);border-radius:6px;';
                item.innerHTML = `<span style="flex:1;font-size:12px;">${p.name}</span><button class="btn btn-secondary" style="padding:2px 6px;font-size:10px;" data-custom="${key}" data-action="use">使用</button><button class="btn btn-secondary" style="padding:2px 6px;font-size:10px;" data-custom="${key}" data-action="edit">编辑</button><button class="btn btn-secondary" style="padding:2px 6px;font-size:10px;" data-custom="${key}" data-action="delete">删除</button>`;
                customList.appendChild(item);
            });
            
            // 绑定自定义人设按钮事件
            customList.querySelectorAll('button').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const key = btn.dataset.custom;
                    const action = btn.dataset.action;
                    if (action === 'use') this.selectPersonality(key);
                    else if (action === 'edit') this.editCustomPersonality(key);
                    else if (action === 'delete') this.deleteCustomPersonalityUI(key);
                });
            });
            
            // 新建按钮
            customDiv.querySelector('#addCustomBtn')?.addEventListener('click', () => this.showCreateCustomPersonalityUI());
        } else {
            // 没有自定义人设时显示创建按钮
            const createDiv = document.createElement('div');
            createDiv.style.cssText = 'grid-column: 1 / -1; margin-bottom: 10px; padding: 10px; background: rgba(138,43,226,0.05); border-radius: 12px; border: 1px dashed rgba(138,43,226,0.3); text-align: center; cursor: pointer;';
            createDiv.innerHTML = '<span style="color:#ba55d3;font-size:12px;">✨ + 创建自定义人设</span>';
            createDiv.addEventListener('click', () => this.showCreateCustomPersonalityUI());
            grid.appendChild(createDiv);
        }
        
        // 所有人设列表
        const allHeader = document.createElement('div');
        allHeader.style.cssText = 'grid-column: 1 / -1; font-size:12px; color:#888; margin-top:5px;';
        allHeader.textContent = '🎭 内置人设（点击⭐收藏，🔥表示热度）';
        grid.appendChild(allHeader);
        
        // 🆕 v1.6.1: 获取热度统计
        const usageStats = typeof getPersonalityUsageStats === 'function' ? getPersonalityUsageStats() : [];
        const maxUsage = usageStats.length > 0 ? usageStats[0].count : 1;
        
        for (const [key, personality] of Object.entries(personalities)) {
            const wrapper = document.createElement('div');
            wrapper.style.cssText = 'display:flex;align-items:center;gap:4px;';
            
            // 🆕 v1.6.1: 获取使用次数和计算热度图标
            const usageCount = typeof getPersonalityUsage === 'function' ? getPersonalityUsage(key) : 0;
            const hotness = maxUsage > 0 ? usageCount / maxUsage : 0;
            const hotIcon = usageCount > 0 ? (hotness > 0.7 ? '🔥' : hotness > 0.3 ? '🔥' : '') : '';
            
            const btn = document.createElement('button');
            btn.className = 'btn btn-secondary';
            btn.style.cssText = 'padding: 8px; font-size: 11px; text-align: left; flex:1;';
            btn.dataset.personality = key;
            btn.innerHTML = `${personality.name}${hotIcon ? '<span style="margin-left:4px">' + hotIcon + '</span>' : ''}<br><span style="color:#888">${personality.description}</span>${usageCount > 0 ? '<span style="color:#666;font-size:10px;"> · ' + usageCount + '次</span>' : ''}`;
            
            // 推荐的人设高亮显示
            if (key === recommended.key) {
                btn.style.borderColor = 'var(--accent-primary)';
                btn.style.boxShadow = '0 0 10px rgba(0,212,255,0.3)';
            }
            
            if (savedPersonality === key) {
                btn.classList.remove('btn-secondary');
                btn.classList.add('btn-primary');
            }
            
            btn.addEventListener('click', () => this.selectPersonality(key));
            wrapper.appendChild(btn);
            
            // 收藏按钮
            const favBtn = document.createElement('button');
            favBtn.className = 'btn btn-secondary';
            favBtn.style.cssText = 'padding: 8px; font-size: 14px; min-width:32px;';
            favBtn.innerHTML = isPersonalityFavorite(key) ? '⭐' : '☆';
            favBtn.title = isPersonalityFavorite(key) ? '取消收藏' : '添加收藏';
            favBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleFavoritePersonality(key);
            });
            wrapper.appendChild(favBtn);
            
            grid.appendChild(wrapper);
        }
    }
    
    // 🆕 v1.6.0: 切换人设收藏
    toggleFavoritePersonality(key) {
        const personality = getAllPersonalitiesWithCustom ? getAllPersonalitiesWithCustom()[key] : getAllPersonalities()[key];
        if (isPersonalityFavorite(key)) {
            removeFavoritePersonality(key);
            this.addMessage('system', `⭐ 已取消收藏 ${personality?.name || key}`);
        } else {
            addFavoritePersonality(key);
            this.addMessage('system', `⭐ 已收藏 ${personality?.name || key}`);
        }
        this.loadPersonalityGrid();
    }
    
    // 🆕 v1.6.2: 显示创建自定义人设界面
    showCreateCustomPersonalityUI(editKey = null) {
        const existing = document.getElementById('customPersonalityModal');
        if (existing) existing.remove();
        
        const editData = editKey && typeof getCustomPersonalities === 'function' ? getCustomPersonalities()[editKey] : null;
        
        const modal = document.createElement('div');
        modal.id = 'customPersonalityModal';
        modal.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.7);z-index:10000;display:flex;align-items:center;justify-content:center;';
        modal.innerHTML = `
            <div style="background:var(--bg-secondary);border-radius:16px;padding:24px;max-width:400px;width:90%;max-height:80vh;overflow-y:auto;border:1px solid rgba(138,43,226,0.3);">
                <div style="color:#ba55d3;font-size:18px;font-weight:bold;margin-bottom:16px;">${editKey ? '✏️ 编辑人设' : '✨ 创建自定义人设'}</div>
                <div style="margin-bottom:12px;">
                    <label style="display:block;color:#888;font-size:12px;margin-bottom:4px;">人设名称（带emoji更生动）</label>
                    <input id="customName" type="text" placeholder="例：🧙 巫师" value="${editData?.name?.replace(/^[^a-zA-Z\u4e00-\u9fa5]+/, '') || ''}" style="width:100%;padding:10px;border-radius:8px;border:1px solid rgba(255,255,255,0.1);background:rgba(0,0,0,0.3);color:var(--text-primary);">
                </div>
                <div style="margin-bottom:12px;">
                    <label style="display:block;color:#888;font-size:12px;margin-bottom:4px;">简短描述</label>
                    <input id="customDesc" type="text" placeholder="例：神秘预言，洞察命运" value="${editData?.description || ''}" style="width:100%;padding:10px;border-radius:8px;border:1px solid rgba(255,255,255,0.1);background:rgba(0,0,0,0.3);color:var(--text-primary);">
                </div>
                <div style="margin-bottom:16px;">
                    <label style="display:block;color:#888;font-size:12px;margin-bottom:4px;">人设提示词（AI将按此行事）</label>
                    <textarea id="customPrompt" placeholder="描述这个角色的性格、说话风格、关注点等..." style="width:100%;height:120px;padding:10px;border-radius:8px;border:1px solid rgba(255,255,255,0.1);background:rgba(0,0,0,0.3);color:var(--text-primary);resize:vertical;">${editData?.prompt || ''}</textarea>
                </div>
                <div style="display:flex;gap:8px;justify-content:flex-end;">
                    <button id="cancelCustomBtn" class="btn btn-secondary">取消</button>
                    <button id="saveCustomBtn" class="btn btn-primary" style="background:linear-gradient(135deg,#ba55d3,#9370db);">${editKey ? '保存' : '创建'}</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // 绑定事件
        modal.querySelector('#cancelCustomBtn').addEventListener('click', () => modal.remove());
        modal.querySelector('#saveCustomBtn').addEventListener('click', () => {
            const name = document.getElementById('customName').value.trim();
            const desc = document.getElementById('customDesc').value.trim();
            const prompt = document.getElementById('customPrompt').value.trim();
            
            if (!name) {
                this.addMessage('system', '⚠️ 请输入人设名称');
                return;
            }
            if (!prompt) {
                this.addMessage('system', '⚠️ 请输入人设提示词');
                return;
            }
            
            // 添加 emoji 前缀（如果用户没有添加）
            const fullName = name.match(/^[\u{1F300}-\u{1F9FF}]/u) ? name : `✨ ${name}`;
            
            if (editKey) {
                if (typeof updateCustomPersonality === 'function') {
                    updateCustomPersonality(editKey, fullName, desc, prompt);
                    this.addMessage('system', `✏️ 已更新人设「${fullName}」`);
                }
            } else {
                if (typeof createCustomPersonality === 'function') {
                    const result = createCustomPersonality(fullName, desc, prompt);
                    if (result) {
                        this.addMessage('system', `✨ 已创建人设「${fullName}」`);
                        // 自动选择新创建的人设
                        this.selectPersonality(result.key);
                    }
                }
            }
            
            modal.remove();
            this.loadPersonalityGrid();
        });
        
        // 点击背景关闭
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
    }
    
    // 🆕 v1.6.2: 编辑自定义人设
    editCustomPersonality(key) {
        this.showCreateCustomPersonalityUI(key);
    }
    
    // 🆕 v1.6.2: 删除自定义人设（带确认）
    deleteCustomPersonalityUI(key) {
        const personality = typeof getCustomPersonalities === 'function' ? getCustomPersonalities()[key] : null;
        if (!personality) return;
        
        if (confirm(`确定要删除人设「${personality.name}」吗？`)) {
            if (typeof deleteCustomPersonality === 'function') {
                deleteCustomPersonality(key);
                this.addMessage('system', `🗑️ 已删除人设「${personality.name}」`);
                this.loadPersonalityGrid();
            }
        }
    }
    
    selectPersonality(key) {
        const personality = (typeof getAllPersonalitiesWithCustom === 'function' ? getAllPersonalitiesWithCustom()[key] : null) || getAllPersonalities()[key];
        if (!personality) return;
        
        localStorage.setItem('ai-third-eye-personality', key);
        document.getElementById('systemPrompt').value = personality.prompt;
        
        // 🆕 v1.6.1: 记录使用热度
        if (typeof recordPersonalityUsage === 'function') {
            recordPersonalityUsage(key);
        }
        
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
    
    // 🆕 加载历史对话记录
    loadChatHistory() {
        const saved = localStorage.getItem('ai-third-eye-chat-history');
        if (saved) {
            try {
                const history = JSON.parse(saved);
                // 只加载最近 10 条消息
                history.slice(-10).forEach(msg => {
                    this.addMessage(msg.type, msg.text, false);
                });
            } catch (e) {
                console.error('Failed to load chat history:', e);
            }
        }
    }

    // 🆕 保存对话历史
    saveChatHistory() {
        const container = document.getElementById('messagesContainer');
        const messages = container.querySelectorAll('.message');
        const history = [];
        messages.forEach(msg => {
            const text = msg.querySelector('p')?.textContent || '';
            const type = msg.classList.contains('ai') ? 'ai' :
                        msg.classList.contains('user') ? 'user' : 'system';
            history.push({ type, text, time: new Date().toISOString() });
        });
        // 只保存最近 20 条
        localStorage.setItem('ai-third-eye-chat-history', JSON.stringify(history.slice(-20)));
    }

    loadSettings() {
        const saved = localStorage.getItem('ai-third-eye-settings');
        if (saved) {
            const settings = JSON.parse(saved);
            document.getElementById('systemPrompt').value = settings.systemPrompt || '';
            document.getElementById('apiEndpoint').value = settings.apiEndpoint || '';
        }
        
        // Load saved personality (支持自定义人设)
        const savedPersonality = localStorage.getItem('ai-third-eye-personality');
        if (savedPersonality) {
            const personality = (typeof getAllPersonalitiesWithCustom === 'function' ? getAllPersonalitiesWithCustom()[savedPersonality] : null) || getAllPersonalities()[savedPersonality];
            if (personality) {
                document.getElementById('systemPrompt').value = personality.prompt;
            }
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
            onSpeakingChange: (speaking) => this.setAISpeakingAnimation(speaking),
            onVolumeChange: (volume) => this.updateVolumeIndicator(volume), // 🆕 音量回调
            isMirrored: localStorage.getItem('ai-third-eye-mirror') !== 'false', // 🆕 镜像设置
            fps: this.currentFps || 1 // 🆕 帧率设置
        });
        
        try {
            await this.client.connect();
            
            startBtn.style.display = 'none';
            stopBtn.style.display = 'inline-flex';
            muteBtn.style.display = 'inline-flex';
            interruptBtn.style.display = 'inline-flex';
            screenshotBtn.style.display = 'inline-flex';
            const mirrorBtn = document.getElementById('mirrorBtn');
            if (mirrorBtn) mirrorBtn.style.display = 'inline-flex';
            const fpsBtn = document.getElementById('fpsBtn');
            if (fpsBtn) fpsBtn.style.display = 'inline-flex';
            
            // 🆕 显示常用语按钮
            const quickPhrases = document.getElementById('quickPhrases');
            if (quickPhrases) quickPhrases.style.display = 'flex';
            
            // 🆕 初始化用户语音显示区域
            this.initUserSpeechDisplay();
            
            loadingOverlay.classList.remove('show');
            
            // 🆕 记录会话开始
            this.recordSessionStart();
            
            // 🆕 开始会话计时
            this.startSessionTimer();
            
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
        
        // 🆕 停止会话计时
        this.stopSessionTimer();
        
        document.getElementById('startBtn').style.display = 'inline-flex';
        document.getElementById('startBtn').disabled = false;
        document.getElementById('stopBtn').style.display = 'none';
        document.getElementById('muteBtn').style.display = 'none';
        document.getElementById('interruptBtn').style.display = 'none';
        
        // 🆕 隐藏常用语按钮
        const quickPhrases = document.getElementById('quickPhrases');
        if (quickPhrases) quickPhrases.style.display = 'none';
        document.getElementById('screenshotBtn').style.display = 'none';
        const mirrorBtn = document.getElementById('mirrorBtn');
        if (mirrorBtn) mirrorBtn.style.display = 'none';
        const fpsBtn = document.getElementById('fpsBtn');
        if (fpsBtn) fpsBtn.style.display = 'none';
        
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
        localStorage.removeItem('ai-third-eye-chat-history');
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
        
        // 🆕 处理用户语音识别显示
        if (type === 'user_speaking') {
            this.updateUserSpeechDisplay('', true);
            return;
        }
        if (type === 'user_transcript') {
            this.updateUserSpeechDisplay(text, false, false);
            return;
        }
        if (type === 'user_transcript_done') {
            this.updateUserSpeechDisplay('', false, true);
            return;
        }
        
        if (partial && type === 'ai') {
            // Update partial message
            this.partialMessage += text;
            
            // 🆕 v1.5.4: AI开始回复，隐藏思考指示器
            this.hideAIThinkingIndicator();
            
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
            
            // 🆕 v1.5.5: AI 消息添加复制按钮
            if (type === 'ai') {
                msgEl.innerHTML = `
                    <div class="message-content-wrapper">
                        <p>${icon} ${text}</p>
                        <button class="copy-btn" title="复制" onclick="this.closest('.message').classList.contains('message') && this.closest('.message').querySelector('p').textContent.substring(2)">📋</button>
                    </div>
                    <span class="message-time">${new Date().toLocaleTimeString()}</span>
                `;
                
                // 添加复制按钮事件
                const copyBtn = msgEl.querySelector('.copy-btn');
                if (copyBtn) {
                    copyBtn.onclick = () => {
                        const textContent = msgEl.querySelector('p').textContent.substring(2); // 去掉图标
                        navigator.clipboard.writeText(textContent).then(() => {
                            copyBtn.textContent = '✅';
                            copyBtn.classList.add('copy-copied');
                            setTimeout(() => {
                                copyBtn.textContent = '📋';
                                copyBtn.classList.remove('copy-copied');
                            }, 2000);
                        }).catch(() => {
                            copyBtn.textContent = '❌';
                            setTimeout(() => {
                                copyBtn.textContent = '📋';
                            }, 2000);
                        });
                    };
                }
            } else {
                msgEl.innerHTML = `
                    <p>${icon} ${text}</p>
                    <span class="message-time">${new Date().toLocaleTimeString()}</span>
                `;
            }
            
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
        
        // 🆕 保存对话历史（非 partial 消息）
        if (!partial) {
            this.saveChatHistory();
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
    
    // 🆕 初始化音量指示器
    initVolumeIndicator() {
        const container = document.getElementById('volumeIndicator');
        if (!container) return;
        
        // 创建音量条组
        container.innerHTML = '';
        for (let i = 0; i < 5; i++) {
            const bar = document.createElement('div');
            bar.className = 'volume-bar';
            bar.style.cssText = `
                width: 4px;
                height: ${4 + i * 4}px;
                background: var(--accent-primary);
                border-radius: 2px;
                opacity: 0.3;
                transition: all 0.1s ease;
            `;
            container.appendChild(bar);
        }
    }
    
    // 🆕 更新音量指示器（带渐变颜色）
    updateVolumeIndicator(volume) {
        this.volumeLevel = volume;
        const bars = document.querySelectorAll('.volume-bar');
        const activeBars = Math.floor(volume * 5);
        
        bars.forEach((bar, index) => {
            const isActive = index < activeBars;
            bar.style.opacity = isActive ? '1' : '0.3';
            bar.style.transform = isActive ? 'scaleY(1.2)' : 'scaleY(1)';
            
            // 🆕 渐变颜色：绿->黄->红
            if (isActive) {
                if (volume < 0.4) {
                    bar.style.background = '#00ff88'; // 绿色
                } else if (volume < 0.7) {
                    bar.style.background = '#ffcc00'; // 黄色
                } else {
                    bar.style.background = '#ff4444'; // 红色
                }
            } else {
                bar.style.background = 'var(--accent-primary)';
            }
        });
    }
    
    // 🆕 初始化网络状态检测（带警告横幅）
    initNetworkStatus() {
        // 创建网络状态指示器
        this.updateNetworkStatus(navigator.onLine);
        
        window.addEventListener('online', () => {
            this.updateNetworkStatus(true);
            this.hideNetworkWarning();
            this.addMessage('system', '🌐 网络已恢复');
        });
        
        window.addEventListener('offline', () => {
            this.updateNetworkStatus(false);
            this.showNetworkWarning();
            this.addMessage('system', '⚠️ 网络已断开');
        });
    }
    
    // 🆕 显示网络警告横幅
    showNetworkWarning() {
        let banner = document.getElementById('networkWarningBanner');
        if (!banner) {
            banner = document.createElement('div');
            banner.id = 'networkWarningBanner';
            banner.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                background: linear-gradient(90deg, #ff4444, #ff6666);
                color: white;
                padding: 12px;
                text-align: center;
                font-weight: bold;
                font-size: 14px;
                z-index: 9999;
                animation: slideDown 0.3s ease;
                box-shadow: 0 2px 10px rgba(255,0,0,0.5);
            `;
            banner.innerHTML = '🔴 网络已断开！请检查网络连接 <span style="margin-left:10px;cursor:pointer" onclick="this.parentElement.remove()">✕</span>';
            document.body.appendChild(banner);
            
            // 添加动画样式
            if (!document.getElementById('networkWarningStyle')) {
                const style = document.createElement('style');
                style.id = 'networkWarningStyle';
                style.textContent = `
                    @keyframes slideDown {
                        from { transform: translateY(-100%); }
                        to { transform: translateY(0); }
                    }
                `;
                document.head.appendChild(style);
            }
        }
        banner.style.display = 'block';
    }
    
    // 🆕 隐藏网络警告横幅
    hideNetworkWarning() {
        const banner = document.getElementById('networkWarningBanner');
        if (banner) {
            banner.style.display = 'none';
        }
    }
    
    // 🆕 更新网络状态显示
    updateNetworkStatus(online) {
        const indicator = document.getElementById('networkStatus');
        if (indicator) {
            indicator.textContent = online ? '🟢' : '🔴';
            indicator.title = online ? '网络正常' : '网络已断开';
            indicator.style.filter = online ? 'none' : 'drop-shadow(0 0 5px red)';
        }
    }
    
    // 🆕 初始化帧率控制
    initFpsControl() {
        // 从本地存储加载帧率设置
        const savedFps = localStorage.getItem('ai-third-eye-fps');
        this.currentFps = savedFps ? parseFloat(savedFps) : 1;
        
        // 帧率调节按钮
        const fpsBtn = document.getElementById('fpsBtn');
        if (fpsBtn) {
            fpsBtn.addEventListener('click', () => this.showFpsSelector());
            this.updateFpsDisplay();
        }
    }
    
    // 🆕 显示帧率选择器
    showFpsSelector() {
        const fpsOptions = [
            { value: 0.5, label: '0.5 fps', desc: '极省流量' },
            { value: 1, label: '1 fps', desc: '省流量' },
            { value: 2, label: '2 fps', desc: '平衡' },
            { value: 5, label: '5 fps', desc: '流畅' },
            { value: 10, label: '10 fps', desc: '超流畅' }
        ];
        
        const container = document.createElement('div');
        container.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(26,26,46,0.98);
            border-radius: 12px;
            padding: 20px;
            z-index: 1000;
            min-width: 200px;
            border: 1px solid rgba(255,255,255,0.1);
        `;
        
        const title = document.createElement('div');
        title.textContent = '🎬 视频帧率设置';
        title.style.cssText = 'color: #00d4ff; font-weight: bold; margin-bottom: 15px; font-size: 16px;';
        container.appendChild(title);
        
        fpsOptions.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'btn btn-secondary';
            btn.style.cssText = 'width: 100%; margin-bottom: 8px; padding: 10px; text-align: left;';
            
            const isActive = this.currentFps === opt.value;
            if (isActive) {
                btn.classList.remove('btn-secondary');
                btn.classList.add('btn-primary');
            }
            
            btn.innerHTML = `${opt.label} <span style="color: #888; font-size: 12px;">(${opt.desc})</span>`;
            btn.addEventListener('click', () => {
                this.setFps(opt.value);
                container.remove();
            });
            container.appendChild(btn);
        });
        
        const closeBtn = document.createElement('button');
        closeBtn.className = 'btn btn-secondary';
        closeBtn.style.cssText = 'width: 100%; margin-top: 10px;';
        closeBtn.textContent = '取消';
        closeBtn.addEventListener('click', () => container.remove());
        container.appendChild(closeBtn);
        
        document.body.appendChild(container);
    }
    
    // 🆕 设置帧率
    setFps(fps) {
        this.currentFps = fps;
        localStorage.setItem('ai-third-eye-fps', fps.toString());
        
        if (this.client) {
            this.client.setFps(fps);
        }
        
        this.updateFpsDisplay();
        this.addMessage('system', `🎬 视频帧率已设置为 ${fps} fps`);
    }
    
    // 🆕 更新帧率显示
    updateFpsDisplay() {
        const fpsBtn = document.getElementById('fpsBtn');
        if (fpsBtn) {
            fpsBtn.textContent = `🎬 ${this.currentFps}fps`;
            fpsBtn.title = `当前帧率: ${this.currentFps} fps (点击调节)`;
        }
    }
    
    // 🆕 切换摄像头镜像
    toggleMirror() {
        if (this.client) {
            const mirrored = this.client.toggleMirror();
            const mirrorBtn = document.getElementById('mirrorBtn');
            if (mirrorBtn) {
                mirrorBtn.textContent = mirrored ? '🪞 已镜像' : '📷 正常';
            }
            this.addMessage('system', mirrored ? '🪞 已开启镜像' : '📷 已关闭镜像');
        }
    }
}

    // 🆕 v1.6.3: 显示首页推荐人设横幅
    showRecommendedPersonalityBanner() {
        if (typeof getRecommendedPersonality !== 'function') return;
        
        const recommended = getRecommendedPersonality();
        if (!recommended) return;
        
        // 检查是否已显示过
        if (localStorage.getItem('ai-third-eye-banner-shown') === new Date().toDateString()) return;
        
        // 创建推荐横幅
        const existing = document.getElementById('recommendedBanner');
        if (existing) existing.remove();
        
        const banner = document.createElement('div');
        banner.id = 'recommendedBanner';
        banner.style.cssText = `
            background: linear-gradient(135deg, rgba(0,212,255,0.2), rgba(0,255,136,0.2));
            border: 1px solid rgba(0,212,255,0.4);
            border-radius: 12px;
            padding: 15px 20px;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            animation: slideDown 0.5s ease;
        `;
        
        banner.innerHTML = `
            <div style="display:flex;align-items:center;gap:12px;">
                <span style="font-size:32px;">💡</span>
                <div>
                    <div style="color:var(--accent-primary);font-size:14px;font-weight:600;">${recommended.timeDesc}，推荐人设</div>
                    <div style="color:var(--text-primary);font-size:12px;margin-top:2px;">${recommended.name} · ${recommended.description}</div>
                </div>
            </div>
            <div style="display:flex;gap:8px;">
                <button class="btn btn-primary" id="useRecommendedBtn" style="padding:8px 16px;font-size:12px;">使用</button>
                <button class="btn btn-secondary" id="closeBannerBtn" style="padding:8px 12px;font-size:12px;min-width:auto;">×</button>
            </div>
        `;
        
        // 插入到消息容器之前
        const messagesContainer = document.getElementById('messagesContainer');
        if (messagesContainer && messagesContainer.parentElement) {
            messagesContainer.parentElement.insertBefore(banner, messagesContainer);
        }
        
        // 绑定事件
        document.getElementById('useRecommendedBtn')?.addEventListener('click', () => {
            this.selectPersonality(recommended.key);
            banner.remove();
            localStorage.setItem('ai-third-eye-banner-shown', new Date().toDateString());
        });
        
        document.getElementById('closeBannerBtn')?.addEventListener('click', () => {
            banner.remove();
            localStorage.setItem('ai-third-eye-banner-shown', new Date().toDateString());
        });
        
        // 添加动画样式
        if (!document.getElementById('bannerStyles')) {
            const style = document.createElement('style');
            style.id = 'bannerStyles';
            style.textContent = `
                @keyframes slideDown {
                    from { opacity: 0; transform: translateY(-20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `;
            document.head.appendChild(style);
        }
    }
}

// Initialize
const app = new UIController();

// 🆕 v1.6.3: 延迟显示推荐横幅
setTimeout(() => {
    if (app && typeof app.showRecommendedPersonalityBanner === 'function') {
        app.showRecommendedPersonalityBanner();
    }
}, 1500);
