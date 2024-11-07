import 'server-only';

import { cache } from 'react';

import { HttpTypes } from '@medusajs/types';

type CategoryResponse = {
    product_categories: Array<{
        id: string;
        name: string;
        handle?: string;
    }>;
};

type ProductsResponse = {
    products: HttpTypes.StoreProduct[];
};

type FetchResult = {
    products: HttpTypes.StoreProduct[];
    categoryName: string;
};

// Fetch configuration as a separate function
const createMedusaFetch = (endpoint: string) => {
    return fetch(`${process.env.NEXT_PUBLIC_MEDUSA_API_URL}${endpoint}`, {
        headers: {
            "x-publishable-api-key": process.env
                .NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY as string,
        },
    });
};

// Fetch category by handle
const fetchCategoryByHandle = async (
    handle: string
): Promise<CategoryResponse> => {
    const response = await createMedusaFetch(
        `/store/product-categories?handle=${handle}`
    );
    if (!response.ok) {
        throw new Error(`Failed to fetch category: ${response.statusText}`);
    }
    return response.json() as Promise<CategoryResponse>;
};

// Fetch products by category ID
const fetchProductsByCategoryId = async (
    categoryId: string
): Promise<ProductsResponse> => {
    const searchParams = new URLSearchParams({
        category_id: categoryId,
        fields: "thumbnail,title,subtitle,metadata.unit,*variants.calculated_price",
    });
    const response = await createMedusaFetch(
        `/store/products?${searchParams.toString()}`
    );
    if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.statusText}`);
    }
    return response.json() as Promise<ProductsResponse>;
};

// Main function to get category products
export const getCategoryProducts = cache(
    async (handle: string): Promise<FetchResult> => {
        try {
            const { product_categories } = await fetchCategoryByHandle(handle);
            const category = product_categories[0];

            if (!category) {
                throw new Error(`Category not found for handle: ${handle}`);
            }

            const { products } = await fetchProductsByCategoryId(category.id);

            return {
                products,
                categoryName: category.name,
            };
        } catch (error) {
            console.error("Error fetching category products:", error);
            throw error; // Re-throw to handle at component level
        }
    }
);

// Preload category products
export const preloadCategoryProducts = (handle: string) => {
    void getCategoryProducts(handle);
};
