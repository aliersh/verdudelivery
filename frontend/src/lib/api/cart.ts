import { CreateCartParams } from '@/lib/types/api';
import { StoreCart } from '@/lib/types/cart';

import { createApiInstance } from '../config/api-config';

const apiInstance = createApiInstance();

const cartApi = {
    create: (params?: CreateCartParams) =>
        apiInstance.post<never, { cart: StoreCart }>("/store/carts", params),

    get: (cartId: string) =>
        apiInstance.get<never, { cart: StoreCart }>(`/store/carts/${cartId}`),

    calculateTaxes: (cartId: string) =>
        apiInstance.post(`/store/carts/${cartId}/taxes`),

    addItem: (cartId: string, variantId: string, quantity = 1, unit?: string) =>
        apiInstance.post<never, { cart: StoreCart }>(
            `/store/carts/${cartId}/line-items`,
            {
                variant_id: variantId,
                quantity,
                metadata: unit ? { unit } : {},
            }
        ),

    removeItem: (cartId: string, itemId: string) =>
        apiInstance.delete<never, { cart: StoreCart }>(
            `/store/carts/${cartId}/line-items/${itemId}`
        ),

    updateItem: (cartId: string, itemId: string, quantity: number) => {
        if (quantity <= 0) {
            throw new Error("Quantity must be greater than 0");
        }

        return apiInstance.post<never, { cart: StoreCart }>(
            `/store/carts/${cartId}/line-items/${itemId}`,
            { quantity }
        );
    },
};

export default cartApi;
