import Link from "next/link";
import { FC } from "react";

import { SocialLinksProps } from "@/lib/types/ui";

const SocialLinks: FC<SocialLinksProps> = ({ href, icon: Icon, label }) => (
    <Link
        href={href}
        className="p-2 transition-colors rounded-lg text-muted-foreground hover:text-primary hover:bg-accent/10"
        prefetch={false}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
    >
        <Icon aria-hidden="true" className="w-6 h-6" />
        <span className="sr-only">{label}</span>
    </Link>
);

export default SocialLinks;
