"use client"

import { FC } from "react";
import LoginButton from '@/components/ui/buttons/LoginButton';
import CartIcon from '@/components/ui/icons/CartIcon';
import Logo from '@/components/shared/Logo';
import { Card } from '@/components/ui/cards/card';

const Navbar: FC = () => {
    return (
        <Card className="container flex items-center justify-between max-w-4xl gap-6 px-4 py-3 mx-auto mt-5 border-0 bg-primary-foreground rounded-2xl">
            <Logo />

            {/* <ul className="items-center hidden gap-10 md:flex text-card-foreground">
                <li className="font-medium text-primary">
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#features">Features</a>
                </li>
                <li>
                    <a href="#pricing">Pricing</a>
                </li>
                <li>
                    <a href="#faqs">FAQs</a>
                </li>
            </ul> */}

            <div className="flex items-center space-x-4">
                <CartIcon />
                <LoginButton />
            </div>
        </Card>
    );
};

export default Navbar;