import 'server-only';

import axios, { AxiosError, AxiosInstance } from 'axios';
import { cache } from 'react';

import { FetchResult } from '@/lib/types/api';
import { CategoryResponse, ProductsResponse } from '@/lib/types/category';

// Create axios instance with default config
const createApiServer = (): AxiosInstance => {
    const baseURL =
        process.env.NEXT_PUBLIC_MEDUSA_API_URL || "http://localhost:9000";

    const instance = axios.create({
        baseURL,
        headers: {
            "Content-Type": "application/json",
            "x-publishable-api-key": process.env
                .NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY as string,
        },
        withCredentials: true,
    });

    // Add response interceptor for error handling
    instance.interceptors.response.use(
        (response) => response.data,
        (error: AxiosError) => {
            if (error.response) {
                throw new Error(`API Error: ${error.response.statusText}`);
            }
            throw error;
        }
    );

    return instance;
};

const apiServer = createApiServer();

// Product Operations
export const productApi = {
    getCategoryProducts: cache(async (handle: string): Promise<FetchResult> => {
        try {
            const { product_categories } = await apiServer.get<
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

            const { products } = await apiServer.get<never, ProductsResponse>(
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
