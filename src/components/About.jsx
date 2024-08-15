import React from 'react';

const About = () => {
  return (
    <div className="p-8 bg-gradient-to-r from-gray-900 via-gray-800 to-black min-h-screen text-gray-300">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-luminousGreen mb-6 text-center uppercase tracking-widest animate-pulse">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3">
            <img
              src="public/portfolio.jpg" 
              alt="Prudence Mathu"
              className="rounded-full shadow-lg mx-auto mb-6 md:mb-0"
            />
          </div>
          <div className="md:w-2/3 md:ml-8">
            <h3 className="text-3xl font-bold text-luminousGreen mb-4">Prudence Mathu</h3>
            <p className="text-lg leading-relaxed">
              I'm Prudence Mathu, a passionate software developer with a strong commitment to delivering high-quality, efficient, and user-friendly applications. My journey in software development is driven by a love for learning and a dedication to mastering the latest technologies.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              My work is grounded in strong moral values, ensuring that I approach every project with integrity and a focus on building trust with my clients. I believe in creating solutions that not only meet the technical requirements but also contribute positively to the world.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              With a diverse skill set that spans various programming languages, frameworks, and tools, I have the expertise and confidence to tackle complex challenges and deliver results that exceed expectations. I am committed to continuous improvement and always looking for opportunities to grow both personally and professionally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;