export interface FormInputProps {
    label: string;
    type: string;
    id: string;
    placeholder?: string;
}

export interface RegistrationFormProps {
    setIsOpen: (isOpen: boolean) => void;
}
