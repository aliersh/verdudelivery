import { PricedProduct } from '@medusajs/medusa/dist/types/pricing';

const ProductPrice = ({
    product,
    tag,
    quantity,
}: {
    product: PricedProduct;
    tag: string;
    quantity: number;
}) => {
    const pricePerTag = product.variants[0]?.prices[0]?.amount;

    return (
        <div className="text-right">
            <p className="text-sm text-muted-foreground">
                ${pricePerTag} / {tag}
            </p>
            <p className="font-semibold">${pricePerTag * quantity}</p>
        </div>
    );
};

export default ProductPrice;