"use client";

import ProductItem from "@/components/features/products/ProductItem";
import { useProductsByCategory } from "@/hooks/useProductsByCategory";

interface CategoryProductsProps {
    params: {
        categoryId: string;
    };
}

const CategoryProducts = ({ params: { categoryId } }: CategoryProductsProps) => {
    const { loading, error, products } = useProductsByCategory(categoryId);

    return (
        <>
            {loading && <span>Loading...</span>}
            {error && <span>Error: {error}</span>}
            {!loading && !error && products.length === 0 && (
                <span>No products found for category.</span>
            )}
            {!loading && !error && products.length > 0 && (
                <ul className="space-y-4">
                    {products.map((product) => (
                        <ProductItem key={product.id} product={product} />
                    ))}
                </ul>
            )}
        </>
    );
};

export default CategoryProducts;
