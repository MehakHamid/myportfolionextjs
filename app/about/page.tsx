import React from 'react';
import { FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">About Mehak</h1>

        {/* Education Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Education</h2>
          <p className="text-gray-700 leading-relaxed">
            I completed my graduation with a B.Com degree, alongside a UI/UX Design course. Currently, I'm pursuing an AI course at GIAIC to enhance my technical expertise.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Skills</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Customer Service and Support</li>
            <li>Team Coordination and Leadership</li>
            <li>Service Management</li>
            <li>Problem Solving</li>
            <li>Data Analysis</li>
            <li>UI/UX Design</li>
          </ul>
        </section>

        {/* Hobby Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Hobby and Passion</h2>
          <p className="text-gray-700 leading-relaxed">
          My passion for animals extends beyond just being a pet lover—I aspire to make a meaningful difference in their lives. I currently maintain a YouTube channel where I share insights, tips, and moments with my pets, creating a supportive community for animal enthusiasts. In the future, my dream is to establish a shelter and farm dedicated to the rescue, care, and rehabilitation of animals. This vision fuels my dedication to animal welfare, and I aim to create a space where animals can thrive in a safe, loving environment. 
          </p>
        </section>

        {/* Social Media Links */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Connect with Me on my Animals insights</h2>
          <div className="flex justify-center space-x-6">
            <a href="https://www.youtube.com/@allaboutanimals16" target="_blank" rel="noopener noreferrer" className="text-red-600 text-2xl hover:text-red-500">
              <FaYoutube />
            </a>
            <a href="https://facebook.com/profile.php?id=100090873601250&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-2xl hover:text-blue-500">
              <FaFacebook />
            </a>
            <a href="https://instagram.com/allaboutanimals16" target="_blank" rel="noopener noreferrer" className="text-pink-600 text-2xl hover:text-pink-500">
              <FaInstagram />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;

