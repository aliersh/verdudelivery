import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { HttpTypes } from "@medusajs/types";
import { useQuantity } from "@/hooks/useQuantity";

type ProductItemProps = {
    product: HttpTypes.StoreProduct;
};

const ProductItem = ({ product }: ProductItemProps) => {
    const { quantity, handleDecrement, handleIncrement } = useQuantity(1);
    const unit = product.metadata?.unit as string;
    const unitPrice =
        product?.variants?.[0]?.calculated_price?.calculated_amount ?? 0;

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
                        <span className="text-sm font-normal text-gray-500">
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
                    ${unitPrice} / {unit}
                </p>
                <p className="font-semibold">${unitPrice * quantity}</p>
            </div>
            <div>
                <Button>Añadir al carrito</Button>
            </div>
        </li>
    );
};

export default ProductItem;
