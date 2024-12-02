export const validateEmail = (email: string): boolean => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
};

export const validatePassword = (password: string): boolean => {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password);
};

export const validateCity = (city: string): boolean => {
    return Boolean(city && city !== "otra");
};

export const getEmailValidationRules = () => ({
    required: "El email es requerido",
    pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Email inválido",
    },
});

export const getPasswordValidationRules = () => ({
    required: "La contraseña es requerida",
    minLength: {
        value: 6,
        message: "La contraseña debe tener al menos 6 caracteres",
    },
    pattern: {
        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
        message: "La contraseña debe contener letras y números",
    },
});
