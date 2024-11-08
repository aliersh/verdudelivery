export interface LineItem {
  id: string;
  variant_id: string;
  quantity: number;
  metadata?: { unit?: string };
  thumbnail?: string;
  title?: string;
  product_title?: string;
  unit_price: number;
  adjustments?: {
    item_id: string;
    amount: number;
    description: string;
  }[];
}

export interface StoreCart {
  id: string;
  items: LineItem[];
  subtotal: number;
  region?: {
    id: string;
    name: string;
    currency_code: string;
    };
}

export interface CartContextType {
  cart?: StoreCart;
  refreshCart: () => void;
  addItem: (variantId: string, quantity?: number, unit?: string) => Promise<void>;
  removeItem: (itemId: string) => Promise<void>;
  updateItem: (itemId: string, quantity: number) => Promise<void>;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

export type AddToCartButtonProps = {
  variantId: string;
  quantity?: number;
  unit?: string;
}; 