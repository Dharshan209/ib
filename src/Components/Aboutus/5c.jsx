import React, { useState } from "react";
import './5c.css';

const FiveC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const fiveCValues = [
    { 
      name: "CULTURE", 
      description: "Building an environment of excellence and innovation",
      icon: "🏛️"
    },
    { 
      name: "COMPASSION", 
      description: "Treating everyone with dignity, care and respect",
      icon: "💝"
    },
    { 
      name: "COMPETENCY", 
      description: "Continuously improving our skills and knowledge",
      icon: "⭐"
    },
    { 
      name: "CARING", 
      description: "Putting patients' needs at the center of everything we do",
      icon: "🤲"
    },
    { 
      name: "CONCEPT", 
      description: "Innovating with purpose and vision for the future",
      icon: "💡"
    }
  ];

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="fivec-container">
      <div className="fivec-header">
        <h2 className="fivec-title">Our Core Pillars</h2>
        <div className="fancy-5c">
          <div className="five-symbol">5</div>
          <div className="c-symbol">C</div>
        </div>
      </div>
      
      <div className="fivec-content">
        <div className="fivec-card-container">
          <div className="fivec-card">
            <div className="card-icon">{fiveCValues[activeIndex].icon}</div>
            <h3 className="card-title">{fiveCValues[activeIndex].name}</h3>
            <p className="card-description">{fiveCValues[activeIndex].description}</p>
          </div>
        </div>
        
        <div className="fivec-navigation">
          {fiveCValues.map((value, index) => (
            <button 
              key={value.name}
              className={`nav-dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`View ${value.name}`}
            />
          ))}
        </div>
      </div>
      
      <div className="fivec-list">
        {fiveCValues.map((value, index) => (
          <div key={value.name} className="fivec-list-item">
            <span className="list-icon">{value.icon}</span>
            <span className="list-name">{value.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FiveC;
