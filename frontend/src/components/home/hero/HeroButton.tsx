import { FC } from "react";
import { Button } from '@/components/common/buttons/button';
import Link from "next/link";

const HeroButtons: FC = () => {
    return (
        <div
            className="flex justify-center gap-3 mt-8"
            aria-label="Botones de acceso"
            role="group"
        >
            <Button size="lg" aria-label="Regístrate">
                Regístrate
            </Button>
            <Link href="/productos" aria-label="Ver productos">
                <Button size="lg" variant="accent">
                    Ver productos
                </Button>
            </Link>
        </div>
    );
};

export default HeroButtons;
