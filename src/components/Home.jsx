import React from 'react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-gray-300">
      {/* Welcome Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center h-screen text-center p-8">
        <div className="lg:w-1/2">
          <h1 className="text-6xl font-bold text-luminousGreen mb-4 animate-pulse">Welcome to My Portfolio</h1>
          <p className="text-xl mb-6 text-gray-400">Explore my skills, projects, and feel free to contact me!</p>
          <a 
            href="#about" 
            className="bg-luminousGreen text-black py-2 px-4 rounded-lg text-xl font-bold hover:bg-green-400 transition-transform transform hover:scale-105 duration-300"
          >
            Explore More
          </a>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-end">
          <img
            src="static/portfolio.jpg"
            alt="Prudence Mathu"
            className="rounded-full shadow-lg w-64 h-64 object-cover border-4 border-luminousGreen"
          />
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-16">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <Contact />
      </section>
    </div>
  );
}

export default Home;