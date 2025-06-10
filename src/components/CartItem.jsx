import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../redux/cartSlice"; // Fix the import!

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem(item.name)); // Pass the name, as your reducer expects
  };

  return (
    <div>
      <h4>{item.name}</h4>
      <p>Quantity: {item.quantity}</p>
      <p>Price: {item.cost}</p>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default CartItem;
