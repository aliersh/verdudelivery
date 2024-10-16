import Image from "next/image";
import { useState, useEffect } from "react";
import { useCart } from "medusa-react";

import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";

import ProductPrice from "./ProductPrice";
import QuantityControl from "../../ui/QuantityControl";
import AddToCartButton from "../cart/AddToCartButton";

const ProductItem = ({ product }: { product: PricedProduct }) => {
    const unit = product.metadata?.unit ?? "";
    const [quantity, setQuantity] = useState(1);
    const variant_id = product.variants[0].id ?? "";
    const { cart } = useCart();
    
    useEffect(() => {
        if (cart?.id) {
            localStorage.setItem("cart_id", cart.id);
        }
    }, [cart?.id]);

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
                    {product.title}{" "}
                    {product.subtitle && (
                        <span className="text-sm font-normal text-gray-500">
                            {product.subtitle}
                        </span>
                    )}
                </h3>
                <QuantityControl
                    unit={unit as string}
                    quantity={quantity}
                    setQuantity={setQuantity}
                />
            </div>
            <div className="text-right">
                <ProductPrice
                    product={product}
                    unit={unit as string}
                    quantity={quantity}
                />
            </div>
            <div>
                <AddToCartButton variantId={variant_id} quantity={quantity} />
            </div>
        </li>
    );
};

export default ProductItem;
