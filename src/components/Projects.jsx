import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Personal Portfolio',
      description: 'A sleek and responsive portfolio website built using React and Tailwind CSS. It showcases my skills, projects, and contact information.',
      link: 'https://github.com/prudorexa/portfolio.git', 
    },
    {
      title: 'Law Firm App',
      description: 'A comprehensive case management application for law firms, built with Django and React, featuring user roles, case tracking, and document management.',
      link: 'https://github.com/prudorexa/law_track_frontend.git', 
    },
    {
      title: 'Expense Tracker App',
      description: 'An app that allows users to track their expenses and manage budgets, built with React and Firebase for real-time updates.',
      link: 'https://github.com/prudorexa/soft_exp.git', 
    },
    {
      title: 'Fitness Tracker App',
      description: 'A fitness tracking app that monitors workouts and health metrics, using React Native and integrated with wearable devices.',
      link: 'https://github.com/prudorexa/fitin_top.git', 
    },

    {
      title: 'Spotify Music App',
      description: 'A music streaming app integrated with the Spotify API, built with React and Node.js, featuring playlist creation and song recommendations.',
      link: 'https://github.com/prudorexa/sick_beats.git', 
    },
    {
        title: 'ui ux design',
        description: 'A ui ux design project that showcases my skills in creating visually appealing and user-friendly.',
        link: 'https://github.com/prudorexa/uiux.git',
    }

  ];

  return (
    <div className="p-8 bg-black min-h-screen">
      <h2 className="text-4xl font-extrabold text-luminousGreen mb-6 text-center uppercase tracking-widest">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-luminousGreen mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-luminousGreen text-black font-bold py-2 px-4 rounded-lg hover:bg-green-400 transition-colors duration-300"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;