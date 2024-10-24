import Link from "next/link";

const Logo = () => (
    <Link href="/" className="text-2xl font-bold text-primary" prefetch={false}>
        verdu<span className="text-accent">delivery</span>
    </Link>
);

export default Logo;