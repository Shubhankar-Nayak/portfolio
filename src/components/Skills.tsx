import { motion } from 'motion/react';
import React, { useState, useEffect, useRef } from 'react'
import { TextFade } from '../assets/animations/TextFade';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Vue.js", level: 85 },
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 82 },
        { name: "MongoDB", level: 80 },
      ]
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 93 },
        { name: "Docker", level: 78 },
        { name: "Solidity", level: 75 },
        { name: "Figma", level: 88 },
      ]
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if(sectionRef.current) {
      observer.observe(sectionRef.current); 
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id='skills' className='py-20 bg-slate-50' ref={sectionRef}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <TextFade direction='up' className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-slate-800 mb-4'>
            Skills & Technologies
          </h2>
          <p className='text-xl text-slate-600 max-w-2xl mx-auto'>
            A comprehensive toolkit for building modern web applications
          </p>
        </TextFade>

        <div className='grid md:grid-cols-3 gap-8'>
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className='bg-white rounded-2xl p-8 shadow-lg'>
              <h3 className='text-2xl font-bold text-slate-800 mb-6 text-center'>
                {category.category}
              </h3>

              <div className='space-y-6'>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className='flex justify-between items-center mb-2'>
                      <span className='text-slate-700 font-medium'>{skill.name}</span>
                      <span className='text-slate-500 text-sm'>{skill.level}%</span>
                    </div>

                    <div className='w-full bg-slate-200 rounded-full h-3'>
                      <div
                        className='bg-gradient-to-r from-blue-600 to-emerald-500 h-3 rounded-full transition-all duration-1000 ease-out'
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 4 + skillIndex) * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className='mt-16 text-center'>
          <motion.div 
            initial={{ x: 100, opacity: 0 }} 
            whileInView={{ x: 0, opacity: 1 }}    
            transition={{ duration: 0.5, delay: 0.3 }} 
            viewport={{ once: true }}
            className='inline-block bg-white rounded-2xl p-8 shadow-lg'
          >
            <h3 className='text-xl font-bold text-slate-800 mb-4'>
              Always Learning
            </h3>
            <p className='text-slate-600 mb-4'>
              Currently exploring: AI/ML integration, Web3 technologies, and advanced React patterns
            </p>
            <div className='flex flex-wrap justify-center gap-2'>
              {['TensorFlow.js', 'Three.js', 'GrapghQL', 'Rust'].map((tech) => (
                <span
                  key={tech}
                  className='px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium'
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills