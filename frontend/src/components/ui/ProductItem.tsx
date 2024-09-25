import Image from "next/image";

import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";

const ProductItem = ({ product }: { product: PricedProduct }) => {
    return (
        <li key={product.id}>
            <Image
                src={product.thumbnail ?? "/default-thumbnail.jpg"}
                alt={product.title ?? "No title"}
                width={100}
                height={100}
            />
            <div>
                <h3>{product.title}</h3>
                <p>{product.variants[0]?.prices[0]?.amount}</p>
            </div>
        </li>
    );
};

export default ProductItem;
