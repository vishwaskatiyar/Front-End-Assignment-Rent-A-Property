import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaQuestionCircle,
  FaInfoCircle,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import ".././index.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gradient-to-r from-blue-800 to-blue-600 shadow-lg py-4">
      <div className="container mx-auto flex justify-between items-center px-6 md:px-8 lg:px-12">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQemwTvyPAOBUQE_9Nh35Frs3LtZoh86avasg&usqp=CAU"
            alt="Logo"
            className="h-12 w-12 md:h-16 md:w-16 rounded-full border-4 border-white shadow-lg transform transition-transform hover:scale-105"
          />
          <span className="text-white text-2xl md:text-4xl font-extrabold tracking-widest">
            Rent a Property
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link
            to="/"
            className="text-white text-base md:text-lg font-semibold hover:text-gray-100 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/favorites"
            className="text-white text-base md:text-lg font-semibold hover:text-gray-100 transition duration-300"
          >
            Favorites
          </Link>
          <Link
            to="/contact"
            className="text-white text-base md:text-lg font-semibold hover:text-gray-100 transition duration-300"
          >
            <FaPhone className="inline mr-2 text-lg md:text-xl" /> Contact
          </Link>
          <Link
            to="/help"
            className="text-white text-base md:text-lg font-semibold hover:text-gray-100 transition duration-300"
          >
            <FaQuestionCircle className="inline mr-2 text-lg md:text-xl" /> Help
          </Link>
          <Link
            to="/about"
            className="text-white text-base md:text-lg font-semibold hover:text-gray-100 transition duration-300"
          >
            <FaInfoCircle className="inline mr-2 text-lg md:text-xl" /> About Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white text-3xl hover:text-gray-100 transition duration-300"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 w-4/5 md:w-2/3 bg-white border-l border-gray-300 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 space-y-4">
          <Link
            to="/"
            onClick={toggleMenu}
            className="text-blue-800 text-lg font-semibold hover:text-gray-600 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/favorites"
            onClick={toggleMenu}
            className="text-blue-800 text-lg font-semibold hover:text-gray-600 transition duration-300"
          >
            Favorites
          </Link>
          <Link
            to="/contact"
            onClick={toggleMenu}
            className="text-blue-800 text-lg font-semibold hover:text-gray-600 transition duration-300"
          >
            <FaPhone className="inline mr-2 text-xl" /> Contact
          </Link>
          <Link
            to="/help"
            onClick={toggleMenu}
            className="text-blue-800 text-lg font-semibold hover:text-gray-600 transition duration-300"
          >
            <FaQuestionCircle className="inline mr-2 text-xl" /> Help
          </Link>
          <Link
            to="/about"
            onClick={toggleMenu}
            className="text-blue-800 text-lg font-semibold hover:text-gray-600 transition duration-300"
          >
            <FaInfoCircle className="inline mr-2 text-xl" /> About Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
