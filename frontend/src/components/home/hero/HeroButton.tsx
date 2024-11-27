import { FC } from "react";
import { Button } from '@/components/common/buttons/button';
import RegistrationModal from '@/components/common/modals/registration/RegistrationModal';
import Link from "next/link";

const HeroButtons: FC = () => {
    return (
        <div
            className="flex justify-center gap-3 mt-8"
            aria-label="Botones de acceso"
            role="group"
        >
            <RegistrationModal />
            <Link href="/productos" aria-label="Ver productos">
                <Button size="lg" variant="accent">
                    Ver productos
                </Button>
            </Link>
        </div>
    );
};

export default HeroButtons;
