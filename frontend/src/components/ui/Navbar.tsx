import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/Logo";
import { ShoppingCart } from 'lucide-react';

const Navbar = () => {
    return (
        <Card className="container bg-card py-3 px-4 border-0 flex items-center justify-between gap-6 rounded-2xl mt-5">
            <Logo />

            {/* <ul className="hidden md:flex items-center gap-10 text-card-foreground">
                <li className="text-primary font-medium">
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#features">Features</a>
                </li>
                <li>
                    <a href="#pricing">Pricing</a>
                </li>
                <li>
                    <a href="#faqs">FAQs</a>
                </li>
            </ul> */}

            <div className="flex items-center space-x-4">
                <ShoppingCart />
                <Button variant="default" className="hidden md:block px-2">
                    Iniciar sesión
                </Button>
            </div>
        </Card>
    );
};

export default Navbar;
