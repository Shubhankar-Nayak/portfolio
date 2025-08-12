import React, { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoMenu, IoCloseSharp } from "react-icons/io5";
import { TextFade } from '../assets/animations/TextFade';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if(element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home'},
    { id: 'about', label: 'About'},
    { id: 'skills', label: 'Skills'},
    { id: 'projects', label: 'Projects'},
    { id: 'contact', label: 'Contact'},
  ];

  return (
    <TextFade direction="down" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center py-4'>
          <div className={`text-2xl font-bold ${isScrolled ? 'text-slate-800' : 'text-white'}`}>
            <span className='text-blue-600'>My</span>Portfolio 
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex space-x-8'>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors duration-200 cursor-pointer ${
                  activeSection === item.id
                    ? 'text-blue-600'
                    : (isScrolled ? 'text-slate-700 hover:text-blue-600' : 'text-white hover:text-blue-600')
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Social Links */}
          <div className='hidden md:flex items-center space-x-4'>
            <a 
              href="https://github.com/Shubhankar-Nayak" 
              target='_blank' 
              rel='noopener noreferrer'
              className={`${isScrolled ? 'text-slate-800' : 'text-white'} hover:text-blue-600 transition-colors`}
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/shubhankar-nayak-1b953328a/" 
              target='_blank' 
              rel='noopener noreferrer'
              className={`${isScrolled ? 'text-slate-800' : 'text-white'} hover:text-blue-600 transition-colors`}
            >
              <FaLinkedin />
            </a>
            <a 
              href="mailto:shubhankarnayak05@gmail.com" 
              target='_blank' 
              rel='noopener noreferrer'
              className={`${isScrolled ? 'text-slate-800' : 'text-white'} hover:text-blue-600 transition-colors`}
            >
              <SiGmail />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden text-2xl transition-colors duration-200 ${
              isScrolled ? 'text-slate-800 hover:text-blue-600' : 'text-white hover:text-blue-600'
            }`}
          >
            {isMenuOpen ? <IoCloseSharp /> : <IoMenu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg'>
            <nav className='flex flex-col space-y-4 ox-4 py-6'>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id 
                      ? 'text-blue-600'
                      : 'text-slate-700 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className='flex space-x-4 pt-4 border-t border-slate-200'>
                <a 
                  href="https://github.com/Shubhankar-Nayak" 
                  target='_blank' 
                  rel='noopener noreferrer'
                  className='text-slate-600 hover:text-blue-600 transition-colors'
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://www.linkedin.com/in/shubhankar-nayak-1b953328a/" 
                  target='_blank' 
                  rel='noopener noreferrer'
                  className='text-slate-600 hover:text-blue-600 transition-colors'
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="mailto:shubhankarnayak05@gmail.com" 
                  target='_blank' 
                  rel='noopener noreferrer'
                  className='text-slate-600 hover:text-blue-600 transition-colors'
                >
                  <SiGmail />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </TextFade>
  )
}

export default Header