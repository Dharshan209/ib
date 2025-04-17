import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import Products from "./Components/Product/product";
import Team from "./Components/Team/Team";
import AboutUs from "./Components/Aboutus/AboutUs";
import Home from "./Components/Home/Home";
import Gallery from "./Components/Gallery/Gallery";
import Chatbot from "./Components/ChatBot/ChatBot";

function App() {
  return (
    <div>
      <Header />
      <section id="home">
        <Home />
        <Chatbot/>
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="product">
        <Products />
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;