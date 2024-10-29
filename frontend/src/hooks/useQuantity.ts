import { useState } from "react";

export const useQuantity = (initialQuantity: number = 1) => {
    const [quantity, setQuantity] = useState(initialQuantity);

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    return {
        quantity,
        handleDecrement,
        handleIncrement,
    };
};
