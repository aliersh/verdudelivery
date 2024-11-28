import { ProductPriceProps } from '@/lib/types/product';

const ProductPrice = ({ unitPrice, quantity, unit, formatPrice }: ProductPriceProps) => {
  return (
    <div className="text-right">
      <p className="text-sm text-muted-foreground">
        {formatPrice(unitPrice)} / {unit}
      </p>
      <p className="font-semibold">
        {formatPrice(unitPrice * quantity)}
      </p>
    </div>
  );
};

export default ProductPrice; 