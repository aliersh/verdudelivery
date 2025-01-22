import { useEffect } from "react";
import { Events, scrollSpy } from "react-scroll";

const useScrollSpy = () => {
    useEffect(() => {
        // Initialize scrollspy
        Events.scrollEvent.register("begin", () => {});
        Events.scrollEvent.register("end", () => {});
        scrollSpy.update();

        return () => {
            // Cleanup scroll events
            Events.scrollEvent.remove("begin");
            Events.scrollEvent.remove("end");
        };
    }, []);
};

export default useScrollSpy;
