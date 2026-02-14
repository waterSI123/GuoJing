import { Category } from './types';

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
    id: 'char',
    title: '角色 · Character',
    subtitle: '武侠 / 幻想 / 设定',
    coverImage: 'https://picsum.photos/id/1005/600/800',
    stackImages: ['https://picsum.photos/id/1012/600/800', 'https://picsum.photos/id/1027/600/800'],
    artworks: generateArtworks('char', 6, 1005)
  },
  {
    id: 'env',
    title: '场景 · Environment',
    subtitle: '山水 / 建筑 / 氛围',
    coverImage: 'https://picsum.photos/id/1036/800/600',
    stackImages: ['https://picsum.photos/id/1015/800/600', 'https://picsum.photos/id/1047/800/600'],
    artworks: generateArtworks('env', 6, 1036)
  },
  {
    id: 'promo',
    title: '美宣 · Illustration',
    subtitle: '构图 / 叙事 / 渲染',
    coverImage: 'https://picsum.photos/id/1081/600/800',
    stackImages: ['https://picsum.photos/id/1050/600/800', 'https://picsum.photos/id/1069/600/800'],
    artworks: generateArtworks('promo', 6, 1081)
  },
  {
    id: 'creature',
    title: '异兽 · Creature',
    subtitle: '神话 / 灵兽 / 妖魔',
    coverImage: 'https://picsum.photos/id/1003/600/800',
    stackImages: ['https://picsum.photos/id/1024/600/800', 'https://picsum.photos/id/1025/600/800'],
    artworks: generateArtworks('creature', 4, 1003)
  },
  {
    id: 'weapon',
    title: '神兵 · Arsenal',
    subtitle: '冷兵器 / 法宝 / 道具',
    coverImage: 'https://picsum.photos/id/1062/600/800',
    stackImages: ['https://picsum.photos/id/1070/600/800', 'https://picsum.photos/id/1080/600/800'],
    artworks: generateArtworks('weapon', 4, 1062)
  },
  {
    id: 'sketch',
    title: '手稿 · Sketch',
    subtitle: '速写 / 构思 / 草图',
    coverImage: 'https://picsum.photos/id/1059/600/800',
    stackImages: ['https://picsum.photos/id/1060/600/800', 'https://picsum.photos/id/1061/600/800'],
    artworks: generateArtworks('sketch', 8, 1059)
  },
  {
    id: 'ink',
    title: '水墨 · Ink Wash',
    subtitle: '传统 / 写意 / 实验',
    coverImage: 'https://picsum.photos/id/1043/600/800',
    stackImages: ['https://picsum.photos/id/1044/600/800', 'https://picsum.photos/id/1045/600/800'],
    artworks: generateArtworks('ink', 5, 1043)
  },
  {
    id: 'ui',
    title: '界面 · UI Design',
    subtitle: '扁平 / 材质 / 交互',
    coverImage: 'https://picsum.photos/id/1/600/800',
    stackImages: ['https://picsum.photos/id/180/600/800', 'https://picsum.photos/id/201/600/800'],
    artworks: generateArtworks('ui', 4, 1)
  },
  {
    id: '3d',
    title: '雕刻 · 3D Sculpt',
    subtitle: 'ZBrush / Blender / 材质',
    coverImage: 'https://picsum.photos/id/237/600/800',
    stackImages: ['https://picsum.photos/id/238/600/800', 'https://picsum.photos/id/239/600/800'],
    artworks: generateArtworks('3d', 4, 237)
  },
  {
    id: 'story',
    title: '分镜 · Storyboard',
    subtitle: '叙事 / 镜头 / 动态',
    coverImage: 'https://picsum.photos/id/250/600/800',
    stackImages: ['https://picsum.photos/id/251/600/800', 'https://picsum.photos/id/252/600/800'],
    artworks: generateArtworks('story', 6, 250)
  },
  {
    id: 'study',
    title: '习作 · Studies',
    subtitle: '光影 / 色彩 / 解剖',
    coverImage: 'https://picsum.photos/id/301/600/800',
    stackImages: ['https://picsum.photos/id/302/600/800', 'https://picsum.photos/id/304/600/800'],
    artworks: generateArtworks('study', 8, 301)
  },
  {
    id: 'collab',
    title: '合作 · Collab',
    subtitle: '项目 / 外包 / 联动',
    coverImage: 'https://picsum.photos/id/310/600/800',
    stackImages: ['https://picsum.photos/id/311/600/800', 'https://picsum.photos/id/312/600/800'],
    artworks: generateArtworks('collab', 4, 310)
  }
];

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