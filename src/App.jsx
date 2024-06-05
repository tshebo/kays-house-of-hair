import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
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
        </section>
        <Footer />
      
        {/* ======================Routes========================= */}
        <Routes>
          <Route></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
