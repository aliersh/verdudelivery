import { sortByTitle } from '@/lib/productsUtils';
import { PricedProduct } from '@medusajs/medusa/dist/types/pricing';

import ProductItem from './ProductItem';

const ProductsCollection = ({
    collectionTitle,
    collectionProducts,
    sortFunction = sortByTitle,
}: {
    collectionTitle: string;
    collectionProducts: PricedProduct[];
    sortFunction?: (products: PricedProduct[]) => PricedProduct[];
}) => {
    const sortedProducts = sortFunction(collectionProducts);

    return (
        <div key={collectionTitle} className="mb-8">
            <h1 className="mb-8 text-2xl font-bold">{collectionTitle}</h1>
            <ul className="space-y-4">
                {sortedProducts.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </ul>
        </div>
    );
};

export default ProductsCollection;
