import { CircleUserRound } from 'lucide-react';
import Link from 'next/link';

const UserIcon = () => (
    <Link href="#" className="p-2 text-muted-foreground hover:text-primary">
        <CircleUserRound size={30} />
    </Link>
);

export default UserIcon;
