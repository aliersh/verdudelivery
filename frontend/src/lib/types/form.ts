import { LucideIcon } from "lucide-react";
import { FieldErrors, RegisterOptions, UseFormRegister } from "react-hook-form";
import { FormValues } from "./auth";

export type FormFields = {
    email: string;
    password: string;
    city: string;
};

export interface FieldProps {
    id: keyof FormFields;
    label: string;
    error?: { 
        message?: string  // Make message optional
    };
    icon?: React.ElementType;
    isValid?: boolean;
    disabled?: boolean;
    register: UseFormRegister<FormFields>;
    type?: string;
    validation?: any; // You can make this more specific if needed
    [key: string]: any;
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
