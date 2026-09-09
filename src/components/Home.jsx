import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import TypedLine from './TypedLine';

const Home = () => {
  const heroRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = heroRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--y', `${e.clientY - rect.top}px`);
  };

  return (
    <div className="bg-ink text-paper">
      <div
        ref={heroRef}
        onMouseMove={handleMouseMove}
        className="relative overflow-hidden max-w-5xl mx-auto px-6 lg:px-8 py-24 lg:py-36"
        style={{
          backgroundImage:
            'radial-gradient(500px circle at var(--x, 50%) var(--y, 20%), rgba(240,180,41,0.08), transparent 70%), radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: 'auto, 22px 22px',
        }}
      >
        <p className="font-mono text-sm text-teal mb-6">// hello, I'm Prudence</p>
        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-line bg-surface">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal"></span>
          </span>
          <span className="font-mono text-xs text-muted">open to jobs &amp; junior roles</span>
        </div>
        <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] max-w-3xl">
          I build <TypedLine />
        </h1>
        <p className="mt-6 text-lg text-muted max-w-xl leading-relaxed">
          Software developer in training, currently completing a Diploma in Information Technology
          at KCA University. I work mostly in React, Django and Python — turning small, specific
          problems into working systems.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/projects"
            className="bg-amber text-ink font-mono text-sm font-medium py-3 px-6 rounded hover:bg-paper transition-colors duration-150"
          >
            View projects
          </Link>
          <Link
            to="/contact"
            className="border border-line text-paper font-mono text-sm py-3 px-6 rounded hover:border-teal hover:text-teal transition-colors duration-150"
          >
            Get in touch
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-6 max-w-md border-t border-line pt-8">
          <div>
            <p className="font-display font-bold text-3xl text-amber">5+</p>
            <p className="font-mono text-xs text-muted mt-1">projects shipped</p>
          </div>
          <div>
            <p className="font-display font-bold text-3xl text-teal">3</p>
            <p className="font-mono text-xs text-muted mt-1">core stacks</p>
          </div>
          <div>
            <p className="font-display font-bold text-3xl text-wire">2024</p>
            <p className="font-mono text-xs text-muted mt-1">SE certified, Zindua</p>
          </div>
        </div>
      </div>

      <section id="about" className="border-t border-line scroll-mt-16">
        <About />
      </section>

      <section id="skills" className="border-t border-line scroll-mt-16">
        <Skills />
      </section>

      <section id="projects" className="border-t border-line scroll-mt-16">
        <Projects />
      </section>

      <section id="contact" className="border-t border-line scroll-mt-16">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
