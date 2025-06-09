import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./cartSlice"; // adjust path if needed

const plantsArray = [
  {
    category: "Indoor Plants",
    plants: [
      {
        name: "Snake Plant",
        image: "https://example.com/snakeplant.jpg",
        description: "Easy to care for plant.",
        cost: 15,
      },
      {
        name: "Spider Plant",
        image: "https://example.com/spiderplant.jpg",
        description: "Great for beginners.",
        cost: 10,
      },
    ],
  },
  {
    category: "Outdoor Plants",
    plants: [
      {
        name: "Rose",
        image: "https://example.com/rose.jpg",
        description: "Beautiful fragrant flowers.",
        cost: 20,
      },
    ],
  },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedToCart((prevState) => ({
      ...prevState,
      [product.name]: true,
    }));
  };

  const calculateTotalQuantity = () => {
    return cartItems ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0;
  };

  return (
    <div>
      <h2>Shopping Cart: {calculateTotalQuantity()} items</h2>

      <div className="product-grid">
        {plantsArray.map((category, index) => (
          <div key={index}>
            <h1>{category.category}</h1>
            <div className="product-list">
              {category.plants.map((plant, plantIndex) => (
                <div className="product-card" key={plantIndex}>
                  <img className="product-image" src={plant.image} alt={plant.name} />
                  <div className="product-title">{plant.name}</div>
                  <div className="product-description">{plant.description}</div>
                  <div className="product-cost">${plant.cost}</div>
                  <button
                    className="product-button"
                    onClick={() => handleAddToCart(plant)}
                    disabled={addedToCart[plant.name]} // Disable button if already added
                  >
                    {addedToCart[plant.name] ? "Added" : "Add to Cart"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
