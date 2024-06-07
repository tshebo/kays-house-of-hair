import React, { useState } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { RiArrowUpCircleFill } from "@remixicon/react";
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false);
  // const location = useLocation();

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  window.addEventListener("scroll", toggleVisibility);

  return (
    <div>
      <Router>
        <Header />
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="products">
          <Products />
        </section>
        <section id="contact">
          <Contact />
          {isVisible && (
          <div onClick={scrollToTop} className="back-to-top-btn">
            <RiArrowUpCircleFill color="#ce4c7a"/>
          </div>
        )}
        </section>
        <Footer />
        
      </Router>
    </div>
  );
}

export default App;
