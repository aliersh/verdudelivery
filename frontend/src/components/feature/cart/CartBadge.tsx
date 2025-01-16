import { FC } from "react";

import { CartIconButtonProps } from "@/lib/types/cart";

const CartBadge: FC<CartIconButtonProps> = ({ count }) => {
    if (!count || count === 0) return null;

    const displayCount = count > 99 ? "99+" : count;

    return (
        <span className="absolute -top-1.5 -right-1.5 h-4 w-4 rounded-full bg-primary text-xs font-bold text-accent-foreground flex items-center justify-center">
            {displayCount}
        </span>
    );
};

export default CartBadge;
