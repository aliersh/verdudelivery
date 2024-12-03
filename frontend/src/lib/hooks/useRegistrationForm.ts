import { useState } from 'react';
import { useForm } from 'react-hook-form';

import authApi from '@/lib/api/auth';
import { useToast } from '@/lib/hooks/use-toast';
import { validateCity } from '@/lib/validations/registration';
import { FormValues } from '@/lib/types/auth';

export const useRegistrationForm = (onCloseModal: () => void) => {
    const [selectedCity, setSelectedCity] = useState<string>("");
    const { toast } = useToast();

    const {
        register,
        handleSubmit,
        setValue,
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
        if (!isFormValid) {
            return;
        }

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
            toast({
                variant: "destructive",
                title: "Error al registrar",
                description:
                    error instanceof Error
                        ? error.message
                        : "Ocurrió un error durante el registro",
            });
        }
    };

    const handleCityChange = (value: string) => {
        setSelectedCity(value);
        setValue("city", value, { 
            shouldValidate: true,
            shouldDirty: true 
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
