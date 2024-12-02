import type { LucideIcon } from "lucide-react";
import { UseFormRegister } from "react-hook-form";

export interface FormValues {
    email: string;
    password: string;
    city: string;
}

export interface FieldProps {
    id: keyof FormValues;
    label: string;
    error?: {
        message?: string;
    };
    icon?: LucideIcon;
    isValid?: boolean;
    disabled?: boolean;
    register: UseFormRegister<FormValues>;
    validation?: Record<string, unknown>;
    [key: string]: unknown;
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
