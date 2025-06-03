function AdoptForm() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Adoption Form</h2>
      <form className="grid gap-4">
        <input type="text" placeholder="Full Name" className="border p-2 rounded" required />
        <input type="email" placeholder="Email" className="border p-2 rounded" required />
        <textarea placeholder="Why do you want to adopt?" className="border p-2 rounded" rows={4} />
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Submit</button>
      </form>
    </div>
  );
}
export default AdoptForm;
