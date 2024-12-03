"use client";

import { useForm } from "react-hook-form";
import { useToast } from "@/lib/hooks/use-toast";
import { LoginFormValues } from "@/lib/types/auth";

export const useLoginForm = (onCloseModal: () => void) => {
    const { toast } = useToast();

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<LoginFormValues>({
        mode: "onChange",
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const handleFormSubmit = async (data: LoginFormValues) => {
        if (!isValid) {
            return;
        }

        try {
            console.log('Login attempt with:', data);
            // TODO: Implement login API call
            toast({
                variant: "default",
                title: "Inicio de sesión exitoso",
                description: "Has iniciado sesión correctamente",
            });

            onCloseModal();
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Error al iniciar sesión",
                description:
                    error instanceof Error
                        ? error.message
                        : "Ocurrió un error durante el inicio de sesión",
            });
        }
    };

    return {
        register,
        handleSubmit,
        handleFormSubmit,
        errors,
        isValid,
    };
}; 