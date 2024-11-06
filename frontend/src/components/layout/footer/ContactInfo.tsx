import { FC } from 'react';

import Logo from '@/components/shared/Logo';

const ContactInfo: FC = () => (
    <address
        className="flex flex-col items-start gap-4"
        aria-label="Información de contacto"
    >
        <Logo />
        <span className="sr-only">Verdudelivery</span>
        <div
            className="grid gap-1 text-muted-foreground"
            aria-label="Contacto"
            role="group"
        >
            <button
                className="text-left hover:underline focus:underline"
                aria-label="Correo electrónico a info@verdudelivery.cl"
            >
                info@verdudelivery.cl
            </button>
            <button
                className="text-left hover:underline focus:underline"
                aria-label="Teléfono a +56 9 9078 5716"
            >
                +56 9 9078 5716
            </button>
        </div>
    </address>
);

export default ContactInfo;
