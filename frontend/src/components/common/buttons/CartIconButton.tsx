import { ShoppingCart } from 'lucide-react';
import { FC } from 'react';

import { Button } from '@/components/common/buttons/button';
import { useCart } from '@/contexts/CartContext';
import { CartIconButtonProps } from '@/types/ui';

const CartIconButton: FC<CartIconButtonProps> = ({ onClick }) => {
    const { cart } = useCart();

    // Get the number of unique items in cart
    const itemCount = cart?.items?.length ?? 0;

    return (
        <div className="relative">
            <Button
                variant="accent"
                onClick={onClick}
                className="p-2"
                aria-label={`Carrito de compras, ${itemCount} ${
                    itemCount === 1 ? "producto" : "productos"
                } diferentes`}
                role="button"
            >
                <ShoppingCart />
            </Button>
            {itemCount > 0 && (
                <span className="absolute flex items-center justify-center w-5 h-5 text-xs font-bold text-white rounded-full bg-primary -top-2 -right-2">
                    {itemCount > 99 ? "99+" : itemCount}
                </span>
            )}
        </div>
    );
};

CartIconButton.displayName = "CartIconButton";

export default CartIconButton;
