"use client";

import { FC } from "react";
import LoginButton from "@/components/common/buttons/LoginButton";
import CartIconButton from "@/components/common/buttons/CartIconButton";
import Logo from "@/components/common/logo/Logo";
import { Card } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";

const Navbar: FC = () => {
    const { openCart } = useCart();

    return (
        <nav className="sticky top-0 z-50 w-full py-4 bg-background" aria-label="Main navigation">
            <Card className="container flex items-center justify-between max-w-4xl gap-6 px-4 py-3 mx-auto border-0 bg-primary-foreground rounded-2xl">
                <Logo />

                <div className="flex items-center space-x-4">
                    <CartIconButton onClick={openCart} />
                    <LoginButton />
                </div>
            </Card>
        </nav>
    );
};

Navbar.displayName = "Navbar";

export default Navbar;
