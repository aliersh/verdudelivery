import { Separator } from '@/components/ui/separator';
import { CartItemProps } from '@/lib/types/cart';

import CartItemInfo from './CartItemInfo';
import CartItemPrice from './CartItemPrice';
import CartItemQuantity from './CartItemQuantity';
import CartItemRemove from './CartItemRemove';

const CartItem = ({ item }: CartItemProps) => {
    return (
        <div className="py-4">
            <div className="flex items-center justify-between gap-4">
                <CartItemInfo item={item} />
                <CartItemRemove itemId={item.id} />
            </div>
            <div className="flex items-center justify-between mt-2">
                <CartItemQuantity item={item} />
                <CartItemPrice item={item} />
            </div>
            <Separator className="mt-4 bg-gray-200" />
        </div>
    );
};

export default CartItem;
