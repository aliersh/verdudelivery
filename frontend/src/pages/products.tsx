import { useProducts } from "medusa-react";
import ProductItem from "../components/ui/ProductItem";

import LoadingIndicator from "../components/ui/LoadingIndicator";
import NoProductMessage from "../components/ui/NoProductMessage";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";

const Products = () => {
    const { products, isLoading } = useProducts();

    const groupProductsByCollection = (products: PricedProduct[]) => {
        return products.reduce((acc, product) => {
            const collectionTitle =
                product.collection?.title || "Uncategorized";
            if (!acc[collectionTitle]) {
                acc[collectionTitle] = [];
            }
            acc[collectionTitle].push(product);
            return acc;
        }, {} as Record<string, PricedProduct[]>);
    };

    const groupedProducts = products ? groupProductsByCollection(products) : {};

    return (
        <div className="max-w-6xl mx-auto px-4">
            {isLoading && <LoadingIndicator />}
            {products && !products.length && <NoProductMessage />}
            {Object.entries(groupedProducts).map(
                ([collectionTitle, collectionProducts]) => (
                    <div key={collectionTitle} className="mb-8">
                        <h2 className="text-2xl font-bold mb-8">
                            {collectionTitle}
                        </h2>
                        <ul className="space-y-4">
                            {collectionProducts.map((product) => (
                                <ProductItem
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </ul>
                    </div>
                )
            )}
        </div>
    );
};

export default Products;
