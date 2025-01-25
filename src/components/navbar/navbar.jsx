import React, { useState, useEffect } from 'react';
import logo from '../images/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Track the scroll position and set the "scrolled" state accordingly
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true); // Apply styles when scrolled down more than 50px
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ease-in-out h-24 
      ${scrolled ? 'bg-white text-gray-800 shadow-lg' : 'bg-transparent text-white'}`}>
      
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 h-full">
        
        {/* Logo Section */}
        <a href="#home" className="flex items-center">
          <img src={logo} alt="logo" className="w-20 h-20 sm:w-16 sm:h-16 md:w-24 md:h-24 object-contain" />
        </a>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 items-center">
          <li><a href="#home" className="no-underline text-lg hover:text-gray-400 transition-colors">Home</a></li>
          <li><a href="#about" className="no-underline text-lg hover:text-gray-400 transition-colors">About</a></li>
          <li><a href="#events" className="no-underline text-lg hover:text-gray-400 transition-colors">Events</a></li>
          <li><a href="#contact" className="no-underline text-lg hover:text-gray-400 transition-colors">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-3xl focus:outline-none">
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white text-gray-800 py-4 absolute top-full left-0 w-full text-center shadow-lg`}>
        <a href="#home" className='block no-underline py-2'>Home</a>
        <a href="#about" className='block no-underline py-2'>About</a>
        <a href="#events" className='block no-underline py-2'>Events</a>
        <a href="#contact" className='block no-underline py-2'>Contact</a>
      </div>
      
    </nav>
  );
};

export default Navbar;
