import React, { useState } from "react";
import { FaEnvelope, FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to a backend)
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
        We'd Love to Hear From You
      </h1>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-6">
            <label
              className="block text-gray-700 text-lg font-semibold mb-2"
              htmlFor="name"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label
              className="block text-gray-700 text-lg font-semibold mb-2"
              htmlFor="email"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label
              className="block text-gray-700 text-lg font-semibold mb-2"
              htmlFor="message"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="6"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white text-lg px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Floating Contact Icons */}
      <div className="fixed right-4 bottom-4 flex flex-col gap-4">
        {/* WhatsApp Icon */}
        <a
          href="https://wa.me/yourphonenumber" // Replace with your WhatsApp link
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white flex items-center justify-center w-8 h-8 md:w-14 md:h-14 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        >
          <FaWhatsapp className="text-xl md:text-2xl" />
        </a>

        {/* Messenger Icon */}
        <a
          href="https://m.me/muhammad.abdulmannan.2004" // Link to your Facebook Messenger
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white flex items-center justify-center w-8 h-8 md:w-14 md:h-14 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
        >
          <FaFacebookMessenger className="text-xl md:text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
