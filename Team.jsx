import React from "react";

export default function Team() {
  const teamImages = [1, 2];
  return (
    <section className="team">
      <h2>Meet Our Vets</h2>
      <div className="team-grid">
        {teamImages.map((num) => (
          <img
            key={num}
            src={`/images/team/vet${num}.jpg`}
            alt={`vet${num}`}
          />
        ))}
      </div>
    </section>
  );
}