import { useState } from 'react';

import { Button } from '@/components/ui/buttons/button';
import { useCart } from '@/contexts/CartContext';

type AddToCartButtonProps = {
    variantId: string;
    quantity?: number;
    unit?: string;
};

const AddToCartButton = ({
    variantId,
    quantity,
    unit,
}: AddToCartButtonProps) => {
    const { addItem } = useCart();
    const [loading, setLoading] = useState(false);

    const handleAddToCart = async () => {
        setLoading(true);
        await addItem(variantId, quantity, unit);
        setLoading(false);
    };

    return (
        <>
            <Button
                onClick={handleAddToCart}
                disabled={loading}
                className="w-40"
            >
                {loading ? "Añadiendo..." : "Añadir al carrito"}
            </Button>
        </>
    );
};

export default AddToCartButton;
