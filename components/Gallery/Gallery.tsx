"use client";
import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';

const Gallery = () => {
  const images = useMemo<string[]>(() => ['/Gallery/1.svg', '/Gallery/2.svg', '/Gallery/3.svg'], []);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-black text-primary mb-4">Our Journey in Frames</h1>
          <div className="w-24 h-2 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Snapshots from our impactful work and milestones</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="aspect-[4/3] bg-slate-100 rounded-[2.5rem] shimmer"></div>
            ))
          ) : (
            images.map((src, index) => (
              <div 
                key={index}
                className="group relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 bg-slate-50"
              >
                <Image 
                  src={src} 
                  alt={`Gallery image ${index + 1}`} 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Modern Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                  <div className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-4 py-1 bg-secondary text-white text-xs font-black uppercase tracking-widest rounded-full mb-3">
                      Milestones
                    </span>
                    <h3 className="text-2xl font-black text-white">Event {index + 1}</h3>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;