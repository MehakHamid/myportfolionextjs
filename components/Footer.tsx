import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 p-6">
      <div className="container mx-auto flex flex-col items-center justify-center text-gray-400">
        {/* Social Links */}
        <div className="flex space-x-6 mb-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaLinkedin size={28} />
          </a>
        </div>

        {/* Centered Copyright Text */}
        <p className="text-center text-sm">&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}
