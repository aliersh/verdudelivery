import Image from 'next/image';

import { CartItemInfoProps } from '@/types/cart';

const CartItemInfo = ({ item }: CartItemInfoProps) => {
    return (
        <div className="flex items-center space-x-4">
            <Image
                src={item.thumbnail || ""}
                alt={item.title || ""}
                width={100}
                height={100}
                className="object-cover w-12 h-12 rounded"
            />
            <div className="space-y-1">
                <h4 className="font-medium">{item.product_title}</h4>
                <p className="text-sm text-gray-500">
                    ${item.unit_price} /{String(item.metadata?.unit)}
                </p>
            </div>
        </div>
    );
};

export default CartItemInfo;
