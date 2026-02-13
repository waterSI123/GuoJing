import { Category } from './types';

// Helper to generate artworks
const generateArtworks = (prefix: string, count: number, startId: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: `${prefix}${i}`,
    title: `作品展示 ${i + 1} - Artwork ${i + 1}`,
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
  name: '果酱',
  englishName: 'Guo Jiang',
  title: '游戏原画设计师 / Concept Artist',
  slogan: '笔墨之间，构建幻想。',
  description: '专注于新中式幻想风格的角色与场景设计。七年从业经验，曾参与《山海经异闻录》、《剑侠图》等项目开发。擅长在传统水墨韵味与现代游戏美术之间寻找平衡。',
  email: 'guojiang_art@example.com',
  artstation: 'artstation.com/guojiang',
};