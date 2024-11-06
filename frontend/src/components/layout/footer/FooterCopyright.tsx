import { FC } from 'react';

const FooterCopyright: FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <small
            className="flex items-center justify-end text-sm text-muted-foreground"
            role="contentinfo"
            aria-label="Copyright"
        >
            &copy; {currentYear} Verdudelivery. Todos los derechos reservados.
        </small>
    );
};

export default FooterCopyright;
