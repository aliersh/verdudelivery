"use client";

import { FC } from 'react';
import Typewriter from 'typewriter-effect';

import { TypewriterOptions } from '@/lib/types/ui';

const TypewriterText: FC = () => {
    const options: TypewriterOptions = {
        strings: ["Viña del Mar", "Valparaíso", "Quilpué"],
        autoStart: true,
        loop: true,
    };

    return (
        <h1 className="text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
            Verdudelivery en <Typewriter options={options} />
        </h1>
    );
};

export default TypewriterText;
