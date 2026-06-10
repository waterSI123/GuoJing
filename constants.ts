import { Category, ResumeProfile } from './types';

const portfolioBaseUrl = (import.meta.env.VITE_PORTFOLIO_BASE_URL ?? '').replace(/\/$/, '');
const portfolioImage = (path: string) => `${portfolioBaseUrl}${path}`;

const makeArtworks = (
  prefix: string,
  paths: string[],
  titles: string[],
  descriptions: string[],
  layouts?: Array<'full' | 'half'>
) => paths.map((imageUrl, index) => ({
  id: `${prefix}-${String(index + 1).padStart(2, '0')}`,
  title: titles[index],
  description: descriptions[index],
  imageUrl,
  fullImageUrl: imageUrl,
  layout: layouts?.[index],
}));

const ancientFashionImages = Array.from({ length: 9 }, (_, index) => portfolioImage(`/portfolio/gufeng-shizhuang/${String(index + 1).padStart(2, '0')}.jpg`));
const commercialIllustrationImages = [
  ...Array.from({ length: 13 }, (_, index) => portfolioImage(`/portfolio/shangye-chahua/${index + 1}.png`)),
  portfolioImage('/portfolio/shangye-chahua/14.jpg'),
  ...Array.from({ length: 7 }, (_, index) => portfolioImage(`/portfolio/shangye-chahua/${index + 15}.png`)),
];
const mythicalArtifactImages = [
  ...Array.from({ length: 14 }, (_, index) => portfolioImage(`/portfolio/shenshou-shenqi/${String(index + 1).padStart(2, '0')}.jpg`)),
  portfolioImage('/portfolio/shenshou-shenqi/15.gif'),
  portfolioImage('/portfolio/shenshou-shenqi/16.gif'),
];
const modernFashionImages = [
  portfolioImage('/portfolio/xiandai-shizhuang/01.2.PNG'),
  portfolioImage('/portfolio/xiandai-shizhuang/01.3.PNG'),
  portfolioImage('/portfolio/xiandai-shizhuang/02.jpg'),
  portfolioImage('/portfolio/xiandai-shizhuang/03.jpg'),
  portfolioImage('/portfolio/xiandai-shizhuang/04.gif'),
  portfolioImage('/portfolio/xiandai-shizhuang/05.gif'),
  portfolioImage('/portfolio/xiandai-shizhuang/02.2.PNG'),
  portfolioImage('/portfolio/xiandai-shizhuang/02.3.PNG'),
  portfolioImage('/portfolio/xiandai-shizhuang/07.jpg'),
  portfolioImage('/portfolio/xiandai-shizhuang/08.jpg'),
  portfolioImage('/portfolio/xiandai-shizhuang/09.gif'),
  portfolioImage('/portfolio/xiandai-shizhuang/10.gif'),
  portfolioImage('/portfolio/xiandai-shizhuang/03.02.JPG'),
  portfolioImage('/portfolio/xiandai-shizhuang/03.03.JPG'),
  portfolioImage('/portfolio/xiandai-shizhuang/12.jpg'),
  portfolioImage('/portfolio/xiandai-shizhuang/13.jpg'),
  portfolioImage('/portfolio/xiandai-shizhuang/04.02.PNG'),
  portfolioImage('/portfolio/xiandai-shizhuang/04.03.PNG'),
  portfolioImage('/portfolio/xiandai-shizhuang/15.jpg'),
  portfolioImage('/portfolio/xiandai-shizhuang/16.jpg'),
  portfolioImage('/portfolio/xiandai-shizhuang/05,03.PNG'),
  portfolioImage('/portfolio/xiandai-shizhuang/05.02.PNG'),
  portfolioImage('/portfolio/xiandai-shizhuang/18.jpg'),
  portfolioImage('/portfolio/xiandai-shizhuang/19.jpg'),
  portfolioImage('/portfolio/xiandai-shizhuang/20.gif'),
  portfolioImage('/portfolio/xiandai-shizhuang/21.gif'),
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
  '翠羽霜裘双人套装',
  '春水流光古风礼服',
  '金羽华服角色设定',
  '雪色披风服饰拆解',
  '青金宫廷套装方案',
  '侠骨云纹门派服设',
  '月白长裾双人设定',
  '碧玉流苏细节稿',
  '古风套装三视图整合',
];

