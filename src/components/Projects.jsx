import React, { useMemo, useState } from 'react';
import { SiReact, SiDjango, SiFirebase } from 'react-icons/si';

const techIcons = {
  React: { icon: SiReact, color: '#61DAFB' },
  Django: { icon: SiDjango, color: '#44B78B' },
  Firebase: { icon: SiFirebase, color: '#FFCA28' },
};

const projects = [
  {
    title: 'KukuMart',
    description:
      'An online ordering site for a Nairobi poultry business — customers browse live broilers, kienyeji and prepared chicken, and order for delivery or via WhatsApp.',
    stack: ['React'],
    live: 'https://kuku-mart.vercel.app/',
    code: null,
    accent: '#61DAFB',
  },
  {
    title: 'LawTrack',
    description:
      'A case management application for law firms — user roles, case tracking and document management, with a Django API behind a React front end.',
    stack: ['React', 'Django'],
    live: 'https://law-track-frontend.vercel.app/',
    code: 'https://github.com/prudorexa/law_track_frontend.git',
    accent: '#44B78B',
  },
  {
    title: 'Habitrack',
    description:
      'A rental management system for tracking properties, tenants and rent records.',
    stack: ['React'],
    live: 'https://habitrack-chi.vercel.app/',
    code: null,
    accent: '#7C9CFF',
  },
  {
    title: 'Chessly',
    description:
      'A playable chess game built from scratch, with full move logic and a board interface.',
    stack: ['React'],
    live: 'https://chessly-nine.vercel.app/',
    code: null,
    accent: '#F0B429',
  },
  {
    title: 'Expense Tracker',
    description:
      'An app for tracking personal expenses and managing budgets, with real-time updates via Firebase.',
    stack: ['React', 'Firebase'],
    live: 'https://soft-exp.vercel.app/',
    code: 'https://github.com/prudorexa/soft_exp.git',
    accent: '#FFCA28',
  },
];

const allStacks = ['All', ...Array.from(new Set(projects.flatMap((p) => p.stack)))];

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.stack.includes(filter))),
    [filter]
  );

  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-8 py-20">
      <p className="font-mono text-sm text-teal mb-3">// projects</p>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-paper max-w-lg">
          A few things I've shipped and deployed.
        </h2>
        <div className="flex flex-wrap gap-2">
          {allStacks.map((stack) => (
            <button
              key={stack}
              onClick={() => setFilter(stack)}
              className={`font-mono text-xs py-1.5 px-3 rounded-full border transition-colors duration-150 ${
                filter === stack
                  ? 'border-amber text-amber'
                  : 'border-line text-muted hover:text-paper hover:border-paper'
              }`}
            >
              {stack}
            </button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {visible.map((project) => (
          <a
            key={project.title}
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col rounded-xl border border-line bg-surface p-6 overflow-hidden transition-transform duration-200 hover:-translate-y-1"
            style={{ boxShadow: 'none' }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 12px 30px -12px ${project.accent}55`)}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
          >
            <span
              className="absolute top-0 left-0 right-0 h-[3px]"
              style={{ backgroundColor: project.accent }}
            />
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-display font-bold text-xl text-paper group-hover:text-amber transition-colors duration-150">
                {project.title}
              </h3>
              <div className="flex gap-1.5">
                {project.stack.map((s) => {
                  const T = techIcons[s];
                  if (!T) return null;
                  const Icon = T.icon;
                  return (
                    <span
                      key={s}
                      className="w-8 h-8 rounded-md flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${T.color}1A` }}
                      title={s}
                    >
                      <Icon size={16} color={T.color} />
                    </span>
                  );
                })}
              </div>
            </div>
            <p className="text-muted leading-relaxed text-sm flex-1">{project.description}</p>
            <div className="mt-5 flex items-center gap-4">
              <span className="font-mono text-sm text-amber group-hover:underline underline-offset-4">
                live site
              </span>
              {project.code && (
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="font-mono text-sm text-wire hover:text-paper transition-colors duration-150"
                >
                  source
                </a>
              )}
            </div>
          </a>
        ))}
        {visible.length === 0 && (
          <p className="py-8 text-muted font-mono text-sm col-span-2">No projects match that filter yet.</p>
        )}
      </div>
    </div>
  );
};

export default Projects;
