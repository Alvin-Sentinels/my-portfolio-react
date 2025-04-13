import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert('Please fill in all fields!');
      return;
    }
    alert('Message sent! Thanks for reaching out 🙌');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" id="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
        <input type="email" id="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
        <textarea id="message" placeholder="Your Message" value={form.message} onChange={handleChange} required />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
