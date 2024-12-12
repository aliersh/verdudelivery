"use client";

import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface CategoryNavProps {
    categories: string[];
}

const CategoryNav = ({ categories }: CategoryNavProps) => {
    const [activeCategory, setActiveCategory] = useState<string>("");
    const [isOpen, setIsOpen] = useState(false);

    const handleCategoryClick = (category: string) => {
        const element = document.getElementById(category);
        if (element) {
            const offset = 80; // Adjust based on your header height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
                elementPosition + window.scrollY - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
        setIsOpen(false);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveCategory(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        categories.forEach((category) => {
            const element = document.getElementById(category);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [categories]);

    const CategoryList = () => (
        <nav className="space-y-1">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={`w-full px-4 py-2 text-sm font-medium text-left rounded-lg transition-colors
                        ${
                            activeCategory === category
                                ? "bg-primary text-primary-foreground"
                                : "text-gray-700 hover:bg-gray-100"
                        }`}
                >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
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