const ancientFashionDescriptions = [
  '面向游戏皮肤量产流程完成的双人套装设定，重点展示男女款差异、发饰、披肩、鞋靴与材质拆解；青绿、月白和金饰的组合能清晰传达高规格节庆皮肤的品质定位。',
  '围绕水系与花枝主题建立服饰语言，使用轻纱、珠饰、飘带和局部红色点缀强化角色记忆点；图中保留正背面与配件信息，便于 3D 建模和动效团队对齐结构。',
  '以羽翼披肩和金属胸饰作为第一视觉层级，解决古风服装容易轮廓相近的问题；整张设定兼顾立绘表现、局部结构和可拆分资产说明。',
  '冬季主题套装重点控制毛领、披风、袖摆与刺绣的体量关系，让角色在远景中有明确剪影，近景中有足够材质细节支撑付费皮肤品质。',
  '宫廷感配色与流苏配件形成系列化识别，适合作为活动主视觉或商城展示套装；设计中兼顾男女款的统一调性与角色身份差异。',
  '以门派气质为设计出发点，把云纹、束带、轻甲结构融入传统服饰，展示从世界观关键词到可执行服装方案的转译能力。',
  '双人套装强调系列化规划能力，男女款在色彩、纹样和配饰上保持统一，同时通过袖型、腰封和肩部结构体现角色差异。',
  '该稿聚焦发饰、珠串、袖口、腰封等可落地细节，适合作为与模型、贴图协作的结构参考，也体现对材质层级和制作成本的控制。',
  '完整整合三视图、配件和局部拆解，展示从概念草案到生产交付图的整理能力，适合放在求职作品集中说明项目落地经验。',
];

const commercialIllustrationTitles = Array.from({ length: 21 }, (_, index) => [
  '玉雪玲珑主题海报',
  '雨疏桐落少女插画',
  '花影琉光头像稿',
  '蓝调国风宣传图',
  '鎏金花窗视觉稿',
  '春水杨花商业插画',
  '清荷少女氛围图',
  '锦瑟华章竖版海报',
  '月下花笺头像稿',
  '绮梦国风宣发图',
  '浅金复古视觉稿',
  '霓光花语头像稿',
  '墨色花影插画',
  '青瓷少女商业图',
  '冷月银饰头像稿',
  '花枝叠影宣发图',
  '柔光少女视觉稿',
  '复古拼贴海报',
  '长图商业展示稿',
  '暖金花语头像稿',
  '流光少女氛围稿',
][index]);

const commercialIllustrationDescriptions = commercialIllustrationTitles.map((title) =>
  `${title}面向商业传播场景绘制，重点强化人物面部吸引力、主题包装、字体装饰和社媒缩略图识别度；画面兼顾精修完成度与活动宣发所需的视觉冲击力。`
);

const mythicalArtifactTitles = [
  '星河灵龙神兽设定',
  '冰蓝灵兽造型方案',
  '主题神兽概念草图',
  '瑞兽结构展示稿',
  '灵兽系列设定整合',
  '七夕子女武器成稿',
  '冬季圣诞坐骑设定',
  '峨眉门派武器设计',
  '慕容门派武器设计',
  '慕容武器旧版方案',
  '旺仔黄忠联动皮肤',
  '桃花门派武器设计',
  '神器细化展示稿',
  '武器草图方案二',
  '神兽动态展示一',
  '神兽动态展示二',
];

const mythicalArtifactDescriptions = [
  '神兽设定围绕东方龙形与星河材质展开，包含氛围图、正背视角和局部形态说明；重点展示幻想生物从概念气质到可建模结构的完整表达。',
  '以冰蓝、银白和金饰建立清冷华丽的视觉基调，重点控制头部识别、躯干动势和尾部节奏，适合展示生物造型与材质想象能力。',
  '主题神兽草图保留比例、体型和装饰方向的快速推敲过程，体现前期方案发散能力以及与策划需求对齐的设计思路。',
  '该瑞兽稿重点说明身体结构、挂件位置与色彩层级，既满足神话感，也为模型拆分、绑定和特效挂点提供可执行参考。',
  '系列整合图用于统一神兽资产的剪影、材质和局部装饰语言，适合在项目中承担概念统一和跨岗位沟通的角色。',
  '七夕主题武器成稿以成对、轻盈和节庆感为核心，材质上结合金属、玉石与流光特效，适合说明武器皮肤的主题转译能力。',
  '冬季圣诞坐骑结合节庆符号、暖色灯光和幻想坐骑结构，兼顾玩家第一眼识别、商城展示和模型落地。',
  '峨眉门派武器以优雅曲线、清透材质和门派气质为核心，重点体现武器造型与职业气质的匹配能力。',
  '慕容门派武器使用更强的金属结构和装饰节奏，突出攻击属性、门派身份与高阶装备的华丽度。',
  '旧版慕容方案保留剪影探索和比例调整痕迹，适合展示设计迭代过程，而不仅是最终成稿。',
  '联动皮肤将品牌识别元素与游戏角色装备结合，说明在商业合作需求下平衡 IP 符号、角色设定和美术风格的能力。',
  '桃花门派武器以花枝、玉色和柔性曲线组织结构，展示将门派文化转化为道具造型语言的能力。',
  '神器细化稿集中表现材质、花纹、结构和光效关系，可作为模型、贴图、特效协作时的明确生产参考。',
  '武器草图保留方案探索过程，重点展示剪影变化、比例取舍和主题元素组合，体现快速产出多方向方案的能力。',
  '动态展示用于验证神兽待机或展示动作的视觉节奏，重点观察飘带、鬃毛和光效在运动中的层级关系。',
  '通过短循环动态检查姿态识别度，确保静态设定进入动效环节后仍保留优雅轮廓和主题辨识。',
];

