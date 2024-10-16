import { useCart, useUpdateLineItem, useDeleteLineItem } from "medusa-react";
import { Button } from "../components/shadcnui/button";
import LoadingIndicator from "@/components/ui/LoadingIndicator";
import { useEffect } from "react";

const Cart = () => {
    const { cart } = useCart();
    const updateLineItem = useUpdateLineItem(cart?.id as string);
    const deleteLineItem = useDeleteLineItem(cart?.id as string);

    useEffect(() => {
        if (cart?.id) {
            localStorage.setItem("cart_id", cart.id);
        }
    }, [cart?.id]);

    const handleUpdateQuantity = (lineItemId: string, quantity: number) => {
        updateLineItem.mutate(
            { lineId: lineItemId, quantity: quantity },
            {
                onSuccess: (cart) => {
                    console.log("Item quantity updated", cart);
                },
                onError: (error) => {
                    console.error("Error updating item quantity", error);
                },
            }
        );
    };

    const handleDeleteItem = (lineItemId: string) => {
        deleteLineItem.mutate({ lineId: lineItemId }, {
            onSuccess: (cart) => {
                console.log("Item deleted", cart);
            },
            onError: (error) => {
                console.error("Error deleting item", error);
            },
        });
    };

    if (!cart) return <LoadingIndicator />;

    return (
        <div className="cart-page">
            <h1>Your Cart</h1>
            {cart.items.length > 0 ? (
                <ul>
                    {cart.items.map((item) => (
                        <li key={item.id} className="flex justify-between">
                            <div>
                                <p>{item.title}</p>
                                <p>Quantity: {item.quantity}</p>
                            </div>
                            <div>
                                <Button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</Button>
                                <Button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>-</Button>
                                <Button onClick={() => handleDeleteItem(item.id)}>Remove</Button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Your cart is empty</p>
            )}
            {cart.items.length > 0 && (
                <div>
                    <p>Total: ${cart.total}</p>
                </div>
            )}
        </div>
    );
};

export default Cart;
