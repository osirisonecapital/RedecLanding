import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-redec-dark to-black overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-redec-yellow blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 rounded-full bg-redec-blue blur-3xl"></div>
        <div className="absolute top-2/3 left-1/3 w-72 h-72 rounded-full bg-redec-red blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative border-4 border-gray-700 bg-gray-800/50 rounded-lg p-4 shadow-2xl">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-700/60 rounded p-2 aspect-square flex items-center justify-center">
                  <span className="text-redec-yellow text-5xl font-bold">D</span>
                </div>
                <div className="bg-gray-700/60 rounded p-2 aspect-square flex items-center justify-center">
                  <span className="text-redec-blue text-5xl font-bold">O</span>
                </div>
                <div className="bg-gray-700/60 rounded p-2 aspect-square flex items-center justify-center">
                  <span className="text-redec-red text-5xl font-bold">Y</span>
                </div>
                <div className="bg-gray-700/60 rounded p-2 aspect-square flex items-center justify-center">
                  <span className="text-white text-5xl font-bold">C</span>
                </div>
              </div>
              <div className="flex justify-between mt-3 text-sm text-gray-400">
                <span>Dredging</span>
                <span>Offshore</span>
                <span>Yachts</span>
                <span>Cranes</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pb-12 text-center text-white"
        >
          <div>
            <p className="text-3xl font-bold text-redec-yellow mb-2">500+</p>
            <p className="text-gray-400">Projects Completed</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-redec-blue mb-2">20+</p>
            <p className="text-gray-400">Years Experience</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-redec-red mb-2">50+</p>
            <p className="text-gray-400">Expert Engineers</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white mb-2">15+</p>
            <p className="text-gray-400">Countries Served</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 