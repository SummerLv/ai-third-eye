# 🦐 AI 第三只眼

> 基于 MiniCPM-o 4.5 的实时视觉助手

**边看边听边说，AI 主动提醒**

![Demo](https://img.shields.io/badge/MiniCPM--o-4.5-blue) ![License](https://img.shields.io/badge/License-MIT-green)

![Preview](https://via.placeholder.com/800x400?text=AI+第三只眼+Preview)

## ✨ 功能特性

### 核心能力

- **实时视觉理解** - AI 实时观察摄像头画面，描述看到的场景
- **全双工对话** - 边听边说，无需等待，自然对话体验
- **主动提醒** - 发现安全隐患、有趣事物会主动告知
- **OCR 朗读** - 看到文字会自动识别并朗读

### 🎭 8种趣味人设

| 人设 | 特点 |
|------|------|
| 🦌 小鹿 | 活泼可爱，对世界充满好奇 |
| 📚 故事大王 | 看到什么都能编出故事 |
| 😂 段子手 | 走到哪里吐槽到哪里 |
| 🔍 神探 | 敏锐观察，推理细节 |
| 🌸 诗人 | 所见皆可入诗 |
| 💪 气氛组 | 永远正能量 |
| 🐱 傲娇猫娘 | 高冷又黏人的猫咪 |
| 🔮 算命先生 | 看面相、算运势 |

### 实用功能

- 📸 一键截图保存精彩瞬间
- 🎲 随机选择人设，每次体验不同
- ⌨️ 键盘快捷键支持 (空格/Ctrl+S/Esc)
- ⚙️ 自定义 AI 人设提示词
- 📱 移动端完美适配
- 🔄 断线自动重连

### ⌨️ 键盘快捷键

| 按键 | 功能 |
|------|------|
| `空格` | 开始/结束对话 |
| `Ctrl+S` | 截图保存 |
| `Esc` | 关闭设置面板 |
| `,` | 打开设置面板 |

## 🎯 使用场景

1. **视觉助手** - 帮助视障人士感知环境
2. **智能导览** - 博物馆、展览实时讲解
3. **学习陪伴** - 看着你学习，适时提醒休息
4. **安全监护** - 发现异常情况主动提醒
5. **互动娱乐** - 和 AI 一起探索世界

## 🚀 快速开始

### 方式一：在线体验

访问：[https://summerlv.github.io/ai-third-eye](https://summerlv.github.io/ai-third-eye)

### 方式二：本地运行

```bash
# 克隆仓库
git clone https://github.com/SummerLv/ai-third-eye.git
cd ai-third-eye

# 使用任意 HTTP 服务器运行
python -m http.server 8080
# 或
npx serve .

# 打开浏览器访问 http://localhost:8080
```

### 方式三：使用 Docker

```bash
docker build -t ai-third-eye .
docker run -p 8080:80 ai-third-eye
```

## 📖 使用说明

1. 点击「开始对话」按钮
2. 授权摄像头和麦克风权限
3. 开始和 AI 实时对话
4. AI 会自动观察画面并主动交流

### 模式选择

- **视频双工模式** - AI 实时观察摄像头画面，适合大多数场景
- **音频双工模式** - 仅语音对话，更节省流量

### 自定义设置

点击「设置」按钮可配置：
- AI 人设提示词
- API 端点（可自建服务）
- 语音风格

## 🛠 技术架构

```
Browser (WebRTC)
    ↓ 音视频流
WebSocket Client
    ↓ JSON 消息
MiniCPM-o 4.5 API
    ↓ 实时推理
AI 响应 (语音+文字)
```

### 技术栈

- **前端**: 原生 JavaScript + WebRTC + WebSocket
- **API**: MiniCPM-o 4.5 Realtime API
- **部署**: GitHub Pages / 静态托管

### 协议说明

MiniCPM-o Realtime API 采用 WebSocket 全双工协议：

- 上行音频: 16kHz float32 PCM
- 下行音频: 24kHz float32 PCM  
- 视频帧: JPEG base64
- 消息格式: JSON

详细协议见: [API 文档](https://api.modelbest.cn/minicpmo45/docs)

## 📝 开发日志

### v1.0.3 (2026-04-28)
- ✨ 新增键盘快捷键支持 (空格=开始/结束, Ctrl+S=截图, Esc=关闭设置)
- ✨ 首次访问显示使用提示
- ✨ UI 添加版本号显示
- 🎨 优化设置面板布局，添加快捷键说明

### v1.0.2 (2026-04-28)
- ✅ 新增 8 种趣味人设
- ✅ 新增人设选择器 UI
- ✅ 新增随机人设功能
- ✅ 新增截图保存功能
- ✅ GitHub Pages 部署成功

### v1.0.0 (2026-04-27)
- ✅ 完成基础 UI 界面
- ✅ 实现 WebSocket 连接管理
- ✅ 实现音视频流处理
- ✅ 实现消息显示
- ✅ 添加音频播放队列
- ✅ 添加断线重连
- ✅ 移动端适配

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 License

MIT License

---

Powered by [MiniCPM-o 4.5](https://github.com/OpenBMB/MiniCPM-o) | Made with ❤️ by 虾哥
