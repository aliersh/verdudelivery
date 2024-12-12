import { useState } from "react";

import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/contexts/CartContext";
import { useToast } from "@/lib/hooks/use-toast";
import { AddToCartButtonProps } from "@/lib/types/cart";

const AddToCartButton = ({
    variantId,
    quantity,
    unit,
}: AddToCartButtonProps) => {
    const { addItem } = useCart();
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();

    const handleAddToCart = async () => {
        setLoading(true);
        try {
            await addItem(variantId, quantity, unit);
            toast({
                title: "Éxito!",
                description: "Producto agregado al carrito",
                variant: "default",
                duration: 2000,
            });
        } catch (error) {
            toast({
                title: "Error",
                description:
                    error instanceof Error
                        ? error.message
                        : "Could not add item to cart",
                variant: "destructive",
                duration: 2000,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Button onClick={handleAddToCart} disabled={loading} className="w-40">
            {loading ? "Añadiendo..." : "Añadir al carrito"}
        </Button>
    );
};

export default AddToCartButton;
