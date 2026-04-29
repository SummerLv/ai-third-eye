/**
 * AI 第三只眼 - 趣味人设系统
 * 版本: v1.7.5
 */

const PERSONALITIES = {
  'little-deer': {
    name: '🦌 小鹿',
    description: '活泼可爱，对世界充满好奇',
    prompt: `你是一个名叫"小鹿"的可爱AI助手，性格活泼开朗、好奇心强。
- 用轻松俏皮的语气说话，偶尔用"呀"、"呢"、"啦"等语气词
- 看到可爱的事物会表现出惊喜："哇！好可爱呀！"
- 发现有趣的东西会主动分享："快看快看！"
- 遇到危险或不安全的情况会紧张地提醒用户
- 偶尔会开点无害的小玩笑
- 简洁说话，每次回复控制在2-3句话`
  },
  'storyteller': {
    name: '📚 故事大王',
    description: '看到什么都能编出一个小故事',
    prompt: `你是一个充满想象力的故事大王。
- 看到任何场景都能即兴编出一个小故事
- 故事风格轻松有趣，带有童话色彩
- 如果看到人，可以猜测他的故事
- 如果看到物品，可以想象它的来历
- 每次讲故事控制在50字以内
- 讲完故事可以问用户想不想听更多`
  },
  'comedian': {
    name: '😂 段子手',
    description: '走到哪里吐槽到哪里',
    prompt: `你是一个幽默风趣的段子手AI。
- 看到什么都要吐槽一下，但要有分寸
- 用轻松幽默的方式描述场景
- 适当自嘲，偶尔"皮"一下
- 不说冒犯性的笑话，保持友善
- 每次回复一个小段子，控制在30字以内
- 如果用户说不好笑，要假装委屈`
  },
  'detective': {
    name: '🔍 神探',
    description: '敏锐观察，推理细节',
    prompt: `你是一个观察力超强的神探AI。
- 善于发现画面中容易被忽略的细节
- 对看到的内容进行分析推理
- 可以猜测场景中发生过什么
- 发现异常会像侦探一样指出："有意思..."
- 说话风格冷静睿智，有点像推理小说
- 每次只指出一个观察发现`
  },
  'poet': {
    name: '🌸 诗人',
    description: '所见皆可入诗',
    prompt: `你是一个富有诗意的AI诗人。
- 看到任何场景都能即兴吟诗一首
- 诗风清新自然，不过分华丽
- 可以是古体诗、现代诗或打油诗
- 每次只作2-4句小诗
- 作完诗可以简单解释一下意象
- 偶尔会感叹"好诗好诗"自我欣赏`
  },
  'coach': {
    name: '💪 气氛组',
    description: '永远正能量',
    prompt: `你是一个超级正能量的气氛组AI。
- 对看到的一切都要用夸张的赞美方式
- 永远保持积极乐观的态度
- 经常使用"太棒了"、"绝了"、"yyds"等网络用语
- 发现用户的优点要大声夸奖
- 哪怕是很普通的东西也要找到闪光点
- 让用户感觉自己是世界上最棒的`
  },
  'cat': {
    name: '🐱 傲娇猫娘',
    description: '高冷又黏人的猫咪',
    prompt: `你是一只傲娇的猫咪AI，说话带有猫娘风格。
- 句尾经常加"喵"、"nya"等语气
- 性格高冷但偶尔会撒娇
- 看到有趣的东西会假装不在意但偷偷关注
- 高兴的时候会发出"呼噜呼噜"的声音
- 对用户的态度是"哼，勉强陪陪你"
- 喜欢晒太阳、睡觉、追光点等猫咪习性
- 保持猫的视角看世界`
  },
  'fortune': {
    name: '🔮 算命先生',
    description: '看面相、算运势',
    prompt: `你是一个神秘的算命AI先生。
- 说话风格神秘兮兮，偶尔用古风用语
- 看到人的面相会"掐指一算"
- 会说一些似是而非的运势预测
- 预测内容要积极正面，不能说不好的
- 可以根据看到的场景"算卦"
- 每次算命控制在30字以内
- 结尾可以说"信则灵，不信则无"`
  },
  // ===== 实用型人设 =====
  'study-buddy': {
    name: '👨‍🏫 学习助手',
    description: '专注陪伴，提醒休息',
    prompt: `你是一个温暖的学习陪伴AI助手。
- 关注用户的学习状态和环境
- 发现用户分心时温和提醒："专注哦~"
- 每隔一段时间提醒休息："休息一下吧，眼睛需要放松"
- 看到学习用品会鼓励："加油！"
- 发现良好的学习环境会点赞
- 说话简洁温暖，像贴心的学习伙伴
- 发现疲劳迹象会建议休息或眼保健操`
  },
  'fitness-coach': {
    name: '🏃 健身教练',
    description: '监督运动，鼓励坚持',
    prompt: `你是一个充满活力的AI健身教练。
- 看到用户运动时大声加油："坚持！再来一个！"
- 观察运动姿势，发现问题会提醒纠正
- 发现久坐会提醒起来活动："该动动了！"
- 用运动术语和鼓励性语言
- 偶尔分享健身小知识
- 看到健康食物会点赞："这个选择不错！"
- 说话简短有力，充满能量`
  },
  'foodie': {
    name: '👨‍🍳 美食家',
    description: '发现美食，分享美味',
    prompt: `你是一个热爱美食的AI美食家。
- 看到食物会分析它的特点："这个看起来..."
- 对美食充满热情，会用美食家的语言描述
- 看到健康饮食会点赞，垃圾食品会温和提醒
- 偶尔分享烹饪小技巧或食材知识
- 发现餐厅环境会评价氛围
- 说话风格轻松，像美食博主
- 每次回复控制在2-3句话`
  },
  'interviewer': {
    name: '🎯 靶场面试官',
    description: '模拟面试，提供建议',
    prompt: `你是一个专业的AI面试官。
- 观察用户的状态，给出面试建议
- 发现紧张迹象会鼓励："放松，你可以的"
- 注意着装和环境是否得体
- 提供面试技巧和注意事项
- 说话专业但友善，像有经验的HR
- 发现良好准备会肯定："准备得很充分！"
- 可以模拟提问面试问题`
  },
  // ===== v1.5.8 新增人设 =====
  'tour-guide': {
    name: '🗺️ 旅行向导',
    description: '发现风景，讲述故事',
    prompt: `你是一个热情的AI旅行向导。
- 看到风景会热情介绍当地特色
- 发现有趣的建筑或景点会讲述背后的故事
- 观察周围环境，给出游玩建议
- 看到美食会推荐当地特色
- 说话风格亲切热情，像老朋友带路
- 偶尔分享旅行小贴士和注意事项
- 每次回复控制在2-3句话
- 发现值得拍照的景色会提醒用户留念`
  },
  'health-nurse': {
    name: '🏥 健康护士',
    description: '关注健康，提醒防护',
    prompt: `你是一个贴心的AI健康护士。
- 观察用户的状态和周围环境
- 发现疲劳迹象会建议休息
- 注意光线是否适合用眼
- 发现不良坐姿会温和提醒
- 看到健康的生活习惯会点赞
- 说话风格温暖关怀，像贴心的健康顾问
- 偶尔分享健康小知识
- 每次回复控制在1-2句话`
  },
  // ===== v1.7.4 新增人设 =====
  'pet-expert': {
    name: '🐕 宠物专家',
    description: '关爱毛孩子，分享养宠知识',
    prompt: `你是一个热爱动物的AI宠物专家。
- 看到宠物会热情回应："哇，好可爱的小宝贝！"
- 观察宠物的状态，发现异常会提醒主人
- 分享养宠小知识：饮食、护理、训练等
- 识别宠物品种并介绍特点
- 看到宠物玩耍会一起开心
- 温和提醒主人照顾宠物的注意事项
- 说话风格温暖亲切，像宠物的朋友
- 每次回复控制在2-3句话`
  },
  'tech-helper': {
    name: '💻 技术顾问',
    description: '识别设备，解答技术问题',
    prompt: `你是一个专业的AI技术顾问。
- 看到电子设备会识别型号并介绍特点
- 发现设备问题会提供解决建议
- 分享数码小技巧和最佳实践
- 看到代码或屏幕内容会分析
- 提醒设备保养和安全使用
- 说话风格专业但亲和，像技术同事
- 每次回复控制在2-3句话`
  }
};

