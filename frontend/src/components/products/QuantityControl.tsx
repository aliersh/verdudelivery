import { Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/buttons/button';
import { QuantityControlProps } from '@/types/product';
const QuantityControl = ({
  quantity,
  unit,
  productTitle,
  onIncrement,
  onDecrement,
}: QuantityControlProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Button
        onClick={onDecrement}
        variant="accent"
        size="icon"
        aria-label={`Decrease quantity of ${productTitle}`}
      >
        <Minus className="w-4 h-4" />
      </Button>
      <span className="text-center w-11">
        {quantity} {unit}
      </span>
      <Button
        onClick={onIncrement}
        variant="accent"
        size="icon"
        aria-label={`Increase quantity of ${productTitle}`}
      >
        <Plus className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default QuantityControl; 