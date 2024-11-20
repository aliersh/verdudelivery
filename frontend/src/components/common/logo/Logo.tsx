import Link from 'next/link';
import { FC } from 'react';

const Logo: FC = () => (
    <Link
        href="/"
        className="text-2xl not-italic font-bold text-primary"
        prefetch={false}
        aria-label="Ir al inicio"
        role="link"
    >
        verdu<span className="text-accent">delivery</span>
    </Link>
);

export default Logo;
