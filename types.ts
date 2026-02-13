export interface Artwork {
  id: string;
  title: string;
  imageUrl: string;
  year?: string;
}

export interface Category {
  id: string;
  title: string; // e.g., "角色设计", "场景原画"
  subtitle: string; // e.g., "Character Design"
  coverImage: string;
  stackImages: string[]; // Images that slide out on hover
  artworks: Artwork[]; // Full list for the modal
}