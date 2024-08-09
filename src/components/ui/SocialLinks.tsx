import Link from "next/link";

const SocialLinks = ({
    href,
    icon: Icon,
    label,
}: {
    href: string;
    icon: React.ComponentType;
    label: string;
}) => (
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
