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
            <SheetContent className="flex flex-col w-full gap-6 p-6 sm:max-w-md">
                <SheetHeader>
                    <SheetTitle>Carrito de compras</SheetTitle>
                </SheetHeader>

                {!cart?.items?.length ? (
                    <div className="flex flex-col items-center justify-center flex-1 gap-4">
                        <p className="text-muted-foreground">
                            Tu carrito está vacío
                        </p>
                        <Button
                            onClick={closeCart}
                            variant="outline"
                        >
                            Continuar comprando
                        </Button>
                    </div>
                ) : (
                    <>
                        <ScrollArea className="flex-1 pr-4 -mr-4">
                            <div className="space-y-6">
                                {cart?.items?.map((item: LineItem) => (
                                    <CartItem key={item.id} item={item} />
                                ))}
                            </div>
                        </ScrollArea>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-muted-foreground">Total</span>
                                <span className="text-lg font-medium">
                                    ${cart?.subtotal.toLocaleString()}
                                </span>
                            </div>
                            <Button
                                asChild
                                className="w-full"
                                size="lg"
                            >
                                <Link href="/checkout" onClick={closeCart}>
                                    Proceder al pago
                                </Link>
                            </Button>
                        </div>
                    </>
                )}
            </SheetContent>
        </Sheet>
    );
};

export default CartDrawer;
