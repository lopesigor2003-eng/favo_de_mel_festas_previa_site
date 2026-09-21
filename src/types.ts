export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: 'candy' | 'popcorn' | 'palette' | 'castle';
  highlights: string[];
  includedItems?: string[];
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  date: string;
  rating: number; // 5 stars
  avatarInitial: string;
  comment: string;
  verifiedReview: boolean;
}

export interface GalleryImageItem {
  id: string;
  title: string;
  category: 'Decorações' | 'Brinquedos' | 'Espaço' | 'Ambientes';
  url: string;
  mapsUrl: string;
  alt: string;
  description: string;
}

export interface ContactFormData {
  nome: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
}

export interface NavItem {
  label: string;
  href: string;
}
