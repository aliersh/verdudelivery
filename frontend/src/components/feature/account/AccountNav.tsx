"use client";

import { Link, Events, scrollSpy } from "react-scroll";
import { useEffect } from "react";

interface AccountNavProps {
    sections: Array<{
        id: string;
        title: string;
    }>;
}

const AccountNav = ({ sections }: AccountNavProps) => {
    useEffect(() => {
        // Initialize scrollspy
        Events.scrollEvent.register('begin', () => {});
        Events.scrollEvent.register('end', () => {});
        scrollSpy.update();

        return () => {
            // Cleanup scroll events
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        };
    }, []);

    return (
        <div className="hidden w-64 lg:block shrink-0">
            <div className="sticky p-4 bg-white border border-gray-200 rounded-lg top-24">
                <h2 className="mb-2 text-lg font-semibold">Mi cuenta</h2>
                <nav className="space-y-1">
                    {sections.map(({ id, title }) => (
                        <Link
                            key={id}
                            to={id}
                            spy={true}
                            isDynamic={true}
                            smooth={true}
                            offset={-80}
                            duration={300}
                            tabIndex={0}
                            role="button"
                            aria-label={`Navegar a ${title}`}
                            className="block w-full px-4 py-2 text-sm font-medium text-left rounded-lg transition-colors cursor-pointer text-gray-700 hover:bg-gray-100"
                            activeClass="bg-primary text-primary-foreground hover:bg-primary"
                        >
                            {title}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default AccountNav;
