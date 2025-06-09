import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './cartSlice';

const ProductList = ({ products }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  // Calculate total quantity in cart
  const calculateTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div>
      <h2>Products</h2>
      <p>Total items in cart: {calculateTotalQuantity()}</p>

      <ul>
        {products.map(product => (
          <li key={product.name}>
            <div>
              <strong>{product.name}</strong> - ${product.price}
            </div>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
