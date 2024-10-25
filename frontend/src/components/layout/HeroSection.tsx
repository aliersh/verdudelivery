"use client";

import { Button } from "@/components/ui/button";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
    return (
        <>
            <main className="relative py-24 mx-auto overflow-hidden lg:py-32">
                <div className="relative z-10">
                    <div className="container py-10 lg:py-16">
                        <div className="max-w-2xl mx-auto text-center">
                            {/* Title */}
                            <div className="max-w-2xl mt-5">
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
                            <div className="flex justify-center gap-3 mt-8">
                                <Button size={"lg"}>Registrate</Button>
                                <Button size={"lg"} variant={"accent"}>
                                    Ver productos
                                </Button>
                            </div>
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
