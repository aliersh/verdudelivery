"use client";

import { Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";

import PasswordResetFormField from "./PasswordResetFormField";
import { PasswordResetFormData } from "@/lib/types/auth";

const PasswordResetForm = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<PasswordResetFormData>({
        mode: "onChange",
    });

    const handleFormSubmit = async (data: PasswordResetFormData) => {
        // TODO: Implement password reset logic
        console.log(data);
    };

    const handleBackToHome = () => {
        router.push("/");
    };

    return (
        <div className="grid gap-6">
            <div className="flex flex-col gap-2 text-center">
                <h2 className="text-2xl font-semibold tracking-tight">
                    Recuperar contraseña
                </h2>
                <p className="text-sm text-muted-foreground">
                    Ingresa tu correo electrónico y te enviaremos las
                    instrucciones para restablecer tu contraseña.
                </p>
            </div>

            <form
                className="grid gap-4"
                onSubmit={handleSubmit(handleFormSubmit)}
            >
                <PasswordResetFormField
                    id="email"
                    type="email"
                    label="Email"
                    placeholder="oscar@acevedo.com"
                    icon={Mail}
                    disabled={false}
                    register={register}
                    error={errors.email}
                    validation={{
                        required: "El email es requerido",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Email inválido",
                        },
                    }}
                />

                <Button
                    type="submit"
                    className="w-full"
                    aria-label="Enviar instrucciones"
                    disabled={!isValid}
                >
                    Enviar instrucciones
                </Button>

                <div className="text-sm text-center">
                    ¿Recordaste tu contraseña?{" "}
                    <Button
                        type="button"
                        variant="link"
                        className="h-auto p-0 font-normal"
                        aria-label="Volver a iniciar sesión"
                        onClick={handleBackToHome}
                    >
                        Volver al inicio
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default PasswordResetForm;
