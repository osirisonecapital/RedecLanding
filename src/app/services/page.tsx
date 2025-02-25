import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-redec-blue to-black text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="heading-1 mb-6">Our Services</h1>
              <p className="text-xl text-gray-300">
                Comprehensive electrical engineering solutions for naval and maritime projects
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">Comprehensive Engineering Solutions</h2>
            <p className="text-gray-600 text-lg">
              At REDEC, we deliver full-cycle electrical engineering services for maritime projects,
              combining technical expertise with innovative approaches to meet the challenging demands
              of naval and maritime environments.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="col-span-1 md:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gray-50 p-8 rounded-lg mb-8"
              >
                <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                  <div className="text-4xl font-bold text-redec-blue bg-white h-20 w-20 rounded-full flex items-center justify-center shadow-md">
                    01
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Engineering Process</h3>
                    <p className="text-gray-600">
                      Our standardized approach ensures quality and consistency across all projects, following a proven
                      methodology that covers the entire lifecycle from initial concept to final documentation.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white p-6 rounded-lg shadow-sm">
                  <div className="p-4 border-l-4 border-redec-yellow">
                    <div className="font-semibold mb-2">Basic Engineering</div>
                    <p className="text-sm text-gray-600">Initial concept development, system architecture design, load calculations, and technical specifications.</p>
                  </div>
                  <div className="p-4 border-l-4 border-redec-blue">
                    <div className="font-semibold mb-2">Detailed Engineering</div>
                    <p className="text-sm text-gray-600">Comprehensive design documentation including circuit diagrams, cable lists, and system integration plans.</p>
                  </div>
                  <div className="p-4 border-l-4 border-redec-red">
                    <div className="font-semibold mb-2">Production Drawings</div>
                    <p className="text-sm text-gray-600">Technical documentation for implementation, including precise installation guidelines and testing protocols.</p>
                  </div>
                  <div className="p-4 border-l-4 border-redec-dark">
                    <div className="font-semibold mb-2">As-Built Drawings</div>
                    <p className="text-sm text-gray-600">Final documentation reflecting the actual implementation, including any field changes and improvements.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Power Engineering */}
      <section id="power-engineering" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-redec-yellow/20 text-redec-yellow font-semibold px-4 py-2 rounded-full mb-4">
                Power Engineering
              </div>
              <h2 className="heading-2 mb-6">Robust Electrical Power Systems</h2>
              <p className="text-gray-600 mb-4">
                Our Power Engineering services focus on designing reliable, efficient electrical power systems
                for vessels operating in demanding maritime environments. We ensure optimal power distribution,
                protection, and control for all vessel operations.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">Main Switchboards</h3>
                  <p className="text-gray-600">
                    Design and schematics for main power distribution centers with comprehensive protection systems,
                    ensuring reliable power delivery throughout the vessel.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">Emergency Switchboards</h3>
                  <p className="text-gray-600">
                    Backup power systems for critical operations, designed to meet all maritime safety regulations
                    and ensure operational continuity during emergencies.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">Motor Control Centers</h3>
                  <p className="text-gray-600">
                    Advanced control systems for propulsion, pumps, and machinery, with efficient power management
                    and protection for all motor-driven applications.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">System Calculations</h3>
                  <p className="text-gray-600">
                    Comprehensive power flow, short circuit, and harmonic analyses to ensure system stability,
                    safety, and compliance with maritime standards.
                  </p>
                </div>
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
                src="/images/services/power-engineering.jpg" 
                alt="Power Engineering"
                fill
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Installation Engineering */}
      <section id="installation-engineering" className="section-padding bg-white">
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
                src="/images/services/installation-engineering.jpg" 
                alt="Installation Engineering"
                fill
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="inline-block bg-redec-blue/20 text-redec-blue font-semibold px-4 py-2 rounded-full mb-4">
                Installation Engineering
              </div>
              <h2 className="heading-2 mb-6">Seamless Systems Integration</h2>
              <p className="text-gray-600 mb-4">
                Our Installation Engineering team specializes in integrating diverse ship systems into a cohesive,
                efficient operational unit. We provide detailed technical documentation to guide implementation and
                ensure optimal performance.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">Equipment Lists</h3>
                  <p className="text-gray-600">
                    Comprehensive documentation of all electrical equipment with detailed specifications, ensuring
                    proper selection and procurement of components.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">I/O Signal Lists</h3>
                  <p className="text-gray-600">
                    Detailed mapping of all system inputs and outputs, facilitating efficient automation system design
                    and ensuring proper data flow between components.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">Cable Lists & Cable Routing</h3>
                  <p className="text-gray-600">
                    Precise planning of cable routes and connections, optimizing space utilization and ensuring
                    proper signal isolation and power distribution.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">System Documentation</h3>
                  <p className="text-gray-600">
                    Thorough documentation packages that facilitate efficient installation, commissioning, and future
                    maintenance of all electrical systems.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Outfitting Engineering */}
      <section id="outfitting-engineering" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-redec-red/20 text-redec-red font-semibold px-4 py-2 rounded-full mb-4">
                Outfitting Engineering
              </div>
              <h2 className="heading-2 mb-6">Advanced 3D Modeling & Planning</h2>
              <p className="text-gray-600 mb-4">
                Our Outfitting Engineering department leverages cutting-edge 3D modeling technology to optimize
                the installation of electrical components and systems. We ensure efficient use of space while
                maintaining accessibility for maintenance and repairs.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">3D Modeling</h3>
                  <p className="text-gray-600">
                    Detailed three-dimensional representations of all electrical installations, ensuring perfect
                    fit and function within the vessel's structure.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">Cable Tray Routing</h3>
                  <p className="text-gray-600">
                    Optimized pathways for cable management systems, ensuring efficient routing while maintaining
                    separation between power, control, and network cables.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">Equipment Placement</h3>
                  <p className="text-gray-600">
                    Strategic positioning of electrical equipment to optimize space utilization, heat management,
                    and accessibility for operation and maintenance.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-2">Clash Detection</h3>
                  <p className="text-gray-600">
                    Advanced collision detection to identify and resolve spatial conflicts before construction,
                    eliminating costly rework during installation.
                  </p>
                </div>
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
                src="/images/services/outfitting-engineering.jpg" 
                alt="Outfitting Engineering"
                fill
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Service Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-2 mb-4">Our Service Process</h2>
            <p className="text-gray-600 text-lg">
              From initial consultation to final implementation, we follow a structured approach to ensure
              project success and client satisfaction.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-redec-blue text-4xl font-bold mb-4">01</div>
              <h3 className="text-xl font-semibold mb-3">Initial Consultation</h3>
              <p className="text-gray-600">
                We begin by understanding your project requirements, constraints, and objectives to develop a tailored approach.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-redec-blue text-4xl font-bold mb-4">02</div>
              <h3 className="text-xl font-semibold mb-3">Concept Development</h3>
              <p className="text-gray-600">
                Our engineers create conceptual designs and system architectures aligned with your project goals.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-redec-blue text-4xl font-bold mb-4">03</div>
              <h3 className="text-xl font-semibold mb-3">Detailed Design</h3>
              <p className="text-gray-600">
                We develop comprehensive design documentation, including schematics, calculations, and specifications.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-redec-blue text-4xl font-bold mb-4">04</div>
              <h3 className="text-xl font-semibold mb-3">Implementation Support</h3>
              <p className="text-gray-600">
                Our team provides technical guidance during installation, commissioning, and testing phases.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-redec-blue text-4xl font-bold mb-4">05</div>
              <h3 className="text-xl font-semibold mb-3">Documentation & Handover</h3>
              <p className="text-gray-600">
                We provide complete as-built documentation and knowledge transfer to ensure operational excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Software & Tools */}
      <section className="section-padding bg-gray-50">
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
              We employ industry-leading software solutions to ensure precision, efficiency, and quality in all our engineering services.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-lg shadow-md border border-gray-100 text-center"
            >
              <div className="inline-block p-4 rounded-full bg-gray-50 mb-6">
                <div className="text-redec-blue text-2xl font-bold">EPLAN</div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Electrical Design</h3>
              <ul className="text-gray-600 space-y-2 text-left">
                <li className="flex items-start">
                  <div className="text-redec-blue mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Circuit diagram creation</span>
                </li>
                <li className="flex items-start">
                  <div className="text-redec-blue mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Cabinet layout design</span>
                </li>
                <li className="flex items-start">
                  <div className="text-redec-blue mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Automated documentation</span>
                </li>
                <li className="flex items-start">
                  <div className="text-redec-blue mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Bill of materials generation</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-md border border-gray-100 text-center"
            >
              <div className="inline-block p-4 rounded-full bg-gray-50 mb-6">
                <div className="text-redec-blue text-2xl font-bold">CADMATIC</div>
              </div>
              <h3 className="text-xl font-semibold mb-4">3D Modeling</h3>
              <ul className="text-gray-600 space-y-2 text-left">
                <li className="flex items-start">
                  <div className="text-redec-blue mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Ship-specific modeling</span>
                </li>
                <li className="flex items-start">
                  <div className="text-redec-blue mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Equipment placement</span>
                </li>
                <li className="flex items-start">
                  <div className="text-redec-blue mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Cable routing visualization</span>
                </li>
                <li className="flex items-start">
                  <div className="text-redec-blue mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Clash detection and resolution</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md border border-gray-100 text-center"
            >
              <div className="inline-block p-4 rounded-full bg-gray-50 mb-6">
                <div className="text-redec-blue text-2xl font-bold">CMPIC</div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Cable Management</h3>
              <ul className="text-gray-600 space-y-2 text-left">
                <li className="flex items-start">
                  <div className="text-redec-blue mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Cable database management</span>
                </li>
                <li className="flex items-start">
                  <div className="text-redec-blue mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Routing optimization</span>
                </li>
                <li className="flex items-start">
                  <div className="text-redec-blue mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Cable scheduling</span>
                </li>
                <li className="flex items-start">
                  <div className="text-redec-blue mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Detailed cable list generation</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="section-padding bg-redec-blue text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <h2 className="heading-2 mb-6">Ready to Discuss Your Project?</h2>
              <p className="text-lg opacity-90 mb-8">
                Our team of experienced engineers is ready to help you bring your naval and maritime projects to life.
                Contact us today to discuss your requirements and learn how we can contribute to your success.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-white text-redec-blue hover:bg-gray-100 font-medium py-3 px-6 rounded-md transition-all duration-300">
                  Get in Touch
                </Link>
                <Link href="/portfolio" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-6 rounded-md transition-all duration-300">
                  View Our Projects
                </Link>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Why Choose REDEC?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="text-redec-yellow mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-white/80">
                      <span className="font-semibold">Technical Expertise:</span> Deep knowledge in maritime electrical systems
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-redec-yellow mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-white/80">
                      <span className="font-semibold">Flexible Approach:</span> Adaptable to changing project requirements
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-redec-yellow mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-white/80">
                      <span className="font-semibold">End-to-End Solutions:</span> Comprehensive engineering from concept to completion
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-redec-yellow mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-white/80">
                      <span className="font-semibold">European Quality:</span> Meeting the highest standards at competitive costs
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
