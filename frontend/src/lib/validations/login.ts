export const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const loginValidation = {
    email: {
        required: "El email es requerido",
        pattern: {
            value: EMAIL_REGEX,
            message: "Por favor ingresa un email válido",
        },
    },
    password: {
        required: "La contraseña es requerida",
    },
}; 