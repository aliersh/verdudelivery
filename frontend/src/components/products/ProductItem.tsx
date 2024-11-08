import { Minus, Plus } from 'lucide-react';
import Image from 'next/image';

import AddToCartButton from '@/components/cart/AddToCartButton';
import { Button } from '@/components/ui/buttons/button';
import { HttpTypes } from '@medusajs/types';

type ProductItemProps = {
    product: HttpTypes.StoreProduct;
    quantity: number;
    onIncrement: () => void;
    onDecrement: () => void;
    formatPrice: (amount: number) => string;
};

const ProductItem = ({
    product,
    quantity,
    onIncrement,
    onDecrement,
    formatPrice,
}: ProductItemProps) => {
    const unit = product.metadata?.unit as string;
    const unitPrice =
        product?.variants?.[0]?.calculated_price?.calculated_amount ?? 0;

    return (
        <li className="flex items-center space-x-4">
            <div className="w-20 h-20">
                <Image
                    src={product.thumbnail ?? "/default-thumbnail.jpg"}
                    alt={product.title ?? "No title"}
                    width={80}
                    height={80}
                    className="object-cover rounded-md"
                />
            </div>
            <div className="flex-1">
                <h3 className="text-lg font-semibold">
                    {product.title}
                    {product.subtitle && (
                        <span className="ml-2 text-sm font-normal text-gray-500">
                            {product.subtitle}
                        </span>
                    )}
                </h3>
                <div className="flex items-center mt-2 space-x-2">
                    <Button
                        onClick={onDecrement}
                        variant="accent"
                        size="icon"
                        aria-label={`Decrease quantity of ${product.title}`}
                    >
                        <Minus className="w-4 h-4" />
                    </Button>
                    <span className="text-center w-11">
                        {quantity} {unit}
                    </span>
                    <Button
                        onClick={onIncrement}
                        variant="accent"
                        size="icon"
                        aria-label={`Increase quantity of ${product.title}`}
                    >
                        <Plus className="w-4 h-4" />
                    </Button>
                </div>
            </div>
            <div className="text-right">
                <p className="text-sm text-muted-foreground">
                    {formatPrice(unitPrice)} / {unit}
                </p>
                <p className="font-semibold">
                    {formatPrice(unitPrice * quantity)}
                </p>
            </div>
            <div>
                <AddToCartButton
                    variantId={product.variants?.[0]?.id ?? ""}
                    quantity={quantity}
                    unit={unit}
                />
            </div>
        </li>
    );
};

export default ProductItem;
