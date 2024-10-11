import collect from "collect.js";

import { PricedProduct } from '@medusajs/medusa/dist/types/pricing';

export const groupProductsByCollection = (
    products: PricedProduct[]
): Record<string, PricedProduct[]> => {
    return collect(products)
        .groupBy((product) => product.collection?.title ?? "Sin categoría")
        .all() as unknown as Record<string, PricedProduct[]>;
};

export const collectionOrder = ["Verduras", "Frutas", "Legumbres", "Otros"];

export const sortByTitle = (products: PricedProduct[]) => {
    return collect(products)
        .sortBy((product: PricedProduct) => product.title ?? "")
        .all();
};
