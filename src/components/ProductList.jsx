import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './cartSlice';  // Adjust the path based on your folder structure

const ProductList = () => {
  const dispatch = useDispatch();

  // State to track which products have been added to cart
  const [addedToCart, setAddedToCart] = useState({});

  // Sample plantsArray — normally you will get this from props or API
  const plantsArray = [
    {
      category: 'Indoor Plants',
      plants: [
        {
          name: 'Snake Plant',
          image: 'https://example.com/snakeplant.jpg',
          description: 'A hardy indoor plant that requires little water.',
          cost: 25,
        },
        {
          name: 'Spider Plant',
          image: 'https://example.com/spiderplant.jpg',
          description: 'Great for purifying the air.',
          cost: 18,
        },
      ],
    },
    {
      category: 'Outdoor Plants',
      plants: [
        {
          name: 'Rose Bush',
          image: 'https://example.com/rosebush.jpg',
          description: 'Beautiful roses with vibrant colors.',
          cost: 30,
        },
      ],
    },
  ];

  // Function to handle adding product to cart
  const handleAddToCart = (product) => {
    dispatch(addItem(product)); // Dispatch to redux store
    setAddedToCart((prevState) => ({
      ...prevState,
      [product.name]: true,
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
                  disabled={addedToCart[plant.name]} // disable if already added
                >
                  {addedToCart[plant.name] ? 'Added' : 'Add to Cart'}
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
