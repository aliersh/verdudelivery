"use client";

import { FC } from 'react';
import Typewriter from 'typewriter-effect';

import { typeWriterOptions } from '@/lib/utils/typeWriterOptions';

const TypewriterText: FC = () => {
    return (
        <h1 className="text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
            Verdudelivery en <Typewriter options={typeWriterOptions} />
        </h1>
    );
};

export default TypewriterText;
