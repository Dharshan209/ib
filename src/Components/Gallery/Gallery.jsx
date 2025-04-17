import React from 'react';
import './Gallery.css';

// Import your images here
import img1 from '/Gallery/1.svg';
import img2 from '/Gallery/2.svg';
import img3 from '/Gallery/3.svg';

const Gallery = () => {
  const images = [img1, img2, img3];

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Our Journey in Frames</h2>
      <p className="gallery-subtitle">Snapshots from our impactful work and milestones</p>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
