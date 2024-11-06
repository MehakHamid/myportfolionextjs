import React from 'react';

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-blue-700 mb-4">My Projects</h1>
        <p className="text-lg text-gray-600">
          Explore some of the projects I've worked on using different technologies and design skills.
        </p>
      </div>

      {/* Project Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* HTML & CSS Projects Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-500 ease-in-out">
          <img
            src="html.jpg" // Replace with actual image path
            alt="HTML & CSS Projects"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-blue-700">HTML & CSS Projects</h2>
            <p className="text-gray-700 mt-2">
              A collection of responsive web pages and design layouts built using HTML & CSS.
            </p>
            <a
              href="/project/htmlcss"
              className="inline-block mt-4 text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* TypeScript Projects Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-500 ease-in-out">
          <img
            src="typescript.png" // Replace with actual image path
            alt="TypeScript Projects"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-blue-700">TypeScript Projects</h2>
            <p className="text-gray-700 mt-2">
              Explore projects built with TypeScript for enhanced code quality and performance.
            </p>
            <a
              href="/project/typescript"
              className="inline-block mt-4 text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Next.js Projects Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-500 ease-in-out">
          <img
            src="nextjs.png" // Replace with actual image path
            alt="Next.js Projects"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-blue-700">Next.js Projects</h2>
            <p className="text-gray-700 mt-2">
              Projects built with Next.js, showcasing server-side rendering and static site generation.
            </p>
            <a
              href="/project/nextjs"
              className="inline-block mt-4 text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* UI/UX Design Projects Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-500 ease-in-out">
          <img
            src="/ui.jpg" // Replace with actual image path
            alt="UI/UX Design Projects"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-blue-700">UI/UX Design Projects</h2>
            <p className="text-gray-700 mt-2">
              A showcase of my design work focusing on user experience and interface design.
            </p>
            <a
              href="/project/uiuxdesign"
              className="inline-block mt-4 text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
