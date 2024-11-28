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
import RegistrationForm from "@/components/feature/auth/RegistrationForm";

const RegistrationModal = () => {
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
                    aria-label="Abrir formulario de registro"
                >
                    Regístrate
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-2xl text-center font-bold">
                        Registrate
                    </DialogTitle>
                </DialogHeader>
                <RegistrationForm onCloseModal={() => setOpen(false)} />
            </DialogContent>
        </Dialog>
    );
};

export default RegistrationModal;