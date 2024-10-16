// components/AddToCartButton.tsx
import { useEffect } from "react";
import { Button } from "../../shadcnui/button";
import { useCart, useCreateLineItem } from "medusa-react";

const AddToCartButton = ({ variantId, quantity }: { variantId: string, quantity: number }) => {
    const { cart, createCart } = useCart();
    const createLineItem = useCreateLineItem(cart?.id as string);

    useEffect(() => {
        if (!cart?.id && !createCart.isLoading && !createCart.isSuccess) {
            createCart.mutate({});
        }
    }, [cart, createCart]);

    const handleAddToCart = () => {
        if (!cart?.id) {
            console.error("Cart not initialized");
            return;
        }

        createLineItem.mutate(
            {
                variant_id: variantId,
                quantity: quantity,
            },
            {
                onSuccess: ({ cart }) => {
                    console.log("Item added to cart", cart.items);
                },
                onError: (error) => {
                    console.error("Error adding item to cart", error);
                },
            }
        );
    };

    return <Button onClick={handleAddToCart}>Añadir al carrito</Button>;
};

export default AddToCartButton;
