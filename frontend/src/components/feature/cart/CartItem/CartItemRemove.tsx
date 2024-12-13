import { Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/contexts/CartContext";
import { CartItemRemoveProps } from "@/lib/types/cart";

const CartItemRemove = ({ itemId }: CartItemRemoveProps) => {
    const { removeItem } = useCart();

    return (
        <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-lg text-muted-foreground hover:bg-destructive hover:text-destructive-foreground"
            onClick={() => removeItem(itemId)}
            aria-label="Remove item"
        >
            <Trash2 className="h-4 w-4" />
        </Button>
    );
};

export default CartItemRemove;
