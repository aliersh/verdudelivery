import { Button } from '@/components/common/buttons/button';

const LoginButton = () => {
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
