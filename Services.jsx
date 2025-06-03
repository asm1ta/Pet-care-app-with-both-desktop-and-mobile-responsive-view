import React from "react";

export default function Services() {
  const services = ["grooming", "boarding", "vet"];
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="service-grid">
        {services.map((item) => (
          <div key={item} className="service-card">
            <img src={`/images/services/${item}.jpg`} alt={item} />
            <h3>{item.charAt(0).toUpperCase() + item.slice(1)}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}