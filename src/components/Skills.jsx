import React, { useState } from 'react';
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiPython,
  SiDjango,
  SiMysql,
  SiMongodb,
  SiPostgresql,
} from 'react-icons/si';
import { FaNetworkWired, FaUsers, FaSitemap } from 'react-icons/fa';

const groups = [
  {
    label: 'frontend',
    items: [
      { name: 'React', note: 'Hooks, routing, component architecture', icon: SiReact, color: '#61DAFB' },
      { name: 'JavaScript (ES6+)', note: 'Async/await, array methods, modules', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'HTML5', note: 'Semantic, accessible markup', icon: SiHtml5, color: '#E34F26' },
      { name: 'Tailwind CSS', note: 'Responsive layouts, utility-first styling', icon: SiTailwindcss, color: '#38BDF8' },
    ],
  },
  {
    label: 'backend',
    items: [
      { name: 'Python', note: 'Scripting and application logic', icon: SiPython, color: '#4B8BBE' },
      { name: 'Django', note: 'Models, views, auth, admin', icon: SiDjango, color: '#44B78B' },
      { name: 'REST APIs', note: 'Designing and consuming endpoints', icon: FaSitemap, color: '#7C9CFF' },
    ],
  },
  {
    label: 'data',
    items: [
      { name: 'MySQL', note: 'Relational schema design, queries, joins', icon: SiMysql, color: '#4479A1' },
      { name: 'PostgreSQL', note: 'Relational data modelling', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MongoDB', note: 'NoSQL for unstructured data', icon: SiMongodb, color: '#47A248' },
    ],
  },
  {
    label: 'practice',
    items: [
      { name: 'Networking fundamentals', note: 'Structured cabling, network design', icon: FaNetworkWired, color: '#F0B429' },
      { name: 'Human-computer interaction', note: 'Designing for how people actually use things', icon: FaUsers, color: '#4FD1C5' },
      { name: 'Systems analysis', note: 'Turning requirements into a working plan', icon: FaSitemap, color: '#7C9CFF' },
    ],
  },
];

const Skills = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-8 py-20">
      <p className="font-mono text-sm text-teal mb-3">// skills</p>
      <h2 className="font-display font-bold text-2xl sm:text-3xl text-paper mb-10 max-w-lg">
        The stack I reach for, and the fundamentals underneath it.
      </h2>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible md:w-40 shrink-0">
          {groups.map((group, i) => (
            <button
              key={group.label}
              onClick={() => setActive(i)}
              className={`text-left font-mono text-sm py-2 px-3 rounded whitespace-nowrap transition-colors duration-150 ${
                active === i
                  ? 'bg-panel text-teal border border-line'
                  : 'text-muted hover:text-paper border border-transparent'
              }`}
            >
              {group.label}
            </button>
          ))}
        </div>

        <div key={active} className="flex-1 grid sm:grid-cols-2 gap-4 animate-[fadeIn_0.25s_ease]">
          {groups[active].items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="flex items-start gap-4 p-4 rounded-lg border border-line bg-surface hover:border-line hover:bg-panel transition-colors duration-150"
              >
                <div
                  className="w-10 h-10 rounded-md flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${item.color}1A` }}
                >
                  <Icon size={20} color={item.color} />
                </div>
                <div>
                  <p className="text-paper font-medium">{item.name}</p>
                  <p className="text-muted text-sm mt-0.5">{item.note}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
