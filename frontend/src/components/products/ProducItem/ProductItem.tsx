import AddToCartButton from '@/components/cart/AddToCartButton';
import ProductImage from '@/components/products/ProducItem/ProductImage';
import ProductPrice from '@/components/products/ProducItem/ProductPrice';
import ProductTitle from '@/components/products/ProducItem/ProductTitle';
import QuantityControl from '@/components/products/ProducItem/QuantityControl';
import { ProductItemProps } from '@/types/product';

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
        <li className="flex items-center space-x-4">
            <ProductImage 
                src={product.thumbnail ?? ''}
                alt={product.title}
            />
            <div className="flex-1">
                <ProductTitle
                    title={product.title}
                    subtitle={product.subtitle || undefined}
                />
                <QuantityControl
                    quantity={quantity}
                    unit={unit}
                    productTitle={product.title}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                />
            </div>
            <ProductPrice
                unitPrice={unitPrice}
                quantity={quantity}
                unit={unit}
                formatPrice={formatPrice}
            />
            <div>
                <AddToCartButton
                    variantId={product.variants?.[0]?.id ?? ""}
                    quantity={quantity}
                    unit={unit}
                />
            </div>
        </li>
    );
};

export default ProductItem;
