import React, { useState } from 'react'
import { FaFilter, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { TextFade } from '../assets/animations/TextFade';
import { motion } from 'motion/react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: "Finance Tracker",
      description: "A full-stack finance tracker with MongoDB, Express, React and Node.js. Features include budgets, investments, transactions, and real-time analytics.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      category: "Full Stack",
      liveUrl: "https://personal-finance-and-investment-tra.vercel.app/",
      githubUrl: "https://github.com/Shubhankar-Nayak/personal-finance-and-investment-tracker"
    },
    {
      id: 2,
      title: "E-Commerce Product Page",
      description: "An interactive e-commerce product page with image gallery, dynamic cart updates, and seamless user experience for browsing and purchasing.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Tailwind", "Vite"],
      category: "Frontend",
      liveUrl: "https://shubhankar-nayak.github.io/Ecommerce-Product-Page/",
      githubUrl: "https://github.com/Shubhankar-Nayak/Ecommerce-Product-Page"
    },
    {
      id: 3,
      title: "Weather Analytics API",
      description: "RESTful API that aggregates weather data from multiple sources with caching, rate limiting, and comprehensive documentation.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Python", "FastAPI", "Redis", "Docker"],
      category: "Backend",
      liveUrl: "https://weather-analytics-api.onrender.com",
      githubUrl: "https://github.com/Shubhankar-Nayak/weather-analytics-api"
    },
    {
      id: 4,
      title: "IP Address Tracker",
      description: "A React-based IP Address Tracker with interactive maps, real-time geolocation lookup, and responsive Tailwind styling.",
      image: "https://images.pexels.com/photos/12381327/pexels-photo-12381327.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Tailwind", "Axios", "Leaflet"],
      category: "Frontend",
      liveUrl: "https://shubhankar-nayak.github.io/IP-Address-Tracker/",
      githubUrl: "https://github.com/Shubhankar-Nayak/IP-Address-Tracker"
    },
    {
      id: 5,
      title: "Voice Appointment System",
      description: "TypeScript-based web application that allows patients to book medical appointments using voice input, while providing a separate dashboard for both patients and doctors.",
      image: "https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Axios", "Web Speech API", "MongoDB"],
      category: "Full Stack",
      liveUrl: "https://june-cohort-2yg5.vercel.app/",
      githubUrl: "https://github.com/Shubhankar-Nayak/voice-appointment2"
    },
    {
      id: 6,
      title: "Machine Learning API",
      description: "Scalable ML API for image classification with model versioning, A/B testing, and automated retraining pipelines.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Python", "TensorFlow", "Kubernetes", "MLflow"],
      category: "Backend",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    }
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id='projects' className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <TextFade direction='up' className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-slate-800 mb-4'>
            Featured Projects
          </h2>
          <p className='text-xl text-slate-600 max-w-2xl mx-auto mb-8'>
            A collection of projects that showcase my skills and passion for development
          </p>

          {/* Filter Buttons */}
          <div className='flex flex-wrap justify-center gap-4 mb-12'>
            <FaFilter className='text-slate-400' />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 cursor-pointer ${
                  activeFilter === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </TextFade>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredProjects.map((project, index) => (
            <motion.div
              initial={{ y: 100, opacity: 0 }} 
              whileInView={{ y: 0, opacity: 1 }}    
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }} 
              viewport={{ once: true }}
              key={project.id}
              className='group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden'
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className='relative overflow-hidden'>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300' 
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                <div className='absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <a 
                    href={project.liveUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='p-2 bg-white/90 rounded-lg hover:bg-white transition-colors'
                  >
                    <FaExternalLinkAlt className="text-slate-700" />
                  </a>
                  <a 
                    href={project.githubUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='p-2 bg-white/90 rounded-lg hover:bg-white transition-colors'
                  >
                    <FaGithub className="text-slate-700" />
                  </a>
                </div>
              </div>

              <div className='p-6'>
                <div className='flex items-center justify-between mb-2'>
                  <h3 className='text-xl font-bold text-slate-800'>
                    {project.title}
                  </h3>
                  <span className='px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium'>
                    {project.category}
                  </span>
                </div>

                <p className='text-slate-600 mb-4 text-sm leading-relaxed'>
                  {project.description}
                </p>

                <div className='flex flex-wrap gap-2'>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className='px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-md font-medium'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          whileHover={{ rotate: [0, 5, 0, -5, 0] }}
          transition={{ duration: 0.3, ease: "linear" }}
          className='text-center mt-12'
        >
          <a 
            href="https://github.com/Shubhankar-Nayak"
            target='_blank'
            rel="nooopener noreferrer"
            className='inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg font-medium hover:bg-blue-600 duration-500'
          >
            <FaGithub />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects