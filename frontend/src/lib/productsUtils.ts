import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";

export const groupProductsByCollection = (products: PricedProduct[]) => {
    return products.reduce((acc, product) => {
        const collectionTitle = product.collection?.title || "Uncategorized";
        if (!acc[collectionTitle]) {
            acc[collectionTitle] = [];
        }
        acc[collectionTitle].push(product);
        return acc;
    }, {} as Record<string, PricedProduct[]>);
};

export const collectionOrder = ["Verduras", "Frutas", "Legumbres", "Otros"];

export const sortByTitle = (a: PricedProduct, b: PricedProduct) => {
    return (a.title ?? "").localeCompare(b.title ?? "");
};
