import React, { useState } from "react";
import './AboutUs.css';
import FiveC from "./5c";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="page-header">
        <h1>About Us</h1>
        <div className="header-decoration"></div>
      </div>

      <section className="about-section overview">
        <div className="section-content">
          <h2>Our Story</h2>
          <p>
            Indian Biologicals PVT Ltd, established in 2011, is a dynamic, purpose-driven healthcare organisation 
            delivering high-quality medicines in Women's Health, Infertility, and Wellness. IB is vertically 
            integrated with development, manufacturing, and marketing capabilities across India.
          </p>
          <p>
            We are associated with Altoven, a leading emerging manufacturing plant with over 35 years of pharmaceutical 
            expertise in APIs, biosimilars, branded generics, and more.
          </p>
        </div>
        <div className="founded-badge">
          <div className="year">2011</div>
          <div className="text">Est.</div>
        </div>
      </section>

      <section className="about-section mission-vision">
        <div className="mission-vision-container">
          <div className="mission-box">
            <div className="icon-container">
              <div className="icon">🎯</div>
            </div>
            <h3>Our Mission</h3>
            <p>
              To improve the lives and health of all women & couples to achieve their dreams of parenthood by 
              offering high-quality Products through healthcare Professionals — from conventional therapy to 
              state-of-the-art technologies.
            </p>
          </div>
          
          <div className="vision-box">
            <div className="icon-container">
              <div className="icon">🔭</div>
            </div>
            <h3>Our Vision</h3>
            <p>
              We strive to be the leaders in Infertility, Women's Health, and Wellness in the local and 
              global communities through excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section core-values">
        <FiveC />
      </section>
    </div>
  );
};

export default AboutUs;