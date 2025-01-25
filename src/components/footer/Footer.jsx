import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12" id='contact'>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">Salvation</h3>
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
              <FaFacebookF className="text-2xl" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">
              <FaLinkedinIn className="text-2xl" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-white text-gray-400 no-underline">Home</a></li>
            <li><a href="#about" className="hover:text-white text-gray-400 no-underline">About</a></li>
            <li><a href="#events" className="hover:text-white text-gray-400 no-underline">Events</a></li>
            <li><a href="#contact" className="hover:text-white text-gray-400 no-underline">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">Have a Question?</h3>
          <p className="flex items-center"><FaMapMarkerAlt className="mr-2" /> 203 Fake St. Mountain View, San Francisco, CA, USA</p>
          <p className="flex items-center mt-4"><FaPhoneAlt className="mr-2" /> +2 392 3929 210</p>
          <p className="flex items-center mt-4"><FaEnvelope className="mr-2" /> info@yourdomain.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
