import HeroContent from '../ui/HeroContent';
import Overlay from '../ui/Overlay';
import VideoBackground from '../ui/VideoBackground';

const Hero = () => {
    return (
        <main className="relative flex h-[50vh] w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat">
            <VideoBackground src="130226-746395325_small.mp4" />
            <Overlay />
            <HeroContent />
        </main>
    );
};

export default Hero;
