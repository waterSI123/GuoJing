import { Category, ResumeProfile } from './types';

const portfolioBaseUrl = (import.meta.env.VITE_PORTFOLIO_BASE_URL ?? '').replace(/\/$/, '');
const originalPortfolioImage = (path: string) => `${portfolioBaseUrl}${path}`;
const optimizedPortfolioImage = (variant: 'thumb' | 'gallery', path: string) =>
  `/portfolio-optimized/${variant}${path.replace(/^\/portfolio/, '').replace(/\.[^/.]+$/, '.webp')}`;

interface PortfolioImageSet {
  full: string;
  gallery: string;
  thumb: string;
}

const portfolioImageSet = (path: string): PortfolioImageSet => ({
  full: originalPortfolioImage(path),
  gallery: optimizedPortfolioImage('gallery', path),
  thumb: optimizedPortfolioImage('thumb', path),
});

const makeArtworks = (
  prefix: string,
  images: PortfolioImageSet[],
  titles: string[],
  descriptions: string[],
  layouts?: Array<'full' | 'half'>
) => images.map((image, index) => ({
  id: `${prefix}-${String(index + 1).padStart(2, '0')}`,
  title: titles[index],
  description: descriptions[index],
  imageUrl: image.gallery,
  thumbnailUrl: image.thumb,
  fullImageUrl: image.full,
  layout: layouts?.[index],
}));

const ancientFashionImages = Array.from({ length: 9 }, (_, index) => portfolioImageSet(`/portfolio/gufeng-shizhuang/${String(index + 1).padStart(2, '0')}.jpg`));
const commercialIllustrationImages = [
  ...Array.from({ length: 13 }, (_, index) => portfolioImageSet(`/portfolio/shangye-chahua/${index + 1}.png`)),
  portfolioImageSet('/portfolio/shangye-chahua/14.jpg'),
  ...Array.from({ length: 7 }, (_, index) => portfolioImageSet(`/portfolio/shangye-chahua/${index + 15}.png`)),
];
const mythicalArtifactImages = [
  ...Array.from({ length: 14 }, (_, index) => portfolioImageSet(`/portfolio/shenshou-shenqi/${String(index + 1).padStart(2, '0')}.jpg`)),
  portfolioImageSet('/portfolio/shenshou-shenqi/15.gif'),
  portfolioImageSet('/portfolio/shenshou-shenqi/16.gif'),
];
const modernFashionImages = [
  portfolioImageSet('/portfolio/xiandai-shizhuang/01.2.PNG'),
  portfolioImageSet('/portfolio/xiandai-shizhuang/01.3.PNG'),
  portfolioImageSet('/portfolio/xiandai-shizhuang/02.jpg'),
  portfolioImageSet('/portfolio/xiandai-shizhuang/03.jpg'),
  portfolioImageSet('/portfolio/xiandai-shizhuang/04.gif'),
  portfolioImageSet('/portfolio/xiandai-shizhuang/05.gif'),
  portfolioImageSet('/portfolio/xiandai-shizhuang/02.2.PNG'),
  portfolioImageSet('/portfolio/xiandai-shizhuang/02.3.PNG'),
  portfolioImageSet('/portfolio/xiandai-shizhuang/07.jpg'),
  portfolioImageSet('/portfolio/xiandai-shizhuang/08.jpg'),
  portfolioImageSet('/portfolio/xiandai-shizhuang/09.gif'),
  portfolioImageSet('/portfolio/xiandai-shizhuang/10.gif'),
  portfolioImageSet('/portfolio/xiandai-shizhuang/03.02.JPG'),
  portfolioImageSet('/portfolio/xiandai-shizhuang/03.03.JPG'),
  portfolioImageSet('/portfolio/xiandai-shizhuang/12.jpg'),
  portfolioImageSet('/portfolio/xiandai-shizhuang/13.jpg'),
  portfolioImageSet('/portfolio/xiandai-shizhuang/04.02.PNG'),
  portfolioImageSet('/portfolio/xiandai-shizhuang/04.03.PNG'),
  portfolioImageSet('/portfolio/xiandai-shizhuang/15.jpg'),
  portfolioImageSet('/portfolio/xiandai-shizhuang/16.jpg'),
  portfolioImageSet('/portfolio/xiandai-shizhuang/05,03.PNG'),
  portfolioImageSet('/portfolio/xiandai-shizhuang/05.02.PNG'),
  portfolioImageSet('/portfolio/xiandai-shizhuang/18.jpg'),
  portfolioImageSet('/portfolio/xiandai-shizhuang/19.jpg'),
  portfolioImageSet('/portfolio/xiandai-shizhuang/20.gif'),
  portfolioImageSet('/portfolio/xiandai-shizhuang/21.gif'),
];
const modernFashionLayouts: Array<'full' | 'half'> = [
  'half',
  'half',
  'full',
  'full',
  'half',
  'half',
  'half',
  'half',
  'full',
  'full',
  'half',
  'half',
  'half',
  'half',
  'full',
  'full',
  'half',
  'half',
  'full',
  'full',
  'half',
  'half',
  'full',
  'full',
  'half',
  'half',
];

