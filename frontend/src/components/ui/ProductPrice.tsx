import { PricedProduct } from '@medusajs/medusa/dist/types/pricing';

const ProductPrice = ({ product }: { product: PricedProduct }) => {
    const pricePerTag = product.variants[0]?.prices[0]?.amount;
    const tag = product.tags?.[0]?.value ?? "";

    return (
        <div className="text-right">
            <p className="text-sm text-muted-foreground">
                ${pricePerTag} / {tag}
            </p>
            <p className="font-semibold">$2400</p>
        </div>
    );
};

export default ProductPrice;

// TODO: add total price logic