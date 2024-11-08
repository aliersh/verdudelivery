"use client";

import { Minus, Plus, Trash } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/buttons/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useCart } from '@/contexts/CartContext';
import { LineItem } from '@/types/cart';

import { Separator } from '../ui/separator';

//TODO: Add toast notifications
//TODO: Add empty cart state
const CartDrawer = () => {
    const { cart, isOpen, closeCart, removeItem, updateItem } = useCart();

    return (
        <Sheet open={isOpen} onOpenChange={closeCart}>
            <SheetContent className="w-[400px] sm:max-w-[400px] bg-secondary">
                <SheetHeader>
                    <SheetTitle className="text-2xl font-bold text-primary">
                        Carrito
                    </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col h-full">
                    <ScrollArea className="flex-1 px-6 -mx-6">
                        {cart?.items?.map((item: LineItem) => (
                            <div key={item.id} className="py-4">
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex items-center space-x-4">
                                        <Image
                                            src={item.thumbnail || ""}
                                            alt={item.title || ""}
                                            width={100}
                                            height={100}
                                            className="object-cover w-12 h-12 rounded"
                                        />
                                        <div className="space-y-1">
                                            <h4 className="font-medium">
                                                {item.product_title}
                                            </h4>
                                            <p className="text-sm text-gray-500">
                                                ${item.unit_price} /
                                                {String(item.metadata?.unit)}
                                            </p>
                                        </div>
                                    </div>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="w-8 h-8 text-gray-500 hover:text-red-500"
                                        onClick={() => removeItem(item.id)}
                                    >
                                        <Trash className="w-4 h-4" />
                                    </Button>
                                </div>
                                <div className="flex items-center justify-between mt-2">
                                    <div className="flex items-center space-x-2">
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="w-8 h-8 text-white bg-orange-500 border-none rounded-full hover:bg-orange-600"
                                            onClick={() =>
                                                updateItem(
                                                    item.id,
                                                    item.quantity - 1
                                                )
                                            }
                                        >
                                            <Minus className="w-4 h-4" />
                                        </Button>
                                        <span className="w-12 font-medium text-center">
                                            {item.quantity}{" "}
                                            {String(item.metadata?.unit)}
                                        </span>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="w-8 h-8 text-white bg-orange-500 border-none rounded-full hover:bg-orange-600"
                                            onClick={() =>
                                                updateItem(
                                                    item.id,
                                                    item.quantity + 1
                                                )
                                            }
                                        >
                                            <Plus className="w-4 h-4" />
                                        </Button>
                                    </div>
                                    <p className="font-medium">
                                        $
                                        {(
                                            item.unit_price * item.quantity
                                        ).toLocaleString()}
                                    </p>
                                </div>
                                <Separator className="mt-4 bg-gray-200" />
                            </div>
                        ))}
                    </ScrollArea>
                    <div className="pt-4 pb-4 space-y-4">
                        <div className="flex items-center justify-between text-lg">
                            <span className="text-gray-500">Total</span>
                            <span className="font-bold text-primary">
                                ${cart?.subtotal.toLocaleString()}
                            </span>
                        </div>
                        <Button
                            className="w-full text-white bg-primary hover:bg-primary/80"
                            size="lg"
                        >
                            Proceder al pago
                        </Button>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default CartDrawer;
