import { FC } from "react";
import Link from 'next/link';

const Logo: FC = () => (
    <Link
        href="/"
        className="text-2xl font-bold text-primary"
        prefetch={false}
        aria-label="Ir al inicio"
        role="link"
    >
        verdu<span className="text-accent">delivery</span>
    </Link>
);

Logo.displayName = "Logo";

export default Logo;
