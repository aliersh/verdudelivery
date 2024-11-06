import { FC } from "react";
import { Button } from '@/components/ui/buttons/button';
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
            <Button size="lg" variant="accent" aria-label="Ver productos">
                <Link href="/productos">Ver productos</Link>
            </Button>
        </div>
    );
};

export default HeroButtons;
