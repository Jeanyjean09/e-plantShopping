import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList.jsx";
import CartItem from "./components/CartItem.jsx";
import AboutUs from "./AboutUs.jsx";
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
        </Link> |{" "}
        <Link to="/about">About Us</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
