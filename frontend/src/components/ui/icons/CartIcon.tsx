"use client"

import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/buttons/button';

import { FC } from 'react';

interface CartIconProps {
    onClick: () => void;
}

const CartIcon: FC<CartIconProps> = ({ onClick, ...props }) => {
    return (
        <Button onClick={onClick} {...props} className="p-2">
            <ShoppingCart />
        </Button>
    );
};

export default CartIcon;
