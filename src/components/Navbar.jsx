import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-4 bg-gradient-to-r from-gray-900 via-gray-800 to-black shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-white uppercase tracking-widest animate-pulse">
          PRUDENCE MATHU
        </h1>

        {/* Mobile Menu Button */}
        <button
          className="text-white lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop Menu */}
        <ul className={`hidden lg:flex space-x-8 items-center ${isMenuOpen ? 'flex' : 'hidden'}`}>
          <li className="text-white text-lg font-semibold hover:text-luminousGreen transition-transform transform hover:scale-105 duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="text-white text-lg font-semibold hover:text-luminousGreen transition-transform transform hover:scale-105 duration-300">
            <Link to="/about">About</Link>
          </li>
          <li className="text-white text-lg font-semibold hover:text-luminousGreen transition-transform transform hover:scale-105 duration-300">
            <Link to="/skills">Skills</Link>
          </li>
          <li className="text-white text-lg font-semibold hover:text-luminousGreen transition-transform transform hover:scale-105 duration-300">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="text-white text-lg font-semibold hover:text-luminousGreen transition-transform transform hover:scale-105 duration-300">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        <ul className={`lg:hidden absolute top-16 right-0 w-full bg-black text-center py-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <li className="text-white text-lg font-semibold py-2 hover:text-luminousGreen">
            <Link to="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li className="text-white text-lg font-semibold py-2 hover:text-luminousGreen">
            <Link to="/about" onClick={toggleMenu}>About</Link>
          </li>
          <li className="text-white text-lg font-semibold py-2 hover:text-luminousGreen">
            <Link to="/skills" onClick={toggleMenu}>Skills</Link>
          </li>
          <li className="text-white text-lg font-semibold py-2 hover:text-luminousGreen">
            <Link to="/projects" onClick={toggleMenu}>Projects</Link>
          </li>
          <li className="text-white text-lg font-semibold py-2 hover:text-luminousGreen">
            <Link to="/contact" onClick={toggleMenu}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;