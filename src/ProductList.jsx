import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/CartSlice';

const plantsArray = [
  {
    category: "Indoor Plants",
    plants: [
      {
        name: "Snake Plant",
        image: "https://example.com/snake-plant.jpg",
        description: "Low maintenance plant that thrives in low light.",
        cost: 25
      },
      {
        name: "Peace Lily",
        image: "https://example.com/peace-lily.jpg",
        description: "Beautiful white blooms and air purifying.",
        cost: 30
      }
    ]
  },
  {
    category: "Outdoor Plants",
    plants: [
      {
        name: "Rose",
        image: "https://example.com/rose.jpg",
        description: "Classic flowering plant, great for gardens.",
        cost: 15
      },
      {
        name: "Lavender",
        image: "https://example.com/lavender.jpg",
        description: "Fragrant and calming herb for outdoor pots.",
        cost: 20
      }
    ]
  }
];

const ProductList = () => {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prev) => ({
      ...prev,
      [plant.name]: true
    }));
  };

  return (
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
                <div className="product-cost">${plant.cost}</div>
                <button
                  className="product-button"
                  onClick={() => handleAddToCart(plant)}
                  disabled={addedToCart[plant.name]}
                >
                  {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
