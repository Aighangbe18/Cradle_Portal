import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuthStore } from "../auth/authStore"; // Import your auth store

const Navbar: React.FC = () => {
  const { isAuthenticated, role, logout } = useAuthStore();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const getNavLinks = () => {
    // Public links (visible to everyone, even logged out)
    let links = [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Contact", path: "/contact" },
    ];

    if (isAuthenticated) {
      if (role === "admin") {
        links = [
          { name: "Admin Dashboard", path: "/admin/dashboard" },
          { name: "Manage Users", path: "/admin/users" },
          { name: "Settings", path: "/admin/settings" },
          ...links, // Add public links if desired
        ];
      } else if (role === "teacher") {
        links = [
          { name: "Teacher Dashboard", path: "/teacher/dashboard" },
          { name: "My Courses", path: "/teacher/courses" },
          { name: "Grade Students", path: "/teacher/grade" },
          ...links,
        ];
      } else if (role === "student") {
        links = [
          { name: "Student Dashboard", path: "/student/dashboard" },
          { name: "My Courses", path: "/student/courses" },
          { name: "View Grades", path: "/student/grades" },
          ...links,
        ];
      }
    }
    return links;
  };

  const navLinks = getNavLinks();

  return (
    <nav className="w-full p-4 top-0 fixed z-50 bg-white shadow-md">
      <div className="mx-auto flex justify-between items-center container">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center text-xl font-bold text-gray-800"
        >
          SchoolPortal
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative font-semibold text-lg transition-colors duration-300
                ${
                  location.pathname === link.path
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1" // Active link style
                    : "text-gray-700 hover:text-blue-500" // Default color and hover
                }`}
              aria-current={
                location.pathname === link.path ? "page" : undefined
              }
            >
              {link.name}
            </Link>
          ))}
          {isAuthenticated ? (
            <button
              onClick={logout}
              className="ml-8 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="ml-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden flex items-center">
          {isAuthenticated ? (
            <button
              onClick={logout}
              className="mr-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-3 rounded text-sm transition-colors duration-200"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="mr-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded text-sm transition-colors duration-200"
            >
              Login
            </Link>
          )}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 focus:outline-none focus:text-blue-500"
            aria-label="Toggle navigation"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
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
                className="w-6 h-6"
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

      {/* Mobile Menu Links (conditionally rendered) */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-white shadow-lg rounded-md border border-gray-100">
          <div className="flex flex-col space-y-2 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                className={`block font-semibold text-lg p-2 rounded-md transition-colors duration-200
                  ${
                    location.pathname === link.path
                      ? "text-blue-950 bg-blue-100"
                      : "text-gray-700 hover:bg-gray-100 hover:text-blue-500"
                  }`}
                aria-current={
                  location.pathname === link.path ? "page" : undefined
                }
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
