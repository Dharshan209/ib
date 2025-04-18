import React, { useState, useEffect } from "react";
import './5c.css';

const FiveC = () => {
  const [activeValue, setActiveValue] = useState(0);
  
  const coreValues = [
    { 
      name: "Culture", 
      description: "Building an environment of excellence and innovation that fosters growth and achievement at every level of our organization.",
      icon: "🏛️"
    },
    { 
      name: "Compassion", 
      description: "Treating everyone with dignity, care and respect, ensuring empathetic service in all our interactions.",
      icon: "💝"
    },
    { 
      name: "Competency", 
      description: "Continuously improving our skills, knowledge and expertise to deliver the highest quality healthcare solutions.",
      icon: "⭐"
    },
    { 
      name: "Caring", 
      description: "Putting patients' needs at the center of everything we do, with genuine concern for their wellbeing and success.",
      icon: "🤲"
    },
    { 
      name: "Concept", 
      description: "Innovating with purpose and vision, developing groundbreaking ideas to transform healthcare for the future.",
      icon: "💡"
    }
  ];

  // Auto-rotate through values
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % coreValues.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [coreValues.length]);

  return (
    <div className="values-container fade-in">
      <div className="values-heading">
        <h2>Our Core Values — The 5Cs</h2>
        <p>These five principles guide our daily operations and long-term vision, ensuring we deliver exceptional healthcare solutions with integrity and purpose.</p>
      </div>
      
      <div className="values-interactive">
        <div className="values-sidebar">
          <div className="values-emblem">
            <span className="values-number">5</span>
            <span className="values-letter">C</span>
          </div>
          
          <div className="values-nav">
            {coreValues.map((value, index) => (
              <div 
                key={index} 
                className={`value-nav-item ${index === activeValue ? 'active' : ''}`}
                onClick={() => setActiveValue(index)}
              >
                <div className="value-nav-icon">{value.icon}</div>
                <div className="value-nav-name">{value.name}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="values-content">
          <div className="value-detail">
            <div className="value-detail-icon">{coreValues[activeValue].icon}</div>
            <h3 className="value-detail-title">{coreValues[activeValue].name}</h3>
            <p className="value-detail-description">{coreValues[activeValue].description}</p>
          </div>
          
          <div className="values-indicators">
            {coreValues.map((_, index) => (
              <div 
                key={index}
                className={`value-indicator ${index === activeValue ? 'active' : ''}`}
                onClick={() => setActiveValue(index)}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="values-mobile">
        {coreValues.map((value, index) => (
          <div key={index} className="value-card">
            <div className="value-icon">{value.icon}</div>
            <h3 className="value-title">{value.name}</h3>
            <p className="value-description">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FiveC;