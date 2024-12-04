import Link from 'next/link';
import { FC } from 'react';

import { Button } from '@/components/common/buttons/button';
import AuthModal from '@/components/common/modals/AuthModal';

const HeroButtons: FC = () => {
    return (
        <div
            className="flex justify-center gap-3 mt-8"
            aria-label="Botones de acceso"
            role="group"
        >
            <AuthModal
                initialView="signup"
                buttonText="Regístrate"
                buttonClassName="hidden md:block"
                buttonSize="lg"
            />
            <Link href="/productos" aria-label="Ver productos">
                <Button size="lg" variant="accent">
                    Ver productos
                </Button>
            </Link>
        </div>
    );
};

export default HeroButtons;
