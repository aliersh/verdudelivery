import { useProducts } from 'medusa-react';

import ProductsCollection from '@/components/ui/ProductsCollections';

import groupProductsByCollection from '../../lib/productsUtils';
import LoadingIndicator from '../ui/LoadingIndicator';
import NoProductMessage from '../ui/NoProductMessage';

const ProductsList = () => {
    const { products, isLoading } = useProducts();

    const groupedProducts = products ? groupProductsByCollection(products) : {};

    return (
        <div className="max-w-6xl px-4 mx-auto">
            {isLoading && <LoadingIndicator />}
            {products && !products.length && <NoProductMessage />}
            {Object.entries(groupedProducts).map(
                ([collectionTitle, collectionProducts]) => (
                    <ProductsCollection
                        key={collectionTitle}
                        collectionTitle={collectionTitle}
                        collectionProducts={collectionProducts}
                    />
                )
            )}
        </div>
    );
};

export default ProductsList;
