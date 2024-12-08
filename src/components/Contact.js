import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [statusMessage, setStatusMessage] = useState('');

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .sendForm(
        'service_3ewqoen', // Replace with your EmailJS Service ID
        'template_wv4bzrf', // Replace with your EmailJS Template ID
        e.target,
        'RTTxtUpvQLBLU7L48'      // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatusMessage('Your message has been sent successfully! 😃');
          setFormData({
            name: '',
            email: '',
            message: ''
          });
        },
        (error) => {
          console.log(error.text);
          setStatusMessage('There was an error sending your message. Please try again. 🥹');
        }
      );
  };

  return (
    <section id="contact-section" className="contact-section">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>

      {statusMessage && <p>{statusMessage}</p>}
    </section>
  );
};


export default Contact;
