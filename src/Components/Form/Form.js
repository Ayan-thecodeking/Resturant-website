import React, { useState,useEffect } from 'react';
import './form.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      alert('Please fill in all fields');
      return;
    }

    console.log('Form submitted');

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };
  useEffect(()=> {
    AOS.init({duration:2000})
  },[]);
  return (
    <div className="form-con" data-aos="zoom-in">
      <h1>We'd love to hear from you!</h1>
      <p>
        Whether you have a question, feedback, or simply want to say hello, our team is here to assist you.
      </p>
      <form data-aos="zoom-in" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          placeholder="Message"
          rows="4"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Form;
