"use client";

import { FC } from "react";
import { Link } from "react-scroll";

import useScrollSpy from "@/lib/hooks/useScrollSpy";
import { AccountNavProps } from "@/lib/types/ui";

const AccountNav: FC<AccountNavProps> = ({ sections }) => {
    useScrollSpy();

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
                            className="block w-full px-4 py-2 text-sm font-medium text-left text-gray-700 transition-colors rounded-lg cursor-pointer hover:bg-gray-100"
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
