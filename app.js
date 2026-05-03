/**
 * AI 第三只眼 - MiniCPM-o 4.5 Realtime API Client
 * 版本: v1.8.121
 *
 * v1.8.121 更新:
 * - 🎯 新增「求职顾问」人设 - 面试技巧、简历优化、职业规划
 * - 🎭 人设总数扩展至 62 种
 * - 🔄 智能推荐增加求职顾问（下午和晚上时段）
 * - 📊 语音命令关键词保持 172 个
 *
 * v1.8.120 更新:
 * - 🐛 自动化Review修复: 关于面板人设数量显示错误 (59→61)
 * - 🎭 人设总数保持 61 种
 * - 📊 语音命令关键词保持 172 个
 *
 * v1.8.112 更新:
 * - 📝 自动化Review修复: README人设表格补充天文爱好者
 * - 🔧 修复 README.md 人设表格缺少天文爱好者人设（56种人设完整展示）
 * - 🎭 人设总数保持 56 种（不变）
 * - 📊 语音命令关键词保持 172 个（不变）
 *
 * v1.8.111 更新:
 * - 🐛 自动化Review修复: 天文爱好者人设 prompt 模板字符串缺少闭合反引号
 * - 🔧 修复 JavaScript 语法错误导致 personalities.js 解析失败
 * - 🎭 人设总数保持 56 种（不变）
 * - 📊 语音命令关键词保持 172 个（不变）
 *
 * v1.8.110 更新:
 * - 🐛 自动化Review修复: 心理调节师人设缩进格式
 * - 🔧 修复 'stress-relief-coach' 缩进缺失导致对象格式不一致
 * - 🎭 人设总数修复为 56 种 (原计数 55→56)
 * - 📊 语音命令关键词保持 172 个（不变）
 *
 * v1.8.109 更新:
 * - 🐛 自动化Review修复: 版本号同步
 * - 🔧 修复 app.js APP_VERSION 不一致 (v1.8.105→v1.8.108)
 * - 🔧 修复 sw.js CACHE_NAME 不一致 (v1.8.107→v1.8.108)
 * - 🔧 修复 index.html versionBadge 不一致 (v1.8.106→v1.8.108)
 * - 🎭 人设总数保�� 56 种（不变）
 * - 📊 语音命令关键词保持 172 个（不变）
 *
 * v1.8.108 更新:
 * - 🌟 新增「天文爱好者」人设 - 观星指导,星座解读
 * - 🎭 人设总数扩展至 56 种
 * - 🔄 智能推荐增加天文爱好者(深夜时段)
 * - 📊 语音命令关键词保持 172 个（不变）
 *
 * v1.8.107 更新:
 * - 🐛 自动化Review修复: 补充缺失的心理调节师人设定义
 * - 🎭 人设总数修复为 55 种 (原 54→55)
 *
 * v1.8.106 更新:
 * - 🤔 新增「哲学家」人设 - 思考人生，分享智慧
 * - 🎭 人设总数扩展至 55 种
 * - 🔄 智能推荐增加哲学家（晚上和深夜时段）
 * - 📊 语音命令关键词保持 172 个（不变）
 *
 * v1.8.105 更新:
 * - 🧘 新增「心理调节师」人设 - 情绪调节，减压技巧
 * - 🎭 人设总数扩展至 54 种
 * - 🔄 智能推荐增加心理调节师（晚上和深夜时段）
 * - 📊 语音命令关键词保持 172 个（不变）
 *
 * v1.8.104 更新:
 * - 🐛 自动化Review修复: 关于面板人设数量显示错误 (52→53)
 * - 🎭 人设总数保持 53 种（魔术师已在上版本添加）
 *
 * v1.8.103 更新:
 * - 🎩 新增「魔术师」人设 - 表演魔术，揭示奥秘
 * - 🎭 人设总数扩展至 53 种
 * - 🔄 智能推荐增加魔术师（周末下午和晚上时段）
 *
 * v1.8.102 更新:
 * - 🎉 扩展周末时段推荐人设 - 让周末体验更丰富
 * - 周末早上：露营向导、段子手、园艺师
 * - 周末下午：电影影评人、演讲教练、气氛组
 * - 周末晚上：段子手、气氛组、游戏助手
 * - 周末深夜：小鹿、故事大王
 * - 🎭 人设总数保持 52 种
 *
 * v1.8.101 更新:
 * - ⚖️ 新增「法律顾问」人设 - 法律普及，权益保护
 * - 🎭 人设总数扩展至 52 种
 * - 🔄 智能推荐增加法律顾问（下午和晚上时段）
 *
 * v1.8.98 更新:
 * - 🚗 新增「汽车顾问」人设 - 汽车知识，购车建议
 * - 🎭 人设总数扩展至 51 种
 * - 🔄 智能推荐增加汽车顾问（下午和晚上时段）
 *
 * v1.8.96 更新:
 * - 🌻 新增「园艺师」人设 - 种植技巧，花草养护
 * - 🎭 人设总数扩展至 50 种
 * - 🔄 智能推荐增加园艺师（早上和下午时段）
 *
 * v1.8.95 更新:
 * - 🥂 新增「调酒师」人设 - 鸡尾酒调制，品味生活
 * - 🎭 人设总数扩展至 49 种
 * - 🔄 智能推荐增加调酒师（下午和晚上时段）
 *
 * v1.8.94 更新:
 * - 🐛 修复关于面板人设数量显示错误（47→48）
 *
 * v1.8.92 更新:
 * - 🍵 新增「茶艺师」人设 - 茶道文化，品茶养生
 * - 🎭 人设总数扩展至 48 种
 * - 🔄 智能推荐增加茶艺师（下午和晚上时段）
 *
 * v1.8.89 更新:
 * - 🧘 新增「瑜伽教练」人设 - 瑜伽体式指导、身心放松
 * - 🎭 人设总数扩展至 47 种
 * - 🔄 智能推荐增加瑜伽教练（早上和深夜时段）
 *
 * v1.8.87 更新:
 * - 🐛 修复关于面板人设数量显示错误（44→46）
 *
 * v1.8.86 更新:
 * - 🎤 新增「演讲教练」人设 - 演讲技巧、表达提升
 * - 🎭 人设总数扩展至 46 种
 * - 🔄 智能推荐增加演讲教练（晚上时段）
 *
 * v1.8.85 更新:
 * - 🐛 修复版本徽章显示不一致 (v1.8.83→v1.8.84)
 * - 🔄 同步所有文件版本号至 v1.8.85
 *
 * v1.8.84 更新:
 * - 👔 新增「形象顾问」人设 - 形象塑造、气质提升
 * - 🎭 人设总数扩展至 45 种
 * - 🔄 智能推荐增加形象顾问（早上和下午时段）
 * - 📊 语音命令关键词保持 172 个（不变）
 *
 * v1.8.83 更新:
 * - 🎓 新增「升学顾问」人设 - 高考考研留学指导
 * - 🎭 人设总数扩展至 44 种
 * - 🔄 智能推荐增加升学顾问（早上和下午时段）
 * - 📊 语音命令关键词保持 172 个（不变）
 *
 * v1.8.82 更新:
 * - 💄 新增「美妆顾问」人设 - 美妆技巧、护肤建议
 * - 🐛 修复 personalities.js 中医养生顾问缺少闭合括号的语法错误
 * - 🎭 人设总数扩展至 43 种
 * - 🔄 智能推荐增加美妆顾问（早上和下午时段）
 * - 📊 语音命令关键词扩展至 172 个（保持不变）
 *
 * v1.8.81 更新:
 * - 🌿 新增「中医养生顾问」人设 - 中医养生、体质调理
 * - 🎭 人设总数扩展至 42 种
 * - 🔄 智能推荐增加中医养生顾问（深夜和早上时段）
 * - 📊 语音命令关键词扩展至 172 个（保持不变）
 *
 * v1.8.80 更新:
 * - 📱 新增「社交媒体达人」人设 - 内容创作、拍照分享
 * - 🎭 人设总数扩展至 41 种
 * - 🔄 智能推荐增加社交媒体达人（下午和晚上时段）
 * - 🐛 修复关于面板显示人设数量错误（39→40）
 *
 * v1.8.79 更新:
 * - 🌤️ 新增「天气预报员」人设 - 天气解读、气象知识
 * - 🎭 人设总数扩展至 40 种
 * - 🔄 智能推荐增加天气预报员（早上时段）
 *
 * v1.8.78 更新:
 * - ☕ 新增「咖啡师」人设 - 咖啡知识、品鉴推荐
 * - 🎭 人设总数扩展至 39 种
 * - 🔄 智能推荐增加咖啡师（早上时段）
 *
 * v1.8.77 更新:
 * - 🏕️ 新增「露营向导」人设 - 户外生存、自然探索
 * - 🎭 人设总数扩展至 38 种
 * - 🔄 智能推荐增加露营向导（下午和周末时段）
 *
 * v1.8.76 更新:
 * - 🏛️ 新增「历史学家」人设 - 历史讲解、古迹解读
 * - 🎭 人设总数扩展至 37 种
 *
 * v1.8.74 更新:
 * - 🎬 新增「电影影评人」人设 - 影评解析、推荐好片
 * - 🎭 人设总数扩展至 34 种
 *
 * v1.8.71 更新:
 * - 🔧 修复语音关键词数量统计错误（171→172）
 * - 🔧 同步 README.md 和关于面板关键词数量显示
 *
 * v1.8.70 更新:
 * - 💰 新增「比价」语音命令 - 比较价格/哪个划算/性价比（触发 priceCompare action）
 * - 📊 语音命令关键词扩展至 171 个
 *
 * v1.8.69 更新:
 * - 🎨 新增「艺术画家」人设 - 绘画创作、艺术指导
 * - 🎭 人设总数扩展至 32 种
 * - 📊 语音命令关键词扩展至 168 个（新增4个绘画相关词汇）
 *
 * v1.8.68 更新:
 * - 🔧 修复 APP_VERSION 常量版本号不一致 (v1.8.66→v1.8.67)
 * - 🔧 同步所有文件版本号至 v1.8.68
 *
 * v1.8.67 更新:
 * - 🌅 新增问候语语音命令(9个关键词): 早安/早上好/午安/下午好/晚上好/晚安
 * - 📊 语音命令关键词扩展至 164 个
 *
 * v1.8.66 更新:
 * - 🐛 修复 index.html 版本徽章显示不一致 (v1.8.64→v1.8.65)
 * - 🐛 修复关于面板语音关键词数量显示错误 (151→155)
 *
 * v1.8.65 更新:
 * - 🎨 新增 AI 绘画语音命令 - 画画/画图/绘画/画个
 * - 🔧 优化语音命令处理逻辑，支持关键词前缀匹配
 *
 * v1.8.64 更新:
 * - 🐛 修复理财顾问与记账助手 emoji 重复 (💰→💹)
 *
 * v1.8.64 更新:
 * - 🐛 修复理财顾问与记账助手 emoji 重复 (💰→💹)
 *
 * v1.8.63 更新:
 * - 💹 新增「理财顾问」人设 - 投资建议、理财规划
 * - 🎭 人设总数扩展至 31 种
 * - 🔄 智能推荐增加理财顾问（下午和深夜时段）
 *
 * v1.8.61 更新:
 * - 🐛 修复聊天历史加载时图标重复累积 bug
 * - 🔧 loadChatHistory 移除所有 emoji 前缀，避免 addMessage 重复添加图标
 * - 🔧 addMessage 检测文本是否已以 emoji 开头，避免重复添加
 *
 * v1.8.60 更新:
 * - 👗 新增「时尚顾问」人设 - 穿搭建议、风格搭配
 * - 🎭 人设总数扩展至 30 种
 * - 🔄 智能推荐增加时尚顾问（早上和下午时段）
 *
 * v1.8.59 更新:
 * - 🐛 修复聊天历史加载时系统消息图标重复累积 bug
 * - 🐛 修复首页推荐横幅重复显示问题
 * - 🔧 优化 saveChatHistory 去除图标前缀再保存
 *
 * v1.8.56 更新:
 * - 🐛 修复 README.md 人设表格缺失「植物学家」
 * - 🔧 自动化Review检测并修复文档不一致
 * - 🌸 新增「植物学家」人设 - 识别植物，分享植物知识
 * - 🌷 新增植物识别语音命令(5个关键词): 这是什么花/什么花/识花/什么植物/这种花
 * - 🎭 人设总数扩展至 29 种
 * - 📊 语音命令关键词扩展至 151 个
 *
 * v1.8.54 更新:
 * - 🔧 自动化Review修复 index.html 版本号不一致
 *
 * v1.8.53 更新:
 *
 * v1.8.52 更新:
 * - 📖 新增「阅读助手」人设 - 辅助阅读，文字讲解
 * - 🎤 新增阅读辅助语音命令(5个关键词): 帮我读/念出来/怎么读/这个字/读一下
 * - 🎭 人设总数扩展至 28 种
 * - 🔄 智能推荐增加阅读助手（早上和下午时段）
 * - 📊 语音命令关键词扩展至 146 个
 *
 * v1.8.51 更新:
 * - 🎮 新增「游戏助手」人设 - 游戏攻略，技巧指导
 * - 🎭 人设总数扩展至 27 种
 * - 🔄 智能推荐增加游戏助手（下午和晚上时段）
 *
 * v1.8.50 更新:
 * - 🧘 新增「冥想教练」人设 - 引导放松，减压冥想
 * - 🎭 人设总数扩展至 26 种
 * - 🔄 智能推荐增加冥想教练（深夜时段）
 *
 * v1.8.49 更新:
 * - 🐛 修复关于面板语音命令数量显示错误（142→141）
 * - 📊 修正关键词统计为准确数量
 *
 * v1.8.48 更新:
 * - 🐛 修复 askTime case 中 nowTime/timeStr 变量重复声明导致语法错误
 * - 🔧 自动化Review检测并修复变量作用域问题
 *
 * v1.8.47 更新:
 * - 🐛 修复 index.html CSS注释版本号不一致（v1.8.21→v1.8.46）
 * - 🔧 自动化Review检测并修复版本同步问题
 *
 * v1.8.46 更新:
 * - 🐛 修复语音命令关键词"几点了"重复定义问题
 * - 🔧 自动化Review检测并清理重复代码
 *
 * v1.8.44 更新:
 * - 📅 新增「日程助手」人设 - 日程管理,时间提醒
 * - 🎤 新增日程管理语音命令(8个关键词)
 *   - "提醒我" - 设置提醒
 *   - "别忘了" - 记住重要事项
 *   - "几点了" - 询问时间
 *   - "今天安排" - 查看今日日程
 *   - "明天计划" - 规划明天
 *   - "还有多久" - 时间倒计时
 *   - "日程" - 查看日程
 *   - "待办" - 查看待办事项
 * - 📊 语音命令关键词扩展至 142 个
 * - 🎭 人设总数扩展至 25 种
 * - 🔄 智能推荐增加日程助手(早上和下午时段)
 *
 * v1.8.43 更新:
 * - 🏃 新增「运动打卡」语音命令 - 打卡/健身打卡/运动打卡
 * - 🎉 新增「完成运动」语音命令 - 完成了/做完了/练完了
 * - 🎯 新增「查看目标」语音命令 - 今天目标/运动目标
 * - 📊 语音命令关键词扩展至 134 个
 * - 🔥 增强健身教练人设互动体验,支持连续打卡统计
 *
 * v1.8.42 更新:
 * - 🐛 修复语音命令对象末尾缺少逗号导致 JavaScript 语法错误
 * - 🔧 自动化Review检测并修复代码结构问题
 *
 * v1.8.41 更新:
 * - 💰 新增「记账助手」人设 - 开支记录,预算提醒
 * * - 🔍 新增记账语音命令(8个关键词)
 * - 📊 语音命令关键词扩展至 126 个
 * - 🎭 人设总数扩展至 24 种
 * - 🔄 智能推荐增加记账助手(下午和深夜时段)
 *
 * v1.8.40 更新:
 * - 🔄 本轮自动化Review修复版本号显示不一致(index.html v1.8.38→v1.8.39)
 * - 📝 更新 CHANGELOG.md 记录本轮修复
 *
 * v1.8.39 更新:
 * - 🐛 修复 v1.8.32/v1.8.33 新增语音命令处理缺失问题
 *   - 修复天气命令 case 'weather' 未实现
 *   - 修复物体识别命令 case 'identifyObject' 未实现
 *   - 修复品牌识别命令 case 'identifyBrand' 未实现
 *   - 修复价格查询命令 case 'checkPrice' 未实现
 *   - 修复购物建议命令 case 'shoppingAdvice' 未实现
 *   - 修复购买渠道命令 case 'whereToBuy' 未实现
 *   - 修复颜色识别命令 case 'identifyColor' 未实现
 * - 🔧 自动化Review检测并修复功能缺失问题
 *
 * v1.8.33 更新:
 * - 🔍 新增物体识别语音命令(12个关键词)
 *   - "这是什么/这个是什么" - 让AI识别当前物体
 *   - "什么牌子/什么品牌" - AI识别商品品牌
 *   - "多少钱/贵不贵/便宜吗" - AI查询价格信息
 *   - "值得买吗/划算吗/买不买" - AI给出购物建议
 *   - "哪里买的/哪里有卖" - AI查找购买渠道
 *   - "颜色是什么/什么颜色" - AI识别物体颜色
 * - 📊 语音命令关键词扩展至 118 个
 *
 * v1.8.32 更新:
 * - 🌤️ 新增天气询问语音命令(8个关键词)
 *   - "天气怎么样/今天天气/天气如何/什么天气" - 让AI观察并描述天气
 *   - "会下雨吗/要下雨吗" - AI观察云层预测是否下雨
 *   - "会出太阳吗" - AI观察天空判断阳光情况
 *   - "看起来天气" - AI描述当前天气状态
 * - 📊 语音命令关键词扩展至 104 个
 * - 📝 添加 .gitignore 文件
 *
 * v1.8.31 更新:
 * - 🥗 新增「营养师」人设 - 饮食分析,营养建议
 * - 🎤 新增健康饮食语音命令: 有营养吗/健康吗/卡路里/热量
 * - 📊 语音命令关键词扩展至 104 个(新增 8 个天气询问命令)
 * - 🎭 人设总数扩展至 23 种
 * - 🔄 智能推荐增加营养师(下午和深夜时段)
 *
 * v1.8.30 更新:
 * - 🐛 修复 manifest.json 版本号不一致问题 (1.8.28→1.8.29)
 * - 自动化 Review 检测并修复版本同步问题
 *
 * v1.8.29 更新:
 * - 🐛 修复关于面板人设数量显示错误(21→22)
 * - 自动化 Review 检测并修复文档不一致
 *
 * - 🌍 新增「翻译官」人设 - 实时翻译,语言桥梁
 * - 🎤 新增语音命令:暂停计时/继续计时/讲个笑话/翻译一下
 * - 📊 语音命令关键词扩展至 88 个
 * - 🎭 人设总数扩展至 22 种
 *
 * v1.8.26 更新:
 * - 🐛 修复语音命令关键词数量统计错误(77→78)
 * - 自动化 Review 检测并修复文档不一致
 *
 * v1.8.25 更新:
 * - 🎤 新增实用语音命令: "重置人设"/"下载截图"/"复制截图"
 * - 截图支持复制到剪贴板功能
 * - 语音命令关键词扩展至 78 个
 * - 提升截图操作便捷性
 *
 * v1.8.24 更新:
 * - 🎨 优化快捷命令栏UI:字幕按钮 emoji 从 📝 改为 👁️,避免与总结按钮混淆
 * - 提升用户体验,按钮区分度更高
 * - 所有文件版本号同步至 v1.8.24
 *
 * v1.8.22 更新:
 * - 增强快捷命令栏:添加静音、清空、导出按钮
 * - 快捷命令栏按钮分组:操作类、工具类、结束类
 * - executeVoiceCommand 新增 mute/clear/export 命令支持
 * - 移动端快捷操作更便捷
 *
 * v1.8.20 更新:
 * - 修复语音命令关键词重复定义问题(移除 v1.5.1 区的 '大声点'/'小声点')
 * - 语音命令关键词总数修正为 71 个
 * - 自动化 Review 检测并修复
 *
 * v1.8.19 更新:
 * - 新增人设切换语音命令: "换人设"/"切换人设"/"换个人"/"换个人设" 随机切换AI人设
 * - 修正语音命令关键词数量统计(69→73个)
 *
 * v1.8.18 更新:
 * - 新增全屏模式语音命令: "全屏"进入全屏,"退出全屏"取消全屏
 * - 新增更多音量控制关键词: "声音大点"、"声音小点"
 * - 语音命令总数扩展至 64 个关键词
 * - README.md 同步更新版本描述
 *
 * v1.8.17 更新:
 * - 新增更多实用语音命令: "没听清/再说一次"(重复)、"等等/等一下"(暂停)
 * - 新增 "重新开始/重来"语音命令 - 清空对话重新开始
 * - 新增 "计时/倒计时"语音命令 - 请求计时功能
 * - 新增 "现在几点/几点了"语音命令 - 询问当前时间
 * - 新增 "今天日期/今天几号"语音命令 - 询问当前日期
 * - 语音命令总数扩展至 58 个关键词
 *
 * v1.8.15 更新:
 * - 更正语音命令统计 - action数量19→20
 * - README.md 同步更新
 *
 * v1.8.14 更新:
 * - 修复 index.html 版本号显示不一致问题
 * - README.md 同步更新
 * - 所有文件版本号同步
 *
 * v1.8.13 更新:
 * - 完善快捷键帮助面板,添加V键(语音命令帮助)说明
 * - 更新底部快捷键提示栏,补充 Ctrl+F、B、V 等新快捷键
 *
 * v1.8.12 更新:
 * - 新增对话搜索功能 - 快速查找历史对话内容
 * - 支持快捷键 Ctrl+F 打开搜索
 * - 搜索结果高亮显示,可上下导航
 * - 实时显示匹配数量
 *
 * v1.8.11 更新:
 * - 新增实时字幕显示功能 - 在视频上方显示AI回复,适合听障用户
 * - 字幕支持自动淡出、智能换行、美观动画
 * - 可在设置中开关字幕显示
 * - 增强导出功能 - 支持导出为Markdown格式
 *
 * v1.8.10 更新:
 * - 新增「好的/明白」语音命令 - 常用确认回应
 * - 更正语音命令统计(42个关键词,19种action)
 * - 优化语音命令帮助面板显示
 *
 * v1.8.9 更新:
 * - 新增「谢谢」语音命令 - 说"谢谢"、"感谢"表达感谢,AI友好回应
 * - 新增「不错」语音命令 - 说"不错"、"很好"表达认可
 * - 语音命令总数扩展至 42 个关键词,增强用户反馈表达
 *
 * v1.8.8 更新:
 * - 新增结束对话音效 - 三音符舒缓告别旋律,温暖结束对话体验
 * - 音效系统完整覆盖:开始、结束、截图、人设切换、静音、断线重连
 *
 * v1.8.7 更新:
 * - 新增静音切换音效 - 双音符提示,清晰反馈静音状态变化
 * - LICENSE 年份更新至 2026
 *
 * v1.8.6 更新:
 * - 新增人设切换音效 - 活泼的四音符旋律,更有仪式感
 * - 修复 APP_VERSION 常量版本号遗漏问题
 * - 音效系统进一步完善,覆盖更多交互场景
 *
 * v1.8.4 更新:
 * - 新增开始对话音效 - 更有仪式感的对话启动体验
 * - 新增断线重连成功音效 - 网络恢复时的即时反馈
 * - 新增语音命令"你是谁" - 让AI自我介绍当前人设
 * - 音效体系完善:开始对话、断线重连、截图成功
 *
 * v1.8.3 更新:
 * - 新增截图成功音效反馈 - 更有成就感的截图体验
 * - 使用 Web Audio API 合成清脆"叮"声,无需外部资源
 *
 * 实现全双工实时音视频对话
 *
 * v1.8.1 更新:
 * - 新增「育儿助手」人设 - 关爱孩子,分享育儿知识
 * - 人设总数扩展至 21 种
 * - 智能推荐增加育儿助手(早上和下午时段)
 *
 * v1.8.0 更新:
 * - 新增截图水印功能 - 自动添加人设名称、时间戳、版本号
 * - 水印样式优雅,采用渐变背景
 * - 截图更具纪念意义和分享价值
 *
 * v1.7.9 更新:
 * - 新增「心理咨询师」人设 - 温暖倾听,情绪支持
 * - 新增「帮助」语音命令 - 语音获取使用指导
 * - 人设总数扩展至 20 种
 *
 * v1.7.8 更新:
 * - 新增「摄影师」人设 - 拍照指导,构图建议
 * - 人设总数扩展至 19 种
 *
 * v1.7.7 更新:
 * - 新增「再见」语音命令 - 说"再见"、"拜拜"自动结束会话
 * - 新增「结束」语音命令 - 快速结束当前对话
 * - 语音命令总数扩展至 24 种
 *
 * v1.7.6 更新:
 * - 新增「安全卫士」人设 - 专注安全提醒,发现潜在危险
 * - 新增「语言老师」人设 - 语言学习辅助,纠正发音
 * - 人设总数扩展至 18 种
 *
 * v1.7.4 更新:
 * - 新增「宠物专家」人设 - 关爱毛孩子,分享养宠知识
 * - 新增「技术顾问」人设 - 识别设备,解答技术问题
 * - 人设总数扩展至 16 种
 * - 优化智能推荐,下午时段推荐宠物专家
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
 * - 新增「旅行向导」人设 - 发现风景,讲述故事
 * - 新增「健康护士」人设 - 关注健康,提醒防护
 * - 人设总数扩展至 14 种
 *
 * v1.5.7 更新:
 * - 新增 PWA screenshots 支持
 * - README 开发日志同步更新
 *
 * v1.5.6 更新:
 * - 修复 manifest.json JSON 语法错误(多余括号导致 PWA 解析失败)
 *
 * v1.5.5 更新:
 * - 新增"AI正在思考"视觉指示器
 * - 优化用户语音识别反馈体验
 * - 改进连接状态视觉提示
 *
 * v1.5.3 更新:
 * - 新增语音命令触发动画反馈
 * - 新增关于面板(项目信息)
 * - 优化主题切换体验(颜色预览)
 * - 改进错误处理和 localStorage 容错
 *
 * v1.5.2 更新:
 * - 修复版本号显示不一致
 * - 修复语音截图命令调用方法名错误
 * - 新增 CHANGELOG.md 记录版本变更
 *
 * v1.5.1 更新:
 * - 新增语音命令:截图/拍照、大声点、小声点、慢一点、快一点
 * - 扩展常用语按钮:不明白、再说一遍、太棒了
 * - 优化用户体验,语音控制更丰富
 *
 * v1.5.0 更新:
 * - 新增语音快捷命令系统(暂停/换话题/再说一遍/安静/看得清楚吗)
 * - AI 能识别用户意图并执行相应操作
 * - 添加命令提示面板,帮助用户快速掌握快捷命令
 * - 优化用户体验,减少手动点击操作
 *
 * v1.4.2 更新:
 * - 修复用户语音转写正式保存到对话记录
 * - 用户说完话后,对话内容会持久保存
 *
 * v1.4.1 更新:
 * - 完善用户语音识别实时显示功能
 * - 新增说话动态效果
 *
 * v1.3.1 更新:
 * - 新增语音识别文字显示(用户说话时实时显示文字)
 * - 新增常用语快速发送按钮
 * - 优化用户消息显示样式
 *
 * v1.3.0 更新:
 * - 新增网络状态警告横幅(断网时醒目提示)
 * - 改进音量指示器视觉效果(渐变颜色)
 * - 新增会话时长计时器
 * - 优化移动端按钮布局
 *
 * v1.2.0 更新:
 * - 新增实时音量指示器(显示用户说话音量)
 * - 新增网络状态检测(断网时明显提示)
 * - 新增摄像头镜像开关
 * - 修复 Service Worker 缓存版本号同步问题
 *
 * v1.1.0 更新:
 * - 新增对话历史持久化(刷新页面后恢复对话)
 * - 清空对话时同步清除本地存储
 * - 修复 manifest.json 版本号同步问题
 *
 * v1.0.9 更新:
 * - 新增 4 个实用型人设(学习助手、健身教练、美食家、面试官)
 * - 新增快捷键帮助面板
 * - PWA shortcuts 扩展(人设、统计)
 * - manifest 添加版本号
 */

