import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col items-center justify-center text-center p-6">
      {/* Hero Section */}
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-blue-700 mb-4">Hello, I'm Mehak</h1>
        <p className="text-lg text-gray-700 mb-6">
          A passionate professional with extensive experience in customer service and network coordination. I'm dedicated to continuous learning and am currently pursuing AI studies.
        </p>
        <p className="text-lg text-gray-600">
          Explore my portfolio to learn more about my journey, skills, and projects.
        </p>
      </div>

      {/* Links to Sections */}
      <div className="mt-12 flex flex-wrap justify-center space-x-4 gap-y-4 md:gap-y-0 md:space-x-6">
        <Link href="/about" className="text-white bg-blue-600 px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition transform hover:scale-105">
          About Me
        </Link>
        <Link href="/experience" className="text-white bg-blue-600 px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition transform hover:scale-105">
          Experience
        </Link>
        <Link href="/projects" className="text-white bg-blue-600 px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition transform hover:scale-105">
          Projects
        </Link>
        <Link href="/contact" className="text-white bg-blue-600 px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition transform hover:scale-105">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Home;
