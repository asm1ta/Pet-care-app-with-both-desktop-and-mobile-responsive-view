import React from "react";

export default function Blog() {
  const blogImages = [1, 2];
  return (
    <section className="blog">
      <h2>From Our Blog</h2>
      <p>
        Welcome to the PetCare Blog – your go-to source for all things pet-related!
        Whether you're a first-time pet parent or a seasoned pro, our blog is filled
        with helpful tips, expert advice, and heartwarming stories to guide you in
        providing the best care for your furry friends. From grooming tutorials and
        health checklists to training hacks and fun pet activities, we cover it all.
        Stay connected with the latest trends in pet wellness, nutrition insights,
        and seasonal care routines. Because every pet deserves a happy, healthy life.
      </p>
      <div className="blog-grid">
        {blogImages.map((num) => (
          <img
            key={num}
            src={`/images/blog/blog${num}.jpg`}
            alt={`blog${num}`}
          />
        ))}
      </div>
    </section>
  );
}
