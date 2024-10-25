import Link from "next/link";
import { FC } from "react";

interface SocialLinksProps {
    href: string;
    icon: React.ComponentType;
    label: string;
}

const SocialLinks: FC<SocialLinksProps> = ({ href, icon: Icon, label }) => (
    <Link
        href={href}
        className="transition-colors text-muted-foreground hover:text-primary"
        prefetch={false}
    >
        <Icon />
        <span className="sr-only">{label}</span>
    </Link>
);

export default SocialLinks;
