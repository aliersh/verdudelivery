import Link from 'next/link';
import { FC } from 'react';

interface SocialLinksProps {
    href: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    label: string;
}

const SocialLinks: FC<SocialLinksProps> = ({ href, icon: Icon, label }) => (
    <Link
        href={href}
        className="transition-colors text-muted-foreground hover:text-primary"
        prefetch={false}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        role="link"
    >
        <Icon aria-hidden="true" className="w-8 h-8" />
        <span className="sr-only">{label}</span>
    </Link>
);

export default SocialLinks;
