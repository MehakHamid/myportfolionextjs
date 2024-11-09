import React from 'react';
import Image from 'next/image';

const projects = [
  {
    title: 'Calculator',
    description: 'A simple calculator for basic arithmetic operations.',
    link: 'https://github.com/MehakHamid/My-First-Calculator', 
    image: '/calculator.png', 
  },
  {
    title: 'ATM Machine',
    description: 'A CLI ATM machine simulation with deposit and withdraw functionality.',
    link: 'https://github.com/MehakHamid/atm-machine',
    image: '/atm.png',
  },
  {
    title: 'Number Guessing Game',
    description: 'A CLI game where you guess the generated number.',
    link: 'https://github.com/MehakHamid/Number-Guessing-Game',
    image: '/guess.png',
  },
  {
    title: 'To-Do List',
    description: 'A CLI app for managing daily tasks with add/edit/delete options.',
    link: 'https://github.com/MehakHamid/mh_todos-list',
    image: '/todos.png',
  },
  {
    title: 'Ticket Checker',
    description: 'Checks ticket validity and availability in real-time.',
    link: 'https://github.com/MehakHamid/MH-Ticket-Checker',
    image: '/ticket.png',
  },
  {
    title: 'Currency Converter',
    description: 'Converts currency values between different denominations.',
    link: 'https://github.com/MehakHamid/mh-currency-converter',
    image: '/currency.png',
  },
  {
    title: 'Day Finder',
    description: 'Finds the day of the week for any given date.',
    link: 'https://github.com/MehakHamid/day-finder',
    image: '/day.png',
  },
];

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-6">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-blue-700 mb-4">TypeScript Projects</h1>
        <p className="text-lg text-gray-600">
          Explore various command-line applications created using TypeScript.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-500 ease-in-out"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-blue-700">{project.title}</h2>
              <p className="text-gray-700 mt-2">{project.description}</p>
              <div className="mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
