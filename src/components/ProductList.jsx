import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice'; // Notice the lowercase 'cartSlice'

const products = [
  { id: 'p1', title: 'Aloe Vera', price: 10 },
  { id: 'p2', title: 'Snake Plant', price: 15 },
  { id: 'p3', title: 'Peace Lily', price: 20 },
];

const ProductList = () => {
  const dispatch = useDispatch();

  const addToCartHandler = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div>
      <h2>Plants</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div>
              <strong>{product.title}</strong> - ${product.price}
            </div>
            <button onClick={() => addToCartHandler(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
