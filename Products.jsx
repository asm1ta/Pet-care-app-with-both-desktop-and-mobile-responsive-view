import React from "react";

export default function Products() {
  const productImages = [1, 2];
  return (
    <section className="products">
      <h2>Products</h2>
      <div className="product-grid">
        {productImages.map((num) => (
          <img
            key={num}
            src={`/images/products/product${num}.jpg`}
            alt={`product${num}`}
          />
        ))}
      </div>
    </section>
  );
}