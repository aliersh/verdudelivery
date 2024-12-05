import { useState } from "react";
import { useForm } from "react-hook-form";

import authApi from "@/lib/api/auth";
import { useToast } from "@/lib/hooks/use-toast";
import { FormValues } from "@/lib/types/auth";
import { validateCity } from "@/lib/validations/registration";

export const useRegistrationForm = (onCloseModal: () => void) => {
    const [selectedCity, setSelectedCity] = useState<string>("");
    const { toast } = useToast();

    const {
        register,
        handleSubmit,
        setValue,
        setError,
        formState: { errors, isValid },
    } = useForm<FormValues>({
        mode: "onChange",
        defaultValues: {
            email: "",
            password: "",
            city: "",
        },
    });

    const isOtherCity = selectedCity === "otra";
    const isValidCity = validateCity(selectedCity);
    const isFormValid = isValid && isValidCity && !isOtherCity;

    const handleFormSubmit = async (data: FormValues) => {
        if (!isFormValid) return;

        try {
            await authApi.register({
                email: data.email,
                password: data.password,
                city: selectedCity,
            });
            toast({
                variant: "default",
                title: "Registro exitoso",
                description: "Tu cuenta ha sido creada correctamente",
            });
            onCloseModal();
        } catch (error) {
            if (
                error instanceof Error &&
                error.message === "Identity with email already exists"
            ) {
                setError("email", {
                    type: "manual",
                    message: "Este email ya está registrado",
                });
            }
        }
    };

    const handleCityChange = (value: string) => {
        setSelectedCity(value);
        setValue("city", value, {
            shouldValidate: true,
            shouldDirty: true,
        });
    };

    return {
        register,
        handleSubmit,
        handleFormSubmit,
        handleCityChange,
        errors,
        isFormValid,
        isOtherCity,
    };
};
