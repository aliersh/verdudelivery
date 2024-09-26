import { Minus, Plus } from 'lucide-react';
import Image from 'next/image';

import { PricedProduct } from '@medusajs/medusa/dist/types/pricing';

import { Button } from '../shadcnui/button';
import ProductPrice from './ProductPrice';
import QuantityControl from './QuantityControl';
const ProductItem = ({ product }: { product: PricedProduct }) => {
    return (
        <li
            key={product.id}
            className="container flex items-center px-4 py-4 space-x-4 border-b"
        >
            <Image
                src={product.thumbnail ?? "/default-thumbnail.jpg"}
                alt={product.title ?? "No title"}
                width={80}
                height={80}
                className="object-cover rounded-md"
            />
            <div className="flex-grow">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <QuantityControl />
            </div>
            <ProductPrice product={product} />
            <Button>Añadir al carrito</Button>
        </li>
    );
};

export default ProductItem;