const ancientFashionTitles = [
  '《青鸾和鸣》',
  '《梅间赴约》',
  '《暖冬驯鹿缘》',
  '《秋华菊影》',
  '《青釉同裳》',
  '《清荷双影》',
  '《红鳞逐浪》',
  '《月中桂影》',
  '《黑翎同侠》',
];

const ancientFashionDescriptions = [
  '女生以青柠浅绿为主色调，采用改良古风襦裙形制，上衣饰有鎏金纹样与白绒云肩，袖口垂坠羽毛流苏，仙气灵动。双髻搭配珠玉发饰，裙摆以小花暗纹点缀，下摆镶白绒边，整体廓形轻盈柔和，兼具少女娇俏与仙侠清冷感。\n男生色调与女生相呼应，服饰采用改良古风襦裙形制，上衣饰有鎏金纹样与白绒云肩，袖口垂坠羽毛流苏，仙气灵动，下摆镶白绒边，整体廓形轻盈柔和，适配古风仙侠题材游戏场景。',
  '这套古风情侣装以白、青、红为主调，红梅印花贯穿男女款，搭配玉色配饰。女款温婉雅致，衣摆垂坠灵动；男款俊逸利落，线条利落飒爽，整体清冷又带暖意，适配古风武侠题材游戏场景。',
  '这套圣诞主题古风情侣装以红、白、金为主调，融入鹿角、雪花、驯鹿金纹与雪人袜等圣诞元素，同时保留盘扣、宽袖等古风形制。女款软萌俏皮，男款俊逸温暖，整体兼具节日氛围与古风韵味',
  '这套古风仙侠情侣装以秋菊为主题，主调为青柠绿与暖金橙，衣身饰金菊纹样，飘带与配饰呼应秋日氛围。女款温婉娇柔，男款俊逸清雅，整体廓形飘逸灵动，尽显秋日仙气，适配古风游戏秋日主题场景。',
  '这套古风仙侠情侣装以青花瓷为灵感，主调为青蓝、白与鎏金，衣身饰缠枝纹与卷云纹，蓝白配色还原瓷器的清雅质感。女款温婉灵动，男款俊逸飒爽，整体兼具古典雅致与仙侠飘逸感',
  '这套古风仙侠情侣装以夏日荷塘为主题，白绿渐变主调清新雅致，衣身饰有荷花、莲叶与蜻蜓纹样，细节呼应荷塘意境。女款温婉灵动，男款俊逸清雅，整体廓形飘逸利落，兼具夏日清透感与仙侠仙气',
  '这套古风仙侠情侣装以红锦鲤为主题，主调为水蓝与暖橙，衣身饰锦鲤纹样与波光特效，轻纱如流水般飘逸。女款灵动娇俏，男款俊逸清雅，整体廓形轻盈灵动，兼具水畔仙气与锦鲤的灵动寓意',
  '这套古风仙侠情侣装以中秋为主题，主调为暖金与素白，饰有桂花纹样与玉兔图腾，衣间点缀金桂细节。女款温婉清雅，男款俊逸温润，整体廓形飘逸雅致，兼具中秋的团圆氛围与仙侠的仙气出尘感',
  '这套武侠情侣装以蓝黑为主调，融入黑羽与鎏金配饰，廓形利落飒爽，兼具江湖侠气与清冷感。女款灵动英气，男款俊逸冷冽，整体线条利落，细节处的羽饰与金属纹样强化了剑客的锋芒气质',
];

