import React from 'react';

const HtmlCssProjects: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-blue-700 mb-4">HTML & CSS Projects</h1>
        <p className="text-lg text-gray-600">
          Here are some of the projects I've worked on using HTML & CSS. Click the links to explore the code and live demos.
        </p>
      </div>

      {/* Project Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Portfolio Website Project */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-500 ease-in-out">
          <img
            src="/portfolio-project.jpg" // Replace with actual image path
            alt="Portfolio Website"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-blue-700">Portfolio Website</h2>
            <p className="text-gray-700 mt-2">
              A personal portfolio website created to showcase my skills, experience, and projects. It uses modern HTML & CSS design techniques.
            </p>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://github.com/yourusername/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-900 transition"
              >
                GitHub
              </a>
              <a
                href="https://yourportfolio.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* Static Resume Project */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-500 ease-in-out">
          <img
            src="/static-resume-project.jpg" // Replace with actual image path
            alt="Static Resume"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-blue-700">Static Resume</h2>
            <p className="text-gray-700 mt-2">
              A static resume website created using HTML & CSS to display a personal resume with basic styling and layout techniques.
            </p>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://github.com/yourusername/static-resume"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-900 transition"
              >
                GitHub
              </a>
              <a
                href="https://staticresume.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* Dynamic Resume Builder Project */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-500 ease-in-out">
          <img
            src="/dynamic-resume-project.jpg" // Replace with actual image path
            alt="Dynamic Resume Builder"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-blue-700">Dynamic Resume Builder</h2>
            <p className="text-gray-700 mt-2">
              A dynamic resume builder web app created with HTML, CSS, and JavaScript. Users can fill in their details to generate a custom resume.
            </p>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://github.com/yourusername/dynamic-resume-builder"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-900 transition"
              >
                GitHub
              </a>
              <a
                href="https://dynamicresumebuilder.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HtmlCssProjects;
