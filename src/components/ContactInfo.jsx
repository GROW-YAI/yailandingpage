import React, { useState } from 'react';
import squigly from "../assets/icons/squigly.png";
import fish from "../assets/icons/fish.png";
import fish1 from "../assets/images/fish1.jpg";
import fbyt from "../assets/icons/fbyt.png"
import tkyt from "../assets/icons/tkyt.png"
import wayt from "../assets/icons/wayt.png"
import { Link } from 'react-router-dom';


const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <section
      id="contact"
      className="h-[100vh] lg:h-[90vh] flex flex-col lg:flex-row items-center justify-center bg-[#dbe7ff] w-full px-8 lg:px-16 py-8 bg-no-repeat bg-cover bg-center relative"
      style={{ backgroundImage: `url(${fish1})`, backgroundAttachment: "fixed" }}
    >
      <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.3)] w-full h-full inset-0"></div>
  
      <div className="z-10 w-full lg:w-1/2 text-white text-center lg:text-left">
        <h2 className="font-semibold text-xl lg:text-2xl">Contact Us</h2>
        {/* <div className="w-24 flex justify-center lg:justify-start my-2">
          <img src={squigly} alt="" className="w-8" />
          <img src={fish} alt="" className="w-6 mx-2" />
          <img src={squigly} alt="" className="w-8" />
        </div> */}
        <p className="mb-2">We'd love to hear from you! Reach out to us.</p>
        <div className="flex space-x-4 mt-4">
        <div className='h-full flex justify-between items-center mb-2'>
        <Link><img src={fbyt} alt="" /></Link>
        <Link><img src={tkyt} alt="" /></Link>
        <Link><img src={wayt} alt="" /></Link>
        </div>
        </div>
        <div className="space-y-4">
          <p className="flex items-center">
            📍 <span className="ml-2">Anaji, Takoradi</span>
          </p>
          <p className="flex items-center">
            📧 <span className="ml-2">kingsway@gmail.com</span>
          </p>
          <p className="flex items-center">
            📞 <span className="ml-2">+233 595 742 231</span>
          </p>
        </div>
        
      </div>
  
      <form
        className="z-10 bg-white p-6 rounded-lg shadow-xl max-w-lg w-full lg:w-1/2"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-left">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-left">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-left">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
          />
          {errors.subject && (
            <p className="text-red-500 text-sm">{errors.subject}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-left">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md h-24 focus:ring focus:ring-blue-300"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-[#ffe000] px-6 py-2 rounded-md flex items-center justify-center w-full cursor-pointer hover:border-2"
        >
          Send Message <i className="fas fa-paper-plane ml-2"></i>
        </button>
      </form>
    </section>
  );
  
};

export default ContactForm;
