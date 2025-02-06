"use client";

import { Lock, Mail } from "lucide-react";
import { FC } from "react";

import { Button } from "@/components/ui/button";
import { useRegistrationForm } from "@/lib/hooks/useRegistrationForm";
import { RegistrationFormProps } from "@/lib/types/auth";
import { registrationValidation } from "@/lib/validations/registration";

import RegistrationFormField from "./RegistrationFormField";
import SelectField from "./SelectField";

const CITY_OPTIONS = [
    { value: "vina-del-mar", label: "Viña del Mar" },
    { value: "valparaiso", label: "Valparaíso" },
    { value: "quilpue", label: "Quilpué" },
    { value: "otra", label: "Otra" },
];

const RegistrationForm: FC<RegistrationFormProps> = ({ onCloseModal }) => {
    const {
        register,
        handleSubmit,
        handleFormSubmit,
        handleCityChange,
        errors,
        isFormValid,
        isOtherCity,
    } = useRegistrationForm(onCloseModal);

    return (
        <form
            className="grid gap-4 py-4"
            onSubmit={handleSubmit(handleFormSubmit)}
        >
            <SelectField
                id="city"
                label="Ciudad"
                options={CITY_OPTIONS}
                placeholder="Selecciona una ciudad"
                onChange={handleCityChange}
                error={
                    isOtherCity
                        ? "Por el momento, no estamos disponibles en otras ciudades"
                        : errors.city?.message
                }
            />

            <RegistrationFormField
                id="email"
                type="email"
                label="Email"
                placeholder="oscar@acevedo.com"
                icon={Mail}
                error={errors.email}
                disabled={isOtherCity}
                register={register}
                validation={registrationValidation.email}
            />

            <RegistrationFormField
                id="password"
                type="password"
                label="Password"
                icon={Lock}
                error={errors.password}
                disabled={isOtherCity}
                register={register}
                validation={registrationValidation.password}
            />

            <Button
                type="submit"
                className="w-full"
                aria-label="Registrarse"
                disabled={!isFormValid}
            >
                Registrate
            </Button>

            {/* //TODO: Add a redirection to profile or products page */}

            <div className="text-sm text-center">
                ¿Ya tienes una cuenta?{" "}
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
