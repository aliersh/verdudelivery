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

import RegistrationForm from "./RegistrationForm";

const RegistrationModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button size="lg">Registrarse</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-center">
                        Regístrate
                    </DialogTitle>
                </DialogHeader>
                <RegistrationForm setIsOpen={setIsOpen} />
            </DialogContent>
        </Dialog>
    );
};

export default RegistrationModal;
