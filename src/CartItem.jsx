// src/components/CartItem.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { updateQuantity, addItem, removeItem } from '../redux/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(addItem(item));
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = () => {
    dispatch(removeItem(item.name));
  };

  return (
    <div>
      <h4>{item.name}</h4>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={handleDecrease}>-</button>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default CartItem;
