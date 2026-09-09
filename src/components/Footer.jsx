import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const links = [
  { href: 'https://github.com/prudorexa', icon: FaGithub, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/prudence-mathu-97aa73300/', icon: FaLinkedin, label: 'LinkedIn' },
  { href: 'https://www.instagram.com/prudorexa', icon: FaInstagram, label: 'Instagram' },
  { href: 'https://wa.me/+254723831464', icon: FaWhatsapp, label: 'WhatsApp' },
];

const Footer = () => {
  return (
    <footer className="border-t border-line">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-10 flex flex-col sm:flex-row justify-between items-center gap-6">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} Prudence Mathu
        </p>
        <div className="flex gap-5">
          {links.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-amber transition-colors duration-150"
              aria-label={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
