import { cache } from 'react';

import { CategoryResponse, ProductsResponse } from '@/lib/types/category';

import { createApiInstance } from '../config/api-config';

const apiInstance = createApiInstance();

const productApi = {
    getCategoryProducts: cache(async (handle: string) => {
        const { product_categories } = await apiInstance.get<
            never,
            CategoryResponse
        >(`/store/product-categories?handle=${handle}`);

        const category = product_categories[0];
        if (!category) {
            throw new Error(`Category not found for handle: ${handle}`);
        }

        const searchParams = new URLSearchParams({
            category_id: category.id,
            fields: "thumbnail,title,subtitle,metadata.unit,*variants.calculated_price",
        });

        const { products } = await apiInstance.get<never, ProductsResponse>(
            `/store/products?${searchParams.toString()}`
        );

        return {
            products,
            categoryName: category.name,
        };
    }),

    preloadCategoryProducts: (handle: string) => {
        void productApi.getCategoryProducts(handle);
    },
};

export default productApi;
