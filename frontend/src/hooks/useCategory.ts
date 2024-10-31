import { useState, useEffect } from "react";
import { HttpTypes } from "@medusajs/types";

type CategoryResponse = {
    product_categories: HttpTypes.StoreProductCategory[];
};

export const useCategory = (handle: string) => {
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState<HttpTypes.StoreProductCategory | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!loading) return;
        
        if (!handle) {
            setError("Category handle is required");
            setLoading(false);
            return;
        }

        const fetchCategory = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_MEDUSA_API_URL}/store/product-categories?handle=${handle}`,
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

                const { product_categories }: CategoryResponse = await response.json();
                
                if (!product_categories?.length) {
                    setError("Category not found");
                } else {
                    setCategory(product_categories[0]);
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : "Failed to fetch category");
            } finally {
                setLoading(false);
            }
        };

        fetchCategory();
    }, [loading, handle]);

    return { loading, category, error };
}; 