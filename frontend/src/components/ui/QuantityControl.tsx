import { Minus, Plus } from "lucide-react";

import { Button } from "../shadcnui/button";

const QuantityControl = ({
    unit,
    quantity,
    setQuantity,
}: {
    unit: string;
    quantity: number;
    setQuantity: (quantity: number) => void;
}) => {
    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    return (
        <div className="flex items-center mt-2 space-x-2">
            <Button variant="destructive" size="icon" onClick={handleDecrement}>
                <Minus className="w-4 h-4" />
            </Button>
            <span className="text-center w-11">
                {quantity} {unit}
            </span>
            <Button variant="destructive" size="icon" onClick={handleIncrement}>
                <Plus className="w-4 h-4" />
            </Button>
        </div>
    );
};

export default QuantityControl;
