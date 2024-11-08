"use client";

import { useState } from 'react';

import { HttpTypes } from '@medusajs/types';

import ProductItem from './ProductItem';

type Props = {
    handle: string;
    initialData: {
        products: HttpTypes.StoreProduct[];
        categoryName: string;
    };
};

const CategoryProductsList = ({ initialData }: Props) => {
    const { products, categoryName } = initialData;
    const [quantities, setQuantities] = useState<Record<string, number>>({});

    const handleDecrement = (productId: string) => {
        setQuantities((prev) => ({
            ...prev,
            [productId]: Math.max(1, (prev[productId] || 1) - 1),
        }));
    };

    const handleIncrement = (productId: string) => {
        setQuantities((prev) => ({
            ...prev,
            [productId]: (prev[productId] || 1) + 1,
        }));
    };

    const formatPrice = (amount: number) =>
        new Intl.NumberFormat("es-CL", {
            style: "currency",
            currency: "CLP",
        }).format(amount);

    return (
        <div className="mt-4 mb-8">
            <h1 className="mb-4 text-2xl font-bold">{categoryName}</h1>
            <ul className="space-y-4">
                {products.map((product) => (
                    <ProductItem
                        key={product.id}
                        product={product}
                        quantity={quantities[product.id] || 1}
                        onIncrement={() => handleIncrement(product.id)}
                        onDecrement={() => handleDecrement(product.id)}
                        formatPrice={formatPrice}
                    />
                ))}
            </ul>
        </div>
    );
};

export default CategoryProductsList;
