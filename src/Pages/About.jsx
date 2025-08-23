// src/pages/About.jsx
import React from "react";

const About = () => {
  return (
    <div className="w-full py-16 px-6 md:px-20 bg-gray-50">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        About Us
      </h1>

      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section 1: Company Intro */}
        <section className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            Welcome to <span className="font-semibold text-[#A084DC]">ShopEasy</span>,
            your trusted online shopping destination. We started with a simple
            mission — to make online shopping easy, reliable, and affordable for
            everyone. From fashion to electronics, we bring you the latest
            products at the best prices.
          </p>
        </section>

        {/* Section 2: Mission */}
        <section className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            At <span className="font-semibold">ShopEasy</span>, our mission is to
            deliver high-quality products with exceptional customer service. We
            believe shopping should be simple, enjoyable, and accessible to
            everyone — no matter where you are.
          </p>
        </section>

        {/* Section 3: Values */}
        <section className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Our Core Values</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <span className="font-semibold">Customer First:</span> Your
              satisfaction is our priority.
            </li>
            <li>
              <span className="font-semibold">Quality Products:</span> We only
              provide products we’d use ourselves.
            </li>
            <li>
              <span className="font-semibold">Trust & Transparency:</span> Honest
              pricing and reliable service.
            </li>
            <li>
              <span className="font-semibold">Innovation:</span> Continuously
              improving your shopping experience.
            </li>
          </ul>
        </section>

        {/* Section 4: Team */}
        <section className="bg-white p-6 rounded-xl shadow-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
          <p className="text-gray-700 mb-6">
            We are a passionate group of developers, designers, and dreamers
            working together to make online shopping better for you.
          </p>

          {/* Example Team Members */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="font-semibold">John Doe</h3>
              <p className="text-sm text-gray-600">Founder & CEO</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="font-semibold">Jane Smith</h3>
              <p className="text-sm text-gray-600">Head of Marketing</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="font-semibold">Mike Johnson</h3>
              <p className="text-sm text-gray-600">Lead Developer</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
