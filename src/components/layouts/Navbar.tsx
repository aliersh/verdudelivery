import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CircleUserRound, ShoppingCart } from "lucide-react";

const Navbar = () => {
    return (
        <header className="container flex items-center justify-between px-4 py-3 bg-background">
            <Link
                href="#"
                className="font-bold text-2xl text-primary"
                prefetch={false}
            >
                verdudelivery
            </Link>
            <div className="flex items-center gap-4">
                <Link href="#" className="p-2 text-muted-foreground hover:text-primary">
                    <CircleUserRound size={30}/>
                </Link>
                <Link href="#" className="p-2 text-muted-foreground hover:text-primary">
                    <ShoppingCart size={30}/>
                </Link>
                <Button variant="destructive">Iniciar Sesión</Button>
            </div>
        </header>
    );
};

export default Navbar;
