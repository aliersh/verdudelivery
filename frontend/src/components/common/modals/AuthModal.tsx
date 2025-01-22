"use client";

import { FC, useState } from "react";

import LoginForm from "@/components/feature/auth/login/LoginForm";
import RegistrationForm from "@/components/feature/auth/registration/RegistrationForm";
import { Button } from "@/components/ui/button";
import {
    Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger
} from "@/components/ui/dialog";
import { AuthModalProps } from "@/lib/types/auth";

type ActiveModal = "login" | "signup" | null;

const AuthModal: FC<AuthModalProps> = ({
    initialView = "login",
    buttonText = "Iniciar sesión",
    buttonClassName = "",
    buttonSize = "default",
    buttonVariant = "default",
}) => {
    const [activeModal, setActiveModal] = useState<ActiveModal>(null);

    const closeModal = () => setActiveModal(null);
    const openModal = (view: ActiveModal) => setActiveModal(view);

    return (
        <Dialog
            open={!!activeModal}
            onOpenChange={(open) => !open && closeModal()}
        >
            <DialogTrigger asChild>
                <Button
                    variant={buttonVariant}
                    size={buttonSize}
                    className={buttonClassName}
                    aria-label={`Abrir formulario de ${
                        initialView === "login"
                            ? "inicio de sesión"
                            : "registro"
                    }`}
                    onClick={() => openModal(initialView)}
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
                        onSwitchToSignup={() => openModal("signup")}
                        onLoginSuccess={closeModal}
                    />
                ) : (
                    <RegistrationForm onCloseModal={() => openModal("login")} />
                )}
            </DialogContent>
        </Dialog>
    );
};

export default AuthModal;
