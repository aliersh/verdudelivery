"use client";

import { FC } from 'react';

import CartIconButton from '@/components/common/buttons/CartIconButton';
import Logo from '@/components/common/logo/Logo';
import LoginModal from '@/components/common/modals/LoginModal';
import { Card } from '@/components/ui/card';
import { useCart } from '@/lib/contexts/CartContext';

const Navbar: FC = () => {
    const { openCart } = useCart();

    return (
        <nav
            className="sticky top-0 z-50 w-full py-4 bg-background"
            aria-label="Main navigation"
        >
            <Card className="container flex items-center justify-between max-w-4xl gap-6 px-4 py-3 mx-auto border-0 bg-primary-foreground rounded-2xl">
                <Logo />

                <div className="flex items-center space-x-4">
                    <CartIconButton onClick={openCart} />
                    <LoginModal />
                </div>
            </Card>
        </nav>
    );
};

export default Navbar;
