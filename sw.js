/**
 * AI 第三只眼 - Service Worker
 * �n提供离线缓存和 PWA 支持
 * 
 * 版本: v1.8.134
 *
 * v1.8.134 更新:
 * - 🐛 修复 CHANGELOG.md 缺少 v1.8.133 记录
 * - 📝 同步 README.md 版本号标题和开发日志
 *
 * v1.8.133 更新:
 * - 🐛 自动化Review修复: 关于面板人设数量显示不一致 (67→68)
 * - 📝 同步所有文件版本号至 v1.8.133
 *
 * v1.8.132 更新:
 * - 🐛 自动化Review修复: index.html 版本徽章显示不一致 (v1.8.128→v1.8.131)
 * - 🐛 修复 app.js 头部版本注释与 APP_VERSION 不一致 (v1.8.130→v1.8.132)
 * - 📝 同步所有文件版本号至 v1.8.132
 *
 * v1.8.131 更新:
 * - 🥐 新增「烘焙师」人设
 *
 * v1.8.130 更新:
 * - 🔧 配合 README 开发日志补充修复
 *
 * v1.8.129 更新:
 * - 🐾 配合 app.js 新增「宠物训练师」人设
 *
 * v1.8.128 更新:
 * - 🐛 自动化Review修复: index.html 版本徽章显示不一致 (v1.8.124→v1.8.127)
 * - 📝 同步所有文件版本号至 v1.8.128
 *
 * v1.8.126 更新:
 * - 🎭 配合 app.js 新增「脱口秀演员」人设
 *
 * v1.8.124 更新:
 * - 🎬 配合 app.js 新增「短视频达人」人设
 *
 * v1.8.123 更新:
 * - 😴 配合 app.js 新增「睡眠顾问」人设
 *
 * v1.8.118 更新:
 * - 📦 配合 app.js 新增「居家收纳师」人设
 *
 * v1.8.117 更新:
 * - 🔧 配合 app.js 新增「手工匠人」人设
 *
 * v1.8.116 更新:
 * - 🎨 配合 app.js 新增「创意设计师」人设
 *
 * v1.8.115 更新:
 * - 🏃‍♂️ 配合 app.js 新增「运动康复师」人设
 *
 * v1.8.114 更新:
 * - 🔧 同步所有文件版本号
 *
 * v1.8.113 更新:
 * - 🎨 配合 app.js 替换占位图片为实际项目图标
 *
 * v1.8.112 更新:
 * - 📝 配合 app.js 修复 README 人设表格缺少天文爱好者
 *
 * v1.8.111 更新:
 * - 🐛 配合 app.js 修复天文爱好者人设 prompt 模板字符串语法错误
 *
 * v1.8.108 更新:
 * - 🌟 配合 app.js 新增「天文爱好者」人设
 *
 * v1.8.106 更新:
 * - 🤔 配合 app.js 新增「哲学家」人设
 *
 * v1.8.105 更新:
 * - 🧘 配合 app.js 新增「心理调节师」人设
 *
 * v1.8.104 更新:
 * - 🎩 配合 app.js 新增「魔术师」人设
 *
 * v1.8.102 更新:
 * - 🎉 配合 app.js 扩展周末时段推荐人设
 *
 * v1.8.101 更新:
 * - ⚖️ 配合 app.js 新增「法律顾问」人设
 *
 * v1.8.97 更新:
 * - 🚗 新增「汽车顾问」人设
 *
 * v1.8.96 更新:
 * - 🌻 新增「园艺师」人设
 *
 * v1.8.95 更新:
 * - 🥂 新增「调酒师」人设
 *
 * v1.8.94 更新:
 * - 🐛 配合 app.js 修复关于面板人设数量显示错误
 *
 * v1.8.92 更新:
 * - 🍵 配合 app.js 新增「茶艺师」人设
 * - 🎭 人设总数扩展至 48 种
 *
 * v1.8.89 更新:
 * - 🧘 配合 app.js 新增「瑜伽教练」人设
 * - 🎭 人设总数扩展至 47 种
 *
 * v1.8.86 更新:
 * - 配合 app.js 新增「演讲教练」人设
 * - 🎭 人设总数扩展至 46 种
 *
 * v1.8.85 更新:
 * - 🐛 配合 app.js 修复版本徽章显示不一致
 *
 * v1.8.84 更新:
 * - 配合 app.js 新增「形象顾问」人设
 * - 🎭 人设总数扩展至 45 种
 *
 * v1.8.83 更新:
 * - 配合 app.js 新增「升学顾问」人设
 * - 🎭 人设总数扩展至 44 种
 */

const CACHE_NAME = 'ai-third-eye-v1.8.134';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/app.js',
  '/personalities.js',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((name) => name !== CACHE_NAME)
            .map((name) => caches.delete(name))
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  
  // Skip non-GET requests and WebSocket connections
  if (request.method !== 'GET' || request.url.startsWith('wss://')) {
    return;
  }

  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          // Return cached response and update cache in background
          event.waitUntil(
            fetch(request)
              .then((networkResponse) => {
                if (networkResponse.ok) {
                  caches.open(CACHE_NAME)
                    .then((cache) => cache.put(request, networkResponse));
                }
              })
              .catch(() => {}) // Ignore network errors
          );
          return cachedResponse;
        }

        // Not in cache, fetch from network
        return fetch(request)
          .then((networkResponse) => {
            if (networkResponse.ok) {
              const responseClone = networkResponse.clone();
              caches.open(CACHE_NAME)
                .then((cache) => cache.put(request, responseClone));
            }
            return networkResponse;
          })
          .catch(() => {
            // Network failed, try to return cached index.html for navigation
            if (request.mode === 'navigate') {
              return caches.match('/index.html');
            }
            return new Response('Offline', { status: 503 });
          });
      })
  );
});

// Handle messages from the app
self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
});