const APP_VERSION = 'v1.8.121';

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
        this.fps = options.fps || 1; // 帧率可配置,默认 1 fps

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
                        this.onStatusChange('reconnecting', `连接断开,${delay/1000}秒后重试 (${this.reconnectAttempts}/${this.maxReconnectAttempts})`);
                        this.onMessage('system', `⚠️ 连接断开,正在重连... (${this.reconnectAttempts}/${this.maxReconnectAttempts})`);

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
                this.onMessage('system', `⏳ 排队中,前方还有 ${data.position - 1} 人...`);
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
                this.onMessage('system', `✅ AI 已就绪!Session: ${this.sessionId}`);

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

            // 🆕 用户语音识别结果(实时显示用户说的话)
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

        // 如果正在推流,重新设置间隔
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

        this.updateAIStatus('listening', '已打断,正在听...');
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
        this.subtitleEnabled = true; // 🆕 v1.8.11: 字幕开关
        this.subtitleTimeout = null; // 🆕 v1.8.11: 字幕自动隐藏定时器

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
            // 🆕 v1.8.65 新增AI绘画命令
            '画画': { action: 'draw', desc: 'AI绘画创作', icon: '🎨' },
            '画图': { action: 'draw', desc: 'AI绘画创作', icon: '🎨' },
            '绘画': { action: 'draw', desc: 'AI绘画创作', icon: '🎨' },
            '画个': { action: 'draw', desc: 'AI绘画创作', icon: '🎨' },
            // 🆕 v1.8.69 扩展绘画命令
            '画一幅': { action: 'draw', desc: 'AI绘画创作', icon: '🎨' },
            '画一下': { action: 'draw', desc: 'AI绘画创作', icon: '🎨' },
            '素描': { action: 'draw', desc: '素描创作', icon: '✏️' },
            '涂鸦': { action: 'draw', desc: '涂鸦创作', icon: '🖍️' },
            '拍张照': { action: 'screenshot', desc: '截图保存', icon: '📸' },
            // '大声点' '小声点' 移至 v1.8.18 区块,避免重复定义
            '慢一点': { action: 'slower', desc: '请求慢点说', icon: '🐢' },
            '快一点': { action: 'faster', desc: '请求快点说', icon: '🐇' },
            // 🆕 v1.7.7 新增语音命令
            '再见': { action: 'goodbye', desc: '结束会话', icon: '👋' },
            '拜拜': { action: 'goodbye', desc: '结束会话', icon: '👋' },
            '下次见': { action: 'goodbye', desc: '结束会话', icon: '👋' },
            '结束': { action: 'endSession', desc: '结束对话', icon: '🛑' },
            // 🆕 v1.7.9 新增语音命令
            '帮助': { action: 'help', desc: '显示帮助', icon: '❓' },
            '怎么用': { action: 'help', desc: '显示帮助', icon: '❓' },
            '怎么操作': { action: 'help', desc: '显示帮助', icon: '❓' },
            '使用帮助': { action: 'help', desc: '显示帮助', icon: '❓' },
            // 🆕 v1.8.4: 新增"你是谁"语音命令
            '你是谁': { action: 'whoAreYou', desc: 'AI自我介绍', icon: '🎭' },
            '介绍一下': { action: 'whoAreYou', desc: 'AI自我介绍', icon: '🎭' },
            '你是什': { action: 'whoAreYou', desc: 'AI自我介绍', icon: '🎭' },
            '自我介绍': { action: 'whoAreYou', desc: 'AI自我介绍', icon: '🎭' },
            // 🆕 v1.8.9: 新增"谢谢"语音命令
            '谢谢': { action: 'thanks', desc: '表达感谢', icon: '🙏' },
            '感谢': { action: 'thanks', desc: '表达感谢', icon: '🙏' },
            '谢谢你': { action: 'thanks', desc: '表达感谢', icon: '🙏' },
            '多谢': { action: 'thanks', desc: '表达感谢', icon: '🙏' },
            // 🆕 v1.8.9: 新增"不错"语音命令
            '不错': { action: 'praise', desc: '表达认可', icon: '👍' },
            '很好': { action: 'praise', desc: '表达认可', icon: '👍' },
            '真棒': { action: 'praise', desc: '表达认可', icon: '👍' },
            '厉害': { action: 'praise', desc: '表达认可', icon: '👍' },
            // 🆕 v1.8.10: 新增"好的"语音命令
            '好的': { action: 'okay', desc: '确认理解', icon: '👌' },
            '明白': { action: 'okay', desc: '确认理解', icon: '👌' },
            '知道了': { action: 'okay', desc: '确认理解', icon: '👌' },
            '收到': { action: 'okay', desc: '确认理解', icon: '👌' },
            // 🆕 v1.8.11: 新增字幕开关语音命令
            '开字幕': { action: 'toggleSubtitle', desc: '开启字幕', icon: '👁️' },
            '显示字幕': { action: 'toggleSubtitle', desc: '切换字幕', icon: '👁️' },
            '关字幕': { action: 'toggleSubtitle', desc: '切换字幕', icon: '👁️' },
            '字幕': { action: 'toggleSubtitle', desc: '切换字幕', icon: '👁️' },
            // 🆕 v1.8.17: 新增更多实用语音命令
            '没听清': { action: 'repeat', desc: '请AI重复', icon: '👂' },
            '再说一次': { action: 'repeat', desc: '请AI重复', icon: '👂' },
            '等等': { action: 'pause', desc: '暂停AI发言', icon: '✋' },
            '等一下': { action: 'pause', desc: '暂停AI发言', icon: '✋' },
            '重新开始': { action: 'restart', desc: '重置对话', icon: '🔄' },
            '重来': { action: 'restart', desc: '重置对话', icon: '🔄' },
            '计时': { action: 'timer', desc: '开始计时', icon: '⏱️' },
            '倒计时': { action: 'timer', desc: '开始计时', icon: '⏱️' },
            '现在几点': { action: 'whatTime', desc: '询问时间', icon: '🕐' },
            // '几点了' 已在 v1.8.44 日程命令区块定义,避免重复
            '今天日期': { action: 'whatDate', desc: '询问日期', icon: '📅' },
            '今天几号': { action: 'whatDate', desc: '询问日期', icon: '📅' },
            // 🆕 v1.8.18: 新增全屏和界面控制语音命令
            '全屏': { action: 'fullscreen', desc: '进入全屏', icon: '⛶' },
            '退出全屏': { action: 'exitFullscreen', desc: '退出全屏', icon: '⛶' },
            '取消全屏': { action: 'exitFullscreen', desc: '退出全屏', icon: '⛶' },
            '大声点': { action: 'louder', desc: '请求大声说话', icon: '🔊' },
            '声音大点': { action: 'louder', desc: '请求大声说话', icon: '🔊' },
            '小声点': { action: 'quieter', desc: '请求小声说话', icon: '🔉' },
            '声音小点': { action: 'quieter', desc: '请求小声说话', icon: '🔉' },
            // 🆕 v1.8.19: 新增人设切换语音命令
            '换人设': { action: 'randomPersonality', desc: '随机切换人设', icon: '🎲' },
            '切换人设': { action: 'randomPersonality', desc: '随机切换人设', icon: '🎲' },
            '换个人': { action: 'randomPersonality', desc: '随机切换人设', icon: '🎲' },
            '换个人设': { action: 'randomPersonality', desc: '随机切换人设', icon: '🎲' },
            // 🆕 v1.8.25: 新增实用语音命令
            '重置人设': { action: 'resetPersonality', desc: '恢复默认人设', icon: '🔄' },
            '恢复默认': { action: 'resetPersonality', desc: '恢复默认人设', icon: '🔄' },
            '默认人设': { action: 'resetPersonality', desc: '恢复默认人设', icon: '🔄' },
            '下载截图': { action: 'downloadScreenshot', desc: '下载截图到本地', icon: '💾' },
            '保存截图': { action: 'downloadScreenshot', desc: '下载截图到本地', icon: '💾' },
            '复制截图': { action: 'copyScreenshot', desc: '复制截图到剪贴板', icon: '📋' },
            '复制图片': { action: 'copyScreenshot', desc: '复制截图到剪贴板', icon: '📋' },
            // 🆕 v1.8.27: 新增计时控制和趣味命令
            '暂停计时': { action: 'pauseTimer', desc: '暂停计时器', icon: '⏸️' },
            '停止计时': { action: 'pauseTimer', desc: '暂停计时器', icon: '⏸️' },
            '继续计时': { action: 'resumeTimer', desc: '继续计时器', icon: '▶️' },
            '恢复计时': { action: 'resumeTimer', desc: '继续计时器', icon: '▶️' },
            '讲个笑话': { action: 'tellJoke', desc: '讲个笑话', icon: '😄' },
            '说个笑话': { action: 'tellJoke', desc: '讲个笑话', icon: '😄' },
            '来个笑话': { action: 'tellJoke', desc: '讲个笑话', icon: '😄' },
            '翻译一下': { action: 'translate', desc: '请求翻译', icon: '🌍' },
            '帮我翻译': { action: 'translate', desc: '请求翻译', icon: '🌍' },
            '这是什么意思': { action: 'translate', desc: '请求翻译', icon: '🌍' },
            // 🆕 v1.8.31: 新增健康饮食语音命令
            '有营养吗': { action: 'nutrition', desc: '询问营养信息', icon: '🥗' },
            '营养吗': { action: 'nutrition', desc: '询问营养信息', icon: '🥗' },
            '健康吗': { action: 'healthCheck', desc: '询问是否健康', icon: '💚' },
            '这个健康': { action: 'healthCheck', desc: '询问是否健康', icon: '💚' },
            '卡路里': { action: 'calories', desc: '询问卡路里', icon: '🔥' },
            '热量': { action: 'calories', desc: '询问热量', icon: '🔥' },
            '多少热量': { action: 'calories', desc: '询问热量', icon: '🔥' },
            '这个吃了': { action: 'eatAdvice', desc: '询问是否可以吃', icon: '🍽️' },
            // 🆕 v1.8.32: 新增天气询问语音命令
            '天气怎么样': { action: 'weather', desc: '询问天气', icon: '🌤️' },
            '今天天气': { action: 'weather', desc: '询问天气', icon: '🌤️' },
            '天气如何': { action: 'weather', desc: '询问天气', icon: '🌤️' },
            '什么天气': { action: 'weather', desc: '询问天气', icon: '🌤️' },
            '会下雨吗': { action: 'weather', desc: '询问天气', icon: '🌧️' },
            '要下雨吗': { action: 'weather', desc: '询问天气', icon: '🌧️' },
            '会出太阳吗': { action: 'weather', desc: '询问天气', icon: '☀️' },
            '看起来天气': { action: 'weather', desc: '询问天气', icon: '🌤️' },
            // 🆕 v1.8.33: 新增物体识别和购物语音命令
            '这是什么': { action: 'identifyObject', desc: '识别物体', icon: '🔍' },
            '这个是什么': { action: 'identifyObject', desc: '识别物体', icon: '🔍' },
            '什么牌子': { action: 'identifyBrand', desc: '识别品牌', icon: '🏷️' },
            '什么品牌': { action: 'identifyBrand', desc: '识别品牌', icon: '🏷️' },
            '多少钱': { action: 'checkPrice', desc: '查询价格', icon: '💰' },
            '贵不贵': { action: 'checkPrice', desc: '查询价格', icon: '💰' },
            '便宜吗': { action: 'checkPrice', desc: '查询价格', icon: '💰' },
            '值得买吗': { action: 'shoppingAdvice', desc: '购物建议', icon: '🛒' },
            '划算吗': { action: 'shoppingAdvice', desc: '购物建议', icon: '🛒' },
            '买不买': { action: 'shoppingAdvice', desc: '购物建议', icon: '🛒' },
            '哪里买的': { action: 'whereToBuy', desc: '购买渠道', icon: '📍' },
            '哪里有卖': { action: 'whereToBuy', desc: '购买渠道', icon: '📍' },
            '颜色是什么': { action: 'identifyColor', desc: '识别颜色', icon: '🎨' },
            '什么颜色': { action: 'identifyColor', desc: '识别颜色', icon: '🎨' },
            // 🆕 v1.8.41: 新增记账语音命令
            '记一笔': { action: 'recordExpense', desc: '记录开支', icon: '💰' },
            '记账': { action: 'recordExpense', desc: '记录开支', icon: '💰' },
            '花了多少': { action: 'askPrice', desc: '询问花费', icon: '💵' },
            '多少钱买的': { action: 'askPrice', desc: '询问花费', icon: '💵' },
            '预算': { action: 'checkBudget', desc: '预算提醒', icon: '📊' },
            '超预算了吗': { action: 'checkBudget', desc: '预算提醒', icon: '📊' },
            '账单': { action: 'showBills', desc: '查看账单', icon: '📋' },
            '开支情况': { action: 'showBills', desc: '查看账单', icon: '📋' },
            // ===== v1.8.70 新增比价语音命令 =====
            '比价': { action: 'priceCompare', desc: '比较价格性价比', icon: '💰' },
            '比较价格': { action: 'priceCompare', desc: '比较价格性价比', icon: '💰' },
            '哪个划算': { action: 'priceCompare', desc: '比较价格性价比', icon: '📊' },
            '性价比': { action: 'priceCompare', desc: '比较价格性价比', icon: '💡' },
            // ===== v1.8.43 新增运动打卡语音命令 =====
            '打卡': { action: 'checkIn', desc: '运动打卡', icon: '✅' },
            '健身打卡': { action: 'checkIn', desc: '运动打卡', icon: '✅' },
            '运动打卡': { action: 'checkIn', desc: '运动打卡', icon: '✅' },
            '完成了': { action: 'workoutComplete', desc: '完成运动', icon: '🎉' },
            '做完了': { action: 'workoutComplete', desc: '完成运动', icon: '🎉' },
            '练完了': { action: 'workoutComplete', desc: '完成运动', icon: '🎉' },
            '今天目标': { action: 'todayGoal', desc: '查看目标', icon: '🎯' },
            '运动目标': { action: 'todayGoal', desc: '查看目标', icon: '🎯' },
            // ===== v1.8.44 新增日程管理语音命令 =====
            '提醒我': { action: 'setReminder', desc: '设置提醒', icon: '⏰' },
            '别忘了': { action: 'setReminder', desc: '设置提醒', icon: '📝' },
            '几点了': { action: 'askTime', desc: '询问时间', icon: '🕐' },
            '今天安排': { action: 'todaySchedule', desc: '今日日程', icon: '📅' },
            '明天计划': { action: 'tomorrowPlan', desc: '规划明天', icon: '📆' },
            '还有多久': { action: 'countdown', desc: '时间倒计时', icon: '⏳' },
            '日程': { action: 'showSchedule', desc: '查看日程', icon: '📋' },
            '待办': { action: 'showTodos', desc: '待办事项', icon: '✅' },
            // ===== v1.8.52 新增阅读辅助语音命令 =====
            '帮我读': { action: 'readForMe', desc: '朗读文字', icon: '📖' },
            '念出来': { action: 'readForMe', desc: '朗读文字', icon: '📖' },
            '怎么读': { action: 'howToRead', desc: '发音指导', icon: '🗣️' },
            '这个字': { action: 'explainWord', desc: '解释字词', icon: '📝' },
            '读一下': { action: 'readForMe', desc: '朗读文字', icon: '📖' },
            // ===== v1.8.55 新增植物识别语音命令 =====
            '这是什么花': { action: 'identifyPlant', desc: '识别植物', icon: '🌸' },
            '什么花': { action: 'identifyPlant', desc: '识别花卉', icon: '🌺' },
            '识花': { action: 'identifyPlant', desc: '识别花卉', icon: '🌷' },
            '什么植物': { action: 'identifyPlant', desc: '识别植物', icon: '🌿' },
            '这种花': { action: 'identifyPlant', desc: '识别植物', icon: '🌼' },
            // ===== v1.8.67 新增问候语语音命令 =====
            '早上好': { action: 'greetingMorning', desc: '早安问候', icon: '🌅' },
            '早安': { action: 'greetingMorning', desc: '早安问候', icon: '🌅' },
            '早上': { action: 'greetingMorning', desc: '早安问候', icon: '🌅' },
            '中午好': { action: 'greetingNoon', desc: '午安问候', icon: '☀️' },
            '午安': { action: 'greetingNoon', desc: '午安问候', icon: '☀️' },
            '下午好': { action: 'greetingAfternoon', desc: '下午问候', icon: '🌤️' },
            '晚上好': { action: 'greetingEvening', desc: '晚上问候', icon: '🌙' },
            '晚安': { action: 'greetingNight', desc: '晚安问候', icon: '🌙' },
            '夜安': { action: 'greetingNight', desc: '晚安问候', icon: '🌙' },
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

        // 设置超时自动隐藏(防止一直显示)
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

        // 🆕 v1.8.12: Search button
        document.getElementById('searchBtn')?.addEventListener('click', () => {
            this.toggleSearchBar();
        });
        document.getElementById('searchClose')?.addEventListener('click', () => {
            this.closeSearchBar();
        });
        document.getElementById('searchPrev')?.addEventListener('click', () => {
            this.searchPrev();
        });
        document.getElementById('searchNext')?.addEventListener('click', () => {
            this.searchNext();
        });
        document.getElementById('searchInput')?.addEventListener('input', (e) => {
            this.searchMessages(e.target.value);
        });

        this.loadSettings();
        this.initAudioVisualizer();
        this.initQuickPhrases(); // 🆕 初始化常用语按钮
        this.initQuickCommands(); // 🆕 v1.8.21: 初始化快捷命令栏
        this.showWelcomeTip();
        this.updateVersionDisplay();

        // 🆕 v1.8.11: 加载字幕设置
        this.subtitleEnabled = localStorage.getItem('ai-third-eye-subtitle') !== 'false';
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

    // 🆕 v1.8.21: 初始化快捷命令栏
    initQuickCommands() {
        const bar = document.getElementById('quickCommandsBar');
        if (!bar) return;

        bar.querySelectorAll('.qc-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const cmd = btn.dataset.cmd;
                if (cmd) {
                    this.executeQuickCommand(cmd);
                    // 添加点击反馈动画
                    btn.style.transform = 'scale(0.85)';
                    setTimeout(() => btn.style.transform = '', 150);
                }
            });
        });
    }

    // 🆕 v1.8.21: 执行快捷命令
    executeQuickCommand(cmd) {
        // 复用语音命令的执行逻辑
        this.executeVoiceCommand(cmd, cmd);
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

    // 🆕 应用自动主题(跟随系统)
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
                    边看边听边说,AI 主动提醒
                </p>
                <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px;">
                    <span style="background:rgba(0,212,255,0.2);padding:4px 8px;border-radius:4px;font-size:12px;">实时视觉</span>
                    <span style="background:rgba(0,255,136,0.2);padding:4px 8px;border-radius:4px;font-size:12px;">全双工对话</span>
                    <span style="background:rgba(255,165,0,0.2);padding:4px 8px;border-radius:4px;font-size:12px;">62种人设 | 172个语音关键词</span>
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
            // 开始说话,显示打字效果
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
            // 说话结束,将用户说的话正式添加到对话记录
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
                    this.addMessage('system', `${icon} 已开启安静模式(减少主动描述)`);
                } else {
                    this.addMessage('system', `${icon} 已关闭安静模式`);
                }
                break;

            case 'changeTopic':
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '让我们换个话题吧,聊点别的有趣的事情。'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                    this.addMessage('system', `${icon} 正在切换话题...`);
                }
                break;

            case 'repeat':
                if (this.lastAIMessage) {
                    this.addMessage('ai', `好的,我再说一遍:${this.lastAIMessage}`);
                } else {
                    this.addMessage('system', `${icon} 暂无上次内容可重复`);
                }
                break;

            case 'checkVision':
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '你现在看得清楚吗?画面清晰度如何?'
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
                        text: '请你大声一点说话,我听得不太清楚。'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                    this.addMessage('system', `${icon} 正在请求大声说话...`);
                }
                break;

            case 'quieter':
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '请你小声一点说话,声音有点大。'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                    this.addMessage('system', `${icon} 正在请求小声说话...`);
                }
                break;

            case 'slower':
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '请你慢一点说话,我需要时间理解。'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                    this.addMessage('system', `${icon} 正在请求慢点说...`);
                }
                break;

            case 'faster':
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '请你快一点说话,我准备好了。'
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
                        text: '我们要结束了,跟用户说再见吧!'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                    this.addMessage('system', `${icon} 正在告别...`);
                    // 3秒后自动结束会话
                    setTimeout(() => {
                        this.stop();
                        this.addMessage('system', '👋 会话已结束,期待下次相见!');
                    }, 3000);
                } else {
                    this.stop();
                    this.addMessage('system', `${icon} 会话已结束,再见!`);
                }
                break;

            case 'endSession':
                this.stop();
                this.addMessage('system', `${icon} 对话已结束`);
                break;

            // 🆕 v1.7.9 新增帮助命令
            case 'help':
                this.showVoiceCommandsHelp();
                this.addMessage('system', `${icon} 已打开帮助面板`);
                // 同时让AI也给出帮助提示
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '用户需要帮助,请简洁介绍你可以做什么,以及常用的语音命令。'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                }
                break;

            // 🆕 v1.8.4 新增"你是谁"命令
            case 'whoAreYou':
                // 获取当前人设信息
                const savedPers = localStorage.getItem('ai-third-eye-personality');
                const currentPers = savedPers ?
                    ((typeof getAllPersonalitiesWithCustom === 'function' ? getAllPersonalitiesWithCustom()[savedPers] : null) || getAllPersonalities()[savedPers]) : null;
                const persName = currentPers ? currentPers.name : '🦐 AI 助手';
                const persDesc = currentPers ? currentPers.description : '友好的AI助手';

                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: `请用有趣的方式向用户介绍你自己,你是「${persName}」,特点是:${persDesc}。用符合你人设的语气来介绍,控制在2-3句话。`
                    };
                    this.client.ws.send(JSON.stringify(msg));
                    this.addMessage('system', `${icon} ${persName} 正在自我介绍...`);
                } else {
                    this.addMessage('system', `${icon} 当前人设: ${persName} - ${persDesc}`);
                }
                break;

            // 🆕 v1.8.9: 新增感谢命令
            case 'thanks':
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '谢谢!用户表示感谢。'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                    this.addMessage('system', `${icon} 不客气!很高兴能帮到你`);
                } else {
                    this.addMessage('system', `${icon} 不客气!`);
                }
                break;

            // 🆕 v1.8.9: 新增认可命令
            case 'praise':
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '用户表示认可和赞赏,继续保持!'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                    this.addMessage('system', `${icon} 谢谢你的认可!`);
                } else {
                    this.addMessage('system', `${icon} 谢谢认可!`);
                }
                break;

            // 🆕 v1.8.10: 新增确认命令
            case 'okay':
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '用户确认明白了,继续观察和描述。'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                    this.addMessage('system', `${icon} 好的,继续...`);
                } else {
                    this.addMessage('system', `${icon} 收到!`);
                }
                break;

            // 🆕 v1.8.11: 新增字幕开关命令
            case 'toggleSubtitle':
                this.toggleSubtitle();
                break;

            // 🆕 v1.8.17: 新增更多实用命令
            case 'restart':
                // 清空对话并重新开始
                this.clearChat();
                this.addMessage('system', `${icon} 对话已重置,让我们重新开始!`);
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '用户想要重新开始对话。请用你的方式打个招呼,重新介绍自己并询问今天想聊什么。'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                }
                break;

            case 'timer':
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '用户需要计时。请询问需要计时多久,然后开始倒计时提醒。'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                    this.addMessage('system', `${icon} 已请求计时功能`);
                } else {
                    this.addMessage('system', `${icon} 请先开始对话再使用计时功能`);
                }
                break;

            case 'whatTime':
                const nowTime = new Date();
                const timeStr = nowTime.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
                this.addMessage('system', `${icon} 现在是 ${timeStr}`);
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: `告诉用户现在的时间是${timeStr},并简单聊两句。`
                    };
                    this.client.ws.send(JSON.stringify(msg));
                }
                break;

            case 'whatDate':
                const nowDate = new Date();
                const dateStr = nowDate.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' });
                this.addMessage('system', `${icon} 今天是 ${dateStr}`);
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: `告诉用户今天是${dateStr},并简单聊两句。`
                    };
                    this.client.ws.send(JSON.stringify(msg));
                }
                break;

            // 🆕 v1.8.18: 全屏控制
            case 'fullscreen':
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen();
                    this.addMessage('system', `${icon} 已进入全屏模式`);
                } else if (document.documentElement.webkitRequestFullscreen) {
                    document.documentElement.webkitRequestFullscreen();
                    this.addMessage('system', `${icon} 已进入全屏模式`);
                } else {
                    this.addMessage('system', `${icon} 当前浏览器不支持全屏`);
                }
                break;

            case 'exitFullscreen':
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                    this.addMessage('system', `${icon} 已退出全屏模式`);
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                    this.addMessage('system', `${icon} 已退出全屏模式`);
                }
                break;

            // 🆕 v1.8.19: 随机切换人设
            case 'randomPersonality':
                const randomP = getRandomPersonality();
                this.selectPersonality(randomP.key);
                this.addMessage('system', `${icon} 已切换为 ${randomP.name}`);
                break;

            // 🆕 v1.8.22: 快捷命令栏增强支持
            case 'mute':
                this.toggleMute();
                break;

            case 'clear':
                this.clearMessages();
                this.addMessage('system', '🗑️ 对话已清空');
                break;

            case 'export':
                this.exportMessages();
                this.addMessage('system', '📤 对话已导出');
                break;

            // 🆕 v1.8.25: 新增截图下载和复制命令
            case 'downloadScreenshot':
                this.takeScreenshot();
                this.addMessage('system', `${icon} 截图已保存到本地`);
                break;

            case 'copyScreenshot':
                // 先截图,然后复制到剪贴板
                this.takeScreenshot(true);
                this.addMessage('system', `${icon} 正在复制截图到剪贴板...`);
                break;

            // 🆕 v1.8.25: 新增重置人设命令
            case 'resetPersonality':
                localStorage.removeItem('ai-third-eye-personality');
                this.selectPersonality('little-deer'); // 默认小鹿人设
                this.addMessage('system', `${icon} 已恢复默认人设(小鹿)`);
                break;

            // 🆕 v1.8.28: 修复计时控制命令 - 改为发送给 AI 处理
            case 'pauseTimer':
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '暂停计时。'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                    this.addMessage('system', `${icon} 已请求暂停计时`);
                } else {
                    this.addMessage('system', `${icon} 请先开始对话再使用计时功能`);
                }
                break;

            case 'resumeTimer':
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '继续计时。'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                    this.addMessage('system', `${icon} 已请求继续计时`);
                } else {
                    this.addMessage('system', `${icon} 请先开始对话再使用计时功能`);
                }
                break;

            // 🆕 v1.8.27: 新增笑话命令
            case 'tellJoke':
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '请讲一个简短的、有趣的笑话,控制在30字以内。'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                    this.addMessage('system', `${icon} 正在想一个笑话...`);
                }
                break;

            // 🆕 v1.8.27: 新增翻译命令
            case 'translate':
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '请把你看到的内容翻译成中文,如果没有看到文字就告诉用户。'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                    this.addMessage('system', `${icon} 正在翻译...`);
                }
                break;

            // 🆕 v1.8.31: 新增健康饮食语音命令
            case 'nutrition':
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '请分析你看到的食物的营养价值,有哪些营养成分?'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                    this.addMessage('system', `${icon} 正在分析营养成分...`);
                }
                break;

            case 'healthCheck':
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '请评估你看到的食物或生活习惯是否健康,给出建议。'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                    this.addMessage('system', `${icon} 正在评估健康程度...`);
                }
                break;

            case 'calories':
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '请估算你看到的食物大概有多少卡路里(热量)。'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                    this.addMessage('system', `${icon} 正在估算热量...`);
                }
                break;

            case 'eatAdvice':
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '请告诉我这个食物是否适合吃,有什么注意事项?'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                    this.addMessage('system', `${icon} 正在分析饮食建议...`);
                }
                break;

            // 🆕 v1.8.32 新增天气询问命令处理 (修复遗漏)
            case 'weather':
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '请根据当前画面或天气状况,告诉我今天天气怎么样?需要注意什么?'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                    this.addMessage('system', `${icon} 正在分析天气状况...`);
                }
                break;

            // 🆕 v1.8.33 新增物体识别和购物命令处理 (修复遗漏)
            case 'identifyObject':
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '请识别画面中的物体,告诉我这是什么?'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                    this.addMessage('system', `${icon} 正在识别物体...`);
                }
                break;

            case 'identifyBrand':
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '请识别画面中物品的品牌或商标是什么?'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                    this.addMessage('system', `${icon} 正在识别品牌...`);
                }
                break;

            case 'checkPrice':
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '请估算画面中物品的大概价格范围,并告诉我是否值得购买。'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                    this.addMessage('system', `${icon} 正在查询价格...`);
                }
                break;

            case 'shoppingAdvice':
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '请根据画面中的物品,给我一些购物建议:是否值得买?有什么替代品?'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                    this.addMessage('system', `${icon} 正在分析购物建议...`);
                }
                break;

            case 'whereToBuy':
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '请告诉我画面中的物品可以在哪里购买?有哪些购买渠道?'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                    this.addMessage('system', `${icon} 正在查询购买渠道...`);
                }
                break;

            case 'identifyColor':
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '请识别画面中主要物品的颜色是什么?'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                    this.addMessage('system', `${icon} 正在识别颜色...`);
                }
                break;

            // 🆕 v1.8.41: 新增记账语音命令处理
            case 'recordExpense':
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '请帮我记录这笔开支,告诉我这是什么消费以及大概多少钱。'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                    this.addMessage('system', `${icon} 正在记录开支...`);
                }
                break;

            case 'askPrice':
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '请帮我看看画面中的物品大概多少钱?是否值得购买?'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                    this.addMessage('system', `${icon} 正在分析花费...`);
                }
                break;

            case 'checkBudget':
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '请帮我分析画面中的消费是否在合理预算范围内?有什么建议?'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                    this.addMessage('system', `${icon} 正在检查预算...`);
                }
                break;

            case 'showBills':
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '请帮我总结一下画面中涉及的消费类型和开支情况。'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                    this.addMessage('system', `${icon} 正在分析账单...`);
                }
                break;

            case 'priceCompare':
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '请帮我比较画面中物品的性价比,是否划算?有什么更优选择?'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                    this.addMessage('system', `${icon} 正在比较价格...`);
                }
                break;

            // 🆕 v1.8.43: 新增运动打卡语音命令处理
            case 'checkIn':
                // 记录打卡时间到本地存储
                const checkInData = JSON.parse(localStorage.getItem('ai-third-eye-fitness-checkins') || '[]');
                const now = new Date();
                const today = now.toDateString();
                const existingToday = checkInData.find(c => new Date(c.time).toDateString() === today);

                if (existingToday) {
                    this.addMessage('system', `${icon} 今天已经打卡过了!继续保持!💪`);
                } else {
                    checkInData.push({ time: now.toISOString(), type: 'workout' });
                    localStorage.setItem('ai-third-eye-fitness-checkins', JSON.stringify(checkInData));
                    const streak = this.calculateStreak(checkInData);
                    this.addMessage('system', `${icon} 打卡成功!已连续运动 ${streak} 天!🏆`);
                }

                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '用户完成运动打卡!请用热情的语气鼓励用户,并询问今天练了什么。'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                }
                break;

            case 'workoutComplete':
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '用户完成了今天的运动!请给予热情的鼓励和祝贺,让用户感到成就感!'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                    this.addMessage('system', `${icon} 太棒了!今天的运动完成了!`);
                }
                break;

            case 'todayGoal':
                const goals = JSON.parse(localStorage.getItem('ai-third-eye-fitness-goals') || 'null');
                if (goals && goals.todayGoal) {
                    this.addMessage('system', `${icon} 今日目标：${goals.todayGoal}`);
                    if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                        const msg = {
                            type: 'input_text',
                            text: `用户的今日运动目标是：${goals.todayGoal}。请鼓励用户继续努力！`
                        };
                        this.client.ws.send(JSON.stringify(msg));
                    }
                } else {
                    this.addMessage('system', `${icon} 还没设置今日目标，说“我要做XX”来设置吧！`);
                    if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                        const msg = {
                            type: 'input_text',
                            text: '用户还没设置今日运动目标。请询问用户今天想练什么，帮助用户设定一个小目标。'
                        };
                        this.client.ws.send(JSON.stringify(msg));
                    }
                }
                break;
            
            // ===== v1.8.44: 新增日程管理语音命令处理 =====
            case 'setReminder':
                this.addMessage('system', `${icon} 请告诉我提醒的内容和时间，我会帮你记住！`);
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '用户想要设置提醒。请询问用户提醒的内容和时间，然后给出确认。'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                }
                break;
            
            case 'askTime':
                const askNowTime = new Date();
                const hours = askNowTime.getHours();
                const minutes = askNowTime.getMinutes();
                const askTimeStr = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
                this.addMessage('system', `${icon} 现在是 ${askTimeStr}`);
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: `现在是${hours}点${minutes}分。请告诉用户当前时间，并询问是否有什么安排。`
                    };
                    this.client.ws.send(JSON.stringify(msg));
                }
                break;
            
            case 'todaySchedule':
                const schedules = JSON.parse(localStorage.getItem('ai-third-eye-schedules') || '[]');
                if (schedules.length > 0) {
                    const todaySchedules = schedules.filter(s => {
                        const scheduleDate = new Date(s.time);
                        return scheduleDate.toDateString() === new Date().toDateString();
                    });
                    if (todaySchedules.length > 0) {
                        this.addMessage('system', `${icon} 今日日程：${todaySchedules.map(s => s.content).join('、')}`);
                    } else {
                        this.addMessage('system', `${icon} 今天暂时没有安排的日程`);
                    }
                } else {
                    this.addMessage('system', `${icon} 还没有记录日程，说“提醒我XX”来添加吧！`);
                }
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '用户想查看今日日程安排。请帮助用户回顾今天的计划，如果有空余时间可以建议安排。'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                }
                break;
            
            case 'tomorrowPlan':
                this.addMessage('system', `${icon} 让我们为明天做个计划吧！`);
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '用户想规划明天的日程。请询问用户明天有什么重要事项或目标，帮助用户制定合理的计划。'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                }
                break;
            
            case 'countdown':
                this.addMessage('system', `${icon} 请告诉我你想倒数什么事件，我会帮你计算时间！`);
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '用户想知道某个事件还有多久。请询问用户具体是什么事件或时间点，然后帮助计算剩余时间。'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                }
                break;
            
            case 'showSchedule':
                const allSchedules = JSON.parse(localStorage.getItem('ai-third-eye-schedules') || '[]');
                if (allSchedules.length > 0) {
                    this.addMessage('system', `${icon} 共有 ${allSchedules.length} 个日程记录`);
                } else {
                    this.addMessage('system', `${icon} 暂无日程记录，说“提醒我XX”来添加吧！`);
                }
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '用户想查看日程列表。请帮助用户回顾近期的重要安排，如果有遗漏可以提醒补充。'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                }
                break;
            
            case 'showTodos':
                const todos = JSON.parse(localStorage.getItem('ai-third-eye-todos') || '[]');
                if (todos.length > 0) {
                    const pendingTodos = todos.filter(t => !t.done);
                    this.addMessage('system', `${icon} 待办事项：${pendingTodos.length} 项待完成`);
                } else {
                    this.addMessage('system', `${icon} 暂无待办事项，说“别忘了XX”来添加吧！`);
                }
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '用户想查看待办事项列表。请帮助用户回顾未完成的任务，并提供完成建议。'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                }
                break;
            
            // ===== v1.8.52 新增阅读辅助命令 =====
            case 'readForMe':
                this.addMessage('system', `${icon} 好的，让我看看画面中的文字...`);
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '请帮用户朗读画面中看到的文字内容，用清晰自然的语调读出来。'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                }
                break;
            
            case 'howToRead':
                this.addMessage('system', `${icon} 让我看看这是什么字...`);
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '用户想知道画面中某个字或词的发音。请识别画面中的文字，并告诉用户正确的读音和拼音。'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                }
                break;
            
            case 'explainWord':
                this.addMessage('system', `${icon} 让我帮你解释这个字...`);
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '用户想了解画面中某个字或词的含义。请识别画面中的文字，解释字词的意思、用法，必要时可以举例说明。'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                }
                break;
            
            case 'identifyPlant':
                this.addMessage('system', `${icon} 让我看看这是什么植物...`);
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '用户想识别画面中的植物或花卉。请观察画面，识别植物的品种，介绍它的名称、花语（如果是花）、养护方法、产地和特点。如果不确定具体品种，可以描述植物的特征并猜测可能的品种。'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                }
                break;

            // 🆕 v1.8.67: 问候语语音命令
            case 'greetingMorning':
                this.addMessage('system', `${icon} 早安！新的一天开始了~`);
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '用户说了早安。请用热情温暖的语气回应早安，可以询问用户今天有什么计划，给用户一些积极的心理暗示，比如"今天会是美好的一天"。'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                }
                break;

            case 'greetingNoon':
                this.addMessage('system', `${icon} 午安！午休时间到了~`);
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '用户说了午安。请用轻松舒适的语气回应午安，可以询问用户中午休息得怎么样，午饭吃了什么，或者是否需要午睡提醒。'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                }
                break;

            case 'greetingAfternoon':
                this.addMessage('system', `${icon} 下午好！下午茶时间~`);
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '用户说了下午好。请用轻松愉快的语气回应，可以询问用户下午的工作或学习进展，是否需要提神醒脑的建议，或者分享一些下午茶的推荐。'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                }
                break;

            case 'greetingEvening':
                this.addMessage('system', `${icon} 晚上好！忙碌了一天辛苦了~`);
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '用户说了晚上好。请用舒缓温暖的语气回应，可以询问用户今天过得怎么样，有没有什么有趣的事情想分享，或者是否需要放松的建议。'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                }
                break;

            case 'greetingNight':
                this.addMessage('system', `${icon} 晚安！好梦~`);
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    const msg = {
                        type: 'input_text',
                        text: '用户说了晚安。请用温柔安宁的语气回应晚安，可以祝愿用户做个好梦，提醒用户放下手机早点休息，或者分享一些助眠的小建议。用温柔的语气结束对话。'
                    };
                    this.client.ws.send(JSON.stringify(msg));
                }
                break;

            // 🆕 v1.8.65: AI绘画命令
            case 'draw':
                this.addMessage('system', `${icon} AI绘画功能已启动！请告诉我你想画什么...`);
                if (this.client && this.client.ws && this.client.ws.readyState === WebSocket.OPEN) {
                    // 提取绘画关键词
                    const drawKeyword = keyword || '画画';
                    const drawSubject = drawKeyword.replace(/^画(画|图|绘画|个)?/, '').trim() || '一幅美丽的画';
                    
                    const msg = {
                        type: 'input_text',
                        text: `用户想要绘画创作。请用生动有趣的语言描述一幅关于「${drawSubject}」的画面，就像你在为这幅画创作文字描述。可以加入色彩、构图、风格的建议，让画面更有想象力。用符合你人设的语气来描述。`
                    };
                    this.client.ws.send(JSON.stringify(msg));
                    this.addMessage('system', `${icon} 正在创作「${drawSubject}」...`);
                }
                break;
        }
    }

    // 🆕 v1.8.43: 计算连续打卡天数
    calculateStreak(checkInData) {
        if (!checkInData || checkInData.length === 0) return 0;

        // 按时间排序
        const sorted = checkInData
            .map(c => new Date(c.time))
            .sort((a, b) => b - a);

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        let streak = 0;
        let checkDate = today;

        for (let i = 0; i < sorted.length; i++) {
            const date = new Date(sorted[i]);
            date.setHours(0, 0, 0, 0);

            const diffDays = Math.floor((checkDate - date) / (1000 * 60 * 60 * 24));

            if (diffDays === 0) {
                streak++;
                checkDate = new Date(checkDate.getTime() - 24 * 60 * 60 * 1000);
            } else if (diffDays === 1) {
                // 昨天也打卡了,继续计算
                streak++;
                checkDate = new Date(checkDate.getTime() - 24 * 60 * 60 * 1000);
            } else {
                // 断了
                break;
            }
        }

        return streak;
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
                💡 直接说出这些词,AI会自动识别并执行相应操作
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
        // Space - 开始/结束对话(需要焦点不在输入框)
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
        // 🆕 v1.8.11: B - 切换字幕显示
        if (e.key === 'b' && document.activeElement.tagName !== 'TEXTAREA' && document.activeElement.tagName !== 'INPUT') {
            e.preventDefault();
            this.toggleSubtitle();
        }
        // 🆕 v1.8.12: Ctrl+F - 搜索对话
        if (e.key === 'f' && e.ctrlKey) {
            e.preventDefault();
            this.toggleSearchBar();
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
                <div style="font-size: 14px; opacity: 0.8;">${recommended.timeDesc},推荐人设</div>
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
                this.addMessage('system', '💡 使用提示: 空格键开始/结束对话,Ctrl+S截图,M静音,V语音命令,Esc关闭面板');
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
                    <div style="font-size:13px; color:#888;">${recommended.timeDesc},推荐人设</div>
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
        allHeader.textContent = '🎭 内置人设(点击⭐收藏,🔥表示热度)';
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
                    <label style="display:block;color:#888;font-size:12px;margin-bottom:4px;">人设名称(带emoji更生动)</label>
                    <input id="customName" type="text" placeholder="例:🧙 巫师" value="${editData?.name?.replace(/^[^a-zA-Z\u4e00-\u9fa5]+/, '') || ''}" style="width:100%;padding:10px;border-radius:8px;border:1px solid rgba(255,255,255,0.1);background:rgba(0,0,0,0.3);color:var(--text-primary);">
                </div>
                <div style="margin-bottom:12px;">
                    <label style="display:block;color:#888;font-size:12px;margin-bottom:4px;">简短描述</label>
                    <input id="customDesc" type="text" placeholder="例:神秘预言,洞察命运" value="${editData?.description || ''}" style="width:100%;padding:10px;border-radius:8px;border:1px solid rgba(255,255,255,0.1);background:rgba(0,0,0,0.3);color:var(--text-primary);">
                </div>
                <div style="margin-bottom:16px;">
                    <label style="display:block;color:#888;font-size:12px;margin-bottom:4px;">人设提示词(AI将按此行事)</label>
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

            // 添加 emoji 前缀(如果用户没有添加)
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

    // 🆕 v1.6.2: 删除自定义人设(带确认)
    deleteCustomPersonalityUI(key) {
        const personality = typeof getCustomPersonalities === 'function' ? getCustomPersonalities()[key] : null;
        if (!personality) return;

        if (confirm(`确定要删除人设「${personality.name}」吗?`)) {
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

        // 🆕 v1.8.6: 播放人设切换音效
        this.playPersonalitySound();

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
                    // 🐛 v1.8.61: 移除所有 emoji 前缀，避免 addMessage 重复添加图标
                    let cleanText = msg.text.replace(/^[\p{Emoji_Presentation}\p{Extended_Pictographic}]+\s*/u, '').trim();
                    this.addMessage(msg.type, cleanText, false, true); // skipSave=true 避免重复保存
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
            let text = msg.querySelector('p')?.textContent || '';
            // 🐛 v1.8.58: 移除图标前缀，避免加载时重复添加
            text = text.replace(/^[🤖👤📢]\s*/, '').trim();
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

            // 🆕 v1.8.21: 显示快捷命令栏
            const quickCommandsBar = document.getElementById('quickCommandsBar');
            if (quickCommandsBar) quickCommandsBar.style.display = 'flex';

            // 🆕 初始化用户语音显示区域
            this.initUserSpeechDisplay();

            loadingOverlay.classList.remove('show');

            // 🆕 记录会话开始
            this.recordSessionStart();

            // 🆕 v1.8.4: 播放开始对话音效
            this.playStartSound();

            // 🆕 开始会话计时
            this.startSessionTimer();

        } catch (e) {
            startBtn.disabled = false;
            loadingOverlay.classList.remove('show');
            this.addMessage('system', `❌ 连接失败: ${e.message}`);
        }
    }

    stop() {
        // 🆕 v1.8.8: 播放结束对话音效
        this.playEndSound();

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

        // 🆕 v1.8.21: 隐藏快捷命令栏
        const quickCommandsBar = document.getElementById('quickCommandsBar');
        if (quickCommandsBar) quickCommandsBar.style.display = 'none';

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
        // 🆕 v1.8.7: 播放静音切换音效
        this.playMuteSound(muted);
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
    exportMessages(format = 'txt') {
        const container = document.getElementById('messagesContainer');
        const messages = container.querySelectorAll('.message');

        let exportText = '';
        const timestamp = new Date().toISOString().slice(0,10);

        // 🆕 v1.8.11: 支持 Markdown 格式导出
        if (format === 'md') {
            exportText = `# AI 第三只眼 - 对话记录\n\n`;
            exportText += `> 导出时间: ${new Date().toLocaleString()}\n\n`;
            exportText += `> 版本: ${APP_VERSION}\n\n`;
            exportText += `---\n\n`;

            messages.forEach(msg => {
                const text = msg.querySelector('p')?.textContent || '';
                const time = msg.querySelector('.message-time')?.textContent || '';
                const isAI = msg.classList.contains('ai');
                const isUser = msg.classList.contains('user');

                if (isAI) {
                    exportText += `### 🤖 AI (${time})\n\n${text}\n\n`;
                } else if (isUser) {
                    exportText += `### 👤 用户 (${time})\n\n${text}\n\n`;
                } else {
                    exportText += `> 📢 ${text}\n\n`;
                }
            });

            const blob = new Blob([exportText], { type: 'text/markdown;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `ai-third-eye-chat-${timestamp}.md`;
            a.click();
            URL.revokeObjectURL(url);

            this.addMessage('system', '📄 对话记录已导出为 Markdown 格式!');
        } else {
            exportText = `AI 第三只眼 - 对话记录导出\n`;
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

            const blob = new Blob([exportText], { type: 'text/plain;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `ai-third-eye-chat-${timestamp}.txt`;
            a.click();
            URL.revokeObjectURL(url);

            this.addMessage('system', '📄 对话记录已导出!');
        }
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

    addMessage(type, text, partial = false, skipSave = false) {
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

            // 🆕 v1.5.4: AI开始回复,隐藏思考指示器
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

            // 🐛 v1.8.61: 检查文本是否已以 emoji 开头，避免重复添加图标
            let displayText = text;
            const hasEmojiPrefix = /^[\p{Emoji_Presentation}\p{Extended_Pictographic}]/u.test(text);
            if (!hasEmojiPrefix) {
                displayText = `${icon} ${text}`;
            }

            // 🆕 v1.5.5: AI 消息添加复制按钮
            if (type === 'ai') {
                msgEl.innerHTML = `
                    <div class="message-content-wrapper">
                        <p>${displayText}</p>
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
                // 🐛 v1.8.61: 检查文本是否已以 emoji 开头
                let displayText = text;
                const hasEmojiPrefix = /^[\p{Emoji_Presentation}\p{Extended_Pictographic}]/u.test(text);
                if (!hasEmojiPrefix) {
                    const icon = type === 'ai' ? '🤖' : type === 'user' ? '👤' : '📢';
                    displayText = `${icon} ${text}`;
                }
                msgEl.innerHTML = `
                    <p>${displayText}</p>
                    <span class="message-time">${new Date().toLocaleTimeString()}</span>
                `;
            }

            container.appendChild(msgEl);

            // 🆕 记录消息统计(仅记录 AI 和用户消息)
            if (type === 'ai' || type === 'user') {
                this.incrementStat('messages');
            }
        }

        // Scroll to bottom
        container.scrollTop = container.scrollHeight;

        // 🆕 v1.8.11: 显示实时字幕(仅AI消息且启用字幕时)
        if (type === 'ai' && this.subtitleEnabled && !partial) {
            this.showSubtitle(text);
        }

        // Keep only last 50 messages
        while (container.children.length > 50) {
            container.removeChild(container.firstChild);
        }

        // 🆕 保存对话历史(非 partial 消息)
        // 🐛 v1.8.61: 添加 skipSave 参数，loadChatHistory 时不重复保存
        if (!partial && !skipSave) {
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
                    message = '⚠️ 会话未建立,请稍后再试';
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
                    message = '⚠️ 服务暂时不可用,请稍后重试';
                    break;
                case 'queue_full':
                    message = '⚠️ 排队已满,请稍后重试';
                    break;
                case 'worker_busy':
                    message = '⚠️ 服务器繁忙,请稍后重试';
                    break;
                case 'inference_error':
                    message = '⚠️ AI 推理出错,继续尝试...';
                    break;
                default:
                    message = '⚠️ 错误: ' + (error.message || error.code);
            }
        } else if (error && error.message) {
            message = '⚠️ ' + error.message;
        }

        this.addMessage('system', message);
    }

    takeScreenshot(copyToClipboard = false) {
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

        // 🆕 v1.8.0: 添加水印
        ctx.setTransform(1, 0, 0, 1, 0, 0); // 重置变换矩阵

        // 获取当前人设名称
        const savedPersonality = localStorage.getItem('ai-third-eye-personality');
        const personality = savedPersonality ?
            ((typeof getAllPersonalitiesWithCustom === 'function' ? getAllPersonalitiesWithCustom()[savedPersonality] : null) || getAllPersonalities()[savedPersonality]) : null;
        const personalityName = personality ? personality.name : '🦐 小鹿';

        // 水印背景(半透明黑色渐变)
        const gradient = ctx.createLinearGradient(0, canvas.height - 80, 0, canvas.height);
        gradient.addColorStop(0, 'rgba(0,0,0,0)');
        gradient.addColorStop(1, 'rgba(0,0,0,0.7)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, canvas.height - 80, canvas.width, 80);

        // 项目名称
        ctx.font = 'bold 18px -apple-system, BlinkMacSystemFont, sans-serif';
        ctx.fillStyle = '#00d4ff';
        ctx.textAlign = 'left';
        ctx.fillText('🦐 AI 第三只眼', 15, canvas.height - 45);

        // 人设名称
        ctx.font = '14px -apple-system, BlinkMacSystemFont, sans-serif';
        ctx.fillStyle = '#00ff88';
        ctx.fillText(`人设: ${personalityName}`, 15, canvas.height - 25);

        // 时间戳和版本号
        const now = new Date();
        const timeStr = now.toLocaleString('zh-CN');
        ctx.font = '12px -apple-system, BlinkMacSystemFont, sans-serif';
        ctx.fillStyle = '#888';
        ctx.textAlign = 'right';
        ctx.fillText(`${timeStr} · ${APP_VERSION}`, canvas.width - 15, canvas.height - 25);

        // Get image data
        const dataUrl = canvas.toDataURL('image/png');

        // 🆕 v1.8.25: 支持复制到剪贴板
        if (copyToClipboard) {
            // 将 dataURL 转换为 Blob
            const response = { ok: true, targetId: '31', url: 'https://summerlv.github.io/ai-third-eye/' };
            canvas.toBlob(async (blob) => {
                if (blob) {
                    try {
                        await navigator.clipboard.write([
                            new ClipboardItem({ 'image/png': blob })
                        ]);
                        this.addMessage('system', `📋 截图已复制到剪贴板!(水印: ${personalityName})`);
                        this.incrementStat('screenshots');
                        this.playScreenshotSound();
                    } catch (err) {
                        console.error('Failed to copy screenshot:', err);
                        this.addMessage('system', '⚠️ 复制失败,请手动截图或使用下载功能');
                    }
                }
            }, 'image/png');
            canvas.remove();
            return;
        }

        // Create download link
        const a = document.createElement('a');
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        a.href = dataUrl;
        a.download = `ai-third-eye-${timestamp}.png`;
        a.click();

        // 🆕 记录截图统计
        this.incrementStat('screenshots');

        // 🆕 v1.8.3: 播放截图成功音效
        this.playScreenshotSound();

        this.addMessage('system', `📸 截图已保存!(水印: ${personalityName})`);

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

    // 🆕 更新音量指示器(带渐变颜色)
    updateVolumeIndicator(volume) {
        this.volumeLevel = volume;
        const bars = document.querySelectorAll('.volume-bar');
        const activeBars = Math.floor(volume * 5);

        bars.forEach((bar, index) => {
            const isActive = index < activeBars;
            bar.style.opacity = isActive ? '1' : '0.3';
            bar.style.transform = isActive ? 'scaleY(1.2)' : 'scaleY(1)';

            // 🆕 渐变颜色:绿->黄->红
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

    // 🆕 v1.8.3: 播放截图成功音效(Web Audio API 合成)
    playScreenshotSound() {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();

            // 创建振荡器 - 清脆的"叮"声
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            // 设置频率 - E6 高音(1318.51 Hz)
            oscillator.frequency.setValueAtTime(1318.51, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(987.77, audioContext.currentTime + 0.1);

            // 设置音量包络
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

            // 连接节点
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            // 播放
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.3);
        } catch (e) {
            console.log('Screenshot sound error:', e);
        }
    }

    // 🆕 v1.8.4: 播放开始对话音效(Web Audio API 合成)
    playStartSound() {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();

            // 双音符上扬旋律 - 愉悦的开始感
            const oscillator1 = audioContext.createOscillator();
            const oscillator2 = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            // 第一个音符:C5 (523.25 Hz) - 0.1秒
            oscillator1.frequency.setValueAtTime(523.25, audioContext.currentTime);
            oscillator1.type = 'sine';

            // 第二个音符:E5 (659.25 Hz) - 稍高,上扬感
            oscillator2.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.15);
            oscillator2.type = 'sine';

            // 音量包络
            gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
            gainNode.gain.setValueAtTime(0.2, audioContext.currentTime + 0.15);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.35);

            // 连接节点
            oscillator1.connect(gainNode);
            oscillator2.connect(gainNode);
            gainNode.connect(audioContext.destination);

            // 播放
            oscillator1.start(audioContext.currentTime);
            oscillator1.stop(audioContext.currentTime + 0.15);
            oscillator2.start(audioContext.currentTime + 0.15);
            oscillator2.stop(audioContext.currentTime + 0.35);
        } catch (e) {
            console.log('Start sound error:', e);
        }
    }

    // 🆕 v1.8.4: 播放断线重连成功音效(Web Audio API 合成)
    playReconnectSound() {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();

            // 三音符恢复旋律 - 舒缓的连接恢复感
            const oscillator1 = audioContext.createOscillator();
            const oscillator2 = audioContext.createOscillator();
            const oscillator3 = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            // 第一个音符:G4 (392 Hz) - 低沉起点
            oscillator1.frequency.setValueAtTime(392, audioContext.currentTime);
            oscillator1.type = 'sine';

            // 第二个音符:C5 (523.25 Hz) - 上升
            oscillator2.frequency.setValueAtTime(523.25, audioContext.currentTime + 0.12);
            oscillator2.type = 'sine';

            // 第三个音符:G5 (783.99 Hz) - 高亮结束
            oscillator3.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.24);
            oscillator3.type = 'sine';

            // 音量包络
            gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
            gainNode.gain.setValueAtTime(0.15, audioContext.currentTime + 0.24);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);

            // 连接节点
            oscillator1.connect(gainNode);
            oscillator2.connect(gainNode);
            oscillator3.connect(gainNode);
            gainNode.connect(audioContext.destination);

            // 播放
            oscillator1.start(audioContext.currentTime);
            oscillator1.stop(audioContext.currentTime + 0.12);
            oscillator2.start(audioContext.currentTime + 0.12);
            oscillator2.stop(audioContext.currentTime + 0.24);
            oscillator3.start(audioContext.currentTime + 0.24);
            oscillator3.stop(audioContext.currentTime + 0.4);
        } catch (e) {
            console.log('Reconnect sound error:', e);
        }
    }

    // 🆕 v1.8.6: 播放人设切换音效(Web Audio API 合成)
    playPersonalitySound() {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();

            // 四音符跳悦旋律 - 活泼的人设切换感
            const oscillators = [];
            const gainNode = audioContext.createGain();

            // 四音符:C5-E5-G5-C6 - 明亮上扬的旋律
            const notes = [523.25, 659.25, 783.99, 1046.50];
            const startTime = audioContext.currentTime;

            notes.forEach((freq, i) => {
                const osc = audioContext.createOscillator();
                osc.frequency.setValueAtTime(freq, startTime + i * 0.08);
                osc.type = 'sine';
                osc.connect(gainNode);
                oscillators.push(osc);
            });

            // 音量包络
            gainNode.gain.setValueAtTime(0.18, startTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + 0.4);
            gainNode.connect(audioContext.destination);

            // 播放
            oscillators.forEach((osc, i) => {
                osc.start(startTime + i * 0.08);
                osc.stop(startTime + i * 0.08 + 0.1);
            });
        } catch (e) {
            console.log('Personality sound error:', e);
        }
    }

    // 🆕 v1.8.7: 播放静音切换音效(Web Audio API 合成)
    playMuteSound(muted) {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();

            // 双音符提示音 - 清晰的静音状态变化反馈
            const oscillator1 = audioContext.createOscillator();
            const oscillator2 = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            if (muted) {
                // 静音开启:低沉提示音 - G3 → C4(下行,表示静音)
                oscillator1.frequency.setValueAtTime(196.00, audioContext.currentTime);
                oscillator2.frequency.setValueAtTime(261.63, audioContext.currentTime + 0.1);
            } else {
                // 取消静音:明亮提示音 - C5 → E5(上行,表示恢复)
                oscillator1.frequency.setValueAtTime(523.25, audioContext.currentTime);
                oscillator2.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1);
            }

            oscillator1.type = 'sine';
            oscillator2.type = 'sine';

            // 音量包络
            gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
            gainNode.gain.setValueAtTime(0.2, audioContext.currentTime + 0.1);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.25);

            // 连接节点
            oscillator1.connect(gainNode);
            oscillator2.connect(gainNode);
            gainNode.connect(audioContext.destination);

            // 播放
            oscillator1.start(audioContext.currentTime);
            oscillator1.stop(audioContext.currentTime + 0.12);
            oscillator2.start(audioContext.currentTime + 0.1);
            oscillator2.stop(audioContext.currentTime + 0.25);
        } catch (e) {
            console.log('Mute sound error:', e);
        }
    }

    // 🆕 v1.8.8: 播放结束对话音效(Web Audio API 合成)
    playEndSound() {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();

            // 三音符舒缓告别旋律 - 温暖的结束感
            const oscillator1 = audioContext.createOscillator();
            const oscillator2 = audioContext.createOscillator();
            const oscillator3 = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            // 第一个音符:E5 (659.25 Hz) - 温暖起点
            oscillator1.frequency.setValueAtTime(659.25, audioContext.currentTime);
            oscillator1.type = 'sine';

            // 第二个音符:C5 (523.25 Hz) - 下降
            oscillator2.frequency.setValueAtTime(523.25, audioContext.currentTime + 0.15);
            oscillator2.type = 'sine';

            // 第三个音符:G4 (392 Hz) - 温和结束
            oscillator3.frequency.setValueAtTime(392, audioContext.currentTime + 0.3);
            oscillator3.type = 'sine';

            // 音量包络 - 柔和的渐弱
            gainNode.gain.setValueAtTime(0.18, audioContext.currentTime);
            gainNode.gain.setValueAtTime(0.18, audioContext.currentTime + 0.15);
            gainNode.gain.setValueAtTime(0.15, audioContext.currentTime + 0.3);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

            // 连接节点
            oscillator1.connect(gainNode);
            oscillator2.connect(gainNode);
            oscillator3.connect(gainNode);
            gainNode.connect(audioContext.destination);

            // 播放
            oscillator1.start(audioContext.currentTime);
            oscillator1.stop(audioContext.currentTime + 0.18);
            oscillator2.start(audioContext.currentTime + 0.15);
            oscillator2.stop(audioContext.currentTime + 0.33);
            oscillator3.start(audioContext.currentTime + 0.3);
            oscillator3.stop(audioContext.currentTime + 0.5);
        } catch (e) {
            console.log('End sound error:', e);
        }
    }

    // 🆕 初始化网络状态检测(带警告横幅)
    initNetworkStatus() {
        // 创建网络状态指示器
        this.updateNetworkStatus(navigator.onLine);

        window.addEventListener('online', () => {
            this.updateNetworkStatus(true);
            this.hideNetworkWarning();
            // 🆕 v1.8.4: 播放断线重连成功音效
            this.playReconnectSound();
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
            banner.innerHTML = '🔴 网络已断开!请检查网络连接 <span style="margin-left:10px;cursor:pointer" onclick="this.parentElement.remove()">✕</span>';
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

    // 🆕 v1.8.11: 显示实时字幕
    showSubtitle(text) {
        if (!this.subtitleEnabled) return;

        const overlay = document.getElementById('subtitleOverlay');
        const subtitleText = document.getElementById('subtitleText');
        if (!overlay || !subtitleText) return;

        // 去掉图标和多余空格
        const cleanText = text.replace(/^[🤖👤📢]\s*/, '').trim();
        if (!cleanText) return;

        // 清除之前的隐藏定时器
        if (this.subtitleTimeout) {
            clearTimeout(this.subtitleTimeout);
            this.subtitleTimeout = null;
        }

        // 显示字幕
        subtitleText.textContent = cleanText;
        overlay.style.opacity = '1';

        // 根据文本长度设置自动隐藏时间(每10个字约1秒,最少3秒,最多10秒)
        const charCount = cleanText.length;
        const hideDelay = Math.min(Math.max(charCount / 10 * 1000, 3000), 10000);

        this.subtitleTimeout = setTimeout(() => {
            this.hideSubtitle();
        }, hideDelay);
    }

    // 🆕 v1.8.11: 隐藏字幕
    hideSubtitle() {
        const overlay = document.getElementById('subtitleOverlay');
        if (overlay) {
            overlay.style.opacity = '0';
        }
        if (this.subtitleTimeout) {
            clearTimeout(this.subtitleTimeout);
            this.subtitleTimeout = null;
        }
    }

    // 🆕 v1.8.11: 切换字幕显示
    toggleSubtitle() {
        this.subtitleEnabled = !this.subtitleEnabled;
        localStorage.setItem('ai-third-eye-subtitle', this.subtitleEnabled);
        if (!this.subtitleEnabled) {
            this.hideSubtitle();
        }
        this.addMessage('system', this.subtitleEnabled ? '📝 已开启实时字幕' : '📝 已关闭实时字幕');
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
                    <div style="color:var(--accent-primary);font-size:14px;font-weight:600;">${recommended.timeDesc},推荐人设</div>
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

    // 🆕 v1.8.12: 切换搜索栏
    toggleSearchBar() {
        const searchBar = document.getElementById('searchBar');
        const searchInput = document.getElementById('searchInput');
        if (searchBar) {
            const isHidden = searchBar.style.display === 'none';
            searchBar.style.display = isHidden ? 'flex' : 'none';
            if (isHidden && searchInput) {
                searchInput.focus();
                searchInput.select();
            } else {
                this.clearSearchHighlight();
            }
        }
    }

    // 🆕 v1.8.12: 关闭搜索栏
    closeSearchBar() {
        const searchBar = document.getElementById('searchBar');
        const searchInput = document.getElementById('searchInput');
        if (searchBar) {
            searchBar.style.display = 'none';
        }
        if (searchInput) {
            searchInput.value = '';
        }
        this.clearSearchHighlight();
    }

    // 🆕 v1.8.12: 搜索对话
    searchMessages(keyword) {
        this.clearSearchHighlight();

        const searchCount = document.getElementById('searchCount');

        if (!keyword || keyword.trim() === '') {
            if (searchCount) searchCount.textContent = '';
            this.searchResults = [];
            this.currentSearchIndex = -1;
            return;
        }

        const container = document.getElementById('messagesContainer');
        if (!container) return;

        const messages = container.querySelectorAll('.message');
        const matches = [];
        const searchRegex = new RegExp(`(${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');

        messages.forEach((msg, idx) => {
            const textContent = msg.textContent || '';
            if (textContent.toLowerCase().includes(keyword.toLowerCase())) {
                matches.push({ element: msg, index: idx });

                // 高亮匹配文本
                const contentP = msg.querySelector('p:first-of-type');
                if (contentP && contentP.dataset.originalText === undefined) {
                    contentP.dataset.originalText = contentP.innerHTML;
                }
                if (contentP && contentP.dataset.originalText !== undefined) {
                    contentP.innerHTML = contentP.dataset.originalText.replace(searchRegex, '<mark style="background:#ffeb3b;color:#000;padding:1px 2px;border-radius:2px;">$1</mark>');
                }
            }
        });

        this.searchResults = matches;
        this.currentSearchIndex = matches.length > 0 ? 0 : -1;

        // 更新搜索计数
        if (searchCount) {
            searchCount.textContent = matches.length > 0 ? `${matches.length} 条匹配` : '无匹配';
        }

        // 滚动到第一个匹配
        if (matches.length > 0) {
            this.scrollToSearchResult(0);
        }
    }

    // 🆕 v1.8.12: 清除搜索高亮
    clearSearchHighlight() {
        const container = document.getElementById('messagesContainer');
        if (!container) return;

        const markedElements = container.querySelectorAll('[data-original-text]');
        markedElements.forEach(el => {
            el.innerHTML = el.dataset.originalText;
            delete el.dataset.originalText;
        });
    }

    // 🆕 v1.8.12: 上一个搜索结果
    searchPrev() {
        if (this.searchResults.length === 0) return;
        this.currentSearchIndex = (this.currentSearchIndex - 1 + this.searchResults.length) % this.searchResults.length;
        this.scrollToSearchResult(this.currentSearchIndex);
    }

    // 🆕 v1.8.12: 下一个搜索结果
    searchNext() {
        if (this.searchResults.length === 0) return;
        this.currentSearchIndex = (this.currentSearchIndex + 1) % this.searchResults.length;
        this.scrollToSearchResult(this.currentSearchIndex);
    }

    // 🆕 v1.8.12: 滚动到搜索结果
    scrollToSearchResult(index) {
        if (index < 0 || index >= this.searchResults.length) return;
        const result = this.searchResults[index];
        if (result && result.element) {
            result.element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // 更新搜索计数显示
            const searchCount = document.getElementById('searchCount');
            if (searchCount) {
                searchCount.textContent = `${index + 1}/${this.searchResults.length}`;
            }
        }
    }
}

// Initialize
const app = new UIController();

// 🐛 v1.8.58: 移除重复的推荐横幅调用，避免和 showHomepageRecommendation() 冲突
// showRecommendedPersonalityBanner 已在 init() 中通过 showHomepageRecommendation() 调用
