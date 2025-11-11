
export enum MenuItemCategory {
  HOT_COFFEE = 'Hot Coffees',
  ICED_COFFEE = 'Iced Coffees',
  PASTRIES = 'Pastries',
  SPECIALTY = 'Specialty Drinks',
}

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: MenuItemCategory;
  imageUrl: string;
}

export interface GalleryImage {
    id: number;
    src: string;
    alt: string;
    span: 'row-span-1' | 'row-span-2' | 'col-span-1' | 'col-span-2';
}
