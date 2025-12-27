"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Product {
  name: string;
  image: string;
}

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
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-black text-primary mb-4">Health & Wellness Products</h1>
          <div className="w-24 h-2 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Scientifically formulated solutions designed to support your journey towards optimal health and well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {isLoading ? (
            Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                <div className="aspect-square shimmer rounded-2xl mb-6"></div>
                <div className="h-6 shimmer w-3/4 rounded-md mx-auto"></div>
              </div>
            ))
          ) : (
            productData.map((product, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center"
              >
                <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-2xl bg-slate-50 flex items-center justify-center p-4">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    width={250}
                    height={250}
                    className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500"></div>
                </div>
                <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                  {product.name}
                </h3>
                <button className="mt-4 px-6 py-2 rounded-full border border-slate-200 text-sm font-bold text-slate-500 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 opacity-0 group-hover:opacity-100">
                  View Details
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;