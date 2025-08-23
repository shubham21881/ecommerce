// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#A084DC] text-white py-6 mt-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        
        {/* Logo / Brand */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">ShopEasy</h1>
          <p className="text-sm">Your favorite online store</p>
        </div>

        {/* Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Products</a>
          <a href="#" className="hover:underline">Cart</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>

        {/* Copyright */}
        <div className="text-sm">
          © {new Date().getFullYear()} ShopEasy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
