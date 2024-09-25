import Image from "next/image";
import { Button } from "../shadcnui/button";
import { Minus, Plus } from "lucide-react";

import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";

const ProductItem = ({ product }: { product: PricedProduct }) => {
    return (
        <li
            key={product.id}
            className="container flex items-center space-x-4 py-4 px-4 border-b"
        >
            <Image
                src={product.thumbnail ?? "/default-thumbnail.jpg"}
                alt={product.title ?? "No title"}
                width={80}
                height={80}
                className="rounded-md object-cover"
            />
            <div className="flex-grow">
                <h3 className="font-semibold text-lg">{product.title}</h3>
                <div className="flex items-center space-x-2 mt-2">
                    <Button variant="destructive" size="icon">
                        <Minus className="w-4 h-4" />
                    </Button>
                    <span className="w-8 text-center">1</span>
                    <Button variant="destructive" size="icon">
                        <Plus className="w-4 h-4" />
                    </Button>
                </div>
            </div>
            <div className="text-right">
                <p className="text-sm text-muted-foreground">
                    ${product.variants[0]?.prices[0]?.amount} / kg
                </p>
                <p className="font-semibold">$2400</p>
            </div>
            <Button>Añadir al carrito</Button>
        </li>
    );
};

export default ProductItem;
