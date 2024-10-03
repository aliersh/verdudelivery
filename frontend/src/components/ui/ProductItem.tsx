import Image from "next/image";
import { useState } from "react";

import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";

import { Button } from "../shadcnui/button";
import ProductPrice from "./ProductPrice";
import QuantityControl from "./QuantityControl";

const ProductItem = ({ product }: { product: PricedProduct }) => {
    const unit = product.metadata?.unit ?? "";
    const [quantity, setQuantity] = useState(1);
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
                <h3 className="text-lg font-semibold">{product.title}</h3>
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
                <Button>Añadir al carrito</Button>
            </div>
        </li>
    );
};

export default ProductItem;
