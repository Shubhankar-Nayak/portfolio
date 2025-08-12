import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

interface FooterProps {
  setActiveSection: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setActiveSection }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const socialLinks = [
      {
        icon: <FaGithub className="w-5 h-5" />,
        label: "GitHub",
        href: "https://github.com"
      },
      {
        icon: <FaLinkedin className="w-5 h-5" />,
        label: "LinkedIn",
        href: "https://linkedin.com"
      },
      {
        icon: <SiGmail className="w-5 h-5" />,
        label: "Email",
        href: "mailto:shubhankarnayak05@gmail.com"
      }
  ];  

  return (
    <footer className='bg-slate-800 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid md:grid-cols-4 gap-8'>
          {/* Brand */}
          <div className='md:col-span-2'>
            <div className='text-2xl font-bold mb-4'>
              <span className='text-blue-400'>My</span>Portfolio
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              Full-Stack Developer passionate about creating beautiful, functional web experiences 
              that solve real-world problems and delight users.
            </p>
            <div className='flex space-x-4'>
              {socialLinks.map((social, index) => (
                <a
                  key={index} 
                  href={social.href}
                  target='_blank'
                  rel="noopener noreferrer"
                  className='w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white transform hover:scale-110 transition-all duration-200'
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
            <nav className='space-y-2'>
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className='block text-slate-300 hover:text-blue-400 transition-colors duration-200 text-left cursor-pointer'
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3 text-slate-300">
              <p>Rourkela, Odisha</p>
              <a 
                href="mailto:shubhankarnayak05@gmail.com"
                className="block hover:text-blue-400 transition-colors duration-200 truncate"
              >
                shubhankarnayak05@gmail.com
              </a>
              <a 
                href="tel:+917008815575"
                className="block hover:text-blue-400 transition-colors duration-200"
              >
                +91 7008815575
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-center items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Shubhankar Nayak. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer