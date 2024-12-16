export const PHONE_REGEX = /^9[0-9]{8}$/;
export const NAME_REGEX = /^[a-zA-ZÀ-ÿ\s']{2,40}$/;

export const accountValidation = {
    firstName: {
        required: "El nombre es requerido",
        pattern: {
            value: NAME_REGEX,
            message: "Por favor ingresa un nombre válido",
        },
        minLength: {
            value: 2,
            message: "El nombre debe tener al menos 2 caracteres",
        },
        maxLength: {
            value: 40,
            message: "El nombre no puede tener más de 40 caracteres",
        },
    },
    lastName: {
        required: "El apellido es requerido",
        pattern: {
            value: NAME_REGEX,
            message: "Por favor ingresa un apellido válido",
        },
        minLength: {
            value: 2,
            message: "El apellido debe tener al menos 2 caracteres",
        },
        maxLength: {
            value: 40,
            message: "El apellido no puede tener más de 40 caracteres",
        },
    },
    phone: {
        required: "El teléfono es requerido",
        pattern: {
            value: PHONE_REGEX,
            message: "Por favor ingresa un número válido (ej: 991234567)",
        },
    },
}; 