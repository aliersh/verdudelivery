import { Check, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldProps } from "@/lib/types/form";

const RegistrationFormField = ({
    id,
    label,
    error,
    icon: Icon,
    isValid,
    disabled,
    register,
    type,
    ...props
}: FieldProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword((prev) => !prev);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
            handleTogglePassword();
        }
    };

    const isPasswordField = type === "password";
    const inputType = isPasswordField ? (showPassword ? "text" : "password") : type;

    return (
        <div className="grid gap-2">
            <Label htmlFor={id}>{label}</Label>
            <div className="relative">
                {Icon && (
                    <Icon className="absolute w-4 h-4 left-3 top-3 text-muted-foreground" />
                )}
                <Input
                    id={id}
                    type={inputType}
                    className={`${Icon ? "pl-9 pr-9" : ""} ${
                        error ? "border-red-500" : ""
                    } placeholder:text-muted-foreground/50`}
                    aria-label={label}
                    disabled={disabled}
                    {...register(id, props.validation)}
                    {...props}
                />
                {isPasswordField && (
                    <button
                        type="button"
                        onClick={handleTogglePassword}
                        onKeyDown={handleKeyDown}
                        className="absolute right-3 top-3 text-muted-foreground hover:text-foreground focus:outline-none"
                        tabIndex={0}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                        {showPassword ? (
                            <EyeOff className="w-4 h-4" />
                        ) : (
                            <Eye className="w-4 h-4" />
                        )}
                    </button>
                )}
                {isValid && !isPasswordField && (
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

export default RegistrationFormField;
