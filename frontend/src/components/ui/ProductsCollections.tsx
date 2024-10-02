import { PricedProduct } from '@medusajs/medusa/dist/types/pricing';

import ProductItem from './ProductItem';

const ProductsCollection = ({
    collectionTitle,
    collectionProducts,
}: {
    collectionTitle: string;
    collectionProducts: PricedProduct[];
}) => {
    return (
        <div key={collectionTitle} className="mb-8">
            <h1 className="mb-8 text-2xl font-bold">{collectionTitle}</h1>
            <ul className="space-y-4">
                {collectionProducts.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </ul>
        </div>
    );
};

export default ProductsCollection;
