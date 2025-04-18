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
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    // Preload images
    let mounted = true;
    const newLoadedImages = {};
    
    const imagePromises = productData.map((product) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = product.image;
        img.onload = () => {
          if (mounted) {
            newLoadedImages[product.image] = true;
          }
          resolve();
        };
        img.onerror = () => {
          if (mounted) {
            newLoadedImages[product.image] = false;
          }
          resolve();
        };
      });
    });

    // Set loading state based on image loading
    Promise.all(imagePromises).then(() => {
      if (mounted) {
        setLoadedImages(newLoadedImages);
        setTimeout(() => setIsLoading(false), 300); // Small delay for smoother transition
      }
    });

    return () => {
      // Cleanup
      mounted = false;
    };
  }, []);

  return (
    <div className="products-container fade-in">
      <h2 className="section-title">Health & Wellness Products</h2>
      <p className="section-subtitle">
        Discover our premium range of supplements designed to support your health journey.
      </p>

      <div className="products-grid">
        {isLoading ? (
          // Loading skeletons
          Array.from({ length: 8 }).map((_, index) => (
            <div className="product-card" key={`skeleton-${index}`}>
              <div className="product-image-container skeleton"></div>
              <div className="product-info">
                <div className="skeleton" style={{ height: '24px', width: '70%', marginBottom: '8px' }}></div>
              </div>
            </div>
          ))
        ) : (
          productData.map((product, index) => (
            <div className="product-card" key={index}>
              <div className="product-image-container">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className={`product-image ${loadedImages[product.image] ? 'loaded' : ''}`}
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