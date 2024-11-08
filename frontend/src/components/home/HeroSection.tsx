import HeroButtons from "@/components/home/HeroButton";
import TypewriterText from "@/components/ui/typography/TypewriterText";
import { FC } from "react"; 

const HeroSection: FC = () => {
    return (
        <section
            className="relative py-24 mx-auto overflow-hidden"
            role="banner"
        >
            <div className="relative z-10">
                <div className="container py-10">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="max-w-2xl mt-5">
                            <TypewriterText />
                        </div>
                        <div className="max-w-3xl mt-5">
                            <p
                                className="text-xl text-muted-foreground"
                                aria-label="Descripción del servicio"
                            >
                                Accede a una selección exclusiva de frutas y
                                verduras frescas, con la comodidad de la compra
                                online.
                            </p>
                        </div>
                        <HeroButtons />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
