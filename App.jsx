import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Products from "./Products";
import About from "./About";
import Team from "./Team";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Products />
      <About />
      <Team />
      <Blog />
      <Contact /> 
      <Footer />
    </>
  );
}