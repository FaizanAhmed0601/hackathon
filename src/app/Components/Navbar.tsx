/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from 'react';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import Link from "next/link";  // Correct import

const Navbar: React.FC = () => {
  // State to toggle the visibility of the cart
  const [isCartVisible, setCartVisible] = useState(false);

  // Function to toggle cart visibility
  const toggleCart = () => {
    setCartVisible(!isCartVisible);
  };

  return (
    <nav className="bg-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-black text-2xl font-light">
          <a href="#">Avion</a>
        </div>

        {/* Links and search bar */}
        <div className="flex items-center space-x-6">
          {/* Search Bar */}
          <div className="flex items-center px-1 py-1 rounded-md bg-gray-100">
            <FaSearch className="text-gray-500" />
          </div>

          {/* Links */}
          <a href="#" className="text-gray-400 border-gray-500 hover:text-black">Home</a>

          {/* About Link */}
          <Link href="/about" className="text-gray-400 border-gray-500 hover:text-black">About</Link>

          <a href="#" className="text-gray-400 border-gray-500 hover:text-black">Contact</a>

          {/* Icons */}
          <button className="text-gray-400 border-gray-500 hover:text-black">
            <FaUser />
          </button>

          {/* Cart Icon */}
          <button
            className="text-gray-400 border-gray-500 hover:text-black"
            onClick={toggleCart} // Toggle cart visibility on click
          >
            <FaShoppingCart />
          </button>
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="border-t border-gray-300 my-2"></div>

      {/* Product Categories */}
      <div className="max-w-7xl mx-auto flex justify-center space-x-10 py-2">
        <a href="#plant-pots" className="text-gray-400 hover:text-gray-500">Plant Pots</a>
        <a href="#ceramics" className="text-gray-400 hover:text-gray-500">Ceramics</a>
        <a href="#tables" className="text-gray-400 hover:text-gray-500">Tables</a>
        <a href="#chairs" className="text-gray-400 hover:text-gray-500">Chairs</a>
        <a href="#crockery" className="text-gray-400 hover:text-gray-500">Crockery</a>
        <a href="#tableware" className="text-gray-400 hover:text-gray-500">Tableware</a>
        <a href="#cutlery" className="text-gray-400 hover:text-gray-500">Cutlery</a>
      </div>

      {/* Conditional rendering of the cart */}
      {isCartVisible && (
        <div className="absolute top-16 right-4 p-4 bg-white shadow-lg border rounded-lg w-64">
          <h3 className="text-xl font-semibold">Your Cart</h3>
          <ul className="space-y-2 mt-4">
            <li>Item 1 - $10</li>
            <li>Item 2 - $15</li>
            <li>Item 3 - $20</li>
          </ul>
          <button className="mt-4 w-full bg-blue-500 text-white p-2 rounded-md">
            Checkout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
