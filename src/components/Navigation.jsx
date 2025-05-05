
import React from "react";

const Navigation = () => {
  return (
    <nav className="container mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary">Dharmik Packaging</h1>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-600 hover:text-primary transition-colors">Home</a>
          <a href="#about" className="text-gray-600 hover:text-primary transition-colors">About Us</a>
          <a href="#products" className="text-gray-600 hover:text-primary transition-colors">Products</a>
          <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
