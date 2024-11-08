import { HttpTypes } from '@medusajs/types';

export interface ProductItemProps {
  product: HttpTypes.StoreProduct;
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  formatPrice: (amount: number) => string;
}

export type ProductosProps = {
  categories?: string[];
};