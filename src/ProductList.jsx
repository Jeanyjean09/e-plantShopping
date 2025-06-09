import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './cartSlice';

const ProductList = ({ products }) => {
  const dispatch = useDispatch();

  // Select cart items from redux state
  const cartItems = useSelector(state => state.cart.cartItems);

  // Calculate total quantity of items in cart
  const calculateTotalQuantity = () => {
    return cartItems ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0;
  };

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div>
      <h2>Products</h2>
      <div>Total Items in Cart: {calculateTotalQuantity()}</div>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price.toFixed(2)}
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
