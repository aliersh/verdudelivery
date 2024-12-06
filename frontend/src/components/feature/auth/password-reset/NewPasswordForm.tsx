"use client";

import { Lock } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { Button } from "@/components/common/buttons/button";
import NewPasswordFormField from "./NewPasswordFormField";

type NewPasswordFormData = {
    password: string;
    confirmPassword: string;
};

const NewPasswordForm = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isValid },
    } = useForm<NewPasswordFormData>({
        mode: "onChange",
    });

    const password = watch("password");

    const handleFormSubmit = async (data: NewPasswordFormData) => {
        // TODO: Implement new password logic
        console.log(data);
    };

    const handleBackToHome = () => {
        router.push("/");
    };

    return (
        <div className="grid gap-6">
            <div className="flex flex-col gap-2 text-center">
                <h2 className="text-2xl font-semibold tracking-tight">
                    Nueva contraseña
                </h2>
                <p className="text-sm text-muted-foreground">
                    Por favor ingresa tu nueva contraseña.
                </p>
            </div>

            <form
                className="grid gap-4"
                onSubmit={handleSubmit(handleFormSubmit)}
            >
                <NewPasswordFormField
                    id="password"
                    type="password"
                    label="Nueva contraseña"
                    icon={Lock}
                    disabled={false}
                    register={register}
                    error={errors.password}
                    validation={{
                        required: "La contraseña es requerida",
                        minLength: {
                            value: 8,
                            message: "La contraseña debe tener al menos 8 caracteres",
                        },
                    }}
                />

                <NewPasswordFormField
                    id="confirmPassword"
                    type="password"
                    label="Confirmar contraseña"
                    icon={Lock}
                    disabled={false}
                    register={register}
                    error={errors.confirmPassword}
                    validation={{
                        required: "La confirmación de contraseña es requerida",
                        validate: (value: string) =>
                            value === password || "Las contraseñas no coinciden",
                    }}
                />

                <Button
                    type="submit"
                    className="w-full"
                    aria-label="Cambiar contraseña"
                    disabled={!isValid}
                >
                    Cambiar contraseña
                </Button>

                <div className="text-sm text-center">
                    <Button
                        type="button"
                        variant="link"
                        className="h-auto p-0 font-normal"
                        aria-label="Volver al inicio"
                        onClick={handleBackToHome}
                    >
                        Volver al inicio
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default NewPasswordForm; 