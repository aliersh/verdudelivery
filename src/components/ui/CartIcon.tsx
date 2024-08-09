import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

const CartIcon = () => (
    <Link href="#" className="p-2 text-muted-foreground hover:text-primary">
        <ShoppingCart size={30} />
    </Link>
);

export default CartIcon;
