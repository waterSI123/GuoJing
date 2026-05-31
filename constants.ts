import { Category, ResumeProfile } from './types';

// Helper to generate artworks
const generateArtworks = (prefix: string, count: number, startId: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: `${prefix}${i}`,
    title: `作品展示名称 ${i + 1}`,
    // New Chinese style placeholder description
    description: '设计灵感源自传统神话传说，结合了东方服饰的形制特点。色彩上选用了低饱和度的传统色系，试图营造出一种神秘而庄重的韵味。细节处运用了工笔画的线条表现手法，留白处理给予观者更多的想象空间。',
    imageUrl: `https://picsum.photos/id/${(startId + i) % 1000}/1200/1600`
  }));
};

export const CATEGORIES: Category[] = [
  {
    id: 'modern-fashion',
    title: '现代时尚服装设计',
    subtitle: 'Modern Fashion Costume',
    coverImage: 'https://picsum.photos/id/1005/600/800',
    stackImages: ['https://picsum.photos/id/1012/600/800', 'https://picsum.photos/id/1027/600/800'],
    artworks: generateArtworks('char', 6, 1005)
  },
  {
    id: 'ancient-character',
    title: '古风人物设计',
    subtitle: 'Ancient Character Design',
    coverImage: 'https://picsum.photos/id/1036/800/600',
    stackImages: ['https://picsum.photos/id/1015/800/600', 'https://picsum.photos/id/1047/800/600'],
    artworks: generateArtworks('env', 6, 1036)
  },
  {
    id: 'artifact',
    title: '神器设计',
    subtitle: 'Artifact Design',
    coverImage: 'https://picsum.photos/id/1081/600/800',
    stackImages: ['https://picsum.photos/id/1050/600/800', 'https://picsum.photos/id/1069/600/800'],
    artworks: generateArtworks('promo', 6, 1081)
  },
  {
    id: 'commercial-illustration',
    title: '商业化插画',
    subtitle: 'Commercial Illustration',
    coverImage: 'https://picsum.photos/id/1003/600/800',
    stackImages: ['https://picsum.photos/id/1024/600/800', 'https://picsum.photos/id/1025/600/800'],
    artworks: generateArtworks('creature', 4, 1003)
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
