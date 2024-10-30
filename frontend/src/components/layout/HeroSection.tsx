"use client";

import HeroButtons from '@/components/ui/buttons/HeroButton';
import TypewriterText from '@/components/ui/typography/TypewriterText';

const HeroSection = () => {
    return (
        <>
            <main className="relative py-24 mx-auto overflow-hidden lg:py-32">
                <div className="relative z-10">
                    <div className="container py-10 lg:py-16">
                        <div className="max-w-2xl mx-auto text-center">
                            {/* Title */}
                            <div className="max-w-2xl mt-5">
                                <TypewriterText />
                            </div>
                            {/* End Title */}
                            <div className="max-w-3xl mt-5">
                                <p className="text-xl text-muted-foreground">
                                    Accede a una selección exclusiva de frutas y
                                    verduras frescas, con la comodidad de la
                                    compra online.
                                </p>
                            </div>
                            {/* Buttons */}
                            <HeroButtons />
                            {/* End Buttons */}
                        </div>
                    </div>
                </div>
            </main>
            {/* End Hero */}
        </>
    );
};

export default HeroSection;
