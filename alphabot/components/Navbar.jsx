"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <img src="/assets/Logo/alphabotslogo.png" alt="Logo" className="h-16 w-20" />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-gray-700 dark:text-white">
          <li className="hover:text-blue-500 cursor-pointer">Home</li>
          <li className="hover:text-blue-500 cursor-pointer">About</li>
          <li className="hover:text-blue-500 cursor-pointer">Products</li>
          <li className="hover:text-blue-500 cursor-pointer">Blogs</li>
          <li className="hover:text-blue-500 cursor-pointer">Contacts</li>
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex space-x-4">
          <Button variant="outline">Login</Button>
          <Button>Sign Up</Button>
          <ModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
        <ModeToggle/>
        <button className="md:hidden flex items-center gap-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6 text-gray-700 dark:text-white" /> : <Menu className="w-6 h-6 text-gray-700 dark:text-white" />}
        </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-white dark:bg-gray-900 py-4 space-y-4 text-gray-700 dark:text-white">
          <li className="hover:text-blue-500 cursor-pointer">Home</li>
          <li className="hover:text-blue-500 cursor-pointer">About</li>
          <li className="hover:text-blue-500 cursor-pointer">Products</li>
          <li className="hover:text-blue-500 cursor-pointer">Blogs</li>
          <li className="hover:text-blue-500 cursor-pointer">Contacts</li>
          <div className="flex space-x-4">
            <Button variant="outline">Login</Button>
            <Button>Sign Up</Button>
          </div>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
