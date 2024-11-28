import { CartItemPriceProps } from '@/types/cart';

const CartItemPrice = ({ item }: CartItemPriceProps) => {
    return (
        <p className="font-medium">
            ${(item.unit_price * item.quantity).toLocaleString()}
        </p>
    );
};

export default CartItemPrice;
