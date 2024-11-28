import HeroButtons from "@/components/feature/home/hero/HeroButton";
import TypewriterText from "@/components/common/typography/TypewriterText";
import HeroDescription from "@/components/feature/home/hero/HeroDescription";
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
                            <HeroDescription />
                        </div>
                        <HeroButtons />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
