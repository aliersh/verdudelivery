import { Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/contexts/CartContext";
import { CartItemQuantityProps } from "@/lib/types/cart";

const CartItemQuantity = ({ item }: CartItemQuantityProps) => {
    const { updateItem } = useCart();

    const handleQuantityUpdate = (newQuantity: number) => {
        // Prevent negative or zero quantities
        if (newQuantity <= 0) {
            return;
        }
        updateItem(item.id, newQuantity);
    };

    return (
        <div className="flex items-center space-x-2">
            <Button
                variant="outline"
                size="icon"
                className="w-8 h-8 text-white bg-orange-500 border-none rounded-full hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => handleQuantityUpdate(item.quantity - 1)}
                disabled={item.quantity <= 1}
                aria-label="Decrease quantity"
            >
                <Minus className="w-4 h-4" />
            </Button>
            <span className="w-12 font-medium text-center">
                {item.quantity} {String(item.metadata?.unit)}
            </span>
            <Button
                variant="outline"
                size="icon"
                className="w-8 h-8 text-white bg-orange-500 border-none rounded-full hover:bg-orange-600"
                onClick={() => handleQuantityUpdate(item.quantity + 1)}
                aria-label="Increase quantity"
            >
                <Plus className="w-4 h-4" />
            </Button>
        </div>
    );
};

export default CartItemQuantity;
