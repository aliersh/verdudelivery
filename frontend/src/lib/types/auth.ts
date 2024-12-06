import { HttpTypes } from "@medusajs/types";
import { ReactNode } from "react";

export interface RegistrationFormProps {
    onCloseModal: () => void;
}

export interface LoginFormProps {
    onCloseModal: () => void;
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
}

export type CustomerContextType = {
    customer: HttpTypes.StoreCustomer | undefined;
    setCustomer: (customer: HttpTypes.StoreCustomer | undefined) => void;
    isLoading: boolean;
    logout: () => void;
};

export type CustomerProviderProps = {
    children: ReactNode;
};
