import { HttpTypes } from "@medusajs/types";

export type CreateCartParams = {
    region_id?: string;
    country_code?: string;
    items?: Array<{
        variant_id: string;
        quantity: number;
    }>;
    context?: Record<string, unknown>;
};

export interface FetchResult {
    products: HttpTypes.StoreProduct[];
    categoryName: string;
}
