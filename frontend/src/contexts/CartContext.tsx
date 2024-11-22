"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import useSWR from 'swr';

import { cartApi } from "@/lib/api-client";
import { CartContextType } from "@/types/cart";
import { useRegion } from "@/contexts/RegionContext";

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [cartId, setCartId] = useState<string | null>(null);
    const { region } = useRegion();

    useEffect(() => {
        if (!region) return;
        
        const storedCartId = localStorage.getItem("cart_id");
        if (storedCartId) {
            setCartId(storedCartId);
        } else {
            initializeCart();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [region]);

    const { data: cart, mutate } = useSWR(
        cartId && region ? [`/store/carts/${cartId}`, cartId] : null,
        async () => {
            // First get the cart and calculate taxes
            await fetch(`${process.env.NEXT_PUBLIC_MEDUSA_API_URL}/store/carts/${cartId}/taxes`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    'x-publishable-api-key': process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY as string,
                },
            });

            // Then get the cart with updated tax lines
            return cartApi.get(cartId as string);
        }
    );

    const initializeCart = async () => {
        if (!region) return;

        const { cart: newCart } = await cartApi.create({ region_id: region.id });
        localStorage.setItem("cart_id", newCart.id);
        setCartId(newCart.id);
        mutate({ cart: newCart }, false);
    };

    const refreshCart = () => {
        localStorage.removeItem("cart_id");
        setCartId(null);
        mutate(undefined, false);
    };

    const addItem = async (variantId: string, quantity = 1, unit?: string) => {
        if (!cartId) await initializeCart();
        
        // Early return if still no cartId after initialization
        if (!cartId) return;
        
        mutate(
            async () => {
                const { cart: updatedCart } = await cartApi.addItem(
                    cartId,
                    variantId,
                    quantity,
                    unit
                );
                return { cart: updatedCart };
            },
            {
                optimisticData: {
                    cart: {
                        id: cart?.cart?.id || cartId, // Using OR operator since we know cartId is string here
                        items: [
                            ...(cart?.cart?.items ?? []),
                            // Only add new item if it doesn't exist
                            ...(cart?.cart?.items?.find(item => item.variant_id === variantId)
                                ? []
                                : [{
                                    id: `temp_${variantId}`,
                                    variant_id: variantId,
                                    quantity: quantity,
                                    metadata: { unit },
                                    unit_price: 0, // Will be updated with real price after API call
                                }])
                        ],
                        subtotal: cart?.cart?.subtotal ?? 0,
                        tax_total: cart?.cart?.tax_total ?? 0,
                        total: cart?.cart?.total ?? 0,
                        region: cart?.cart?.region
                    }
                },
                revalidate: true
            }
        );
    };

    const removeItem = async (itemId: string) => {
        if (!cartId) return;
        
        // Keep showing previous state while removing
        mutate(
            async (currentData) => {
                await cartApi.removeItem(cartId, itemId);
                return currentData;
            },
            {
                revalidate: true,
                optimisticData: cart
            }
        );
    };

    const updateItem = async (itemId: string, quantity: number) => {
        if (!cartId) return;
        const { cart: updatedCart } = await cartApi.updateItem(
            cartId,
            itemId,
            quantity
        );
        mutate({ cart: updatedCart }, false);
    };

    return (
        <CartContext.Provider
            value={{
                cart: cart?.cart,
                refreshCart,
                addItem,
                removeItem,
                updateItem,
                isOpen,
                openCart: () => setIsOpen(true),
                closeCart: () => setIsOpen(false),
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used within a CartProvider");
    return context;
};
