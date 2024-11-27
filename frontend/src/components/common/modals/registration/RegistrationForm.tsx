"use client";

import * as React from "react";
import { Mail, Lock } from "lucide-react";
import { Button } from "@/components/common/buttons/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface RegistrationFormProps {
    onCloseModal: () => void;
}

const RegistrationForm = ({ onCloseModal }: RegistrationFormProps) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Form submission logic here
    };

    return (
        <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
            <div className="grid gap-2">
                <Label htmlFor="city">Ciudad</Label>
                <Select>
                    <SelectTrigger id="city">
                        <SelectValue placeholder="Selecciona una ciudad" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="santiago">Viña del Mar</SelectItem>
                        <SelectItem value="valparaiso">Valparaíso</SelectItem>
                        <SelectItem value="concepcion">Quilpué</SelectItem>
                        <SelectItem value="la-serena">Otra</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                        id="email"
                        type="email"
                        placeholder="email@address.com"
                        className="pl-9"
                        aria-label="Correo electrónico"
                        required
                    />
                </div>
            </div>
            <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                        id="password"
                        type="password"
                        className="pl-9"
                        aria-label="Contraseña"
                        required
                        minLength={6}
                    />
                </div>
            </div>
            <Button 
                type="submit" 
                className="w-full"
                aria-label="Registrarse"
            >
                Registrate
            </Button>
            <div className="text-center text-sm">
                Tienes una cuenta?{" "}
                <Button
                    variant="link"
                    className="p-0 h-auto font-normal"
                    onClick={onCloseModal}
                    aria-label="Ir a inicio de sesión"
                >
                    Inicia Sesión
                </Button>
            </div>
        </form>
    );
}; 

export default RegistrationForm;