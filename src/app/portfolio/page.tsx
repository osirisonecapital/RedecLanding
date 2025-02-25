import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// This would typically come from a database or API
// For this example, we're using static data
const projects = [
  {
    id: 'scheldt-river',
    title: 'Scheldt River',
    category: 'dredging',
    client: 'DEME Group',
    description: "Complete electrical engineering for DEME's dual-fuel trailing suction hopper dredger. Includes power management systems, automation controls, and navigation integration.",
    year: 2017,
    imageSrc: '/images/projects/placeholder1.jpg',
  },
  {
    id: 'minerva-deme',
    title: 'Minerva DEME',
    category: 'dredging',
    client: 'DEME Group',
    description: 'Trailing suction hopper dredger featuring innovative electrical power management systems with comprehensive monitoring and control interfaces.',
    year: 2019,
    imageSrc: '/images/projects/placeholder5.jpg',
  },
  {
    id: 'amazon-vessel',
    title: 'Amazon J-lay Vessel',
    category: 'offshore',
    client: 'Allseas',
    description: 'Electrical systems design for advanced pipelaying vessel with dynamic positioning capabilities, featuring redundant power systems and precision controls.',
    year: 2018,
    imageSrc: '/images/projects/placeholder2.jpg',
  },
  {
    id: 'yacht-kvda714',
    title: 'Yacht KVDA714',
    category: 'yachts',
    client: 'Feadship',
    description: '80-meter luxury yacht with state-of-the-art electrical systems and automation. Features integrated entertainment systems, advanced lighting controls, and power management.',
    year: 2020,
    imageSrc: '/images/projects/placeholder3.jpg',
  },
  {
    id: 'siemens-crane',
    title: 'Siemens Ship-to-Shore',
    category: 'cranes',
    client: 'Siemens Marine',
    description: 'High-capacity ship-to-shore crane with advanced electrical control systems, featuring precision positioning and load management capabilities for container handling.',
    year: 2021,
    imageSrc: '/images/projects/placeholder4.jpg',
  },
  {
    id: 'yacht-a8001',
    title: 'Yacht A8001',
    category: 'yachts',
    client: 'Oceanco',
    description: '100-meter superyacht with comprehensive electrical and control systems. Features include advanced automation, entertainment systems, and power management.',
    year: 2022,
    imageSrc: '/images/projects/placeholder6.jpg',
  },
  {
    id: 'noordzee-dredger',
    title: 'Noordzee Dredger',
    category: 'dredging',
    client: 'Van Oord',
    description: 'Trailing suction hopper dredger with innovative electrical systems and automation controls designed for efficient operation in diverse conditions.',
    year: 2019,
    imageSrc: '/images/projects/placeholder1.jpg',
  },
  {
    id: 'offshore-platform',
    title: 'Seaforcer Platform',
    category: 'offshore',
    client: 'Royal IHC',
    description: 'Electrical engineering for offshore platform with comprehensive power distribution, control systems, and monitoring capabilities.',
    year: 2020,
    imageSrc: '/images/projects/placeholder2.jpg',
  },
  {
    id: 'huisman-crane',
    title: 'Huisman Offshore Crane',
    category: 'cranes',
    client: 'Huisman',
    description: 'Specialized offshore crane with advanced control systems, featuring wave compensation technology and precise load handling capabilities.',
    year: 2021,
    imageSrc: '/images/projects/placeholder4.jpg',
  },
];

