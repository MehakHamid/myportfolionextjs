"use client"
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .send(
        'service_m63nitd',         // Replace with your EmailJS Service ID
        'template_485udmr',         // Replace with your EmailJS Template ID
        formData,
        '8Rh1NjDZBC5ZgppVa'              // Replace with your EmailJS User ID
      )
      .then((result) => {
        setIsSent(true);
        setError('');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        setError('Failed to send message. Please try again later.');
      });
  };

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Me</h1>
      <div className="flex flex-col md:flex-row justify-center items-start gap-10">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/2">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Send Message
          </button>
          {isSent && <p className="text-green-500 mt-4">Message sent successfully!</p>}
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </form>

        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Get In Touch</h2>
          <p className="text-gray-700">
            If you have any questions, or if you’d like to work together, feel free to reach out. I’ll get back to you as soon as possible!
          </p>
          <div>
            <p className="font-bold text-gray-800">Email:</p>
            <p className="text-gray-700">mehakhamid81@gmail.com</p>
          </div>
          <div>
            <p className="font-bold text-gray-800">Phone:</p>
            <p className="text-gray-700">92-330-3479525</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
