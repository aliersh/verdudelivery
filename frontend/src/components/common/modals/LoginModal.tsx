"use client";

import { useState } from "react";
import { Button } from "@/components/common/buttons/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import LoginForm from "@/components/feature/auth/login/LoginForm";

const LoginModal = () => {
    const [open, setOpen] = useState(false);

    const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen);
    };

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
                <Button 
                    variant="default"
                    size="lg"
                    className="hidden px-2 md:block"
                    aria-label="Abrir formulario de inicio de sesión"
                >
                    Iniciar sesión
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-2xl text-center font-bold">
                        Iniciar sesión
                    </DialogTitle>
                </DialogHeader>
                <LoginForm onCloseModal={() => setOpen(false)} />
            </DialogContent>
        </Dialog>
    );
};

export default LoginModal; 