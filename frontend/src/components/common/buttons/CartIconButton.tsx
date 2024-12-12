import { ShoppingCart } from "lucide-react";

import { cn } from "@/lib/utils";
import { CartIconButtonProps } from '@/lib/types/cart';

const CartIconButton = ({
    className,
    itemCount = 0,
    ...props
}: CartIconButtonProps) => {
    return (
        <button
            className={cn(
                "relative inline-flex h-9 w-9 items-center justify-center rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
                className
            )}
            aria-label={`Carrito de compras, ${itemCount} ${
                itemCount === 1 ? "producto" : "productos"
            } diferentes`}
            {...props}
        >
            <ShoppingCart className="w-5 h-5" />
            {itemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 h-4 w-4 rounded-full bg-primary text-xs font-bold text-accent-foreground flex items-center justify-center">
                    {itemCount > 99 ? "99+" : itemCount}
                </span>
            )}
        </button>
    );
};

export default CartIconButton;
