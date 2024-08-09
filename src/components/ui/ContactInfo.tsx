import Link from 'next/link';

import Logo from './Logo';

const ContactInfo = () => (
    <div className="flex flex-col items-start gap-4">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <Logo />
            <span className="sr-only">Verdudelivery</span>
        </Link>
        <div className="grid gap-1 text-muted-foreground">
            <div>info@verdudelivery.com</div>
            <div>+56 9 9078 5716</div>
        </div>
    </div>
);

export default ContactInfo;
