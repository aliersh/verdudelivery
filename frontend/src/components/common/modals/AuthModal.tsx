"use client";

import { useState } from "react";

import { Button } from "@/components/common/buttons/button";
import LoginForm from "@/components/feature/auth/login/LoginForm";
import RegistrationForm from "@/components/feature/auth/registration/RegistrationForm";
import {
    Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger
} from "@/components/ui/dialog";
import { AuthModalProps } from "@/lib/types/auth";

const AuthModal = ({
    initialView = "login",
    buttonText = "Iniciar sesión",
    buttonClassName = "",
    buttonSize = "default",
}: AuthModalProps) => {
    const [activeModal, setActiveModal] = useState<"login" | "signup" | null>(
        null
    );

    const closeModal = () => setActiveModal(null);
    const switchToSignup = () => setActiveModal("signup");
    const switchToLogin = () => setActiveModal("login");

    return (
        <Dialog
            open={!!activeModal}
            onOpenChange={(open) => !open && closeModal()}
        >
            <DialogTrigger asChild>
                <Button
                    variant="default"
                    size={buttonSize}
                    className={buttonClassName}
                    aria-label={`Abrir formulario de ${
                        initialView === "login"
                            ? "inicio de sesión"
                            : "registro"
                    }`}
                    onClick={() => setActiveModal(initialView)}
                >
                    {buttonText}
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center">
                        {activeModal === "login"
                            ? "Iniciar sesión"
                            : "Regístrate"}
                    </DialogTitle>
                </DialogHeader>
                {activeModal === "login" ? (
                    <LoginForm
                        onCloseModal={closeModal}
                        onSwitchToSignup={switchToSignup}
                        onLoginSuccess={closeModal}
                    />
                ) : (
                    <RegistrationForm onCloseModal={switchToLogin} />
                )}
            </DialogContent>
        </Dialog>
    );
};

export default AuthModal;
