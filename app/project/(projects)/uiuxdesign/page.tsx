import React from 'react';
import Image from 'next/image';

const UiUxDesignProjects: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 p-6">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-green-700 mb-4">UI/UX Design Projects</h1>
        <p className="text-lg text-gray-600">
          Here are some of the UI/UX designs I've worked on. These designs showcase my skills in wireframing, prototyping, and creating user interfaces.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-500 ease-in-out">
          <Image
            src="/foodwp1.png"
            alt="Food Delivery App Wireframe"
            width={500}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-green-700">Food Delivery App Wireframe</h2>
            <p className="text-gray-700 mt-2">
              A wireframe design for a food delivery app, focusing on layout and navigation to enhance user experience.
            </p>
            <div className="mt-4">
              <a
                href="https://www.figma.com/proto/5qARxN9DfmAfF6bziIZwE1/Untitled?node-id=25-15&node-type=canvas&viewport=374%2C91%2C0.12&t=Coxt2eAHuQs8kBmN-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=25%3A15&show-proto-sidebar=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                View Live
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-500 ease-in-out">
          <Image
            src="/gym.png"
            alt="Gym App Login Design"
            width={500}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-green-700">Gym App Login Design</h2>
            <p className="text-gray-700 mt-2">
              A user-friendly login screen design for a gym app that provides smooth access to the user account.
            </p>
            <div className="mt-4">
              <a
                href="https://www.figma.com/proto/5qARxN9DfmAfF6bziIZwE1/Untitled?page-id=7%3A2&node-id=111-66&node-type=frame&viewport=49%2C-1259%2C0.4&t=vyWdWvN5wvYl47Hp-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=111%3A66&show-proto-sidebar=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                View Live
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-500 ease-in-out">
          <Image
            src="/logifb.png"
            alt="Facebook Login Screen Design"
            width={500}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-green-700">Facebook Login Screen Design</h2>
            <p className="text-gray-700 mt-2">
              A login screen design inspired by Facebook's login page, designed for ease of use and familiarity.
            </p>
            <div className="mt-4">
              <a
                href="https://www.figma.com/proto/5qARxN9DfmAfF6bziIZwE1/Untitled?page-id=7%3A2&node-id=35-2&node-type=frame&viewport=376%2C-366%2C0.29&t=Vbt1neDGTwIBhbKl-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=35%3A2&show-proto-sidebar=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                View Live
              </a>
            </div>
          </div>
        </div>

        {/* Project Card: eCommerce Website Navbar (Updated Style) */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-500 ease-in-out">
          <Image
            src="/ecomp1.png"
            alt="eCommerce Website Navbar"
            width={500}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-green-700">eCommerce Website Navbar</h2>
            <p className="text-gray-700 mt-2">
              A modern and responsive navbar design for an eCommerce website, aimed at improving navigation.
            </p>
            <div className="mt-4">
              <a
                href="https://www.figma.com/proto/5qARxN9DfmAfF6bziIZwE1/Untitled?page-id=7%3A2&node-id=7-3&node-type=canvas&viewport=374%2C91%2C0.12&t=zucEobQrk5Dh3SBl-1&scaling=contain&content-scaling=fixed&starting-point-node-id=7%3A3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                View Live
              </a>
            </div>
          </div>
        </div>

        {/* Project Card: Food Delivery App Design (Updated Style) */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-500 ease-in-out">
          <Image
            src="/foodp2.png"
            alt="Food Delivery App Design"
            width={500}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-green-700">Food Delivery App Design</h2>
            <p className="text-gray-700 mt-2">
              A fully designed food delivery app that emphasizes a smooth user experience and intuitive navigation.
            </p>
            <div className="mt-4">
              <a
                href="https://www.figma.com/proto/vYqm2573J5L2vVZfKj6QsY/Untitled?page-id=0%3A1&node-id=2-61&node-type=frame&viewport=140%2C316%2C0.43&t=oMb6G54p9Uhi4IDh-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition"
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

export default UiUxDesignProjects;
