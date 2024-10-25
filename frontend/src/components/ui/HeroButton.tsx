"use client";

import { Button } from '@/components/ui/button';

const HeroButtons = () => {
    return (
        <div className="flex justify-center gap-3 mt-8">
            <Button size={"lg"}>Registrate</Button>
            <Button size={"lg"} variant={"accent"}>
                Ver productos
            </Button>
        </div>
    );
};

export default HeroButtons;
