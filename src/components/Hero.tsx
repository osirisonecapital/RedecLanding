"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&q=80&w=2000"
          alt="Naval Background"
          fill
          priority
          unoptimized
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>

      <div className="container-custom relative z-10 pt-32">
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="heading-1 mb-6">
              Your Reliable Electrical Engineering Partner for Naval & Maritime Projects.
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              At REDEC, we're committed to quality, innovation, and tailored service that meets the unique demands of maritime environments.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/portfolio" className="btn-primary">
                Discover Our Solutions
              </Link>
              <Link href="/contact" className="btn-secondary">
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 