import { Minus, Plus } from 'lucide-react';
import { QuantityControlProps } from '@/lib/types/product';

const QuantityControl = ({
    quantity,
    unit,
    productTitle,
    onIncrement,
    onDecrement,
}: QuantityControlProps) => {
    return (
        <div className="flex items-center h-9 rounded-lg border border-gray-200 bg-white">
            <button
                onClick={onDecrement}
                className="flex items-center justify-center w-9 h-full text-gray-500 transition-colors hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 rounded-l-lg"
                aria-label={`Decrease quantity of ${productTitle}`}
            >
                <Minus className="w-3.5 h-3.5" />
            </button>
            
            <div className="flex items-center justify-center min-w-[3rem] h-full px-1 text-sm font-medium text-gray-900 border-x border-gray-200">
                {quantity} {unit}
            </div>
            
            <button
                onClick={onIncrement}
                className="flex items-center justify-center w-9 h-full text-gray-500 transition-colors hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 rounded-r-lg"
                aria-label={`Increase quantity of ${productTitle}`}
            >
                <Plus className="w-3.5 h-3.5" />
            </button>
        </div>
    );
};

export default QuantityControl; 