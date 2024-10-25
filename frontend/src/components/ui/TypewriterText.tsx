"use client";

import { FC } from "react";
import Typewriter from 'typewriter-effect';

interface TypewriterOptions {
    strings: string[];
    autoStart: boolean;
    loop: boolean;
}

const TypewriterText: FC = () => {
    const options: TypewriterOptions = {
        strings: [
            " en Viña del Mar",
            " en Valparaíso",
            " en Quilpué",
        ],
        autoStart: true,
        loop: true,
    };

    return (
        <h1 className="text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
            Verdudelivery{" "}
            <Typewriter options={options} />
        </h1>
    );
};

export default TypewriterText;
