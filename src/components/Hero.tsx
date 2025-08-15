import React from 'react'
import { TbDownload } from "react-icons/tb";
import { FaArrowDown } from "react-icons/fa";
import { LettersPullUp } from '../assets/animations/letters-pull-up';
import { TextFade } from '../assets/animations/TextFade';
import { TypingEffect } from '../assets/animations/typing-effect';

interface HeroProps{
  setActiveSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setActiveSection }) => {
  const scrollToProjects =() => {
    const element = document.getElementById('projects');
    if(element) {
      element.scrollIntoView({ behavior: 'smooth'});
      setActiveSection('projects');
    }
  };

  const scrollToContact =() => {
    const element = document.getElementById('contact');
    if(element) {
      element.scrollIntoView({ behavior: 'smooth'});
      setActiveSection('contact');
    }
  };

  return (
    <section id='home' className='min-h-screen flex items-center justify-center relative overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-black'></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%239C92AC%22%20fill-opacity=%220.05%22%3E%3Cpath%20d=%22m36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 relative z-10'>
        <div className='text-center'>

          <h1 className='text-4xl md:text-7xl font-bold text-white mb-6 mt-10'>
            <LettersPullUp text="Hello, I'm" />
            <LettersPullUp 
              text='Shubhankar' 
              className='bg-clip-text text-blue-400'
              startDelay={0.6}
            />
          </h1>

          <TypingEffect 
            text='Full-Stack Developer crafting functional, user-focused web experiences that solve real-world problems.'
            className="text-[15px] md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-snug md:leading-relaxed px-2 md:px-0 py-4"
          />

          <TextFade direction="up" className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12'>
            <button
              onClick={scrollToProjects}
              className='px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2 cursor-pointer'
            >
              View My Work
            </button>

            <button
              onClick={scrollToContact}
              className='px-8 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 backdrop-blur-sm border border-white/20 transform hover:scale-105 transition-all duration-200 flex items-center gap-2 cursor-pointer'
            >
              Get In Touch
            </button>

            <a 
              href="https://drive.google.com/file/d/1QA7F1p212pddDTUiWGeiCFZRpWF7RO13/view?usp=drive_link"
              target='_blank'
              rel="noopener noreferrer"
              className='px-8 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2'
            >
              <TbDownload />
              Resume
            </a>
          </TextFade>
        
        </div>
      </div>

      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce'>
        <FaArrowDown />
      </div>
    </section>
  )
}

export default Hero