const modernFashionTitles = Array.from({ length: 26 }, (_, index) => [
  '黑白运动套装展示稿一',
  '黑白运动套装展示稿二',
  '黑白运动男款设定',
  '黑白运动女款设定',
  '黑白运动动态展示一',
  '黑白运动动态展示二',
  '未来机能套装展示稿一',
  '未来机能套装展示稿二',
  '未来机能男款设定',
  '未来机能女款设定',
  '未来机能动态展示一',
  '未来机能动态展示二',
  '第三组潮流套装展示稿一',
  '第三组潮流套装展示稿二',
  '第三组男款设定',
  '第三组女款设定',
  '第四组主题套装展示稿一',
  '第四组主题套装展示稿二',
  '第四组男款设定',
  '第四组女款设定',
  '第五组主题套装展示稿一',
  '第五组主题套装展示稿二',
  '第五组男款设定',
  '第五组女款设定',
  '第五组动态展示一',
  '第五组动态展示二',
][index]);

const modernFashionDescriptions = modernFashionTitles.map((title) =>
  `${title}面向现代时装类游戏皮肤设计，重点展示潮流趋势提炼、男女款系列化、配饰层级和舞台展示效果；设计兼顾玩家购买欲、角色辨识度与后续模型落地。`
);

export const CATEGORIES: Category[] = [
  {
    id: 'gufeng-shizhuang',
    title: '古风时装',
    subtitle: 'Ancient Costume Design',
    coverImage: ancientFashionImages[0],
    stackImages: [ancientFashionImages[1], ancientFashionImages[2]],
    artworks: makeArtworks('gufeng-shizhuang', ancientFashionImages, ancientFashionTitles, ancientFashionDescriptions)
  },
  {
    id: 'xiandai-shizhuang',
    title: '现代时装',
    subtitle: 'Modern Fashion Design',
    coverImage: modernFashionImages[0],
    stackImages: [modernFashionImages[1], modernFashionImages[2]],
    artworks: makeArtworks('xiandai-shizhuang', modernFashionImages, modernFashionTitles, modernFashionDescriptions, modernFashionLayouts)
  },
  {
    id: 'shenshou-shenqi',
    title: '神兽神器',
    subtitle: 'Mythical Creature & Artifact',
    coverImage: mythicalArtifactImages[0],
    stackImages: [mythicalArtifactImages[1], mythicalArtifactImages[2]],
    artworks: makeArtworks('shenshou-shenqi', mythicalArtifactImages, mythicalArtifactTitles, mythicalArtifactDescriptions)
  },
  {
    id: 'shangye-chahua',
    title: '商业插画',
    subtitle: 'Commercial Illustration',
    coverImage: portfolioImage('/portfolio/shangye-chahua/8.png'),
    stackImages: [commercialIllustrationImages[1], commercialIllustrationImages[2]],
    artworks: makeArtworks('shangye-chahua', commercialIllustrationImages, commercialIllustrationTitles, commercialIllustrationDescriptions)
  }
];

export const RESUME_PROFILE: ResumeProfile = {
  name: '郭靖',
  phone: '18301683592',
  email: '1446629536@qq.com',
  location: '北京',
  title: '游戏角色原画',
  photoUrl: '/resume-photo.png',
  workExperience: [
    {
      company: '腾讯系项目组（北京永航科技合作）',
      role: '高级游戏原画师 / QQ炫舞手游',
      date: '2025年09月 - 至今',
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
        '引入 AIT 工作流后，通过 LoRA 快速生成方向稿，前期方案探索时间缩短 30%，AI 辅助细化使最终成稿渲染速度提升 20%-30%。',
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
