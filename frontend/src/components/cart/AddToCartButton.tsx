import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/buttons/button";

type AddToCartButtonProps = {
    variantId: string;
};

const AddToCartButton = ({ variantId }: AddToCartButtonProps) => {
    const { cart, addItem } = useCart();

    if (!cart) {
        return null;
    }

    const handleAddToCart = async () => {
        await addItem(variantId);
        alert("Added to cart");
    };

    return <Button onClick={handleAddToCart}>Añadir al carrito</Button>;
};

export default AddToCartButton;
