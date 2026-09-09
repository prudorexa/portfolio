import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const sections = [
  { id: 'home', to: '/', label: 'home' },
  { id: 'about', to: '/about', label: 'about' },
  { id: 'skills', to: '/skills', label: 'skills' },
  { id: 'projects', to: '/projects', label: 'projects' },
  { id: 'contact', to: '/contact', label: 'contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();
  const onHome = location.pathname === '/';

  useEffect(() => {
    if (!onHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );
    const targets = ['about', 'skills', 'projects', 'contact']
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [onHome]);

  const toggleMenu = () => setIsMenuOpen((v) => !v);

  const handleClick = (e, section) => {
    if (onHome && section.id !== 'home') {
      e.preventDefault();
      document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
      setActiveId(section.id);
    } else if (onHome && section.id === 'home') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveId('home');
    } else if (!onHome && section.id !== 'home') {
      navigate(section.to);
    }
    setIsMenuOpen(false);
  };

  const isActive = (section) => (onHome ? activeId === section.id : location.pathname === section.to);

  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-ink/95 backdrop-blur">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 flex justify-between items-center h-16">
        <Link to="/" className="font-display font-bold text-lg text-paper tracking-tight">
          Prudence Mathu
        </Link>

        <button className="text-paper lg:hidden" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

        <ul className="hidden lg:flex items-center gap-8 font-mono text-sm">
          {sections.map((section) => (
            <li key={section.id}>
              <Link
                to={section.to}
                onClick={(e) => handleClick(e, section)}
                className={`relative pb-1 transition-colors duration-150 ${
                  isActive(section) ? 'text-amber' : 'text-muted hover:text-paper'
                }`}
              >
                {section.label}
                <span
                  className={`absolute left-0 -bottom-0.5 h-[1.5px] bg-amber transition-all duration-200 ${
                    isActive(section) ? 'w-full' : 'w-0'
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {isMenuOpen && (
        <ul className="lg:hidden border-t border-line bg-ink px-6 py-4 space-y-4 font-mono text-sm">
          {sections.map((section) => (
            <li key={section.id}>
              <Link
                to={section.to}
                onClick={(e) => handleClick(e, section)}
                className={isActive(section) ? 'text-amber' : 'text-muted'}
              >
                {section.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
