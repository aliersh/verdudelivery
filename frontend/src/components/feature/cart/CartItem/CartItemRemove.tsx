import { Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/contexts/CartContext";
import { CartItemRemoveProps } from "@/lib/types/cart";

const CartItemRemove = ({ itemId }: CartItemRemoveProps) => {
    const { removeItem } = useCart();

    return (
        <Button
            variant="outline"
            size="icon"
            className="w-8 h-8 text-gray-500 bg-background hover:text-red-500 hover:bg-background/80"
            onClick={() => removeItem(itemId)}
            aria-label="Remove item"
        >
            <Trash className="w-4 h-4" />
        </Button>
    );
};

export default CartItemRemove;
