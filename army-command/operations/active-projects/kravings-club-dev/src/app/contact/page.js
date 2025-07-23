'use client';

import { useState } from 'react';
import { PhoneIcon, EnvelopeIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Layout from '@/components/layout/Layout';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Contact Kravings Club</h1>
            <p className="text-xl text-gray-300">Get in touch with our team</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <PhoneIcon className="h-6 w-6 text-red-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Phone</h3>
                    <p className="text-gray-300">+1 (213) 531-5291</p>
                    <p className="text-sm text-gray-400">Call us for immediate assistance</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <EnvelopeIcon className="h-6 w-6 text-red-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <p className="text-gray-300">info@kravings.club</p>
                    <p className="text-sm text-gray-400">Send us your questions anytime</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <ClockIcon className="h-6 w-6 text-red-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Business Hours</h3>
                    <p className="text-gray-300">10:00 AM - 10:00 PM</p>
                    <p className="text-sm text-gray-400">Daily, including weekends</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPinIcon className="h-6 w-6 text-red-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Service Areas</h3>
                    <p className="text-gray-300">Southern California</p>
                    <p className="text-sm text-gray-400">
                      Lynwood, South Gate, Downey, Long Beach, Los Angeles, 
                      South Bay, Torrance, Hawthorne, Inglewood
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-800 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/kravings_la"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-red-400 hover:text-red-300 transition duration-200"
                  >
                    <span>@kravings_la</span>
                  </a>
                </div>
              </div>

              <div className="mt-6 p-6 bg-gray-800 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">License Information</h3>
                <p className="text-gray-300">Kravings Club LLC</p>
                <p className="text-gray-300">License: C9-000555-LIC</p>
                <p className="text-sm text-gray-400 mt-2">
                  Licensed cannabis delivery service operating in compliance with California state regulations.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-400 transition duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-400 transition duration-200"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-400 transition duration-200"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="order">Order Support</option>
                    <option value="delivery">Delivery Question</option>
                    <option value="product">Product Information</option>
                    <option value="subscription">Subscription Service</option>
                    <option value="loyalty">Loyalty Program</option>
                    <option value="complaint">Complaint or Issue</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-400 transition duration-200 resize-vertical"
                    placeholder="Enter your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
                >
                  Send Message
                </button>
              </form>

              <div className="mt-8 p-4 bg-gray-800 rounded-lg">
                <p className="text-sm text-gray-400">
                  * Required fields. We typically respond within 24 hours during business hours.
                  For urgent delivery issues, please call us directly at (213) 531-5291.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}