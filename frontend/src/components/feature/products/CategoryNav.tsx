"use client";

import { Menu } from "lucide-react";
import { Link, Events, scrollSpy } from "react-scroll";
import { useEffect, useState } from "react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface CategoryNavProps {
    categories: string[];
}

const CategoryNav = ({ categories }: CategoryNavProps) => {
    const [isOpen, setIsOpen] = useState(false);

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

    const CategoryList = () => (
        <nav className="space-y-1">
            {categories.map((category) => (
                <Link
                    key={category}
                    to={category}
                    spy={true}
                    isDynamic={true}
                    smooth={true}
                    offset={-80}
                    duration={300}
                    tabIndex={0}
                    role="button"
                    aria-label={`Ver productos de ${category}`}
                    className="block w-full px-4 py-2 text-sm font-medium text-left rounded-lg transition-colors cursor-pointer text-gray-700 hover:bg-gray-100"
                    activeClass="bg-primary text-primary-foreground hover:bg-primary"
                    onClick={() => setIsOpen(false)}
                >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                </Link>
            ))}
        </nav>
    );

    return (
        <>
            {/* Mobile Sheet */}
            <div className="fixed z-50 bottom-4 right-4 lg:hidden">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg bg-primary text-primary-foreground">
                        <Menu className="w-6 h-6" />
                    </SheetTrigger>
                    <SheetContent side="right" className="w-64">
                        <div className="py-4">
                            <h2 className="px-4 mb-2 text-lg font-semibold">
                                Categorías
                            </h2>
                            <CategoryList />
                        </div>
                    </SheetContent>
                </Sheet>
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden w-64 lg:block shrink-0">
                <div className="sticky p-4 bg-white border border-gray-200 rounded-lg top-24">
                    <h2 className="mb-2 text-lg font-semibold">Categorías</h2>
                    <CategoryList />
                </div>
            </div>
        </>
    );
};

export default CategoryNav;
