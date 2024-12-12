"use client";

import CartItem from "@/components/feature/cart/CartItem/CartItem";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/lib/contexts/CartContext";
import { LineItem } from "@/lib/types/cart";

const Checkout = () => {
    const { cart } = useCart();
    console.log(cart);

    return (
        <div className="container max-w-6xl p-4 mx-auto">
            <h1 className="mb-8 text-3xl font-bold">Checkout</h1>
            <div className="grid gap-8 lg:grid-cols-5">
                <div className="lg:col-span-3">
                    <h2 className="mb-4 text-2xl font-semibold">Tu Carrito</h2>
                    <div className="space-y-4">
                        {cart?.items?.map((item: LineItem) => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </div>
                </div>
                <div className="lg:col-span-2">
                    <div className="sticky top-24">
                        <div className="p-6 rounded-lg bg-gray-50">
                            <h2 className="mb-4 text-2xl font-semibold">
                                Resumen de compra
                            </h2>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span>
                                        ${cart?.subtotal.toLocaleString()}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span>IVA (19%)</span>
                                    <span>
                                        $
                                        {Math.round(
                                            cart?.tax_total || 0
                                        ).toLocaleString()}
                                    </span>
                                </div>
                                <Separator className="my-2" />
                                <div className="flex justify-between text-lg font-semibold">
                                    <span>Total</span>
                                    <span>
                                        $
                                        {Math.round(
                                            cart?.total || 0
                                        ).toLocaleString()}
                                    </span>
                                </div>
                            </div>
                            <Button className="w-full mt-6" size="lg">
                                Pagar con Webpay
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
