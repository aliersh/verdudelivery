import { useState } from 'react';
import { useForm } from 'react-hook-form';

import authApi from '@/lib/api/auth';
import { useToast } from '@/lib/hooks/use-toast';
import { validateCity, validateEmail, validatePassword } from '@/lib/services/validation';
import { FormValues } from '@/lib/types/auth';

export const useRegistrationForm = (onCloseModal: () => void) => {
    const [selectedCity, setSelectedCity] = useState<string>("");
    const { toast } = useToast();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormValues>({
        mode: "onBlur",
    });

    const watchEmail = watch("email");
    const watchPassword = watch("password");

    const isValidEmail =
        watchEmail && !errors.email && validateEmail(watchEmail);
    const isValidPassword =
        watchPassword && !errors.password && validatePassword(watchPassword);
    const isValidCity = validateCity(selectedCity);
    const isFormValid = isValidEmail && isValidPassword && isValidCity;
    const isOtherCity = selectedCity === "otra";

    const handleFormSubmit = async (data: FormValues) => {
        try {
            await authApi.register({
                email: data.email,
                password: data.password,
            });

            toast({
                variant: "default",
                title: "Registro exitoso",
                description: "Tu cuenta ha sido creada correctamente",
            });

            onCloseModal();
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Error al registrar",
                description:
                    error instanceof Error
                        ? error.message
                        : "Ocurrió un error durante el registro",
            });

            console.error(
                "Error registering customer:",
                error instanceof Error ? error.message : error
            );
        }
    };

    const handleCityChange = (value: string) => {
        setSelectedCity(value);
        register("city").onChange({ target: { value } });
    };

    return {
        register,
        handleSubmit,
        handleFormSubmit,
        handleCityChange,
        errors,
        selectedCity,
        isValidEmail,
        isValidPassword,
        isFormValid,
        isOtherCity,
    };
};
