"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/lib/contexts/CartContext";
import { LineItem } from "@/lib/types/cart";

import CartItem from "./CartItem/CartItem";

const CartDrawer = () => {
    const { cart, isOpen, closeCart } = useCart();

    return (
        <Sheet open={isOpen} onOpenChange={closeCart}>
            <SheetContent className="w-[400px] sm:max-w-[400px] bg-secondary">
                <SheetHeader>
                    <SheetTitle className="text-2xl font-bold text-primary">
                        Carrito
                    </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col h-full">
                    {!cart?.items?.length ? (
                        <div className="flex flex-col items-center justify-center flex-1 gap-4">
                            <p className="text-lg text-gray-500">
                                Tu carrito está vacío
                            </p>
                            <Button
                                onClick={closeCart}
                                className="text-white bg-primary hover:bg-primary/80"
                            >
                                Continuar comprando
                            </Button>
                        </div>
                    ) : (
                        <>
                            <ScrollArea className="flex-1 px-6 -mx-6">
                                {cart?.items?.map((item: LineItem) => (
                                    <CartItem key={item.id} item={item} />
                                ))}
                            </ScrollArea>
                            <div className="pt-4 pb-4 space-y-4">
                                <div className="flex items-center justify-between text-lg">
                                    <span className="text-gray-500">Total</span>
                                    <span className="font-bold">
                                        ${cart?.subtotal.toLocaleString()}
                                    </span>
                                </div>
                                <Link href="/checkout" onClick={closeCart}>
                                    <Button
                                        className="w-full text-white bg-primary hover:bg-primary/80"
                                        size="lg"
                                    >
                                        Proceder al pago
                                    </Button>
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default CartDrawer;
