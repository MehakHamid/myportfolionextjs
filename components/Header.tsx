import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-gray-800 text-white p-5">
      {/* Header Container */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Logo */}
        <div className="text-3xl font-bold">
          <h1>
            <span className="text-yellow-400">Mehak</span> Hamid
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="/" className="hover:text-yellow-400 transition duration-300">Home</Link>
          <Link href="/about" className="hover:text-yellow-400 transition duration-300">About</Link>
          <Link href="/experience" className="hover:text-yellow-400 transition duration-300">Experience</Link>
          <Link href="/project" className="hover:text-yellow-400 transition duration-300">Projects</Link>
        </div>

        {/* Contact Button */}
        <div className="mt-4 md:mt-0">
          <Link href="/contact" className="bg-yellow-400 text-gray-800 px-4 py-2 rounded-lg hover:bg-yellow-500 transition duration-300">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}
