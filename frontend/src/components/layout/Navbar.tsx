import { ShoppingCart } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Logo from '@/components/ui/Logo';

const Navbar = () => {
    return (
        <Card className="container flex items-center justify-between max-w-4xl gap-6 px-4 py-3 mx-auto mt-5 border-0 bg-primary-foreground rounded-2xl">
            <Logo />

            {/* <ul className="items-center hidden gap-10 md:flex text-card-foreground">
                <li className="font-medium text-primary">
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
                <Button variant="default" className="hidden px-2 md:block">
                    Iniciar sesión
                </Button>
            </div>
        </Card>
    );
};

export default Navbar;
