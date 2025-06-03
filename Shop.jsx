function Shop() {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="border p-4">Dog Food</div>
        <div className="border p-4">Cat Food</div>
        <div className="border p-4">Pet Toys</div>
      </div>
    </section>
  );
}

export default Shop;