// src/components/ProductCard.jsx
import React from 'react';
import './ProductCard.css'; // Optional: for custom styling

const ProductCard = ({ image, name, price, description, onBuyNow }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-details">
        <h2>{name}</h2>
        <p className="product-price">${price}</p>
        <p className="product-description">{description}</p>
        <button onClick={() => onBuyNow(name)}>Buy Now</button>
      </div>
    </div>
  );
};

export default ProductCard;