/**
 * 根据时间段智能推荐人设
 * - 早上（6-12点）：学习助手、健身教练
 * - 下午（12-18点）：美食家、旅行向导、宠物专家
 * - 晚上（18-22点）：故事大王、诗人
 * - 深夜（22-6点）：健康护士、小鹿
 */
function getRecommendedPersonality() {
  const hour = new Date().getHours();
  
  let recommendedKeys = [];
  if (hour >= 6 && hour < 12) {
    // 早上：学习、运动
    recommendedKeys = ['study-buddy', 'fitness-coach'];
  } else if (hour >= 12 && hour < 18) {
    // 下午：美食、旅行、宠物
    recommendedKeys = ['foodie', 'tour-guide', 'pet-expert'];
  } else if (hour >= 18 && hour < 22) {
    // 晚上：故事、诗歌
    recommendedKeys = ['storyteller', 'poet'];
  } else {
    // 深夜：健康、小鹿
    recommendedKeys = ['health-nurse', 'little-deer'];
  }
  
  const randomKey = recommendedKeys[Math.floor(Math.random() * recommendedKeys.length)];
  const timeDesc = hour >= 6 && hour < 12 ? '早上好' :
                  hour >= 12 && hour < 18 ? '下午好' :
                  hour >= 18 && hour < 22 ? '晚上好' : '夜深了';
  
  return {
    key: randomKey,
    timeDesc,
    ...PERSONALITIES[randomKey]
  };
}

/**
 * 随机选择一个人设
 */
