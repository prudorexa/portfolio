import React from 'react';
import { FaInstagram, FaLinkedin, FaTiktok, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-6 mt-8">
      <div className="container mx-auto flex justify-center space-x-6">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/prudorexa"
          target="_blank"
          rel="noopener noreferrer"
          className="text-luminousGreen hover:text-green-400 transition-colors duration-300"
          aria-label="Instagram"
        >
          <FaInstagram size={24} />
        </a>
        
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/prudencemathu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-luminousGreen hover:text-green-400 transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
        
        {/* TikTok */}
        <a
          href="https://www.tiktok.com/@prudorexa.24"
          target="_blank"
          rel="noopener noreferrer"
          className="text-luminousGreen hover:text-green-400 transition-colors duration-300"
          aria-label="TikTok"
        >
          <FaTiktok size={24} />
        </a>
        
        {/* WhatsApp */}
        <a
          href="https://wa.me/+254723831464"
          target="_blank"
          rel="noopener noreferrer"
          className="text-luminousGreen hover:text-green-400 transition-colors duration-300"
          aria-label="WhatsApp"
        >
          <FaWhatsapp size={24} />
        </a>
      </div>
      <div className="text-center mt-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Prudence Mathu. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
