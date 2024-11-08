import { ShoppingCart } from 'lucide-react';
import { FC } from 'react';

import { Button } from '@/components/ui/buttons/button';
import { CartIconProps } from '@/types/ui';

const CartIcon: FC<CartIconProps> = ({ onClick }) => {
    return (
        <Button
            variant="accent"
            onClick={onClick}
            className="p-2"
            aria-label="Carrito de compras"
            role="button"
        >
            <ShoppingCart />
        </Button>
    );
};

CartIcon.displayName = "CartIcon";

export default CartIcon;