const commercialIllustrationTitles = [
  '《春苑佳人》',
  '《粉豹甜心》',
  '《春野拾光》',
  '《海屿氧气少女》',
  '《盛夏椰风》',
  '《粉雪赴冬约》',
  '《车载花信》',
  '《春风不语》',
  '《豹纹千禧日记》',
  '《暗夜花吻序》',
  '《十里红妆辞》',
  '《蛇年纳福・恭喜发财》',
  '《云间鹤鸣》',
  '《经幡下的期许》',
  '《雨庭秋思》',
  '《青笠侠客行》',
  '《小窗凝黛》',
  '《蓝衿花信》',
  '《檐下花间客》',
  '《敦煌揽月》',
  '《双影戍边关》',
];

const commercialIllustrationDescriptions = [
  '以江南园林为背景，绘制身着齐胸襦裙的古风仕女，人物妆容精致华贵，花草、蝴蝶点缀画面，叠加中式书法水印，氛围感诗意朦胧，可用于人设头像、文创周边商用。',
  '本幅千禧 Y2K 风格商业插画，塑造甜酷辣妹少女形象，粉黑豹纹穿搭搭配海量日系漫画贴纸元素，甜酷撞色吸睛，适合人设头像、二次元商用',
  '以春日原野为创作背景，长发少女身着浅绿裙装，依偎软萌白猫，繁花鲜果点缀画面，朦胧柔光营造治愈氛围，国风文字点缀，氛围感治愈，多用于头像、人设稿商用。',
  '采用通透水彩质感画风，刻画置身海底的温柔少女，丰富海洋生物与气泡点缀画面，环绕金鱼与海藻，清透蓝绿色调营造空灵水下氛围，适合头像、周边文创商业使用。',
  '以热带海岛夏日为主题，少女身着渐变泳装，搭配度假风配饰，椰子、小黄鸭烘托海滨氛围，明亮清透配色充满元气',
  '采用清新厚涂画风，刻画雪场元气少女形象，雪花、滑雪装备强化冬日场景感，身旁相伴哈士奇，满幅雪花元素烘托雪景氛围。',
  '以春日车载出行作为创作场景，少女身着温柔浅紫连衣裙，搭配鲜花与可爱玩偶，柔光滤镜烘托慵懒治愈氛围。',
  '国风梦幻画风塑造娇俏古风少女，丰富花卉、传统配饰营造春日盛景，错落书法排版增添古韵格调，四周繁花飞燕环绕，柔润鲜亮配色尽显古典灵动气质。',
  '美式复古胶片主题插画，以电影胶卷为画面边框，甜辣风少女搭配金属朋克配饰，故障风背景强化千禧年代质感，营造怀旧氛围感。',
  '暗黑浪漫风商业插画，身着红裙的少女静卧繁花之间，浓郁红绿撞色极具视觉张力，文艺英文文字铺满画面，暗调背景烘托浪漫慵懒氛围。',
  '中式古风婚嫁主题商业插画，女子身着传统刺绣嫁衣，头戴华丽凤冠手持喜扇，暖红复古色调氛围感浓厚光影烘托喜庆氛围。',
  '蛇年新春国风商业插画，红衣古风少女手捧元宝金蛇，搭配灯笼、红包等新年元素，红金配色喜庆热闹，适配新年头像、新春文创商用。',
  '清冷仙侠厚涂插画，塑造超然脱俗的吹笛神女，仙鹤飞鸟环绕周身，水墨质感背景烘托缥缈意境。',
  '国风厚涂插画刻画雪域藏族少女，华丽民族配饰搭配浓烈撞色服饰，经幡、民族纹样烘托地域特色，充满异域氛围感。',
  '婉约宋词主题插画，以庭院清秋为场景，柔和青绿色调营造淡淡的离愁意境，错落古风书法点缀画面，文艺氛围感十足。',
  '水墨厚涂古风插画，塑造快意潇洒的江湖女侠形象，竹林山野为背景，斗笠长剑尽显侠气，清雅青绿主调，搭配书法题字，潇洒氛围感拉满',
  '复古国风厚涂插画，刻画民国温婉旗袍佳人，精致刺绣旗袍搭配珍珠玉饰，花枝飞鸟烘托旧时光韵味。',
  '清新和风商业插画，身着浅蓝碎花和服的温婉少女手持油纸伞，繁花绿植环绕，清浅柔和色调治愈雅致',
  '新中式改良国风商业插画，粉调古风裙装少女置身繁花庭院，精致蕾丝花帽搭配簇簇山花，清新柔亮配色氛围感温婉。',
  '敦煌飞天主题商用插画，以蓝棕复古色调还原壁画质感，人物配饰纹样考究，手持民族团扇尽显西域仙气。',
  '古风双女主商业插画，一位身披鎏金战甲英气飒爽，一位身着红裙温婉雅致，红金色调恢弘大气，刻画戎装与红裙两位古风女子，硝烟氛围感背景烘托家国热血意境。',
];

