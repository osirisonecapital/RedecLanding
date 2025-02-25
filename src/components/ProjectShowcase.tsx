"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

type Project = {
  id: string;
  title: string;
  category: 'dredging' | 'offshore' | 'yachts' | 'cranes';
  description: string;
  imageSrc: string;
};

const projects: Project[] = [
  {
    id: 'scheldt-river',
    title: 'Scheldt River',
    category: 'dredging',
    description: "Complete electrical engineering for DEME's dual-fuel trailing suction hopper dredger.",
    imageSrc: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'amazon-vessel',
    title: 'Amazon J-lay Vessel',
    category: 'offshore',
    description: 'Electrical systems design for advanced pipelaying vessel with dynamic positioning capabilities.',
    imageSrc: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'yacht-kvda714',
    title: 'Yacht KVDA714',
    category: 'yachts',
    description: '80-meter luxury yacht with state-of-the-art electrical systems and automation.',
    imageSrc: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'siemens-crane',
    title: 'Siemens Ship-to-Shore',
    category: 'cranes',
    description: 'High-capacity ship-to-shore crane with advanced electrical control systems.',
    imageSrc: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'minerva-deme',
    title: 'Minerva DEME',
    category: 'dredging',
    description: 'Trailing suction hopper dredger featuring innovative electrical power management.',
    imageSrc: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'yacht-a8001',
    title: 'Yacht A8001',
    category: 'yachts',
    description: '100-meter superyacht with comprehensive electrical and control systems.',
    imageSrc: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&q=80&w=1000',
  },
];

const ProjectShowcase = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="section-padding bg-white" id="projects">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading-2 mb-4">Featured Projects</h2>
            <p className="text-gray-600 text-lg">
              Explore our portfolio of successful electrical engineering projects across various maritime sectors.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button 
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'all' ? 'bg-redec-blue text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
          >
            All Projects
          </button>
          <button 
            onClick={() => setFilter('dredging')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'dredging' ? 'bg-redec-yellow text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
          >
            Dredging
          </button>
          <button 
            onClick={() => setFilter('offshore')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'offshore' ? 'bg-redec-blue text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
          >
            Offshore
          </button>
          <button 
            onClick={() => setFilter('yachts')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'yachts' ? 'bg-redec-red text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
          >
            Yachts
          </button>
          <button 
            onClick={() => setFilter('cranes')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'cranes' ? 'bg-redec-dark text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
          >
            Cranes
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
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
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
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

        <div className="mt-16 text-center">
          <Link href="/portfolio" className="btn-primary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase; 