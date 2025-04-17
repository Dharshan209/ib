import React, { useState, useEffect } from 'react';
import './product.css';

// Simplified product data without categories and descriptions
const productData = [
  { name: 'ObiPCOS', image: '/Products/ObiPCOS.svg' },
  { name: 'GYNOSITOL', image: '/Products/GYNOSITOL.svg' },
  { name: 'LetroBoon', image: '/Products/LetroBoon.svg' },
  { name: 'OvaGold-KIT', image: '/Products/OvaGoldKit.svg' },
  { name: 'OvaGold', image: '/Products/OvaGold.svg' },
  { name: 'MenQMAX', image: '/Products/MenQMAX.svg' },
  { name: 'MamGold', image: '/Products/MamGold.svg' },
  { name: 'TestoPreg', image: '/Products/TestoPreg.svg' },
  { name: 'BOSAMINE', image: '/Products/BOSAMINE.svg' },
  { name: 'MAM GEST', image: '/Products/MAM GEST.svg' },
  { name: 'GREAT FER', image: '/Products/GREAT FER.svg' },
  { name: 'GREAT FER Inj', image: '/Products/GREAT FER Inj.svg' },
  { name: 'Hopemin Forte', image: '/Products/Hopemin Forte.svg' },
  { name: 'New Argin', image: '/Products/New Argin.svg' },
  { name: 'L-Methylex', image: '/Products/L-Methylex.svg' },
  { name: 'CoralRich', image: '/Products/CoralRich.svg' },
];

const Products = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="products-page">
      <div className="products-header">
        <h2 className="products-title">Health & Wellness Products</h2>
        <p className="products-subtitle">
          Discover our premium range of supplements designed to support your health journey.
        </p>
      </div>

      <div className="products-grid">
        {isLoading ? (
          // Loading skeletons
          Array.from({ length: 8 }).map((_, index) => (
            <div className="product-card" key={`skeleton-${index}`}>
              <div className="image-container skeleton"></div>
              <div className="product-info">
                <div className="skeleton" style={{ height: '24px', width: '70%', marginBottom: '8px' }}></div>
              </div>
            </div>
          ))
        ) : (
          productData.map((product, index) => (
            <div className="product-card" key={index}>
              <div className="image-container">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="product-image" 
                  loading="lazy"
                />
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
