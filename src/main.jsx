import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to Paradise Nursery</h1>
      <button onClick={() => navigate("/about")}>Learn About Us</button>
    </div>
  );
}

export default Home;
