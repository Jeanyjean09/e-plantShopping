import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

function App() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <nav>
        <Link to="/">Products</Link> |{" "}
        <Link to="/cart">
          Cart <span style={{ background: "#eee", borderRadius: "50%", padding: "0 8px" }}>{totalItems}</span>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </div>
  );
}

export default App;
