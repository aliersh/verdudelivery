import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/buttons/button';

import { FC } from 'react';

interface CartIconProps {
    onClick: () => void;
}

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
