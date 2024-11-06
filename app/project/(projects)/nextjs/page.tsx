import React from 'react';

const NextJsProjects: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-6">

      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-blue-700 mb-4">Next.js Projects</h1>
        <p className="text-lg text-gray-600">
          Explore some of my Next.js projects, showcasing my skills in web development and design.
        </p>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        

        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
          <img
            src="/nextp1.png"
            alt="Next.js Insights"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-blue-700">Next.js Insights</h2>
            <p className="text-gray-700 mt-2">
              A website providing definitions and explanations of key Next.js concepts like SSR, SSG, and ISR.
            </p>
            <div className="mt-4 flex justify-between">
              <a
                href="https://github.com/MehakHamid/NexjsInsightsbymh" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition"
              >
                GitHub
              </a>
              <a
                href="https://nextjs-insights.vercel.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition"
              >
                View Live
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
          <img
            src="/todop2.png" 
            alt="To-Do List"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-blue-700">To-Do List</h2>
            <p className="text-gray-700 mt-2">
              A dynamic to-do list where users can add, edit, and delete tasks, showcasing interactivity in Next.js.
            </p>
            <div className="mt-4 flex justify-between">
              <a
                href="https://github.com/MehakHamid/Next-Todos" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition"
              >
                GitHub
              </a>
              <a
                href="https://nexttodosbymh.vercel.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition"
              >
                View Live
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
          <img
            src="/animalp3.png" 
            alt="Animal Pets Care Website"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-blue-700">Animal Pets Care Website</h2>
            <p className="text-gray-700 mt-2">
              A website dedicated to pet care, offering guides on pet behavior, health, and more to help pet owners.
            </p>
            <div className="mt-4 flex justify-between">
              <a
                href="https://github.com/MehakHamid/allaboutanimals" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition"
              >
                GitHub
              </a>
              <a
                href="https://allaboutanimals-ecru.vercel.app/" 
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
