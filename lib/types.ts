export type Category = 'cream-pies' | 'cream-puffs' | 'seasonal' | 'drinks';

export interface MenuItem {
  id: string;
  name: string;
  slug: string;
  category: Category;
  price: number;
  description: string;
  image: string; // path under /public
  available: boolean;
  tags?: string[];
}

export interface CartItem {
  itemId: string;
  qty: number;
}

export interface OrderInput {
  items: CartItem[];
  customerName: string;
  email: string;
  phone: string;
  pickupDate: string; // ISO
  pickupTime: string; // HH:MM
  notes?: string;
}

export interface OrderStored extends OrderInput {
  id: string;
  createdAt: string;
  total: number;
}
