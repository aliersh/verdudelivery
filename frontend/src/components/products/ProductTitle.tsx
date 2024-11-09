import { ProductTitleProps } from '@/types/product';

const ProductTitle = ({ title, subtitle }: ProductTitleProps) => {
  return (
    <h3 className="text-lg font-semibold">
      {title}
      {subtitle && (
        <span className="ml-2 text-sm font-normal text-gray-500">
          {subtitle}
        </span>
      )}
    </h3>
  );
};

export default ProductTitle; 