import { useProducts } from "medusa-react";
import ProductItem from "../components/ui/ProductItem";

import LoadingIndicator from "../components/ui/LoadingIndicator";
import NoProductMessage from "../components/ui/NoProductMessage";

const Products = () => {
    const { products, isLoading } = useProducts();

    return (
        <div>
            {isLoading && <LoadingIndicator />}
            {products && !products.length && <NoProductMessage />}
            <ul>
                {products?.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </ul>
        </div>
    );
};

export default Products;
