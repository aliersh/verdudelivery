import { PricedProduct } from '@medusajs/medusa/dist/types/pricing';

const groupProductsByCollection = (products: PricedProduct[]) => {
    return products.reduce((acc, product) => {
        const collectionTitle = product.collection?.title || "Uncategorized";
        if (!acc[collectionTitle]) {
            acc[collectionTitle] = [];
        }
        acc[collectionTitle].push(product);
        return acc;
    }, {} as Record<string, PricedProduct[]>);
};

export default groupProductsByCollection;
