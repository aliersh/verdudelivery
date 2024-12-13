"use client";

import Link from "next/link";
import { FC } from "react";

import AuthModal from "@/components/common/modals/AuthModal";
import { Button } from "@/components/ui/button";
import { useCustomer } from "@/lib/contexts/CustomerContext";

const HeroButtons: FC = () => {
    const { customer } = useCustomer();

    return (
        <div
            className="flex justify-center gap-3 mt-8"
            aria-label="Botones de acceso"
            role="group"
        >
            {!customer && (
                <AuthModal
                    initialView="signup"
                    buttonText="Regístrate"
                    buttonClassName="hidden md:block"
                    buttonSize="lg"
                />
            )}
            <Link href="/productos" aria-label="Ver productos">
                <Button size="lg" variant="accent">
                    Ver productos
                </Button>
            </Link>
        </div>
    );
};

export default HeroButtons;
