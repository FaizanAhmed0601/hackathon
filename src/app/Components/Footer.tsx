"use client";
import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed with email: ${email}`);
  };

  return (
    <footer className="bg-[#262553] text-white py-3 px-3">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8"> {/* Updated grid-cols to 5 */}
        {/* Menu */}
        <div>
          <h3 className="font-light text-sm mb-4">Menu</h3>
          <ul>
            <li><a href="#" className="text-sm font-light hover:text-gray-400">Home</a></li>
            <li><a href="/shop" className="text-sm font-light hover:text-gray-400">Shop</a></li>
            <li><a href="/contact" className="text-sm font-light hover:text-gray-400">Contact</a></li>
            <li><a href="/faq" className="text-sm font-light hover:text-gray-400">FAQ</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-light text-sm mb-4">Categories</h3>
          <ul>
            <li><a href="/category/plant-pots" className="text-sm font-light hover:text-gray-400">Plant Pots</a></li>
            <li><a href="/category/ceramics" className="text-sm font-light hover:text-gray-400">Ceramics</a></li>
            <li><a href="/category/tables" className="text-sm font-light hover:text-gray-400">Tables</a></li>
            <li><a href="/category/chairs" className="text-sm font-light hover:text-gray-400">Chairs</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-light text-sm mb-4">Company</h3>
          <ul>
            <li><a href="/about" className="text-sm font-light hover:text-gray-400">About Us</a></li>
            <li><a href="/careers" className="text-sm font-light hover:text-gray-400">Careers</a></li>
            <li><a href="/privacy-policy" className="text-sm font-light hover:text-gray-400">Privacy Policy</a></li>
            <li><a href="/terms" className="text-sm font-light hover:text-gray-400">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* About Section */}
        <div>
          <h3 className="font-light text-sm mb-4">About</h3>
          <p className="text-sm font-light">
            We are a company committed to providing high-quality products to our customers. Our mission is to create an exceptional shopping experience through innovative designs and excellent customer service.
          </p>
        </div>

        {/* Join Our Mailing List */}
        <div>
          <h3 className="font-light text-lg mb-4 text-white">Join Our Mailing List</h3>
          <form onSubmit={handleSubmit} className="flex">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="xyz123@gmail.com"
              className="w-[700px] p-3 bg-[#4E4D93] text-[#333333] border border-[#4E4D93] focus:outline-none focus:border-[#6200ea]"
            />
            <button
              type="submit"
              className="p-3 bg-white text-[#4E4D93] border border-[#4E4D93] hover:bg-[#3700b3]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="text-center mt-12 text-sm">
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