const mythicalArtifactTitles = [
  '四神兽之《星澜青龙》',
  '四神兽之《炎华朱雀》',
  '《星河逐月》小稿',
  '四神兽之《玉甲玄武》',
  '四神兽之《霜翼白虎》',
  '七夕子女武器',
  '冬季圣诞坐骑设定',
  '峨眉门派武器设计',
  '慕容门派武器设计',
  '慕容门派武器设计',
  '旺仔黄忠联动皮肤',
  '桃花门派武器设计',
  '云竹净瓶',
  '《紫冥霜华剑》与《赤焰焚天斧》小稿',
  '青龙3D效果展示',
  '朱雀3D效果展示',
];

const mythicalArtifactDescriptions = [
  '这只青龙以星汉为灵感，主调为幽蓝与银白，鳞甲泛着虹彩微光，鬃毛如流雾般飘逸。颈间金饰嵌灵珠，周身星尘流转，兼具神龙的威严与仙气，整体线条灵动飘逸',
  '这只朱雀以烈焰为核心意象，主调为炽红与鎏金，羽翼渐变如焚天火焰，尾羽缀饰流光金羽与宝石，周身星火环绕，兼具上古神鸟的威严与涅槃重生的仙气',
  '这套星穹主题神器剑，以紫、蓝、金为主调，融入星月、星环与流金纹饰，剑格嵌琉璃宝珠，刃身泛着星尘微光，线条飘逸灵动，兼具仙侠仙气与神器的威严感，适配古风仙侠游戏中的高阶武器设定。',
  '这只玄武以古玉玄金为基调，龟甲饰云纹鎏金，蛇鳞呈半透质感，鬃毛如流雾飘逸。整体以半透渐变表现材质层次，线条沉稳又不失仙气，兼具上古神兽的威严与温润',
  '这只白虎以冰晶琉璃为灵感，通体呈半透蓝白质感，羽翼泛着冰蓝与鎏金光泽，鬃毛与尾羽如霜雾流动，周身萦绕寒气微光。整体造型英武灵动，兼具上古神兽的威严与仙气',
  '七夕主题武器成稿以成对、轻盈和节庆感为核心，材质上结合金属、玉石与流光特效，适合说明武器皮肤的主题转译能力。',
  '冬季圣诞坐骑结合节庆符号、暖色灯光和幻想坐骑结构，兼顾玩家第一眼识别、商城展示和模型落地。',
  '峨眉门派武器以优雅曲线、清透材质和门派气质为核心，重点体现武器造型与职业气质的匹配能力。',
  '这柄慕容剑以星月为核心意象，紫金配色清雅华贵。剑格嵌月形紫晶与流金纹饰，刃身自紫渐变至莹白，星环特效萦绕周身，兼具世家贵气与仙侠仙气，适配古风武侠游戏中的名门高阶武器设定。',
  '这柄慕容剑以紫金玄铁为骨，刃身渐变半透如凝月华，剑格饰鎏金云纹，萦绕清辉，兼具世家贵气与仙侠清逸感。',
  '联动皮肤将品牌识别元素与游戏角色装备结合，说明在商业合作需求下平衡 IP 符号、角色设定和美术风格的能力。',
  '这柄桃花剑以鎏金缠枝为骨，剑身半透如凝月华，内嵌星月流光，仙气飘逸，尽显清雅华贵，适配古风仙侠设定。',
  '此神器玉瓶以青釉为质，饰金云翠竹，瓶身流雾萦绕，坠有中国结流苏，清雅灵动，自带仙气，适配古风仙侠设定',
  '这套神器剑分两大系列：紫晶款以深紫与流光银为主调，刃身如凝月华，搭配水纹、星环特效，仙气飘逸；赤焰款以炽红为主色，斧形刃缀炎纹与骷髅元素，自带烈焰气场，兼具门派特色与仙侠武器的华丽质感。',
  '',
  '',
];