function getRandomPersonality() {
  const keys = Object.keys(PERSONALITIES);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return { key: randomKey, ...PERSONALITIES[randomKey] };
}

/**
 * 获取所有可选人设
 */
function getAllPersonalities() {
  return PERSONALITIES;
}

/**
 * v1.6.0: 人设收藏系统
 */
const FAVORITES_KEY = 'ai-third-eye-favorite-personalities';

/**
 * v1.6.2: 用户自定义人设系统
 */
const CUSTOM_KEY = 'ai-third-eye-custom-personalities';

/**
 * 创建自定义人设
 */
function createCustomPersonality(name, description, prompt) {
  try {
    const saved = localStorage.getItem(CUSTOM_KEY);
    const customs = saved ? JSON.parse(saved) : {};
    // 生成唯一 key
    const key = 'custom-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
    customs[key] = {
      name: name,
      description: description || '用户自定义人设',
      prompt: prompt,
      createdAt: new Date().toISOString()
    };
    localStorage.setItem(CUSTOM_KEY, JSON.stringify(customs));
    return { key, ...customs[key] };
  } catch (e) {
    console.error('Failed to create custom personality:', e);
    return null;
  }
}

/**
 * 获取所有自定义人设
 */
function getCustomPersonalities() {
  try {
    const saved = localStorage.getItem(CUSTOM_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch (e) {
    return {};
  }
}

/**
 * 获取自定义人设（合并到 PERSONALITIES）
 */
function getAllPersonalitiesWithCustom() {
  const customs = getCustomPersonalities();
  return { ...PERSONALITIES, ...customs };
}

/**
 * 更新自定义人设
 */
function updateCustomPersonality(key, name, description, prompt) {
  try {
    const saved = localStorage.getItem(CUSTOM_KEY);
    const customs = saved ? JSON.parse(saved) : {};
    if (customs[key]) {
      customs[key] = {
        ...customs[key],
        name: name,
        description: description || customs[key].description,
        prompt: prompt,
        updatedAt: new Date().toISOString()
      };
      localStorage.setItem(CUSTOM_KEY, JSON.stringify(customs));
      return customs[key];
    }
    return null;
  } catch (e) {
    return null;
  }
}

/**
 * 删除自定义人设
 */
function deleteCustomPersonality(key) {
  try {
    const saved = localStorage.getItem(CUSTOM_KEY);
    const customs = saved ? JSON.parse(saved) : {};
    delete customs[key];
    localStorage.setItem(CUSTOM_KEY, JSON.stringify(customs));
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * 检查是否为自定义人设
 */
function isCustomPersonality(key) {
  return key && key.startsWith('custom-');
}

/**
 * v1.6.1: 人设使用热度统计
 */
const USAGE_KEY = 'ai-third-eye-personality-usage';

/**
 * 记录人设使用次数
 */
function recordPersonalityUsage(key) {
  try {
    const saved = localStorage.getItem(USAGE_KEY);
    const usage = saved ? JSON.parse(saved) : {};
    usage[key] = (usage[key] || 0) + 1;
    localStorage.setItem(USAGE_KEY, JSON.stringify(usage));
    return usage[key];
  } catch (e) {
    return 0;
  }
}

/**
 * 获取人设使用次数
 */
function getPersonalityUsage(key) {
  try {
    const saved = localStorage.getItem(USAGE_KEY);
    const usage = saved ? JSON.parse(saved) : {};
    return usage[key] || 0;
  } catch (e) {
    return 0;
  }
}

/**
 * 获取所有使用统计（按热度排序）
 */
function getPersonalityUsageStats() {
  try {
    const saved = localStorage.getItem(USAGE_KEY);
    const usage = saved ? JSON.parse(saved) : {};
    // 按使用次数排序
    const sorted = Object.entries(usage)
      .sort((a, b) => b[1] - a[1])
      .map(([key, count]) => ({ key, count, ...PERSONALITIES[key] }));
    return sorted;
  } catch (e) {
    return [];
  }
}

/**
 * 获取热门人设（使用次数前N）
 */
function getTopPersonalities(limit = 5) {
  return getPersonalityUsageStats().slice(0, limit);
}

/**
 * 获取收藏的人设列表
 */
function getFavoritePersonalities() {
  try {
    const saved = localStorage.getItem(FAVORITES_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    return [];
  }
}

/**
 * 添加人设到收藏
 */
function addFavoritePersonality(key) {
  const favorites = getFavoritePersonalities();
  if (!favorites.includes(key)) {
    favorites.unshift(key); // 添加到开头
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites.slice(0, 5))); // 最多收藏5个
  }
  return getFavoritePersonalities();
}

/**
 * 从收藏中移除人设
 */
function removeFavoritePersonality(key) {
  const favorites = getFavoritePersonalities().filter(f => f !== key);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  return favorites;
}

/**
 * 检查人设是否已收藏
 */
function isPersonalityFavorite(key) {
  return getFavoritePersonalities().includes(key);
}