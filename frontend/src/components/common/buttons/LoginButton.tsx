import { FC } from "react";

import { Button } from "@/components/ui/button";

const LoginButton: FC = () => {
    return (
        <Button
            variant="default"
            className="hidden px-2 md:block"
            aria-label="Iniciar sesión"
            role="button"
        >
            Iniciar sesión
        </Button>
    );
};

export default LoginButton;
