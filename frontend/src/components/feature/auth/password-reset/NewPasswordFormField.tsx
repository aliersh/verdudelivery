import { FC } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NewPasswordFormFieldProps } from "@/lib/types/auth";
import { cn } from "@/lib/utils";

const NewPasswordFormField: FC<NewPasswordFormFieldProps> = ({
    id,
    label,
    type = "text",
    icon: Icon,
    disabled,
    register,
    error,
    validation,
}: NewPasswordFormFieldProps) => {
    const isValid = !error && validation;

    return (
        <div className="grid gap-2">
            <Label htmlFor={id}>{label}</Label>
            <div className="relative">
                {Icon && (
                    <Icon
                        className={cn(
                            "absolute left-3 top-3 h-4 w-4",
                            error
                                ? "text-destructive"
                                : isValid
                                ? "text-success"
                                : "text-muted-foreground"
                        )}
                    />
                )}
                <Input
                    id={id}
                    type={type}
                    className={cn(Icon && "pl-10")}
                    aria-label={label}
                    disabled={disabled}
                    {...register(id, validation)}
                />
            </div>
            {error?.message && (
                <p className="text-sm text-destructive">{error.message}</p>
            )}
        </div>
    );
};

export default NewPasswordFormField;
