import { ShoppingCart } from "lucide-react";
import { FC } from "react";

import { CartIconButtonProps } from "@/lib/types/cart";
import { cn } from "@/lib/utils";

import CartBadge from "./CartBadge";

const CartIconButton: FC<CartIconButtonProps> = ({
    className,
    itemCount = 0,
    ...props
}) => {
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
            <CartBadge count={itemCount} />
        </button>
    );
};

export default CartIconButton;
