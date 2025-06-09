import React from "react";
import { useDispatch } from "react-redux";
// Import actions or selectors from the correct cartSlice file with lowercase 'c'
import { removeFromCart } from "../redux/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default CartItem;
