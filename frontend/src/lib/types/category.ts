import { HttpTypes } from "@medusajs/types";

export interface CategoryResponse {
  product_categories: Array<{
    id: string;
    name: string;
    handle?: string;
  }>;
}

export interface ProductsResponse {
  products: HttpTypes.StoreProduct[];
}

export interface CategoryProps {
  handle: string;
  initialData: {
    products: HttpTypes.StoreProduct[];
    categoryName: string;
  };
} 