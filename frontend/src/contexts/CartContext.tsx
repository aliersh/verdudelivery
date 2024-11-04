"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { HttpTypes } from "@medusajs/types";

type CartContextType = {
    cart?: HttpTypes.StoreCart;
    setCart: React.Dispatch<
        React.SetStateAction<HttpTypes.StoreCart | undefined>
    >;
    refreshCart: () => void;
    addItem: (variantId: string, quantity?: number, unit?: string) => Promise<void>;
    removeItem: (itemId: string) => Promise<void>;
    updateItem: (itemId: string, quantity: number) => Promise<void>;
    isOpen: boolean;
    openCart: () => void;
    closeCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

type CartProviderProps = {
    children: React.ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cart, setCart] = useState<HttpTypes.StoreCart>();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (cart) {
            return;
        }

        const cartId = localStorage.getItem("cart_id");
        if (!cartId) {
            // create a cart
            fetch(`http://localhost:9000/store/carts`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "x-publishable-api-key":
                        process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY as string,
                    "Content-Type": "application/json",
                },
            })
                .then((res) => res.json())
                .then(({ cart: dataCart }) => {
                    localStorage.setItem("cart_id", dataCart.id);
                    setCart(dataCart);
                });
        } else {
            // retrieve cart
            fetch(`http://localhost:9000/store/carts/${cartId}`, {
                credentials: "include",
                headers: {
                    "x-publishable-api-key":
                        process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY as string,
                },
            })
                .then((res) => res.json())
                .then(({ cart: dataCart }) => {
                    setCart(dataCart);
                });
        }
    }, [cart]);

    const refreshCart = () => {
        localStorage.removeItem("cart_id");
        setCart(undefined);
    };

    const addItem = async (variantId: string, quantity: number = 1, unit?: string) => {
        if (!cart) return;

        const metadata = unit ? { unit } : {};

        const response = await fetch(
            `${process.env.NEXT_PUBLIC_MEDUSA_API_URL}/store/carts/${cart.id}/line-items`,
            {
                credentials: "include",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-publishable-api-key": process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY as string,
                },
                body: JSON.stringify({
                    variant_id: variantId,
                    quantity,
                    metadata,
                }),
            }
        );
        
        const { cart: updatedCart } = await response.json();
        console.log(updatedCart);
        setCart(updatedCart);
    };

    const removeItem = async (itemId: string) => {
        if (!cart) return;

        const response = await fetch(`${process.env.NEXT_PUBLIC_MEDUSA_API_URL}/store/carts/${cart.id}/line-items/${itemId}`, {
            credentials: "include",
            method: "DELETE",
            headers: {
                "x-publishable-api-key": process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY as string,
            },
        });

        const { cart: updatedCart } = await response.json();
        setCart(updatedCart);
    };

    const updateItem = async (itemId: string, quantity: number) => {
        if (!cart) return;

        const response = await fetch(`${process.env.NEXT_PUBLIC_MEDUSA_API_URL}/store/carts/${cart.id}/line-items/${itemId}`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-publishable-api-key": process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY as string,
            },
            body: JSON.stringify({
                quantity,
            }),
        });

        const { cart: updatedCart } = await response.json();
        setCart(updatedCart);
    };

    const openCart = () => {
        setIsOpen(true);
    };

    const closeCart = () => {
        setIsOpen(false);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
                refreshCart,
                addItem,
                removeItem,
                updateItem,
                isOpen,
                openCart,
                closeCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }

    return context;
};