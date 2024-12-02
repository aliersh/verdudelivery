"use client";

import { Check, Lock, Mail } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/common/buttons/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from '@/components/ui/select';
import authApi from '@/lib/api/auth';
import { useToast } from '@/lib/hooks/use-toast';
import { FormValues, RegistrationFormProps } from '@/lib/types/auth';

const RegistrationForm = ({ onCloseModal }: RegistrationFormProps) => {
    const [selectedCity, setSelectedCity] = useState<string>("");
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormValues>({
        mode: "onBlur",
    });
    const { toast } = useToast();

    const watchEmail = watch("email");
    const watchPassword = watch("password");

    const isValidEmail =
        watchEmail &&
        !errors.email &&
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(watchEmail);
    const isValidPassword =
        watchPassword &&
        !errors.password &&
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(watchPassword);
    const isValidCity = selectedCity && selectedCity !== "otra";

    const isFormValid = isValidEmail && isValidPassword && isValidCity;

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

    const isOtherCity = selectedCity === "otra";

    return (
        <form
            className="grid gap-4 py-4"
            onSubmit={handleSubmit(handleFormSubmit)}
        >
            <div className="grid gap-2">
                <Label htmlFor="city">Ciudad</Label>
                <Select onValueChange={handleCityChange}>
                    <SelectTrigger id="city">
                        <SelectValue
                            placeholder="Selecciona una ciudad"
                            className="text-muted-foreground/50"
                        />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="vina-del-mar">
                            Viña del Mar
                        </SelectItem>
                        <SelectItem value="valparaiso">Valparaíso</SelectItem>
                        <SelectItem value="quilpue">Quilpué</SelectItem>
                        <SelectItem value="otra">Otra</SelectItem>
                    </SelectContent>
                </Select>
                {isOtherCity && (
                    <p className="mt-1 text-sm text-destructive">
                        Por el momento, no estamos disponibles en otras ciudades
                    </p>
                )}
            </div>
            <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                    <Mail className="absolute w-4 h-4 left-3 top-3 text-muted-foreground" />
                    <Input
                        id="email"
                        type="email"
                        placeholder="oscar@acevedo.com"
                        className={`pl-9 pr-9 ${
                            errors.email ? "border-red-500" : ""
                        } placeholder:text-muted-foreground/50`}
                        aria-label="Correo electrónico"
                        disabled={isOtherCity}
                        {...register("email", {
                            required: "El email es requerido",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Email inválido",
                            },
                        })}
                    />
                    {isValidEmail && (
                        <Check className="absolute w-4 h-4 text-green-500 right-3 top-3" />
                    )}
                    {errors.email && (
                        <p
                            className="mt-1 text-sm text-destructive"
                            role="alert"
                        >
                            {errors.email.message}
                        </p>
                    )}
                </div>
            </div>
            <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                    <Lock className="absolute w-4 h-4 left-3 top-3 text-muted-foreground" />
                    <Input
                        id="password"
                        type="password"
                        className={`pl-9 pr-9 ${
                            errors.password ? "border-red-500" : ""
                        }`}
                        aria-label="Contraseña"
                        disabled={isOtherCity}
                        {...register("password", {
                            required: "La contraseña es requerida",
                            minLength: {
                                value: 6,
                                message:
                                    "La contraseña debe tener al menos 6 caracteres",
                            },
                            pattern: {
                                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                                message:
                                    "La contraseña debe contener letras y números",
                            },
                        })}
                    />
                    {isValidPassword && (
                        <Check className="absolute w-4 h-4 text-green-500 right-3 top-3" />
                    )}
                    {errors.password && (
                        <p
                            className="mt-1 text-sm text-destructive"
                            role="alert"
                        >
                            {errors.password.message}
                        </p>
                    )}
                </div>
            </div>
            <Button
                type="submit"
                className="w-full"
                aria-label="Registrarse"
                disabled={!isFormValid}
            >
                Registrate
            </Button>
            <div className="text-sm text-center">
                Tienes una cuenta?{" "}
                <Button
                    variant="link"
                    className="h-auto p-0 font-normal"
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
