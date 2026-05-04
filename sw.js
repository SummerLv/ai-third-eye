/**
 * AI 第三只眼 - Service Worker
 * 提供离线缓存和 PWA 支持
 * 
 * 版本: v1.8.139
 *
 * v1.8.139 更新:
 * - 📊 新增「数据分析师」人设 - 数据分析，洞察解读（73种人设）
 * - 💡 新增「产品经理」人设 - 产品思维，需求分析（73种人设）
 * - 📝 同步所有文件版本号至 v1.8.139
 *
 * v1.8.138 更新:
 * - 🐛 自动化Review修复: 关于面板人设数量显示不一致 (70→71)
 * - 📝 同步所有文件版本号至 v1.8.138
 *
 * v1.8.137 更新:
 * - 🤖 新增「AI教练」人设 - AI知识学习、技术指导
 * - 🎭 人设总数扩展至 71 种
 * - 🔄 智能推荐增加AI教练（早上和下午时段）
 * - 🐛 修复 sw.js 头部版本注释与实际版本不一致 (v1.8.135→v1.8.137)
 * - 📝 同步所有文件版本号至 v1.8.137
 *
 * v1.8.136 更新:
 * - 🏄 新增「冲浪教练」人设 - 冲浪技巧，浪点推荐
 * - 🎭 人设总数扩展至 70 种
 * - 🔄 智能推荐增加冲浪教练（下午和周末时段）
 *
 * v1.8.135 更新:
 * - 🃏 新增「塔罗牌占卜师」人设 - 神秘占卜，运势解读
 * - 🐛 自动化Review修复: 关于面板人设数量显示不一致 (67→68)
 * - 🎭 人设总数扩展至 69 种
 * - 🔄 智能推荐增加塔罗牌占卜师（深夜时段）
 * - 📝 同步所有文件版本号至 v1.8.135
 *
 * v1.8.134 更新:
 * - 📝 同步 CHANGELOG 和 README 版本号
 *
 * v1.8.133 更新:
 * - 🐛 自动化Review修复: 关于面板人设数量显示不一致 (67→68)
 * - 🎭 人设总数修复为 68 种
 * - 📝 同步所有文件版本号至 v1.8.133
 *
 * v1.8.132 更新:
 * - 🐛 自动化Review修复: index.html 版本徽章显示不一致 (v1.8.128→v1.8.131)
 * - 🐛 修复 app.js 头部版本注释与 APP_VERSION 不一致 (v1.8.130→v1.8.132)
 * - 📝 同步所有文件版本号至 v1.8.132
 *
 * v1.8.131 更新:
 * - 🥐 新增「烘焙师」人设 - 烘焙技巧、甜点制作（68种人设）
 *
 * v1.8.130 更新:
 * - 📝 自动化Review修复: README开发日志缺少v1.8.129记录
 *
 * v1.8.129 更新:
 * - 🐾 新增「宠物训练师」人设 - 宠物行为训练、技巧指导（67种人设）
 *
 * v1.8.128 更新:
 * - 🐛 修复 README.md 人设数量标题未同步 (65→66)
 * - 📝 补充 CHANGELOG.md v1.8.126 更新日志
 *
 * v1.8.126 更新:
 * - ⭐ 新增「星座顾问」人设 - 星座运势、性格分析（66种人设）
 * - 🐛 修复关于面板人设数量显示错误 (64→66)
 *
 * v1.8.125 更新:
 * - 🎭 新增「脱口秀演员」人设 - 幽默吐槽、搞笑段子（65种人设）
 *
 * v1.8.124 更新:
 * - 🎬 新增「短视频达人」人设 - 短视频创作、拍摄剪辑技巧（64种人设）
 * - 🐛 修复 APP_VERSION 常量版本号不一致 (v1.8.121→v1.8.123)
 *
 * v1.8.123 更新:
 * - 😴 新增「睡眠顾问」人设 - 睡眠质量改善、睡前放松建议（63种人设）
 */

const CACHE_NAME = 'ai-third-eye-v1.8.139';
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
