import { useProducts } from 'medusa-react';

import ProductsCollection from '@/components/ui/ProductsCollections';

import { groupProductsByCollection } from '../../lib/productsUtils';
import { collectionOrder } from '../../lib/productsUtils';
import LoadingIndicator from '../ui/LoadingIndicator';
import NoProductMessage from '../ui/NoProductMessage';

const ProductsList = () => {
    const { products, isLoading } = useProducts();

    const groupedProducts = products ? groupProductsByCollection(products) : {};

    return (
        <div className="max-w-6xl px-4 mx-auto">
            {isLoading && <LoadingIndicator />}
            {products && !products.length && <NoProductMessage />}
            {collectionOrder.map((collectionTitle) => {
                const collectionProducts = groupedProducts[collectionTitle];
                if (collectionProducts) {
                    return (
                        <ProductsCollection
                            key={collectionTitle}
                            collectionTitle={collectionTitle}
                            collectionProducts={collectionProducts}
                        />
                    );
                }
                return null; // Return null if the collection doesn't exist
            })}
        </div>
    );
};

export default ProductsList;
