export type Program = {
  slug: string;
  number: string;
  title: string;
  category: GalleryCategory;
  summary: string;
  image: string;
};

export type FocusArea = {
  title: string;
  body: string;
  caption: string;
  image: string;
};

export type GalleryCategory = 'Education' | 'Health' | 'Skills' | 'Culture' | 'Community';

export type GalleryImage = {
  id: string;
  title: string;
  category: GalleryCategory;
  src: string;
  ratio: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

export type TimelineEntry = {
  year: string;
  title: string;
  body: string;
  image: string;
};

export type Value = {
  title: string;
  body: string;
};