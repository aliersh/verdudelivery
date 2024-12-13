"use client";

import { useEffect, useState } from "react";

interface AccountNavProps {
    sections: Array<{
        id: string;
        title: string;
    }>;
}

const AccountNav = ({ sections }: AccountNavProps) => {
    const [activeSection, setActiveSection] = useState<string>("personal");

    const handleSectionClick = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [sections]);

    return (
        <div className="hidden w-64 lg:block shrink-0">
            <div className="sticky p-4 bg-white border border-gray-200 rounded-lg top-24">
                <h2 className="mb-2 text-lg font-semibold">Mi cuenta</h2>
                <nav className="space-y-1">
                    {sections.map(({ id, title }) => (
                        <button
                            key={id}
                            onClick={() => handleSectionClick(id)}
                            className={`w-full px-4 py-2 text-sm font-medium text-left rounded-lg transition-colors
                                ${
                                    activeSection === id
                                        ? "bg-primary text-primary-foreground"
                                        : "text-gray-700 hover:bg-gray-100"
                                }`}
                        >
                            {title}
                        </button>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default AccountNav;
