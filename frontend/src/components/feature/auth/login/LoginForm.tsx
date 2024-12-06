"use client";

import { Lock, Mail } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/common/buttons/button";
import { useLoginForm } from "@/lib/hooks/useLoginForm";
import { LoginFormProps } from "@/lib/types/auth";
import { loginValidation } from "@/lib/validations/login";

import LoginFormField from "./LoginFormField";

const LoginForm = ({
    onCloseModal,
    onSwitchToSignup,
    onLoginSuccess,
}: LoginFormProps) => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        handleFormSubmit,
        errors,
        isValid,
        loading,
    } = useLoginForm(onLoginSuccess);

    const handlePasswordReset = (e: React.MouseEvent) => {
        e.preventDefault();
        onCloseModal();
        router.push("/auth/recuperar-contrasena");
    };

    return (
        <form
            className="grid gap-4 py-4"
            onSubmit={handleSubmit(handleFormSubmit)}
        >
            <LoginFormField
                id="email"
                type="email"
                label="Email"
                placeholder="oscar@acevedo.com"
                icon={Mail}
                error={errors.email}
                register={register}
                validation={loginValidation.email}
                disabled={loading}
            />

            <LoginFormField
                id="password"
                type="password"
                label="Password"
                icon={Lock}
                error={errors.password}
                register={register}
                validation={loginValidation.password}
                disabled={loading}
            />

            <Button
                type="submit"
                className="w-full"
                aria-label="Login"
                disabled={!isValid || loading}
            >
                {loading ? "Iniciando sesión..." : "Iniciar sesión"}
            </Button>

            {/* //TODO: Add a redirection to profile page or products page */}

            <div className="text-sm text-center">
                ¿No tienes una cuenta?{" "}
                <Button
                    variant="link"
                    className="h-auto p-0 font-normal"
                    onClick={onSwitchToSignup}
                    aria-label="Ir a registro"
                    disabled={loading}
                >
                    Registrate
                </Button>
            </div>

            <div className="text-sm text-center">
                ¿Olvidaste tu contraseña?{" "}
                <Button
                    variant="link"
                    className="h-auto p-0 font-normal"
                    onClick={handlePasswordReset}
                    aria-label="Recuperar contraseña"
                    disabled={loading}
                >
                    Haz click aquí
                </Button>
            </div>
        </form>
    );
};

export default LoginForm;
