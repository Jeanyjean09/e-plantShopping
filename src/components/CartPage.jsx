import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem.jsx";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 && <p>Your cart is empty.</p>}
      {cartItems.map((item) => (
        <CartItem key={item.name} item={item} />
      ))}
    </div>
  );
};

export default CartPage;
