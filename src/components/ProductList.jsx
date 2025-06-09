import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const products = [
  { id: 1, name: 'Plant 1', price: 10 },
  { id: 2, name: 'Plant 2', price: 20 },
  // add your products here
];

const ProductList = () => {
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div>
      <h2>Products</h2>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => handleAdd(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
