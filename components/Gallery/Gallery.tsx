"use client";
import React from 'react';
import Image from 'next/image';
import './Gallery.css';

const Gallery = () => {
  const images = ['/Gallery/1.svg', '/Gallery/2.svg', '/Gallery/3.svg'];

  return (
    <div className="gallery-container fade-in">
      <h2 className="section-title">Our Journey in Frames</h2>
      <p className="section-subtitle">Snapshots from our impactful work and milestones</p>
      
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div 
            className="gallery-item" 
            key={index}
          >
            <Image 
              src={src} 
              alt={`Gallery image ${index + 1}`} 
              width={600}
              height={400}
              className="gallery-image"
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              unoptimized={src.endsWith('.svg')}
            />
            <div className="gallery-overlay">
              <div className="gallery-caption">Event {index + 1}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;