"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container-custom flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-12 w-56">
            <Image 
              src="/images/LogoRedec.png" 
              alt="REDEC Logo" 
              fill
              style={{ objectFit: 'contain' }}
              priority
              unoptimized
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-800 hover:text-redec-blue font-medium transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-gray-800 hover:text-redec-blue font-medium transition-colors">
            About Us
          </Link>
          <Link href="/services" className="text-gray-800 hover:text-redec-blue font-medium transition-colors">
            Services
          </Link>
          <Link href="/portfolio" className="text-gray-800 hover:text-redec-blue font-medium transition-colors">
            Portfolio
          </Link>
          <Link href="/markets" className="text-gray-800 hover:text-redec-blue font-medium transition-colors">
            Markets
          </Link>
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden"
          >
            <div className="container-custom py-4 flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-800 hover:text-redec-blue font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-gray-800 hover:text-redec-blue font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/services" 
                className="text-gray-800 hover:text-redec-blue font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/portfolio" 
                className="text-gray-800 hover:text-redec-blue font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link 
                href="/markets" 
                className="text-gray-800 hover:text-redec-blue font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Markets
              </Link>
              <Link 
                href="/contact" 
                className="btn-primary text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header; 