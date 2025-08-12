import React from 'react'
import { FaCode, FaRegLightbulb, FaGlobe } from "react-icons/fa6";
import { VscCoffee } from "react-icons/vsc";
import { TextFade } from '../assets/animations/TextFade';
import { motion } from 'motion/react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <FaCode className='w-6 h-6'/>,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time"
    },
    {
      icon: <FaGlobe className='w-6 h-6'/>,
      title: "User-Centric",
      description: "Focusing on exceptional user experiences and accesibility"
    },
    {
      icon: <FaRegLightbulb className='w-6 h-6'/>,
      title: "Problem Solver",
      description: "Turning complex challenges into elegant, simple solutions"
    },
    {
      icon: <VscCoffee className='w-6 h-6'/>,
      title: "Continuous Learning",
      description: "Always exploring new technologies and best practices"
    },
  ]

  return (
    <section id='about' className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <TextFade direction='up' className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-slate-800 mb-4'>
            About Me
          </h2>
          <p className='text-xl text-slate-600 max-w-2xl mx-auto'>
            Passionate developer with 2+ years of experience creating digital solutions
          </p>
        </TextFade>

        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <motion.div 
              initial={{ x: -100, opacity: 0 }} 
              whileInView={{ x: 0, opacity: 1 }}    
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className='prose prose-lg text-slate-700'
            >
              <p>
                Hi! I'm Shubhankar, a full-stack developer based in Bhubaneswar with a passion for 
                creating beautiful, functional web applications. I specialize in modern JavaScript 
                frameworks and have a keen eye for user experience design.
              </p>

              <p>
                My journey in web development started 2 years ago, and since then I've had the 
                privilege of working with startups, agencies, and enterprise companies. I love 
                the challenge of turning complex problems into simple, elegant solutions.
              </p>

              <p>
                When I'm not coding, you can find me exploring new coffee shops, hiking in the 
                Bay Area, or contributing to open-source projects. I believe in continuous 
                learning and staying up-to-date with the latest web technologies.
              </p>
            </motion.div>

            <div className='flex flex-wrap gap-3'>
              {['React', 'TypeScript', 'Node.js', 'Python', 'Solidity', 'Docker'].map((tech, index) => (
                <motion.span
                  initial={{ y: 100, opacity: 0 }} 
                  whileInView={{ y: 0, opacity: 1 }}    
                  transition={{ 
                    type: "spring",
                    stiffness: 500,  
                    damping: 20,  
                    delay: 0.5 + index * 0.1
                  }}
                  viewport={{ once: true }}
                  key={tech}
                  className='px-3 py-1 bg-blue-100 text-shadow-blue-800 rounded-full text-sm font-medium'
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ x: -100, opacity: 0 }} 
            whileInView={{ x: 0, opacity: 1 }}    
            transition={{ duration: 0.5, delay: 0.5 }} 
            viewport={{ once: true }}
            className='relative'
          >
            <img 
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Developer workspace"
              className='rounded-2xl shadow-2xl' 
            />
            <div className='absolute -bottom-6 -right-4 bg-white rounded-2xl p-6 shadow-xl border'>
              <div className='text-center'>
                <div className='text-3xl font-bold text-blue-600'>2+</div>
                <div className='text-sm text-slate-600'>Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className='mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {highlights.map((item, index) => (
            <motion.div
              initial={{ x: 100, opacity: 0 }} 
              whileInView={{ x: 0, opacity: 1 }}    
              transition={{ duration: 0.5, delay: 0.8 + index * 0.3 }} 
              viewport={{ once: true }}
              key={index}
              className='text-center p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors duration-200'
            >
              <div className='inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-lg mb-4'>
                {item.icon}
              </div>
              <h3 className='text-lg font-semibold text-slate-800 mb-2'>
                {item.title}
              </h3>
              <p className='text-slate-600 text-sm'>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About