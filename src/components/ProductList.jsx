import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/cartSlice";

const plantsArray = [
  {
    category: "Air Purifying Plants",
    plants: [
      {
        name: "Spider Plant",
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
        description: "Removes toxins and purifies air.",
        cost: "$10.00",
      },
      {
        name: "Snake Plant",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        description: "Low maintenance and improves air quality.",
        cost: "$12.00",
      },
    ],
  },
  {
    category: "Aromatic Fragrant Plants",
    plants: [
      {
        name: "Lavender",
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
        description: "Soothing fragrance and beautiful blooms.",
        cost: "$8.00",
      },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem({ ...plant, quantity: 1 }));
    setAddedToCart((prev) => ({ ...prev, [plant.name]: true }));
  };

  const calculateTotalQuantity = () =>
    cartItems ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0;

  return (
    <>
      <h2>All Plants ({calculateTotalQuantity()} in cart)</h2>
      <div className="product-grid">
        {plantsArray.map((category, index) => (
          <div key={index}>
            <h1>
              <div>{category.category}</div>
            </h1>
            <div className="product-list">
              {category.plants.map((plant, plantIndex) => (
                <div className="product-card" key={plantIndex}>
                  <img
                    className="product-image"
                    src={plant.image}
                    alt={plant.name}
                  />
                  <div className="product-title">{plant.name}</div>
                  <div className="product-description">{plant.description}</div>
                  <div className="product-cost">{plant.cost}</div>
                  <button
                    className="product-button"
                    onClick={() => handleAddToCart(plant)}
                    disabled={!!addedToCart[plant.name] || cartItems.find((i) => i.name === plant.name)}
                    style={
                      !!addedToCart[plant.name] || cartItems.find((i) => i.name === plant.name)
                        ? { background: "#ccc", color: "#888", cursor: "not-allowed" }
                        : {}
                    }
                  >
                    {addedToCart[plant.name] || cartItems.find((i) => i.name === plant.name)
                      ? "Added to Cart"
                      : "Add to Cart"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;
