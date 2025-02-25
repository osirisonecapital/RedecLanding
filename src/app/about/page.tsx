"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-redec-dark to-black text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="heading-1 mb-6">About REDEC</h1>
              <p className="text-xl text-gray-300">
                Building a trustful company where quality is delivered by motivated professionals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-2 mb-6">Our Background</h2>
              <p className="text-gray-600 mb-4">
                REDEC was established in 2016 as a partner of Royal IHC, providing specialized electrical engineering services for maritime and naval projects. Over the years, we have evolved from IHC to REDEC, developing our unique identity while maintaining our commitment to excellence.
              </p>
              <p className="text-gray-600 mb-4">
                Today, we stand as a reliable electrical engineering partner for a diverse range of clients in the maritime industry, from dredging vessels to luxury yachts.
              </p>
              <p className="text-gray-600 mb-4">
                Our team comprises experienced engineers with deep expertise in power engineering, installation engineering, and outfitting engineering, allowing us to deliver comprehensive solutions for complex projects.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl"
            >
              <Image 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                alt="REDEC Team"
                fill
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="heading-2 mb-4">Our Vision & Mission</h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-100"
              >
                <div className="text-redec-blue mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                <p className="text-gray-600">
                  To build a trustful company where quality is delivered by motivated professionals. We strive to create electrical engineering solutions that exceed expectations while fostering a positive work environment that encourages innovation and excellence.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-100"
              >
                <div className="text-redec-blue mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading provider of flexible, tailored project services in electrical engineering for the maritime industry. We aim to combine innovative approaches with technical excellence, becoming the partner of choice for naval and maritime projects worldwide.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team & Structure */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">Our Team & Structure</h2>
            <p className="text-gray-600 text-lg">
              At REDEC, we maintain a flat organizational structure with experienced engineers,
              creating an environment that fosters collaboration, innovation, and quality.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-redec-yellow mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Power Engineering</h3>
              <p className="text-gray-600 mb-4">
                Our Power Engineering department specializes in designing low-voltage panels, switchboards, and performing system calculations. The team ensures efficient power distribution and management for all maritime applications.
              </p>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li className="flex items-start">
                  <div className="text-redec-blue mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Low-voltage system design</span>
                </li>
                <li className="flex items-start">
                  <div className="text-redec-blue mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Switchboard configurations</span>
                </li>
                <li className="flex items-start">
                  <div className="text-redec-blue mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Power management systems</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-redec-blue mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Installation Engineering</h3>
              <p className="text-gray-600 mb-4">
                The Installation Engineering team integrates ship systems including cooling, HVAC, and navigation lights with detailed technical documentation to ensure seamless operation of all vessel systems.
              </p>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li className="flex items-start">
                  <div className="text-redec-blue mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Comprehensive equipment lists</span>
                </li>
                <li className="flex items-start">
                  <div className="text-redec-blue mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>I/O signal lists</span>
                </li>
                <li className="flex items-start">
                  <div className="text-redec-blue mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Detailed cable routing</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-redec-red mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Outfitting Engineering</h3>
              <p className="text-gray-600 mb-4">
                Our Outfitting Engineering department delivers advanced 3D modeling, routing, and planning for electrical ship components, ensuring optimal space utilization and system integration.
              </p>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li className="flex items-start">
                  <div className="text-redec-blue mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Advanced 3D modeling</span>
                </li>
                <li className="flex items-start">
                  <div className="text-redec-blue mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Efficient cable management</span>
                </li>
                <li className="flex items-start">
                  <div className="text-redec-blue mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Optimal routing planning</span>
                </li>
              </ul>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-100"
          >
            <h3 className="text-xl font-semibold mb-4">Our Engineering Process</h3>
            <p className="text-gray-600 mb-6">
              REDEC provides end-to-end capabilities, covering all aspects of electrical engineering for maritime projects:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gray-50 p-4 rounded-md">
                <div className="text-redec-yellow text-lg font-bold mb-2">01</div>
                <h4 className="font-semibold mb-2">Basic Engineering</h4>
                <p className="text-gray-600 text-sm">Conceptual design and system architecture planning.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md">
                <div className="text-redec-blue text-lg font-bold mb-2">02</div>
                <h4 className="font-semibold mb-2">Detailed Engineering</h4>
                <p className="text-gray-600 text-sm">Comprehensive design with PLC cabinets and specific system requirements.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md">
                <div className="text-redec-red text-lg font-bold mb-2">03</div>
                <h4 className="font-semibold mb-2">Production Drawings</h4>
                <p className="text-gray-600 text-sm">Precise technical documentation for implementation.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md">
                <div className="text-redec-dark text-lg font-bold mb-2">04</div>
                <h4 className="font-semibold mb-2">As-Built Drawings</h4>
                <p className="text-gray-600 text-sm">Final documentation reflecting the actual implementation for future reference.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Software & Tools */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">Software & Tools</h2>
            <p className="text-gray-600 text-lg">
              We utilize industry-standard software to ensure precision, quality, and compatibility in all our projects.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow text-center"
            >
              <div className="inline-block p-4 rounded-full bg-gray-50 mb-4">
                <div className="text-redec-blue text-2xl font-bold">EPLAN</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Electrical Design</h3>
              <p className="text-gray-600">
                We use EPLAN for comprehensive electrical design, ensuring detailed circuit diagrams and system specifications.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow text-center"
            >
              <div className="inline-block p-4 rounded-full bg-gray-50 mb-4">
                <div className="text-redec-blue text-2xl font-bold">CADMATIC</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">3D Modeling</h3>
              <p className="text-gray-600">
                CADMATIC enables us to create precise 3D models for optimal space utilization and system integration.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow text-center"
            >
              <div className="inline-block p-4 rounded-full bg-gray-50 mb-4">
                <div className="text-redec-blue text-2xl font-bold">CMPIC</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Cable Management</h3>
              <p className="text-gray-600">
                CMPIC allows for efficient cable management, ensuring optimal routing and documentation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="section-padding bg-redec-blue text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <h2 className="heading-2 mb-6">Ready to Work With Us?</h2>
              <p className="text-lg opacity-90 mb-8">
                Our experienced team is ready to assist with your naval and maritime electrical engineering needs.
                Contact us today to discuss your project requirements.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-white text-redec-blue hover:bg-gray-100 font-medium py-3 px-6 rounded-md transition-all duration-300">
                  Contact Us
                </Link>
                <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-6 rounded-md transition-all duration-300">
                  Explore Our Services
                </Link>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">European Quality at Competitive Costs</h3>
                <p className="text-white/80 mb-4">
                  We combine European engineering standards with competitive pricing to deliver exceptional value.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="text-redec-yellow mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Tailored solutions for your specific needs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-redec-yellow mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Flexible approach to project timelines</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-redec-yellow mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Experienced team with industry knowledge</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 