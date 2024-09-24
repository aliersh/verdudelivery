import { useProducts } from "medusa-react";
import Image from "next/image";
const Products = () => {
    const { products, isLoading } = useProducts();

    return (
        <div>
            {isLoading && <div>Loading...</div>}
            {products && !products.length && <div>No products found</div>}
            <ul>
                {products?.map((product) => (
                    <li key={product.id}>
                        <Image
                            src={product.thumbnail ?? "/default-thumbnail.jpg"}
                            alt={product.title ?? "No title"}
                            width={100}
                            height={100}
                        />
                        {product.title ?? "No title"}
                        ${product.variants[0].prices[0].amount}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;
