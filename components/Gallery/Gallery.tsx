"use client";
import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import './Gallery.css';

// Use HTMLImageElement for native image loading
const HTMLImage = typeof window !== 'undefined' ? window.Image : null;

const Gallery = () => {
  const images = useMemo<string[]>(() => ['/Gallery/1.svg', '/Gallery/2.svg', '/Gallery/3.svg'], []);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Preload gallery images
    let mounted = true;
    const newLoadedImages: Record<string, boolean> = {};
    
    const imagePromises = images.map((src) => {
      return new Promise<void>((resolve) => {
        if (!HTMLImage) {
          resolve();
          return;
        }
        const img = new HTMLImage();
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
              <Image 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                width={600}
                height={400}
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