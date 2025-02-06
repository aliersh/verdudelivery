import { ProductTitleProps } from "@/lib/types/product";

const ProductTitle = ({ title, subtitle }: ProductTitleProps) => {
    return (
        <div className="mb-1">
            <h3 className="text-base font-medium text-gray-900 truncate">
                {title}
            </h3>
            {subtitle && (
                <p className="text-sm text-gray-500 truncate">{subtitle}</p>
            )}
        </div>
    );
};

export default ProductTitle;
