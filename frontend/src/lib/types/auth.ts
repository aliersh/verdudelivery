export interface RegistrationFormProps {
    onCloseModal: () => void;
}

export type FormValues = {
    city: string;
    email: string;
    password: string;
};

export interface RegisterResponse {
    token: string;
}

export interface CustomerResponse {
    customer: {
        id: string;
        email: string;
        // Add other customer fields as needed
    };
}

export interface RegisterData {
    email: string;
    password: string;
    city: string;
}
