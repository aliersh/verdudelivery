"use client";

import { FC } from "react";
import { Button } from '@/components/ui/button';
import Link from "next/link";

const HeroButtons: FC = () => {
    return (
        <div className="flex justify-center gap-3 mt-8">
            <Button size={"lg"}>Registrate</Button>
            <Button size={"lg"} variant={"accent"}>
                <Link href="/productos">Ver productos</Link>
            </Button>
        </div>
    );
};

export default HeroButtons;
