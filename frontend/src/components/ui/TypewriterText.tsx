"use client";

import Typewriter from 'typewriter-effect';

const TypewriterText = () => {
    return (
        <h1 className="text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
            Verdudelivery{" "}
            <Typewriter
                options={{
                    strings: [
                        " en Viña del Mar",
                        " en Valparaíso",
                        " en Quilpué",
                    ],
                    autoStart: true,
                    loop: true,
                }}
            />
        </h1>
    );
};

export default TypewriterText;
