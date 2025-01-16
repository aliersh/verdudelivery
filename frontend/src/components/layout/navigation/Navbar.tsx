"use client";

import { useRouter } from "next/navigation";
import { FC } from "react";

import Logo from "@/components/common/logo/Logo";
import AuthModal from "@/components/common/modals/AuthModal";
import UserMenu from "@/components/common/navigation/UserMenu";
import CartIconButton from "@/components/feature/cart/CartIconButton";
import { useCart } from "@/lib/contexts/CartContext";
import { useCustomer } from "@/lib/contexts/CustomerContext";

const Navbar: FC = () => {
    const router = useRouter();
    const { openCart, cart } = useCart();
    const { customer, logout } = useCustomer();

    // Get the number of unique items in cart
    const itemCount = cart?.items?.length ?? 0;

    const handleLogout = () => {
        logout();
        router.push("/");
    };

    return (
        <nav className="sticky top-0 z-50 w-full bg-white border-b">
            <div className="container flex items-center justify-between h-16 px-4 mx-auto">
                <Logo />

                <div className="flex items-center gap-4">
                    <CartIconButton
                        onClick={openCart}
                        itemCount={itemCount}
                        className="relative p-0 rounded-lg h-9 w-9 hover:bg-accent/10"
                    />
                    {customer ? (
                        <UserMenu onLogout={handleLogout} />
                    ) : (
                        <AuthModal
                            initialView="login"
                            buttonText="Iniciar sesión"
                            buttonClassName="hidden h-9 md:inline-flex"
                            buttonVariant="accent"
                        />
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
