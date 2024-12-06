import { LucideIcon } from "lucide-react";
import { FieldError, RegisterOptions, UseFormRegister } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type NewPasswordFormData = {
    password: string;
    confirmPassword: string;
};

interface NewPasswordFormFieldProps {
    id: keyof NewPasswordFormData;
    label: string;
    type?: string;
    icon?: LucideIcon;
    disabled?: boolean;
    register: UseFormRegister<NewPasswordFormData>;
    error?: FieldError;
    validation?: RegisterOptions<NewPasswordFormData>;
}

const NewPasswordFormField = ({
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