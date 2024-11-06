import React from 'react';

const UiUxDesignProjects: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 p-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-green-700 mb-4">UI/UX Design Projects</h1>
        <p className="text-lg text-gray-600">
          Here are some of the UI/UX designs I've worked on. These designs showcase my skills in wireframing, prototyping, and creating user interfaces.
        </p>
      </div>

      {/* Project Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Wireframe of Food Delivery App */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-500 ease-in-out">
          <img
            src="/food-delivery-wireframe.jpg" // Replace with actual image path
            alt="Food Delivery App Wireframe"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-green-700">Food Delivery App Wireframe</h2>
            <p className="text-gray-700 mt-2">
              A wireframe design for a food delivery app, focusing on layout and navigation to enhance user experience.
            </p>
            <div className="mt-4">
              <a
                href="https://yourwireframevercelapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                View Live
              </a>
            </div>
          </div>
        </div>

        {/* Login Design of Gym App */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-500 ease-in-out">
          <img
            src="/gym-app-login-design.jpg" // Replace with actual image path
            alt="Gym App Login Design"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-green-700">Gym App Login Design</h2>
            <p className="text-gray-700 mt-2">
              A user-friendly login screen design for a gym app that provides smooth access to the user account.
            </p>
            <div className="mt-4">
              <a
                href="https://yourgymappvercelapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                View Live
              </a>
            </div>
          </div>
        </div>

        {/* Facebook Login Screen Design */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-500 ease-in-out">
          <img
            src="/facebook-login-design.jpg" // Replace with actual image path
            alt="Facebook Login Screen Design"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-green-700">Facebook Login Screen Design</h2>
            <p className="text-gray-700 mt-2">
              A login screen design inspired by Facebook's login page, designed for ease of use and familiarity.
            </p>
            <div className="mt-4">
              <a
                href="https://yourfacebookloginvercelapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                View Live
              </a>
            </div>
          </div>
        </div>

        {/* eCommerce Website Navbar Design */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-500 ease-in-out">
          <img
            src="/ecommerce-navbar-design.jpg" // Replace with actual image path
            alt="eCommerce Website Navbar"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-green-700">eCommerce Website Navbar</h2>
            <p className="text-gray-700 mt-2">
              A modern and responsive navbar design for an eCommerce website, aimed at improving navigation.
            </p>
            <div className="mt-4">
              <a
                href="https://yourecommercewebsitevercelapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                View Live
              </a>
            </div>
          </div>
        </div>

        {/* Food Delivery App Design */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-500 ease-in-out">
          <img
            src="/food-delivery-app-design.jpg" // Replace with actual image path
            alt="Food Delivery App Design"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-green-700">Food Delivery App Design</h2>
            <p className="text-gray-700 mt-2">
              A fully designed food delivery app that emphasizes a smooth user experience and intuitive navigation.
            </p>
            <div className="mt-4">
              <a
                href="https://yourfooddeliveryappvercelapp.com"
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
