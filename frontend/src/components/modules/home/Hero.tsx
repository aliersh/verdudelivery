import HeroContent from "../home/HeroContent";
import Overlay from "../../ui/Overlay";
import VideoBackground from "./VideoBackground";

const Hero = () => {
    return (
        <main className="relative flex h-[50vh] w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat">
            <VideoBackground src="/videos/130226-746395325_small.mp4" />
            <Overlay />
            <HeroContent />
        </main>
    );
};

export default Hero;
