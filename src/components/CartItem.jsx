import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart({ id: item.id }));
  };

  return (
    <div>
      <h4>{item.name}</h4>
      <p>Quantity: {item.quantity}</p>
      <p>Price: ${item.price}</p>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default CartItem;
