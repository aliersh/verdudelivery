import { Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/contexts/CartContext";
import { CartItemQuantityProps } from "@/lib/types/cart";

const CartItemQuantity = ({ item }: CartItemQuantityProps) => {
    const { updateItem } = useCart();

    const handleQuantityUpdate = (newQuantity: number) => {
        if (newQuantity <= 0) return;
        updateItem(item.id, newQuantity);
    };

    return (
        <div className="flex items-center h-9 rounded-lg border border-gray-200 bg-white">
            <button
                onClick={() => handleQuantityUpdate(item.quantity - 1)}
                className="flex items-center justify-center w-9 h-full text-gray-500 transition-colors hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 rounded-l-lg"
                disabled={item.quantity <= 1}
                aria-label="Decrease quantity"
            >
                <Minus className="w-3.5 h-3.5" />
            </button>
            
            <div className="flex items-center justify-center min-w-[3rem] h-full px-1 text-sm font-medium text-gray-900 border-x border-gray-200">
                {item.quantity} {String(item.metadata?.unit)}
            </div>
            
            <button
                onClick={() => handleQuantityUpdate(item.quantity + 1)}
                className="flex items-center justify-center w-9 h-full text-gray-500 transition-colors hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 rounded-r-lg"
                aria-label="Increase quantity"
            >
                <Plus className="w-3.5 h-3.5" />
            </button>
        </div>
    );
};

export default CartItemQuantity;
