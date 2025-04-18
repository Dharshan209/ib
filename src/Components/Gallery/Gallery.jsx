import React, { useState, useEffect } from 'react';
import './Gallery.css';

// Import gallery images
import img1 from '/Gallery/1.svg';
import img2 from '/Gallery/2.svg';
import img3 from '/Gallery/3.svg';

const Gallery = () => {
  const images = [img1, img2, img3];
  const [loadedImages, setLoadedImages] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload gallery images
    let mounted = true;
    const newLoadedImages = {};
    
    const imagePromises = images.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          if (mounted) {
            newLoadedImages[src] = true;
          }
          resolve();
        };
        img.onerror = () => {
          if (mounted) {
            newLoadedImages[src] = false;
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
  }, [images]);

  return (
    <div className="gallery-container fade-in">
      <h2 className="section-title">Our Journey in Frames</h2>
      <p className="section-subtitle">Snapshots from our impactful work and milestones</p>
      
      <div className="gallery-grid">
        {isLoading ? (
          // Loading skeletons
          Array.from({ length: 3 }).map((_, index) => (
            <div className="gallery-item skeleton" key={`skeleton-${index}`}></div>
          ))
        ) : (
          images.map((src, index) => (
            <div 
              className="gallery-item" 
              key={index}
            >
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className={`gallery-image ${loadedImages[src] ? 'loaded' : ''}`}
                loading="lazy"
              />
              <div className="gallery-overlay">
                <div className="gallery-caption">Event {index + 1}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Gallery;