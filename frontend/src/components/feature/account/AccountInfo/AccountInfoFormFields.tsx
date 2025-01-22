import { FC } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AccountFormFieldsProps } from "@/lib/types/form";
import { accountValidation } from "@/lib/validations/account";

const AccountFormFields: FC<AccountFormFieldsProps> = ({
    register,
    errors,
}) => (
    <>
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
                <p className="text-sm text-red-500">{errors.phone.message}</p>
            )}
        </div>
    </>
);

export default AccountFormFields;
