import Image from 'next/image';
import { ProductImageProps } from '@/types/product';

const ProductImage = ({ 
  src, 
  alt, 
  width = 80, 
  height = 80 
}: ProductImageProps) => {
  return (
    <div className="w-20 h-20">
      <Image
        src={src ?? "/default-thumbnail.jpg"}
        alt={alt ?? "No title"}
        width={width}
        height={height}
        className="object-cover rounded-md"
      />
    </div>
  );
};

export default ProductImage; 