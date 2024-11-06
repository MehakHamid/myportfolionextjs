import React from 'react';

const NextJsProjects: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-blue-700 mb-4">Next.js Projects</h1>
        <p className="text-lg text-gray-600">
          Explore some of my Next.js projects, where I demonstrate my skills in building full-stack applications, static sites, and more.
        </p>
      </div>

      {/* Project Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Next.js Insights Project */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
          <img
            src="/nextjs-insights.png" // Replace with your image path
            alt="Next.js Insights"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-blue-700">Next.js Insights</h2>
            <p className="text-gray-700 mt-2">
              A project that provides detailed insights and definitions on various Next.js topics, including SSR, SSG, ISR, and more.
            </p>
            <div className="mt-4 flex justify-between">
              <a
                href="https://github.com/yourusername/nextjs-insights" // Replace with your GitHub link
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition"
              >
                GitHub
              </a>
              <a
                href="https://nextjs-insights.vercel.app" // Replace with your Vercel link
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition"
              >
                View Live
              </a>
            </div>
          </div>
        </div>

        {/* To-Do List Project */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
          <img
            src="/todo-list.png" // Replace with your image path
            alt="To-Do List"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-blue-700">To-Do List</h2>
            <p className="text-gray-700 mt-2">
              A simple and interactive to-do list built with Next.js, allowing users to add, edit, and delete tasks dynamically.
            </p>
            <div className="mt-4 flex justify-between">
              <a
                href="https://github.com/yourusername/todo-list" // Replace with your GitHub link
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition"
              >
                GitHub
              </a>
              <a
                href="https://todo-list.vercel.app" // Replace with your Vercel link
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition"
              >
                View Live
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextJsProjects;