const modernFashionTitles = [
  '《聚光宣言-双影潮行》女',
  '《聚光宣言-双影潮行》男',
  '男款设定三视图',
  '女款设定三视图',
  '男款3D展示效果',
  '女款3D展示效果',
  '《弦音恋人》男',
  '《弦音恋人》女',
  '男款设定三视图',
  '女款设定三视图',
  '男款3D展示效果',
  '女款3D展示效果',
  '<樱粉告白>女',
  '<樱粉告白>男',
  '男款设定三视图',
  '女款设定三视图',
  '《绒绒暖冬居家》女',
  '《绒绒暖冬居家》男',
  '男款设定三视图',
  '女款设定三视图',
  '《宫阙同辉—甄嬛传联名》男',
  '《宫阙同辉—甄嬛传联名》女',
  '男款设定三视图',
  '女款设定三视图',
  '女款卡通3D展示效果',
  '男款卡通3D展示效果',
];

const modernFashionDescriptions = [
  '本套装以街头机能风 + 高街运动风为核心，设计通过统一的黑白红撞色、运动元素、机能细节实现 CP 感，女性造型偏向辣妹甜酷风，以黑白红为主色调，采用反差廓形设计：oversize 赛车风夹克落肩版型，衣身点缀字母徽章印花,内搭黑色运动抹胸，搭配高腰黑短裤与金属链条，塑造甜酷飒爽、适配游戏动态光影的街头辣妹形象。',
  '男性造型偏向少年感酷拽风，同色系黑白红拼接运动夹克为核心，立领落肩版型搭配字母印花，内搭简约白 T；下装为白色工装短裤，呼应上衣条纹元素，辅以厚底德比靴、中筒条纹袜及机能斜挎包，整体清爽利落，以少年感廓形与金属细节，打造适配游戏场景的拽酷高街潮人形象。',
  '',
  '',
  '',
  '',
  '男生设计以「街头摇滚」为核心风格，水洗牛仔夹克搭配宽松机能工装裤，黑领带与金属链点缀，打造随性酷感。白耳机与吉他元素强化音乐人设，黑鞋提亮造型，整体廓形利落硬朗，适配游戏舞台场景，细节兼顾街头叛逆与潮流质感。',
  '女生设计走「甜酷摇滚」路线，短款牛仔马甲搭配露肩白纱袖衬衫，下搭不规则蕾丝裙，甜飒反差强烈。棕色长靴呼应复古调性，耳机与吉他元素呼应人设，金属配饰增添细节。整体线条柔美又带叛逆感，适配游戏舞台场景，兼具少女感与摇滚氛围。',
  '',
  '',
  '',
  '',
  '女生设计以春日甜妹为核心风格，浅粉碎花露肩连衣裙搭配荷叶边泡泡袖，轻盈裙摆呼应樱花主题。搭配藤编花篮与花朵装饰凉鞋，颈间、发间点缀小花配饰，整体廓形柔美灵动，色彩柔和粉嫩，适配游戏春日约会场景，细节充满浪漫少女感，兼具飘逸感与角色辨识度。',
  '男生设计走清爽文艺风，浅蓝色菱格纹短袖衬衫搭配浅卡其工装阔腿裤，金属链条与棕色腰带增添细节层次。搭配帆布背包与小白鞋，手持春日特饮呼应主题，整体廓形利落舒展，色彩清新柔和，适配游戏春日休闲场景，兼具少年感与温柔氛围感，细节精致不繁杂。',
  '',
  '',
  '女生设计以「冬日软萌宅家」为核心风格，浅粉色吊带睡裙搭配红白格纹毛绒外套，外套毛领与毛球装饰强化暖感。搭配带蝴蝶结与毛球的中筒袜、毛绒拖鞋，小熊玩偶与珍珠项链点缀细节，整体廓形宽松软糯，色彩柔和甜美，适配游戏温馨居家场景，充满少女心与治愈感。',
  '男生设计走「慵懒男友风」，灰调费尔岛花纹针织开衫搭配粉色连帽卫衣，层次丰富又温暖柔和。下装浅灰色宽松卫裤，搭配毛绒拖鞋，小熊玩偶呼应女款元素，整体廓形宽松舒适，色彩偏冷调却因粉色内搭增添温柔感，适配游戏居家休闲场景，兼具松弛感与冬日暖感。',
  '',
  '',
  '以帝王明黄为主色调，复刻清代吉服褂形制，龙纹织金暗纹彰显皇权。搭配朝珠、东珠帽顶与翡翠配饰，衣缘镶边以繁复纹样体现规制，整体廓形端庄肃穆，细节还原皇家礼仪，贴合雍正威严冷峻的帝王人设，适配宫廷题材游戏场景。',
  '以玫红与绛紫为主色，采用清代贵妃旗装形制，通身牡丹织金纹样，寓意华贵与盛宠。搭配点翠凤冠与东珠一耳三钳，衣边镶彩绣花卉滚边，廓形雍容华丽，细节尽显骄矜明艳，贴合华妃恃宠而骄的人设，适配宫廷题材游戏场景',
  '',
  '',
  '',
  '',
];

