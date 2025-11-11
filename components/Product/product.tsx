"use client";
import React from 'react';
import Image from 'next/image';
import './product.css';

interface Product {
  name: string;
  image: string;
}

// Simplified product data without categories and descriptions
const productData: Product[] = [
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
  return (
    <div className="products-container fade-in">
      <h2 className="section-title">Health & Wellness Products</h2>
      <p className="section-subtitle">
        Discover our premium range of supplements designed to support your health journey.
      </p>

      <div className="products-grid">
        {productData.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="product-image-container">
              <Image 
                src={product.image} 
                alt={product.name} 
                width={300}
                height={300}
                className="product-image"
                priority={index < 4}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                unoptimized={product.image.endsWith('.svg')}
              />
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;