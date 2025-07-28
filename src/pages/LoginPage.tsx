// src/pages/LoginPage.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import backgroundImg from "../assets/navbar.png"; // Ensure this image is high-res and visually appealing
import logoImg from "../assets/CHS-Logo.png"; // Ensure this logo looks good on dark backgrounds
import Login from "./Login"; // Your Tailwind-styled Login component

const LoginPage: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mainNavLinks = [
    { name: "Admission", path: "#admission" },
    { name: "Academics", path: "#academics" }, // Changed "School" to "Academics" for clarity
    { name: "About Us", path: "#about" }, // Changed "About" to "About Us"
    { name: "Contact", path: "#contact" },
  ];

  return (
    <div className="min-h-screen overflow-hidden w-full flex flex-col bg-gray-50 font-inter">
      {/* Top Announcements Bar */}
      <nav className="bg-black text-white py-3 text-center text-sm md:text-base shadow-lg z-20">
        <div className="container mx-auto flex md:flex-row items-center justify-between px-4">
          <span className="mb-1 md:mb-0 font-semibold text-center md:text-left text-blue-100 animate-pulse-slow">
            📣 Admissions are ongoing! Register your kids for the exam.
          </span>
          <div className="flex items-center space-x-3 text-sm font-light">
            <Link
              to="/"
              className="px-1.5 py-1 text-white transition-colors duration-300 font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              LOGIN
            </Link>
            <span className="text-white text-opacity-70">|</span>
            <Link
              to="/register"
              className="px-2 py-1.5 border-white border-1 text-white font-bold rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>
      {/* Main Hero Section with Background Image and Navigation */}
      <header
        className="relative m-2.5 md:ml-10 md:mr-10 md:mt-5 md:mb-10 h-[200px] md:h-[350px] overflow-hidden place-items-center flex-col align-middle flex justify-between pb-8 shadow-2xl" /* Adjusted height, added pb-8 */
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${backgroundImg})`, // Stronger overlay
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderBottomLeftRadius: "60px", // Even more pronounced curve
          borderBottomRightRadius: "60px",
        }}
      >
        <nav className="w-full p-2 z-50">
          <div className="container mx-auto flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                src={logoImg}
                alt="School Logo"
                className="h-16 md:h-24 drop-shadow-xl transition-transform duration-300 hover:scale-105" // Larger logo, stronger shadow, hover effect
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 lg:space-x-12 items-center">
              {mainNavLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-white text-[15px] font-bold hover:text-blue-300 transition-all duration-300 relative group" /* Added group for underline effect */
                >
                  {link.name}
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>{" "}
                  {/* Underline animation */}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button (Hamburger) */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white focus:outline-none  rounded-md p-2 transition-all duration-300"
                aria-label="Toggle main navigation"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <svg
                    className="w-7 h-7 transform rotate-90 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="w-7 h-7 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Overlay - Slide-in Effect */}
        <div
          className={`md:hidden fixed inset-0 bg-gray-900 bg-opacity-95 z-40 transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } flex flex-col items-center justify-center space-y-8`}
        >
          {/* REMOVED THE REDUNDANT CLOSE BUTTON HERE */}
          {mainNavLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => setIsMobileMenuOpen(false)} // This onClick will close the menu when a link is clicked
              className="text-white text-2xl font-bold hover:text-blue-400 transition-colors duration-300 uppercase py-2 w-full text-center"
            >
              {link.name}
            </a>
          ))}
          {/* Also add Portal Login and Register links to mobile menu for consistency */}
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white text-2xl font-bold hover:text-blue-400 transition-colors duration-300 uppercase py-2 w-full text-center"
          >
            Portal Login
          </Link>
          <Link
            to="/register"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white text-2xl font-bold hover:text-blue-400 transition-colors duration-300 uppercase py-2 w-full text-center"
          >
            Register
          </Link>
        </div>
        <div className="justify-end align-middle items-center">
          <h1 className="text-white text-center font-bold">LOGIN IN</h1>
          <p className="text-white">
            Enter your login details to gain access to your portal.
          </p>
        </div>
      </header>
      {/* Login Section */}
      <main className="container mx-auto px-4 py-12 flex-grow md:block">
        <div className="bg-white p-6 md:p-10 rounded-xl shadow-2xl w-[350px] md:min-w-lg mx-auto transform -translate-y-24 md:-translate-y-32 z-10 relative">
          {" "}
          {/* Increased negative translate-y, thicker border */}
          <Login />
        </div>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LoginPage;
