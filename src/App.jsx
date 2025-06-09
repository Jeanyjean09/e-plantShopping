import React from "react";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const sampleProducts = [
  { name: "Aloe Vera", cost: "$10.00" },
  { name: "Snake Plant", cost: "$15.00" },
  { name: "Peace Lily", cost: "$20.00" },
];

const App = () => {
  const cart = useSelector(state => state.cart.items);
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate("/products"); // Navigate to your product listing route
  };

  return (
    <div>
      <ProductList products={sampleProducts} />
      <CartItem cart={cart} onContinueShopping={handleContinueShopping} />
    </div>
  );
};

export default App;
