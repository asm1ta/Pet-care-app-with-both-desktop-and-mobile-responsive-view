import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <img src="/images/hero/hero1.jpg" alt="Hero Banner" className="desktop" />

      <div className="hero-content">
        <h1>Pawsitively Perfect: <br />Where Every Pet's Dream Comes True!</h1>
        <p>
          Welcome to Paws n’ Play, the ultimate destination for pet lovers! Explore a world of
          tail-wagging joy and furry companionship with our wide range of products and services.
          From pampering essentials to playful toys, we’re here to make every moment with your pet
          pawsitively perfect!
        </p>
        <button className="hero-button">Shop Now 🐾</button>
      </div>
    </section>
  );
}
