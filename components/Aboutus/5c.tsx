"use client";
import React, { useState, useEffect } from "react";
import { 
  Building2, 
  Heart, 
  Award, 
  HandHeart, 
  Lightbulb 
} from 'lucide-react';

const FiveC = () => {
  const [activeValue, setActiveValue] = useState(0);
  
  const coreValues = [
    { 
      name: "Culture", 
      description: "Building an environment of excellence and innovation that fosters growth and achievement at every level of our organization.",
      icon: Building2
    },
    { 
      name: "Compassion", 
      description: "Treating everyone with dignity, care and respect, ensuring empathetic service in all our interactions.",
      icon: Heart
    },
    { 
      name: "Competency", 
      description: "Continuously improving our skills, knowledge and expertise to deliver the highest quality healthcare solutions.",
      icon: Award
    },
    { 
      name: "Caring", 
      description: "Putting patients' needs at the center of everything we do, with genuine concern for their wellbeing and success.",
      icon: HandHeart
    },
    { 
      name: "Concept", 
      description: "Innovating with purpose and vision, developing groundbreaking ideas to transform healthcare for the future.",
      icon: Lightbulb
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
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-black text-primary mb-4">Our Core Values — The 5Cs</h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
          These five principles guide our daily operations and long-term vision, ensuring we deliver exceptional healthcare solutions with integrity and purpose.
        </p>
      </div>
      
      {/* Desktop/Tablet Interactive View */}
      <div className="hidden md:flex bg-slate-50 rounded-[4rem] overflow-hidden border border-slate-100 shadow-sm min-h-[500px]">
        <div className="w-1/3 bg-primary p-12 flex flex-col justify-between">
          <div className="flex items-center gap-4 text-white mb-12">
            <div className="text-6xl font-black leading-none italic opacity-20">5</div>
            <div className="text-4xl font-black leading-none italic opacity-20">C</div>
          </div>
          
          <div className="flex flex-col gap-4">
            {coreValues.map((value, index) => (
              <button 
                key={index} 
                className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 text-left ${
                  index === activeValue 
                    ? 'bg-white text-primary shadow-xl scale-105' 
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
                onClick={() => setActiveValue(index)}
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <value.icon className="w-5 h-5" />
                </div>
                <div className="font-bold text-lg">{value.name}</div>
              </button>
            ))}
          </div>
        </div>
        
        <div className="w-2/3 p-16 flex flex-col justify-center relative">
          <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
            <div className="text-[12rem] font-black leading-none uppercase">{coreValues[activeValue].name[0]}</div>
          </div>

          <div key={activeValue} className="animate-fade-in space-y-8 relative z-10">
            <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-xl mb-6">
              {React.createElement(coreValues[activeValue].icon, { className: "w-12 h-12 text-primary" })}
            </div>
            <h3 className="text-4xl font-black text-primary">{coreValues[activeValue].name}</h3>
            <p className="text-2xl text-slate-600 leading-relaxed font-medium">
              &quot;{coreValues[activeValue].description}&quot;
            </p>
          </div>
          
          <div className="mt-12 flex gap-3">
            {coreValues.map((_, index) => (
              <div 
                key={index}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  index === activeValue ? 'w-12 bg-primary' : 'w-4 bg-slate-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Mobile View */}
      <div className="md:hidden space-y-6">
        {coreValues.map((value, index) => (
          <div key={index} className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm">
            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-4">
              <value.icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-black text-primary mb-3">{value.name}</h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              &quot;{value.description}&quot;
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FiveC;