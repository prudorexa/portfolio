import React from 'react';
import { FaGraduationCap, FaMapMarkerAlt, FaCode, FaCertificate } from 'react-icons/fa';

const facts = [
  { icon: FaGraduationCap, label: 'Studying', value: 'DIT, KCA University', color: '#F0B429' },
  { icon: FaCertificate, label: 'Certified', value: 'Software Engineering, Zindua (2024)', color: '#4FD1C5' },
  { icon: FaCode, label: 'Focus', value: 'React, Django, Python', color: '#7C9CFF' },
  { icon: FaMapMarkerAlt, label: 'Based in', value: 'Nairobi, Kenya', color: '#61DAFB' },
];

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-8 py-20">
      <p className="font-mono text-sm text-amber mb-3">// about</p>
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <img
          src="static/portfolio.jpg"
          alt="Prudence Mathu"
          className="w-40 h-40 md:w-48 md:h-48 object-cover rounded border border-line grayscale hover:grayscale-0 hover:-rotate-2 hover:scale-105 transition-all duration-300 shrink-0"
        />
        <div className="flex-1 space-y-5 text-muted leading-relaxed">
          <p>
            I'm a software developer currently completing a Diploma in Information Technology at
            KCA University, after finishing a software engineering program at Zindua School in 2024.
            I like taking a problem — a business that needs an ordering site, a habit that needs
            tracking — and building the smallest working system that solves it well.
          </p>
          <p>
            Most of my work sits between the front end and the back end: React on the interface,
            Django or Firebase underneath. I care about code that's easy to read six months later,
            and I'm just as interested in the database design and the deployment as I am in the UI.
          </p>
          <p>
            I'm looking for an opportunity — an internship, attachment, or junior role — where I can
            work on real systems alongside people who'll push my standards up.
          </p>
        </div>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {facts.map(({ icon: Icon, label, value, color }) => (
          <div key={label} className="flex items-start gap-3 p-4 rounded-lg border border-line bg-surface">
            <div
              className="w-9 h-9 rounded-md flex items-center justify-center shrink-0"
              style={{ backgroundColor: `${color}1A` }}
            >
              <Icon size={16} color={color} />
            </div>
            <div>
              <p className="font-mono text-xs text-muted">{label}</p>
              <p className="text-paper text-sm mt-0.5">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
