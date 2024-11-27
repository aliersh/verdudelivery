import axios, { AxiosError, AxiosInstance } from 'axios';

import { CreateCartParams } from '@/types/api';
import { StoreCart } from '@/types/cart';

// Create axios instance with default config
const createApiClient = (): AxiosInstance => {
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

const apiClient = createApiClient();

// Cart Operations
export const cartApi = {
    create: (params?: CreateCartParams) =>
        apiClient.post<never, { cart: StoreCart }>("/store/carts", params),

    get: (cartId: string) =>
        apiClient.get<never, { cart: StoreCart }>(`/store/carts/${cartId}`),

    addItem: (cartId: string, variantId: string, quantity = 1, unit?: string) =>
        apiClient.post<never, { cart: StoreCart }>(
            `/store/carts/${cartId}/line-items`,
            {
                variant_id: variantId,
                quantity,
                metadata: unit ? { unit } : {},
            }
        ),

    removeItem: (cartId: string, itemId: string) =>
        apiClient.delete<never, { cart: StoreCart }>(
            `/store/carts/${cartId}/line-items/${itemId}`
        ),

    updateItem: (cartId: string, itemId: string, quantity: number) => {
        // Prevent negative or zero quantities at the API level
        if (quantity <= 0) {
            throw new Error("Quantity must be greater than 0");
        }

        return apiClient.post<never, { cart: StoreCart }>(
            `/store/carts/${cartId}/line-items/${itemId}`,
            { quantity }
        );
    },
};