export const CATEGORIES: Category[] = [
  {
    id: 'gufeng-shizhuang',
    title: '古风时装',
    subtitle: 'Ancient Costume Design',
    coverImage: ancientFashionImages[0].gallery,
    stackImages: [ancientFashionImages[1].thumb, ancientFashionImages[2].thumb],
    artworks: makeArtworks('gufeng-shizhuang', ancientFashionImages, ancientFashionTitles, ancientFashionDescriptions)
  },
  {
    id: 'xiandai-shizhuang',
    title: '现代时装',
    subtitle: 'Modern Fashion Design',
    coverImage: modernFashionImages[0].thumb,
    stackImages: [modernFashionImages[1].thumb, modernFashionImages[2].thumb],
    artworks: makeArtworks('xiandai-shizhuang', modernFashionImages, modernFashionTitles, modernFashionDescriptions, modernFashionLayouts)
  },
  {
    id: 'shenshou-shenqi',
    title: '神兽神器',
    subtitle: 'Mythical Creature & Artifact',
    coverImage: mythicalArtifactImages[0].gallery,
    stackImages: [mythicalArtifactImages[1].thumb, mythicalArtifactImages[2].thumb],
    artworks: makeArtworks('shenshou-shenqi', mythicalArtifactImages, mythicalArtifactTitles, mythicalArtifactDescriptions)
  },
  {
    id: 'shangye-chahua',
    title: '商业插画',
    subtitle: 'Commercial Illustration',
    coverImage: commercialIllustrationImages[7].thumb,
    stackImages: [commercialIllustrationImages[1].thumb, commercialIllustrationImages[2].thumb],
    artworks: makeArtworks('shangye-chahua', commercialIllustrationImages, commercialIllustrationTitles, commercialIllustrationDescriptions)
  }
];

