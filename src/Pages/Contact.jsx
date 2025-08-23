// src/pages/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <div className="w-full py-16 px-6 md:px-20 bg-gray-50">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Your Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#A084DC]"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#A084DC]"
                placeholder="johndoe@email.com"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#A084DC]"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <button className="w-full bg-[#A084DC] text-white py-3 rounded-lg font-semibold hover:bg-[#8c6cd4] transition">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Our Information</h2>
          <p className="mb-3 text-gray-700">
            Have any questions? Reach out to us and we’ll get back to you as
            soon as possible.
          </p>
          <div className="space-y-3 text-gray-700">
            <p>
              <span className="font-semibold">📍 Address:</span> 123 Market
              Street, Lucknow, India
            </p>
            <p>
              <span className="font-semibold">📞 Phone:</span> +91 98765 43210
            </p>
            <p>
              <span className="font-semibold">✉️ Email:</span>{" "}
              support@shopeasy.com
            </p>
          </div>

          {/* Map Embed (optional) */}
          <div className="mt-6">
            <iframe
              title="ShopEasy Location"
              className="w-full h-48 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.116708992975!2d80.9426972150449!3d26.8466933831547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd33b96aabbf%3A0xd5c4d56c7d7a5dcb!2sLucknow!5e0!3m2!1sen!2sin!4v1619344979829!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
