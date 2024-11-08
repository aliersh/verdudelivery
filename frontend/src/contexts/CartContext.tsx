"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import useSWR from 'swr';

import { cartApi } from '@/lib/api-client';
import { CartContextType } from '@/types/cart';

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [cartId, setCartId] = useState<string | null>(null);

    useEffect(() => {
        const storedCartId = localStorage.getItem("cart_id");
        if (storedCartId) setCartId(storedCartId);
    }, []);

    const { data: cart, mutate } = useSWR(
        cartId ? [`/store/carts/${cartId}`, cartId] : null,
        () => cartApi.get(cartId as string)
    );

    const initializeCart = async () => {
        const { cart: newCart } = await cartApi.create();
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
        const { cart: updatedCart } = await cartApi.addItem(
            cartId as string,
            variantId,
            quantity,
            unit
        );
        mutate({ cart: updatedCart }, false);
    };

    const removeItem = async (itemId: string) => {
        if (!cartId) return;
        const { cart: updatedCart } = await cartApi.removeItem(cartId, itemId);
        mutate({ cart: updatedCart }, false);
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
