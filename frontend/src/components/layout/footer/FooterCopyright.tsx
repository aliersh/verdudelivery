import { FC } from "react";

const FooterCopyright: FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="flex items-center justify-center text-sm text-muted-foreground md:justify-end">
            &copy; {currentYear} Verdudelivery. Todos los derechos reservados.
        </div>
    );
};

export default FooterCopyright;
