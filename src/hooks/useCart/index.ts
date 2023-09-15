// import { ProductItemTypes } from "./../../components/ProductList/types";
import { useState } from "react";
import { CartTypes, useCartTypes } from "./types";

const useCart = (): useCartTypes => {
  const [cart, setCart] = useState<CartTypes[]>([]);

  const onAddCart = (item: CartTypes) => {
    const itemInCart = cart.find((cartItem) => cartItem.id === item.id);

    if (itemInCart) {
      const updatedCart = cart.map((cartItem) =>
        cartItem["id"] === item.id
          ? {
              ...cartItem,
              quantity: cartItem["quantity"] + 1,
            }
          : cartItem
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const onUpdateCart = (itemId: number, quantityChange: number) => {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.id === itemId) {
        const newQuantity = cartItem.quantity + quantityChange;
        return { ...cartItem, quantity: Math.max(newQuantity, 0) };
      } else {
        return cartItem;
      }
    });
    setCart(updatedCart);
  };

  return { onAddCart, onUpdateCart, cart };
};

export default useCart;
