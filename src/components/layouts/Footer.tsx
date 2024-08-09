import Link from "next/link";
import Logo from "../ui/Logo";
import { Instagram } from "lucide-react"

const Footer = () => {
    return (
        <footer className="w-full py-8 bg-muted md:py-12">
            <div className="container grid grid-cols-1 gap-8 max-w-7xl sm:grid-cols-2 md:grid-cols-3">
                <div className="flex flex-col items-start gap-4">
                    <Link
                        href="#"
                        className="flex items-center gap-2"
                        prefetch={false}
                    >
                        <Logo />
                        <span className="sr-only">Verdudelivery</span>
                    </Link>
                    <div className="grid gap-1 text-muted-foreground">
                        <div>info@verdudelivery.com</div>
                        <div>+56 9 9078 5716</div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <Link
                        href="#"
                        className="transition-colors text-muted-foreground hover:text-primary"
                        prefetch={false}
                    >
                        <Instagram />
                        <span className="sr-only">Verdudelivery Instagram</span>
                    </Link>
                </div>
                <div className="flex items-center justify-end text-sm text-muted-foreground">
                    &copy; 2024 Verdudelivery. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;