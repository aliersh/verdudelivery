import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/buttons/button";
import { useState } from "react";

type AddToCartButtonProps = {
    variantId: string;
    quantity?: number;
    unit?: string;
};

const AddToCartButton = ({ variantId, quantity, unit }: AddToCartButtonProps) => {
    const { addItem } = useCart();
    const [loading, setLoading] = useState(false);

    const handleAddToCart = async () => {
        setLoading(true);
        await addItem(variantId, quantity, unit);
        setLoading(false);
    };

    return (
        <>
            <Button onClick={handleAddToCart} disabled={loading}>
                {/*//TODO: Change loading state */}
                {loading ? "Cargando..." : "Añadir al carrito"}
            </Button>
        </>
    );
};

export default AddToCartButton;
