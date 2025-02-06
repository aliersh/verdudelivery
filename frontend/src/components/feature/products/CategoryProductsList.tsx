"use client";

import { useState } from "react";

import ProductItem from "@/components/feature/products/ProducItem/ProductItem";
import { CategoryProps } from "@/lib/types/category";

const CategoryProductsList = ({ initialData, handle }: CategoryProps) => {
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
        <div id={handle} className="py-6 first:pt-2 scroll-mt-20">
            <h2 className="mb-4 text-xl font-medium text-gray-900">
                {categoryName}
            </h2>
            <ul className="divide-y divide-gray-100">
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
