"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useCustomer } from "@/lib/contexts/CustomerContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import authApi from "@/lib/api/auth";
import { toast } from "@/lib/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { accountValidation } from "@/lib/validations/account";

interface FormData {
    firstName: string;
    lastName: string;
    phone: string;
}

const AccountInfo = () => {
    const { customer, setCustomer } = useCustomer();
    const [isLoading, setIsLoading] = useState(false);
    
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        mode: "onBlur",
    });

    useEffect(() => {
        if (customer) {
            reset({
                firstName: customer.first_name || "",
                lastName: customer.last_name || "",
                phone: customer.phone || "",
            });
        }
    }, [customer, reset]);

    const onSubmit = async (data: FormData) => {
        setIsLoading(true);

        try {
            const updatedCustomer = await authApi.updateCustomer({
                first_name: data.firstName,
                last_name: data.lastName,
                phone: data.phone,
            });
            
            setCustomer(updatedCustomer);
            toast({
                title: "Perfil actualizado",
                description: "Los cambios han sido guardados exitosamente",
            });
        } catch {
            toast({
                title: "Error",
                description: "No se pudo actualizar el perfil",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Información Personal</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="firstName">Nombre</Label>
                            <Input
                                {...register("firstName", accountValidation.firstName)}
                                placeholder="Tu nombre"
                                className={errors.firstName ? "border-red-500" : ""}
                            />
                            {errors.firstName && (
                                <p className="text-sm text-red-500">
                                    {errors.firstName.message}
                                </p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="lastName">Apellido</Label>
                            <Input
                                {...register("lastName", accountValidation.lastName)}
                                placeholder="Tu apellido"
                                className={errors.lastName ? "border-red-500" : ""}
                            />
                            {errors.lastName && (
                                <p className="text-sm text-red-500">
                                    {errors.lastName.message}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone">Teléfono</Label>
                        <Input
                            {...register("phone", accountValidation.phone)}
                            type="tel"
                            placeholder="991234567"
                            className={`max-w-md ${errors.phone ? "border-red-500" : ""}`}
                        />
                        {errors.phone && (
                            <p className="text-sm text-red-500">
                                {errors.phone.message}
                            </p>
                        )}
                    </div>
                    <Button 
                        type="submit" 
                        disabled={isLoading}
                        className="w-full md:w-auto"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                Guardando...
                            </>
                        ) : (
                            "Guardar cambios"
                        )}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default AccountInfo;
