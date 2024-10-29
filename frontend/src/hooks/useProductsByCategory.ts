import { useState, useEffect } from 'react';
import { HttpTypes } from "@medusajs/types";

export const useProductsByCategory = (categoryId: string) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [products, setProducts] = useState<HttpTypes.StoreProduct[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const searchParams = new URLSearchParams({
                category_id: categoryId,
                fields: "thumbnail, title, subtitle, metadata.unit, *variants.calculated_price",
            });

            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_MEDUSA_API_URL}/store/products?${searchParams.toString()}`,
                    {
                        credentials: "include",
                        headers: {
                            "x-publishable-api-key": process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY as string,
                        },
                    }
                );
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const { products: dataProducts } = await response.json();
                setProducts(dataProducts);
                setError(null);
            } catch (err: Error | unknown) {
                setError(err instanceof Error ? err.message : 'An unknown error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [categoryId]);

    return { loading, error, products };
}; 