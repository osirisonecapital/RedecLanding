"use client";

import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ProjectShowcase from '@/components/ProjectShowcase';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      
      {/* About Section */}
      <section className="section-padding bg-white" id="about">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl"
            >
              <Image 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                alt="REDEC Team"
                fill
                className="object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="heading-2 mb-6">Your Reliable Electrical Engineering Partner Since 2016</h2>
              <p className="text-gray-600 mb-4">
                Established in 2016 as a partner of Royal IHC, REDEC has evolved into a leading provider of 
                electrical engineering solutions for naval and maritime projects.
              </p>
              <p className="text-gray-600 mb-6">
                Our mission is to build a trustful company where quality is delivered by motivated professionals.
                We believe in providing flexible, tailored project services that meet the unique needs of our clients.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <div className="text-redec-blue mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Flat organizational structure with experienced engineers</p>
                </div>
                <div className="flex items-start">
                  <div className="text-redec-blue mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">European-standard quality at competitive costs</p>
                </div>
                <div className="flex items-start">
                  <div className="text-redec-blue mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">End-to-end capabilities from Basic to As-Built Engineering</p>
                </div>
                <div className="flex items-start">
                  <div className="text-redec-blue mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Advanced technical expertise across maritime sectors</p>
                </div>
              </div>
              
              <Link href="/about" className="btn-primary">
                Learn More About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Services />
      <ProjectShowcase />
      
      {/* Markets Section */}
      <section className="section-padding bg-gray-50" id="markets">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading-2 mb-4">Markets We Serve</h2>
              <p className="text-gray-600 text-lg">
                We provide specialized electrical engineering services tailored to the unique needs of diverse maritime sectors.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 w-full">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <div className="absolute top-4 left-4 z-20 bg-redec-yellow text-white text-xs font-medium px-3 py-1 rounded-full">
                  Dredging
                </div>
                <Image 
                  src="https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&q=80&w=1000"
                  alt="Dredging Project" 
                  fill
                  priority
                  unoptimized
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Dredging Vessels</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive electrical engineering for trailing suction hopper dredgers and cutter suction dredgers,
                  including power distribution, automation, and control systems.
                </p>
                <Link href="/markets#dredging" className="text-redec-blue font-medium hover:underline flex items-center">
                  Explore Dredging Projects
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 w-full">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <div className="absolute top-4 left-4 z-20 bg-redec-blue text-white text-xs font-medium px-3 py-1 rounded-full">
                  Offshore
                </div>
                <Image 
                  src="https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&q=80&w=1000"
                  alt="Offshore Project" 
                  fill
                  priority
                  unoptimized
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Offshore Vessels</h3>
                <p className="text-gray-600 mb-4">
                  Electrical systems design for advanced pipelaying vessels, offshore construction vessels,
                  and specialized offshore equipment with dynamic positioning capabilities.
                </p>
                <Link href="/markets#offshore" className="text-redec-blue font-medium hover:underline flex items-center">
                  Explore Offshore Projects
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 w-full">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <div className="absolute top-4 left-4 z-20 bg-redec-red text-white text-xs font-medium px-3 py-1 rounded-full">
                  Yachts
                </div>
                <Image 
                  src="https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&q=80&w=1000"
                  alt="Yacht Project" 
                  fill
                  priority
                  unoptimized
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Luxury Yachts</h3>
                <p className="text-gray-600 mb-4">
                  State-of-the-art electrical systems and automation for luxury yachts ranging from 80 to 100+ meters,
                  with premium entertainment, security, and navigation systems.
                </p>
                <Link href="/markets#yachts" className="text-redec-blue font-medium hover:underline flex items-center">
                  Explore Yacht Projects
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 w-full">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <div className="absolute top-4 left-4 z-20 bg-redec-dark text-white text-xs font-medium px-3 py-1 rounded-full">
                  Cranes
                </div>
                <Image 
                  src="https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&q=80&w=1000"
                  alt="Crane Project" 
                  fill
                  priority
                  unoptimized
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Maritime Cranes</h3>
                <p className="text-gray-600 mb-4">
                  Advanced electrical control systems for high-capacity ship-to-shore cranes and specialized
                  maritime lifting equipment with precision operations.
                </p>
                <Link href="/markets#cranes" className="text-redec-blue font-medium hover:underline flex items-center">
                  Explore Crane Projects
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="section-padding bg-redec-blue text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">Ready to Start Your Project?</h2>
              <p className="text-lg opacity-90 mb-8">
                Our team of experienced engineers is ready to help you bring your naval and maritime projects to life.
                Contact us today to discuss your specific requirements.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-white text-redec-blue hover:bg-gray-100 font-medium py-3 px-6 rounded-md transition-all duration-300">
                  Contact Us
                </Link>
                <Link href="/portfolio" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-6 rounded-md transition-all duration-300">
                  View Our Work
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="text-redec-yellow mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-white/80">+40 123 456 789</p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="text-redec-yellow mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-white/80">info@redec.com</p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="text-redec-yellow mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-white/80">71, Nicolae G. Caramfil Street, District 1, Bucharest</p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="text-redec-yellow mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
                <p className="text-white/80">Monday - Friday: 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
