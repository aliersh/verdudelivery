import 'server-only';
import { cache } from 'react';
import { HttpTypes } from '@medusajs/types';

interface CategoryResponse {
    product_categories: Array<{
        id: string;
        name: string;
        handle?: string;
    }>;
}

interface ProductsResponse {
    products: HttpTypes.StoreProduct[];
}

interface FetchResult {
    products: HttpTypes.StoreProduct[];
    categoryName: string;
}

// Common fetcher utility
const fetcher = async <T>(
    endpoint: string,
    options: RequestInit = {}
): Promise<T> => {
    const baseUrl = process.env.NEXT_PUBLIC_MEDUSA_API_URL || 'http://localhost:9000';
    const defaultHeaders = {
        "x-publishable-api-key": process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY as string,
    };

    const response = await fetch(`${baseUrl}${endpoint}`, {
        ...options,
        headers: {
            ...defaultHeaders,
            ...options.headers,
        },
        credentials: "include",
    });

    if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
    }

    return response.json();
};

// Product Operations
export const productApi = {
    getCategoryProducts: cache(async (handle: string): Promise<FetchResult> => {
        try {
            const { product_categories } = await fetcher<CategoryResponse>(
                `/store/product-categories?handle=${handle}`
            );
            
            const category = product_categories[0];
            if (!category) {
                throw new Error(`Category not found for handle: ${handle}`);
            }

            const searchParams = new URLSearchParams({
                category_id: category.id,
                fields: "thumbnail,title,subtitle,metadata.unit,*variants.calculated_price",
            });

            const { products } = await fetcher<ProductsResponse>(
                `/store/products?${searchParams.toString()}`
            );

            return {
                products,
                categoryName: category.name,
            };
        } catch (error) {
            console.error("Error fetching category products:", error);
            throw error;
        }
    }),

    preloadCategoryProducts: (handle: string) => {
        void productApi.getCategoryProducts(handle);
    },
}; 