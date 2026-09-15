export type MenuCategory = 'all' | 'eel' | 'set' | 'meat' | 'lunch' | 'side' | 'drink';

export interface MenuItem {
  id: string;
  name: string;
  category: 'eel' | 'meat' | 'side' | 'drink';
  price: number;
  weight?: string;
  pricePer100g?: string;
  description: string;
  tag?: string;
  isSpicy?: boolean;
  image?: string;
  pairingNote?: string;
  minOrderNotice?: string;
}

export interface SetMenuItem {
  id: string;
  name: string;
  targetPeople: string;
  totalWeight: string;
  price: number;
  items: string[];
  description: string;
  tag: string;
  popularRank?: number;
  badgeText?: string;
}

export interface LunchSpecialItem {
  id: string;
  code?: string;
  name: string;
  price: number;
  description: string;
  includes?: string[];
  hours?: string;
  servingTime?: string;
  minOrder?: string;
}

export interface StoreFeature {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  src: string;
  description: string;
}
