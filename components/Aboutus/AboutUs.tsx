"use client";
import React from "react";
import FiveC from "./5c";

const AboutUs = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-black text-primary mb-4 uppercase tracking-tighter">About Us</h1>
          <div className="w-24 h-2 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        {/* Story Section */}
        <section className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="lg:w-2/3 space-y-8">
            <div>
              <h2 className="text-3xl font-extrabold text-primary mb-6 flex items-center gap-3">
                <span className="w-10 h-1 bg-secondary rounded-full"></span>
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Indian Biologicals PVT Ltd, established in 2011, is a dynamic, purpose-driven healthcare organisation 
                  delivering high-quality medicines in Women&apos;s Health, Infertility, and Wellness. IB is vertically 
                  integrated with development, manufacturing, and marketing capabilities across India.
                </p>
                <p>
                  We are associated with Altoven, a leading emerging manufacturing plant with over 35 years of pharmaceutical 
                  expertise in APIs, biosimilars, branded generics, and more.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500"></div>
              <div className="relative w-48 h-48 bg-primary text-white rounded-full flex flex-col items-center justify-center border-8 border-white shadow-2xl z-10">
                <div className="text-5xl font-black">2011</div>
                <div className="text-sm font-bold uppercase tracking-widest text-slate-300">Established</div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
          <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 hover:shadow-xl transition-all duration-500 group">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
              🎯
            </div>
            <h3 className="text-2xl font-black text-primary mb-6">Our Mission</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              To improve the lives and health of all women & couples to achieve their dreams of parenthood by 
              offering high-quality Products through healthcare Professionals — from conventional therapy to 
              state-of-the-art technologies.
            </p>
          </div>
          
          <div className="p-10 bg-primary rounded-[3rem] text-white hover:shadow-2xl transition-all duration-500 scale-105 md:scale-100 lg:scale-105 z-10">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-3xl mb-8 backdrop-blur-md">
              🔭
            </div>
            <h3 className="text-2xl font-black mb-6">Our Vision</h3>
            <p className="text-slate-200 text-lg leading-relaxed">
              We strive to be the leaders in Infertility, Women&apos;s Health, and Wellness in the local and 
              global communities through excellence.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-10">
          <FiveC />
        </section>
      </div>
    </div>
  );
};

export default AboutUs;