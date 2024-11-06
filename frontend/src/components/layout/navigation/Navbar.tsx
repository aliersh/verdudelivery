"use client";

import { FC } from "react";
import LoginButton from "@/components/ui/buttons/LoginButton";
import CartIcon from "@/components/ui/icons/CartIcon";
import Logo from "@/components/shared/Logo";
import { Card } from "@/components/ui/cards/card";
import { useCart } from "@/contexts/CartContext";

const Navbar: FC = () => {
    const { openCart } = useCart();

    return (
        <nav aria-label="Main navigation">
            <Card className="container flex items-center justify-between max-w-4xl gap-6 px-4 py-3 mx-auto mt-5 border-0 bg-primary-foreground rounded-2xl">
                <Logo />

                <div className="flex items-center space-x-4">
                    <CartIcon onClick={openCart} />
                    <LoginButton />
                </div>
            </Card>
        </nav>
    );
};

Navbar.displayName = "Navbar";

export default Navbar;
