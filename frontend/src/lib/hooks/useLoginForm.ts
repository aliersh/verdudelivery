"use client";

import { useForm } from "react-hook-form";
import { useToast } from "@/lib/hooks/use-toast";
import { LoginFormValues } from "@/lib/types/auth";
import authApi from "@/lib/api/auth";
import { useCustomer } from "@/lib/contexts/CustomerContext";
import { useState } from "react";

export const useLoginForm = (onSuccess?: () => void) => {
    const { toast } = useToast();
    const { setCustomer } = useCustomer();
    const [loading, setLoading] = useState(false);

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

        setLoading(true);

        try {
            const { customer } = await authApi.login(data);
            setCustomer(customer);
            
            toast({
                variant: "default",
                title: "Inicio de sesión exitoso",
                description: "Has iniciado sesión correctamente",
            });

            if (onSuccess) {
                onSuccess();
            }
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Error al iniciar sesión",
                description:
                    error instanceof Error
                        ? error.message
                        : "Ocurrió un error durante el inicio de sesión",
            });
        } finally {
            setLoading(false);
        }
    };

    return {
        register,
        handleSubmit,
        handleFormSubmit,
        errors,
        isValid,
        loading,
    };
}; 