"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function MarketsPage() {
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
              <h1 className="heading-1 mb-6">Markets We Serve</h1>
              <p className="text-xl text-gray-300">
                Specialized electrical engineering solutions for diverse maritime sectors
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Markets Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">Our Specialized Maritime Expertise</h2>
            <p className="text-gray-600 text-lg">
              At REDEC, we understand that different maritime sectors have unique engineering challenges.
              Our specialized teams deliver tailored electrical solutions for each market segment.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 p-6 rounded-lg border-b-4 border-redec-yellow text-center"
            >
              <div className="text-redec-yellow text-2xl font-bold mb-2">D</div>
              <h3 className="font-semibold">Dredging</h3>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-50 p-6 rounded-lg border-b-4 border-redec-blue text-center"
            >
              <div className="text-redec-blue text-2xl font-bold mb-2">O</div>
              <h3 className="font-semibold">Offshore</h3>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 p-6 rounded-lg border-b-4 border-redec-red text-center"
            >
              <div className="text-redec-red text-2xl font-bold mb-2">Y</div>
              <h3 className="font-semibold">Yachts</h3>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-50 p-6 rounded-lg border-b-4 border-redec-dark text-center"
            >
              <div className="text-redec-dark text-2xl font-bold mb-2">C</div>
              <h3 className="font-semibold">Cranes</h3>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Dredging Market */}
      <section id="dredging" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-redec-yellow/20 text-redec-yellow font-semibold px-4 py-2 rounded-full mb-4">
                Dredging Vessels
              </div>
              <h2 className="heading-2 mb-6">Powering Maritime Excavation</h2>
              <p className="text-gray-600 mb-4">
                Dredging vessels require robust, reliable electrical systems to operate in challenging environments.
                Our solutions ensure continuous operation, precise control, and safety for these specialized vessels.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">Trailing Suction Hopper Dredgers</h3>
                  <p className="text-gray-600">
                    Comprehensive electrical systems for vessels that suck material from the seabed while sailing,
                    including dredge pump control, navigation systems, and power management.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">Cutter Suction Dredgers</h3>
                  <p className="text-gray-600">
                    Advanced control systems for stationary dredgers that use a rotating cutter head to loosen materials,
                    with integrated automation for optimal performance.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">Backhoe Dredgers</h3>
                  <p className="text-gray-600">
                    Electrical systems for hydraulic excavator-equipped vessels, featuring precise control interfaces
                    and robust power distribution for heavy-duty operations.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/portfolio#dredging" className="btn-primary">
                  View Dredging Projects
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Discuss Your Requirements
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] rounded-lg overflow-hidden shadow-xl"
            >
              <Image 
                src="https://images.unsplash.com/photo-1574871935918-4161576773ea?q=80&w=1000&auto=format&fit=crop"
                alt="Dredging Vessel"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <div className="text-white/80 text-sm mb-2">Featured Project</div>
                <h3 className="text-white text-xl font-semibold">Scheldt River - DEME</h3>
                <p className="text-white/80">Dual-fuel trailing suction hopper dredger</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Offshore Market */}
      <section id="offshore" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 relative h-[500px] rounded-lg overflow-hidden shadow-xl"
            >
              <Image 
                src="https://images.unsplash.com/photo-1525179024081-d462bc0bd9ea?q=80&w=1000&auto=format&fit=crop"
                alt="Offshore Vessel"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <div className="text-white/80 text-sm mb-2">Featured Project</div>
                <h3 className="text-white text-xl font-semibold">Amazon J-lay Vessel</h3>
                <p className="text-white/80">Advanced pipelaying vessel with dynamic positioning</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="inline-block bg-redec-blue/20 text-redec-blue font-semibold px-4 py-2 rounded-full mb-4">
                Offshore Vessels
              </div>
              <h2 className="heading-2 mb-6">Engineering for Ocean Operations</h2>
              <p className="text-gray-600 mb-4">
                Offshore vessels operate in some of the most challenging environments on earth. Our electrical
                engineering solutions ensure reliability, safety, and precision for these specialized vessels.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">Pipelaying Vessels</h3>
                  <p className="text-gray-600">
                    Advanced control systems for J-lay and S-lay vessels, with precise positioning systems and
                    integrated power management for continuous operations.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">Platform Supply Vessels</h3>
                  <p className="text-gray-600">
                    Comprehensive electrical systems for vessels supporting offshore platforms, including
                    dynamic positioning controls and cargo management systems.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">Construction Vessels</h3>
                  <p className="text-gray-600">
                    Integrated electrical solutions for vessels engaged in offshore construction, featuring
                    advanced automation and control systems for precision operations.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/portfolio#offshore" className="btn-primary">
                  View Offshore Projects
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Discuss Your Requirements
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Yacht Market */}
      <section id="yachts" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-redec-red/20 text-redec-red font-semibold px-4 py-2 rounded-full mb-4">
                Luxury Yachts
              </div>
              <h2 className="heading-2 mb-6">Elegance Meets Engineering Excellence</h2>
              <p className="text-gray-600 mb-4">
                Luxury yachts demand not only reliability but also sophisticated integration of entertainment,
                comfort, and control systems. Our solutions combine technical excellence with aesthetic integration.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">Entertainment Systems</h3>
                  <p className="text-gray-600">
                    State-of-the-art audio-visual systems with seamless integration and control, creating
                    immersive experiences throughout the vessel.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">Comfort & Climate Control</h3>
                  <p className="text-gray-600">
                    Advanced HVAC and lighting systems with intuitive controls, ensuring perfect comfort
                    and ambiance in all areas of the yacht.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">Navigation & Communication</h3>
                  <p className="text-gray-600">
                    Cutting-edge navigation and communication systems, seamlessly integrated with vessel controls
                    for safe and efficient operation in all conditions.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/portfolio#yachts" className="btn-primary">
                  View Yacht Projects
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Discuss Your Requirements
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] rounded-lg overflow-hidden shadow-xl"
            >
              <Image 
                src="https://images.unsplash.com/photo-1540946485063-a40da27545f8?q=80&w=1000&auto=format&fit=crop"
                alt="Luxury Yacht"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <div className="text-white/80 text-sm mb-2">Featured Project</div>
                <h3 className="text-white text-xl font-semibold">Yacht KVDA714</h3>
                <p className="text-white/80">80-meter luxury yacht with advanced systems</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Crane Market */}
      <section id="cranes" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 relative h-[500px] rounded-lg overflow-hidden shadow-xl"
            >
              <Image 
                src="https://images.unsplash.com/photo-1599076449287-aa0052d60be6?q=80&w=1000&auto=format&fit=crop"
                alt="Maritime Crane"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <div className="text-white/80 text-sm mb-2">Featured Project</div>
                <h3 className="text-white text-xl font-semibold">Siemens Ship-to-Shore</h3>
                <p className="text-white/80">High-capacity crane with advanced controls</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="inline-block bg-redec-dark/20 text-redec-dark font-semibold px-4 py-2 rounded-full mb-4">
                Maritime Cranes
              </div>
              <h2 className="heading-2 mb-6">Precision Control for Heavy Lifting</h2>
              <p className="text-gray-600 mb-4">
                Maritime cranes require precise control systems for safe and efficient operation. Our electrical
                engineering solutions ensure reliability, precision, and safety for these critical systems.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">Ship-to-Shore Cranes</h3>
                  <p className="text-gray-600">
                    Advanced control systems for port cranes, with precise positioning and load management
                    for efficient container handling.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">Vessel-Mounted Cranes</h3>
                  <p className="text-gray-600">
                    Integrated electrical systems for cranes mounted on vessels, with stability control
                    and safety features for maritime operations.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">Offshore Cranes</h3>
                  <p className="text-gray-600">
                    Specialized control systems for cranes operating in offshore environments, with advanced
                    features for wave compensation and precise positioning.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/portfolio#cranes" className="btn-primary">
                  View Crane Projects
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Discuss Your Requirements
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Clients & Partners */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">Our Clients & Partners</h2>
            <p className="text-gray-600 text-lg">
              We're proud to work with industry leaders across the maritime sector, delivering
              electrical engineering excellence for their most demanding projects.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center"
            >
              <div className="text-center">
                <div className="text-redec-blue font-semibold text-lg mb-1">Royal IHC</div>
                <p className="text-gray-500 text-sm">Dredging & Offshore</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center"
            >
              <div className="text-center">
                <div className="text-redec-blue font-semibold text-lg mb-1">DEME Group</div>
                <p className="text-gray-500 text-sm">Dredging & Environmental</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center"
            >
              <div className="text-center">
                <div className="text-redec-blue font-semibold text-lg mb-1">Feadship</div>
                <p className="text-gray-500 text-sm">Luxury Yachts</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center"
            >
              <div className="text-center">
                <div className="text-redec-blue font-semibold text-lg mb-1">Siemens Marine</div>
                <p className="text-gray-500 text-sm">Maritime Cranes</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center"
            >
              <div className="text-center">
                <div className="text-redec-blue font-semibold text-lg mb-1">Van Oord</div>
                <p className="text-gray-500 text-sm">Dredging & Offshore</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center"
            >
              <div className="text-center">
                <div className="text-redec-blue font-semibold text-lg mb-1">Oceanco</div>
                <p className="text-gray-500 text-sm">Luxury Yachts</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center"
            >
              <div className="text-center">
                <div className="text-redec-blue font-semibold text-lg mb-1">Allseas</div>
                <p className="text-gray-500 text-sm">Offshore Construction</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center"
            >
              <div className="text-center">
                <div className="text-redec-blue font-semibold text-lg mb-1">Huisman</div>
                <p className="text-gray-500 text-sm">Maritime Cranes</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="section-padding bg-redec-blue text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
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
                  View Our Projects
                </Link>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Why Partner With REDEC?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="text-redec-yellow mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-white/80">
                      <span className="font-semibold">Maritime Specialization:</span> Deep industry knowledge across vessel types
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-redec-yellow mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-white/80">
                      <span className="font-semibold">Proven Track Record:</span> Successful projects for industry leaders
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-redec-yellow mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-white/80">
                      <span className="font-semibold">Tailored Solutions:</span> Customized engineering for your specific needs
                    </p>
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