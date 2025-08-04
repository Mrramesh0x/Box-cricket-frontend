"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(form); // Replace with API later
    alert("Message sent!");
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <section className="contact-section">
      <h2>Contact Us</h2>

      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>Our Location</h3>
          <p>📍 Near MDKV INTER COLLEAGE, Najibabad</p>
          <p>📞 +91 98765 43210</p>
          <p>🕒 Open daily: 6 AM – 11 PM</p>
        </div>
      </div>
    </section>
  );
}
