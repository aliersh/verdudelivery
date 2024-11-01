"use client";

import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/buttons/button";
import Image from "next/image";
import { HttpTypes } from "@medusajs/types";
import { useQuantity } from "@/hooks/useQuantity";
import AddToCartButton from "@/components/cart/AddToCartButton";
type ProductItemProps = {
    product: HttpTypes.StoreProduct;
};

const ProductItem = ({ product }: ProductItemProps) => {
    const { quantity, handleDecrement, handleIncrement } = useQuantity(1);
    const unit = product.metadata?.unit as string;
    const unitPrice =
        product?.variants?.[0]?.calculated_price?.calculated_amount ?? 0;
    const variantId = product.variants?.[0]?.id ?? "";

    const formatPrice = (amount: number) =>
        new Intl.NumberFormat("es-CL", {
            style: "currency",
            currency: "CLP",
        }).format(amount);

    const formattedUnitPrice = formatPrice(unitPrice);
    const formattedTotalPrice = formatPrice(unitPrice * quantity);

    return (
        <li key={product.id} className="flex items-center space-x-4">
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
                        onClick={handleDecrement}
                        variant="accent"
                        size="icon"
                    >
                        <Minus className="w-4 h-4" />
                    </Button>
                    <span className="text-center w-11">
                        {quantity} {unit}
                    </span>
                    <Button
                        onClick={handleIncrement}
                        variant="accent"
                        size="icon"
                    >
                        <Plus className="w-4 h-4" />
                    </Button>
                </div>
            </div>
            <div className="text-right">
                <p className="text-sm text-muted-foreground">
                    {formattedUnitPrice} / {unit}
                </p>
                <p className="font-semibold">{formattedTotalPrice}</p>
            </div>
            <div>
                <AddToCartButton variantId={variantId} />
            </div>
        </li>
    );
};

export default ProductItem;
