export interface Artwork {
  id: string;
  title: string;
  imageUrl: string;
  fullImageUrl?: string;
  layout?: 'full' | 'half';
  year?: string;
  description?: string; // Added description field
}

export interface Category {
  id: string;
  title: string; // e.g., "角色设计", "场景原画"
  subtitle: string; // e.g., "Character Design"
  coverImage: string;
  stackImages: string[]; // Images that slide out on hover
  artworks: Artwork[]; // Full list for the modal
}

export interface ResumeItem {
  company: string;
  role: string;
  date: string;
  location: string;
  summary?: string;
  bullets: string[];
}

export interface EducationItem {
  school: string;
  tags: string[];
  date: string;
  location: string;
  major: string;
  description: string;
}

export interface ResumeProfile {
  name: string;
  phone: string;
  email: string;
  location: string;
  title: string;
  photoUrl: string;
  workExperience: ResumeItem[];
  education: EducationItem[];
}
