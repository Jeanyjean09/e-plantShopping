// src/components/ProductList.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const ProductList = ({ products }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total quantity of all items in cart
  const calculateTotalQuantity = () => {
    return cartItems ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0;
  };

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div>
      <h2>Products</h2>
      <p>Items in Cart: {calculateTotalQuantity()}</p>

      <ul>
        {products.map((product) => {
          const isInCart = cartItems.some(item => item.name === product.name);

          return (
            <li key={product.name} style={{ marginBottom: "10px" }}>
              <span>{product.name} - {product.cost}</span>
              <button
                onClick={() => handleAddToCart(product)}
                disabled={isInCart}
                style={{ marginLeft: "10px" }}
              >
                {isInCart ? "Added to Cart" : "Add to Cart"}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
