"use client";

import { useCart } from '@/lib/contexts/CartContext';
import CartItem from '@/components/feature/cart/CartItem/CartItem';
import { LineItem } from '@/lib/types/cart';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/common/buttons/button';

const Checkout = () => {
    const { cart } = useCart();
    console.log(cart);

    return (
        <div className="container mx-auto p-4 max-w-6xl">
            <h1 className="text-3xl font-bold mb-8">Checkout</h1>
            <div className="grid lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3">
                    <h2 className="text-2xl font-semibold mb-4">Tu Carrito</h2>
                    <div className="space-y-4">
                        {cart?.items?.map((item: LineItem) => (
                            <CartItem key={item.id} item={item}  />
                        ))}
                    </div>
                </div>
                <div className="lg:col-span-2">
                    <div className="sticky top-24">
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h2 className="text-2xl font-semibold mb-4">Resumen de compra</h2>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span>${cart?.subtotal.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>IVA (19%)</span>
                                    <span>${Math.round(cart?.tax_total || 0).toLocaleString()}</span>
                                </div>
                                <Separator className="my-2" />
                                <div className="flex justify-between font-semibold text-lg">
                                    <span>Total</span>
                                    <span>${Math.round(cart?.total || 0).toLocaleString()}</span>
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
    )
}

export default Checkout;