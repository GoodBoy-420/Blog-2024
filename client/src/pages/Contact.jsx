import React, { useState } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const ContactForm = () => {
  const [input, setInput] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message Sent! Name: ${input.name}, Email: ${input.email}`);
    setInput({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <Menu />
      <form onSubmit={handleSubmit} style={{ padding: "20px", margin: "20px" }}>
        <div className="mb-3" style={{ marginBottom: "15px" }}>
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={input.name}
            onChange={handleChange}
            required
            style={{ padding: "10px" }}
          />
        </div>
        <div className="mb-3" style={{ marginBottom: "15px" }}>
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={input.email}
            onChange={handleChange}
            required
            style={{ padding: "10px" }}
          />
        </div>
        <div className="mb-3" style={{ marginBottom: "15px" }}>
          <label className="form-label">Message</label>
          <textarea
            name="message"
            className="form-control"
            rows="3"
            value={input.message}
            onChange={handleChange}
            required
            style={{ padding: "10px" }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ padding: "10px 20px", marginTop: "15px" }}
        >
          Submit
        </button>
      </form>

      <Footer />
    </div>
  );
};

export default ContactForm;
