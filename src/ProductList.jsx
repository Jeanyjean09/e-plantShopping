import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/CartSlice'; // Adjust path based on your project structure

const ProductList = () => {
  const dispatch = useDispatch();

  const [addedToCart, setAddedToCart] = useState({});

  const plantsArray = [
    {
      category: "Indoor Plants",
      plants: [
        {
          name: "Fiddle Leaf Fig",
          image: "https://example.com/fiddle-leaf.jpg",
          description: "A beautiful indoor plant with large green leaves.",
          cost: 25,
        },
        {
          name: "Snake Plant",
          image: "https://example.com/snake-plant.jpg",
          description: "Easy to care for and air purifying.",
          cost: 15,
        },
      ],
    },
    {
      category: "Outdoor Plants",
      plants: [
        {
          name: "Rose",
          image: "https://example.com/rose.jpg",
          description: "A fragrant and colorful outdoor plant.",
          cost: 20,
        },
      ],
    },
  ];

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedToCart((prevState) => ({
      ...prevState,
      [product.name]: true,
    }));
  };

  return (
    <div className="product-grid">
      {plantsArray.map((category, index) => (
        <div key={index}>
          <h1>{category.catego
