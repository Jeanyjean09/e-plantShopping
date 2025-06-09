import React from 'react';
import { useDispatch } from 'react-redux';
import { updateQuantity, addItem, removeItem } from './cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value, 10);
    if (quantity > 0) {
      dispatch(updateQuantity({ id: item.id, quantity }));
    }
  };

  const handleAddOneMore = () => {
    dispatch(addItem(item));
  };

  const handleRemove = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <div>
      <h4>{item.name}</h4>
      <div>Price: ${item.price.toFixed(2)}</div>
      <div>
        Quantity:
        <input 
          type="number" 
          min="1" 
          value={item.quantity} 
          onChange={handleQuantityChange} 
        />
        <button onClick={handleAddOneMore}>+</button>
        <button onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
