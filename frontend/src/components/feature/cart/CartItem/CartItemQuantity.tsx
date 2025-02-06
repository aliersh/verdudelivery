import { Minus, Plus } from "lucide-react";

import { useCart } from "@/lib/contexts/CartContext";
import { CartItemQuantityProps } from "@/lib/types/cart";

const CartItemQuantity = ({ item }: CartItemQuantityProps) => {
    const { updateItem } = useCart();

    const handleQuantityUpdate = (newQuantity: number) => {
        if (newQuantity <= 0) return;
        updateItem(item.id, newQuantity);
    };

    return (
        <div className="flex items-center bg-white border border-gray-200 rounded-lg h-9">
            <button
                onClick={() => handleQuantityUpdate(item.quantity - 1)}
                className="flex items-center justify-center h-full text-gray-500 transition-colors rounded-l-lg w-9 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
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
                className="flex items-center justify-center h-full text-gray-500 transition-colors rounded-r-lg w-9 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
                aria-label="Increase quantity"
            >
                <Plus className="w-3.5 h-3.5" />
            </button>
        </div>
    );
};

export default CartItemQuantity;
