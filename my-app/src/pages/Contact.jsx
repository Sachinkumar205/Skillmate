import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact Form Submitted:', formData);
    alert('Thank you for your message! We will get back to you shortly.');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    // In a real application, you would send this data to your backend API
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background-50 to-background-DEFAULT p-8 flex items-center justify-center">
      <div className="max-w-xl w-full bg-white p-8 rounded-xl shadow-xl">
        <h1 className="text-section-heading font-poppins font-bold text-gray-800 text-center mb-8">
          Contact Us
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 text-lg font-semibold mb-2 font-inter">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary font-inter"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 text-lg font-semibold mb-2 font-inter">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary font-inter"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 text-lg font-semibold mb-2 font-inter">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary font-inter resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-primary hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out font-inter"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

