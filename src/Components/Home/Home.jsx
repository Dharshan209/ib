import React from 'react';
import './Home.css';
import doctorBg from '/doctor-home.svg';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${doctorBg})` }}>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <div className="section-header">
            <h2>About Indian Biologicals</h2>
            <div className="underline"></div>
            <p className="section-intro">
              Established in 2011, Indian Biologicals is committed to delivering high-quality
              solutions for women's health, infertility, and life sciences.
            </p>
          </div>

          <div className="info-cards">
            <div className="card">
              <div className="card-icon">
                <i className="fas fa-calendar-check"></i>
              </div>
              <h3>13+ Years in Service</h3>
              <p>Over a decade of dedicated service to healthcare professionals and patients</p>
            </div>
            <div className="card">
              <div className="card-icon">
                <i className="fas fa-map-marked-alt"></i>
              </div>
              <h3>500+ Customers</h3>
              <p>Our products reach healthcare facilities across the entire country</p>
            </div>
            <div className="card">
              <div className="card-icon">
                <i className="fas fa-flask"></i>
              </div>
              <h3>35+ Years of Experience</h3>
              <p>Backed by decades of combined industry and scientific expertise</p>
            </div>
            <div className="card">
              <div className="card-icon">
                <i className="fas fa-user-md"></i>
              </div>
              <h3>Trusted by Doctors</h3>
              <p>Healthcare professionals across India rely on our quality products</p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Home;