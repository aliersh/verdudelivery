import AddToCartButton from "@/components/feature/cart/AddToCartButton";
import ProductImage from "@/components/feature/products/ProducItem/ProductImage";
import ProductPrice from "@/components/feature/products/ProducItem/ProductPrice";
import ProductTitle from "@/components/feature/products/ProducItem/ProductTitle";
import QuantityControl from "@/components/feature/products/ProducItem/QuantityControl";
import { ProductItemProps } from "@/lib/types/product";

const ProductItem = ({
    product,
    quantity,
    onIncrement,
    onDecrement,
    formatPrice,
}: ProductItemProps) => {
    const unit = product.metadata?.unit as string;
    const unitPrice =
        product?.variants?.[0]?.calculated_price?.calculated_amount ?? 0;

    return (
        <li className="flex items-center gap-6 p-4 transition-colors rounded-lg hover:bg-gray-50">
            <ProductImage src={product.thumbnail ?? ""} alt={product.title} />
            <div className="flex items-center justify-between flex-1 gap-6">
                <div className="flex-1 min-w-0">
                    <ProductTitle
                        title={product.title}
                        subtitle={product.subtitle || undefined}
                    />
                    <ProductPrice
                        unitPrice={unitPrice}
                        quantity={quantity}
                        unit={unit}
                        formatPrice={formatPrice}
                    />
                </div>
                <div className="flex items-center gap-4">
                    <QuantityControl
                        quantity={quantity}
                        unit={unit}
                        productTitle={product.title}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                    />
                    <AddToCartButton
                        variantId={product.variants?.[0]?.id ?? ""}
                        quantity={quantity}
                        unit={unit}
                    />
                </div>
            </div>
        </li>
    );
};

export default ProductItem;
