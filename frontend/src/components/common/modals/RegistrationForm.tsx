import { FC, useState } from "react";

import { Button } from "@/components/common/buttons/button";
import { RegistrationFormProps } from "@/types/auth";

import FormInput from "./FormInput";

const RegistrationForm: FC<RegistrationFormProps> = ({ setIsOpen }) => {
    const [selectedCity, setSelectedCity] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submit")
        setIsOpen(false);
    };

    const isValidCity = selectedCity && selectedCity !== "Otra";

    return (
        <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
            <div className="grid gap-2">
                <label
                    htmlFor="city"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Ciudad
                </label>
                <select
                    id="city"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="flex w-full h-10 px-3 py-2 text-sm border rounded-md border-input bg-background ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    aria-label="Selecciona tu ciudad"
                >
                    <option value="">Selecciona una ciudad</option>
                    <option value="Viña del Mar">Viña del Mar</option>
                    <option value="Valparaíso">Valparaíso</option>
                    <option value="Quilpué">Quilpué</option>
                    <option value="Otra">Otra</option>
                </select>
                {selectedCity === "Otra" && (
                    <p className="text-sm text-red-500">
                        Aún no estamos disponibles en otras ciudades
                    </p>
                )}
            </div>

            <FormInput
                label="Nombre"
                type="text"
                id="name"
                placeholder="Oscar Acevedo"
            />
            <FormInput
                label="Email"
                type="email"
                id="email"
                placeholder="oscar.acevedo@yacevedo.com"
            />
            <FormInput label="Contraseña" type="password" id="password" />
            <FormInput
                label="Teléfono"
                type="tel"
                id="phone"
                placeholder="990785716"
            />

            <Button type="submit" disabled={!isValidCity}>
                Registrarse
            </Button>

            <div className="text-sm text-center">
                Ya tienes una cuenta?{" "}
                <Button
                    variant="link"
                    className="h-auto p-0 font-normal"
                    onClick={() => setIsOpen(false)}
                >
                    Inicia sesión
                </Button>
            </div>
        </form>
    );
};

export default RegistrationForm;
