import { Mail, Phone } from "lucide-react";
import { FC } from "react";

import Logo from "@/components/common/logo/Logo";
import { Button } from "@/components/ui/button";

const ContactInfo: FC = () => (
    <address className="flex flex-col items-center gap-6 not-italic md:items-start">
        <Logo />
        <div className="flex flex-col gap-3" aria-label="Contacto">
            <Button
                variant="link"
                className="flex items-center h-auto gap-2 p-0 text-muted-foreground hover:text-primary"
                aria-label="Correo electrónico a info@verdudelivery.cl"
            >
                <Mail className="w-4 h-4" />
                info@verdudelivery.cl
            </Button>
            <Button
                variant="link"
                className="flex items-center h-auto gap-2 p-0 text-muted-foreground hover:text-primary"
                aria-label="Teléfono a +56 9 9078 5716"
            >
                <Phone className="w-4 h-4" />
                +56 9 9078 5716
            </Button>
        </div>
    </address>
);

export default ContactInfo;
