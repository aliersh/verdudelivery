import { LucideIcon } from "lucide-react";
import { FieldErrors, RegisterOptions, UseFormRegister } from "react-hook-form";
import { FormValues } from "./auth";

export interface FieldProps {
    id: keyof FormValues;
    label: string;
    type?: string;
    placeholder?: string;
    icon?: LucideIcon;
    error?: {
        message?: string;
    };
    isValid?: boolean;
    disabled?: boolean;
    register: UseFormRegister<FormValues>;
    validation?: RegisterOptions;
}

export interface SelectFieldProps {
    id: string;
    label: string;
    options: Array<{
        value: string;
        label: string;
    }>;
    placeholder: string;
    onChange: (value: string) => void;
    error?: string;
}

export interface AccountFormData {
    firstName: string;
    lastName: string;
    phone: string;
}

export interface AccountFormFieldsProps {
    register: UseFormRegister<AccountFormData>;
    errors: FieldErrors<AccountFormData>;
}

export interface City {
    id: string;
    name: string;
    value: string;
}
