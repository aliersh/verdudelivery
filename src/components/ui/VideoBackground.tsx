const VideoBackground = ({ src }: { src: string }) => (
    <video
        src={src}
        className="absolute inset-0 object-cover w-full h-full"
        autoPlay
        loop
        playsInline
    />
);

export default VideoBackground;
