import { StoreCart } from "@/types/cart";

// Common fetcher utility
const fetcher = async <T>(
    endpoint: string,
    options: RequestInit = {}
): Promise<T> => {
    const baseUrl =
        process.env.NEXT_PUBLIC_MEDUSA_API_URL || "http://localhost:9000";
    const defaultHeaders = {
        "x-publishable-api-key": process.env
            .NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY as string,
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

type CreateCartParams = {
    region_id?: string;
    country_code?: string;
    items?: Array<{
        variant_id: string;
        quantity: number;
    }>;
    context?: Record<string, unknown>;
};

// Cart Operations
export const cartApi = {
    create: (params?: CreateCartParams) =>
        fetcher<{ cart: StoreCart }>("/store/carts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(params),
        }),

    get: (cartId: string) =>
        fetcher<{ cart: StoreCart }>(`/store/carts/${cartId}`),

    addItem: (cartId: string, variantId: string, quantity = 1, unit?: string) =>
        fetcher<{ cart: StoreCart }>(`/store/carts/${cartId}/line-items`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                variant_id: variantId,
                quantity,
                metadata: unit ? { unit } : {},
            }),
        }),

    removeItem: (cartId: string, itemId: string) =>
        fetcher<{ cart: StoreCart }>(
            `/store/carts/${cartId}/line-items/${itemId}`,
            {
                method: "DELETE",
            }
        ),

    updateItem: (cartId: string, itemId: string, quantity: number) => {
        // Prevent negative or zero quantities at the API level
        if (quantity <= 0) {
            throw new Error('Quantity must be greater than 0');
        }
        
        return fetcher<{ cart: StoreCart }>(
            `/store/carts/${cartId}/line-items/${itemId}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ quantity }),
            }
        );
    },
};
