function ContactForm() {
  return (
    <form className="grid gap-4">
      <input type="text" placeholder="Name" className="border p-2 rounded" />
      <input type="email" placeholder="Email" className="border p-2 rounded" />
      <textarea placeholder="Message" className="border p-2 rounded"></textarea>
      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Send</button>
    </form>
  );
}

export default ContactForm;