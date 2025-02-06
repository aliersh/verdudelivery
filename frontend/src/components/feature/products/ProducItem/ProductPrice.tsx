import { ProductPriceProps } from "@/lib/types/product";

const ProductPrice = ({
    unitPrice,
    quantity,
    unit,
    formatPrice,
}: ProductPriceProps) => {
    return (
        <div className="mt-1">
            <p className="text-sm font-medium text-gray-900">
                {formatPrice(unitPrice * quantity)}
            </p>
            <p className="text-xs text-gray-500">
                {formatPrice(unitPrice)} / {unit}
            </p>
        </div>
    );
};

export default ProductPrice;
