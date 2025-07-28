import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-extrabold text-red-600 mb-4">404</h1>
      <p className="text-2xl font-semibold mb-8">Page Not Found</p>
      <p className="text-lg text-center mb-8">
        Oops! The page you're looking for doesn't exist or you don't have
        access.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-200 ease-in-out"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
