import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/buttons/button";

type AddToCartButtonProps = {
    variantId: string;
};

const AddToCartButton = ({ variantId }: AddToCartButtonProps) => {
    const { cart } = useCart();

    if (!cart) {
        return null;
    }

    const handleAddToCart = () => {
        fetch(
            `${process.env.NEXT_PUBLIC_MEDUSA_API_URL}/store/carts/${cart.id}/line-items`,
            {
                credentials: "include",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-publishable-api-key": process.env
                        .NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY as string,
                },
                body: JSON.stringify({
                    variant_id: variantId,
                    quantity: 1,
                }),
            }
        )
            .then((res) => res.json())
            .then(({ cart }) => {
                console.log(cart);
                alert("Added to cart");
            });
    };

    return <Button onClick={handleAddToCart}>Añadir al carrito</Button>;
    // TODO: Add toast
};

export default AddToCartButton;
