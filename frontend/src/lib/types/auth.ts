import { ReactNode } from "react";

import { HttpTypes } from "@medusajs/types";

export interface RegistrationFormProps {
    onCloseModal: () => void;
}

export interface LoginFormProps {
    onCloseModal: () => void;
    onSwitchToSignup: () => void;
    onLoginSuccess: () => void;
}

export type FormValues = {
    city: string;
    email: string;
    password: string;
};

export type LoginFormValues = {
    email: string;
    password: string;
};

export interface RegisterResponse {
    token: string;
}

export interface CustomerResponse {
    customer: HttpTypes.StoreCustomer;
}

export interface RegisterData {
    email: string;
    password: string;
    city: string;
}

export interface LoginData {
    email: string;
    password: string;
}

export interface AuthModalProps {
    initialView?: "login" | "signup";
    buttonText?: string;
    buttonClassName?: string;
    buttonSize?: "default" | "sm" | "lg";
    buttonVariant?: "default" | "destructive" | "outline" | "ghost" | "link" | "accent";
}

export type AuthModalView = "login" | "signup";

export type CustomerContextType = {
    customer: HttpTypes.StoreCustomer | undefined;
    setCustomer: (customer: HttpTypes.StoreCustomer | undefined) => void;
    isLoading: boolean;
    logout: () => void;
};

export type CustomerProviderProps = {
    children: ReactNode;
};

export type PasswordResetFormData = {
    email: string;
};