export const RESUME_PROFILE: ResumeProfile = {
  name: '郭靖',
  phone: '18301683592',
  email: '1446629536@qq.com',
  location: '北京',
  title: '游戏角色原画',
  photoUrl: '/resume-photo-original.jpg?v=20260701-hd',
  workExperience: [
    {
      company: '腾讯系项目组（北京永航科技合作）',
      role: '高级游戏原画师 / QQ炫舞手游',
      date: '2025年09月 - 2026年07月',
      location: '北京',
      bullets: [
        '负责角色类视觉内容生产，包括角色设定、服装皮肤、立绘、主题系列神兽设计。根据主题活动、赛季玩法与用户群体审美，完成角色设定、服饰设计、立绘氛围绘制、特效元素设计等，独立完成整套皮肤从概念到成稿并根据运营数据、用户反馈优化角色风格，提高用户付费转化率与皮肤渗透率；同时参与 IP 视觉统一管理，与策划、3D 建模、动效团队进行深度协作。',
        '累计设计角色 / 服装 / 立绘约 30+ 件内容，其中 13+ 件成功在正式版本中上线。',
        '负责 10+ 套大型主题活动皮肤完整视觉方案设计，负责 3 对珍兽系列的造型视觉设计，包含体型、结构、材质、动效、三视图。',
        '多个皮肤上线后，对应活动页面点击率提升 17%+，付费转化提升 8%+。',
        '自建并训练角色风格模型，将 AI 引入前期方案发散阶段，使产出速度提升 2 倍；利用 ControlNet + 局部重绘进行细化迭代，减少重复劳动，使角色立绘细化阶段平均节省 30% 时间。'
      ]
    },
    {
      company: '独立原创 IP 工作室（个人创业）',
      role: '独立创作者',
      date: '2024年09月 - 2025年08月',
      location: '北京',
      summary: '围绕个人原创世界观与角色体系，打造了创作者个人的品牌矩阵，通过会员订阅、定制稿件、扭蛋盲盒、衍生数字内容等多元方式完成商业化运营变现。',
      bullets: [
        '全年维持稳定内容产出、粉丝增长与会员留存，形成完整的内容-用户-变现闭环。',
        '年度累计产出 80+ 张高品质原创作品，包含主角设定、皮肤、立绘、主题系列图，输出 10+ 主题系列作品，并形成个人风格标签化。',
        '通过持续更新作品、活动互动，全年新增粉丝 5,000+，全年稳定维持 600+ 名付费会员。',
        '商业变现覆盖会员订阅、接稿、设计专属主题扭蛋活动、探索角色头像框等周边 / 数字版权，累计售出 500+ 份。'
      ]
    },
    {
      company: '搜狐畅游',
      role: '游戏角色原画师 / 《天龙八部》手游',
      date: '2021年07月 - 2024年08月',
      location: '北京',
      bullets: [
        '负责节日、主题、IP 联动内容的角色服装、武器、武魂、宠物、坐骑等视觉设计，并基于世界观和门派文化进行角色主题构建，输出结构草图、风格方向稿、色彩稿、最终成稿。',
        '3 年累计上线内容超过 80+ 件，包括服装 / 皮肤 40+ 套，武器 10+ 件，武魂 / 宠物 20+ 组，坐骑 10+ 款。',
        '所负责皮肤主题平均付费转化率较常规款提高 12%-18%，多套皮肤进入当期活动销量 TOP 3，联动内容曝光量达到平时版本 200%+。',
        '高效快速完成角色设计方向设计和细化工作，结合 AI 的 LoRA 模型进行前期方向探索，用于爆发式生成主题草图、构图、材质思路等，为团队提供更多视觉可能性。',
        '引入 AI 工作流后，通过 LoRA 快速生成方向稿，前期方案探索时间缩短 30%，AI 辅助细化使最终成稿渲染速度提升 20%-30%。',
        '与 3D、动效团队协作效率提升显著，AI 优化的“结构拟真稿”让建模还原度稳定在 90%+，减少沟通回合，返工率下降约 20%。'
      ]
    }
  ],
  education: [
    {
      school: '北京工业大学',
      tags: ['211', '双一流'],
      date: '2017年09月 - 2021年07月',
      location: '北京',
      major: '动画专业 本科 艺术设计学院',
      description: '第七届中国大学生游戏设计大赛虚拟现实设计大赛，获得金辰奖游戏角色设计二等奖。'
    }
  ]
};

export const ARTIST_INFO = {
  name: '郭靖',
  englishName: 'Guo Jing',
  title: '游戏原画设计师 / Concept Artist',
  slogan: '笔墨之间，构建幻想。',
  // Replaced simple description with structured data
  intro: '郭靖 | 游戏原画师 | 独立数字艺术家',
  subIntro: '专注东方美学与现代潮流的视觉重构，擅长高精度角色设计与IP风格化塑造。',
  highlights: [
    { label: '核心资历', content: '曾任职于搜狐畅游、腾讯系合作项目，负责《天龙八部》手游、《QQ炫舞》手游核心视觉设计。' },
    { label: '专业领域', content: 'AAA级角色概念设计 / 国风武侠美学 / 现代时尚人物塑造 / AI辅助前沿工作流。' },
    { label: '独立艺术', content: '作为独立创作者，成功孵化了个人原创世界观IP与品牌矩阵，形成高粘性粉丝群体。' },
    { label: '教育背景', content: '北京工业大学 动画专业（211双一流）。' }
  ],
  email: '1446629536@qq.com',
  phone: '18301683592',
};
