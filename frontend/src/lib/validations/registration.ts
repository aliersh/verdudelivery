export const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const validateCity = (city: string): boolean => {
    return city !== "" && city !== "otra";
};

export const registrationValidation = {
    email: {
        required: "El email es requerido",
        pattern: {
            value: EMAIL_REGEX,
            message: "Por favor ingresa un email válido",
        },
    },
    password: {
        required: "La contraseña es requerida",
        minLength: {
            value: 8,
            message: "La contraseña debe tener al menos 8 caracteres",
            //TODO: Implement a real time password strength validation
            //?: Should I implement a real time password strength validation?
        },
    },
    city: {
        required: "La ciudad es requerida",
    },
};
