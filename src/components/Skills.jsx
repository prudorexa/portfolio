import React from 'react';

const Skills = () => {
  const skills = [
    {
      title: 'JavaScript',
      description: 'A versatile programming language used for creating interactive web applications. Experienced with ES6+ features.',
    },
    {
      title: 'React',
      description: 'A JavaScript library for building user interfaces, especially for single-page applications. Skilled in hooks, state management, and component design.',
    },
    {
      title: 'HTML & CSS',
      description: 'The foundation of web development, proficient in crafting responsive and semantic web pages using HTML5 and modern CSS techniques.',
    },
    {
      title: 'Django',
      description: 'A high-level Python web framework that promotes rapid development and clean, pragmatic design. Experienced in building RESTful APIs and web applications.',
    },
    {
        title: 'Python',
        description: 'A versatile and widely-used programming language for various applications, including web development, data.',
    },
    {
      title: 'NoSQL',
      description: 'Proficient in using NoSQL databases like MongoDB for handling large-scale, unstructured data efficiently.',
    },
    {
      title: 'SQL',
      description: 'Skilled in writing complex queries and managing relational databases such as MySQL and PostgreSQL.',
    },
  ];

  return (
    <div className="p-8 bg-black min-h-screen">
      <h2 className="text-4xl font-extrabold text-luminousGreen mb-6 text-center uppercase tracking-widest">My Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-luminousGreen mb-2">{skill.title}</h3>
            <p className="text-gray-300">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;