export default function PortfolioPage() {
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
              <h1 className="heading-1 mb-6">Our Portfolio</h1>
              <p className="text-xl text-gray-300">
                Showcasing our electrical engineering projects across maritime sectors
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Portfolio Filter & Projects */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="heading-2 mb-4">Featured Projects</h2>
            <p className="text-gray-600 text-lg">
              Explore our successful electrical engineering projects across various maritime sectors,
              showcasing our expertise and commitment to excellence.
            </p>
          </motion.div>
          
          {/* Filter Tabs */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              <a href="#all" className="px-6 py-2 rounded-full text-sm font-medium transition-all bg-redec-blue text-white">
                All Projects
              </a>
              <a href="#dredging" className="px-6 py-2 rounded-full text-sm font-medium transition-all bg-redec-yellow text-white">
                Dredging
              </a>
              <a href="#offshore" className="px-6 py-2 rounded-full text-sm font-medium transition-all bg-redec-blue text-white bg-opacity-70">
                Offshore
              </a>
              <a href="#yachts" className="px-6 py-2 rounded-full text-sm font-medium transition-all bg-redec-red text-white">
                Yachts
              </a>
              <a href="#cranes" className="px-6 py-2 rounded-full text-sm font-medium transition-all bg-redec-dark text-white">
                Cranes
              </a>
            </div>
          </div>
          
          {/* All Projects */}
          <div id="all" className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-64 w-full">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                    <span className={`absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-medium text-white ${
                      project.category === 'dredging' ? 'bg-redec-yellow' : 
                      project.category === 'offshore' ? 'bg-redec-blue' : 
                      project.category === 'yachts' ? 'bg-redec-red' : 
                      'bg-redec-dark'
                    }`}>
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
                    <Image 
                      src={project.imageSrc} 
                      alt={project.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <span className="text-gray-500 text-sm">{project.year}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-1">Client: {project.client}</p>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <Link href={`/portfolio/${project.id}`} className="text-redec-blue font-medium hover:underline flex items-center">
                      View project details
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Dredging Projects */}
          <div id="dredging" className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="h-10 w-10 rounded-full bg-redec-yellow flex items-center justify-center text-white font-bold">D</div>
                <h2 className="heading-3">Dredging Projects</h2>
              </div>
              <p className="text-gray-600">
                Specialized electrical engineering solutions for dredging vessels, featuring robust power management
                and control systems for maritime excavation operations.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter(project => project.category === 'dredging')
                .map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                  >
                    <div className="relative h-64 w-full">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                      <span className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-medium text-white bg-redec-yellow">
                        Dredging
                      </span>
                      <Image 
                        src={project.imageSrc} 
                        alt={project.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <span className="text-gray-500 text-sm">{project.year}</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-1">Client: {project.client}</p>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <Link href={`/portfolio/${project.id}`} className="text-redec-blue font-medium hover:underline flex items-center">
                        View project details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
          
          {/* Offshore Projects */}
          <div id="offshore" className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="h-10 w-10 rounded-full bg-redec-blue flex items-center justify-center text-white font-bold">O</div>
                <h2 className="heading-3">Offshore Projects</h2>
              </div>
              <p className="text-gray-600">
                Advanced electrical engineering for offshore vessels and platforms, featuring reliable power systems
                and precise controls for challenging ocean environments.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter(project => project.category === 'offshore')
                .map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                  >
                    <div className="relative h-64 w-full">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                      <span className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-medium text-white bg-redec-blue">
                        Offshore
                      </span>
                      <Image 
                        src={project.imageSrc} 
                        alt={project.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <span className="text-gray-500 text-sm">{project.year}</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-1">Client: {project.client}</p>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <Link href={`/portfolio/${project.id}`} className="text-redec-blue font-medium hover:underline flex items-center">
                        View project details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
          
          {/* Yacht Projects */}
          <div id="yachts" className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="h-10 w-10 rounded-full bg-redec-red flex items-center justify-center text-white font-bold">Y</div>
                <h2 className="heading-3">Yacht Projects</h2>
              </div>
              <p className="text-gray-600">
                Sophisticated electrical systems for luxury yachts, combining technical excellence with aesthetic
                integration for entertainment, comfort, and navigation systems.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter(project => project.category === 'yachts')
                .map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                  >
                    <div className="relative h-64 w-full">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                      <span className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-medium text-white bg-redec-red">
                        Yachts
                      </span>
                      <Image 
                        src={project.imageSrc} 
                        alt={project.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <span className="text-gray-500 text-sm">{project.year}</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-1">Client: {project.client}</p>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <Link href={`/portfolio/${project.id}`} className="text-redec-blue font-medium hover:underline flex items-center">
                        View project details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
          
          {/* Crane Projects */}
          <div id="cranes" className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="h-10 w-10 rounded-full bg-redec-dark flex items-center justify-center text-white font-bold">C</div>
                <h2 className="heading-3">Crane Projects</h2>
              </div>
              <p className="text-gray-600">
                Precision control systems for maritime cranes, ensuring safe and efficient heavy lifting operations
                with advanced features for stability and positioning.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter(project => project.category === 'cranes')
                .map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                  >
                    <div className="relative h-64 w-full">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                      <span className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-medium text-white bg-redec-dark">
                        Cranes
                      </span>
                      <Image 
                        src={project.imageSrc} 
                        alt={project.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <span className="text-gray-500 text-sm">{project.year}</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-1">Client: {project.client}</p>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <Link href={`/portfolio/${project.id}`} className="text-redec-blue font-medium hover:underline flex items-center">
                        View project details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="section-padding bg-redec-blue text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2 mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-3xl mx-auto">
              Our team of experienced engineers is ready to help you bring your naval and maritime projects to life.
              Contact us today to discuss your specific requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-white text-redec-blue hover:bg-gray-100 font-medium py-3 px-6 rounded-md transition-all duration-300">
                Contact Us
              </Link>
              <Link href="/markets" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-6 rounded-md transition-all duration-300">
                Explore Our Markets
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 