import { Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldProps } from "@/lib/types/form";

const FormField = ({
    id,
    label,
    error,
    icon: Icon,
    isValid,
    disabled,
    register,
    ...props
}: FieldProps) => {
    return (
        <div className="grid gap-2">
            <Label htmlFor={id}>{label}</Label>
            <div className="relative">
                {Icon && (
                    <Icon className="absolute w-4 h-4 left-3 top-3 text-muted-foreground" />
                )}
                <Input
                    id={id}
                    className={`${Icon ? "pl-9 pr-9" : ""} ${
                        error ? "border-red-500" : ""
                    } placeholder:text-muted-foreground/50`}
                    aria-label={label}
                    disabled={disabled}
                    {...register(id, props.validation)}
                    {...props}
                />
                {isValid && (
                    <Check className="absolute w-4 h-4 text-green-500 right-3 top-3" />
                )}
                {error && (
                    <p className="mt-1 text-sm text-destructive" role="alert">
                        {error.message}
                    </p>
                )}
            </div>
        </div>
    );
};

export default FormField;
