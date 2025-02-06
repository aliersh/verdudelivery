import { CartItemProps } from "@/lib/types/cart";

import CartItemInfo from "./CartItemInfo";
import CartItemPrice from "./CartItemPrice";
import CartItemQuantity from "./CartItemQuantity";
import CartItemRemove from "./CartItemRemove";

const CartItem = ({ item }: CartItemProps) => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-start justify-between gap-4">
                <CartItemInfo item={item} />
                <CartItemRemove itemId={item.id} />
            </div>
            <div className="flex items-center justify-between">
                <CartItemQuantity item={item} />
                <CartItemPrice item={item} />
            </div>
        </div>
    );
};

export default CartItem;
