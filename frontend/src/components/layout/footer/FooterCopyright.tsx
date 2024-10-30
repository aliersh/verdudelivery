import { FC } from "react";

const FooterCopyright: FC = () => (
    <div className="flex items-center justify-end text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Verdudelivery. Todos los derechos reservados.
    </div>
);

export default FooterCopyright;
