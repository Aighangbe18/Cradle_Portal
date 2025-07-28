import React from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../auth/authStore";

const Unauthorized: React.FC = () => {
  const { role } = useAuthStore();
  let redirectTo = "/login";
  if (role === "admin") redirectTo = "/admin/dashboard";
  if (role === "teacher") redirectTo = "/teacher/dashboard";
  if (role === "student") redirectTo = "/student/dashboard";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-extrabold text-orange-500 mb-4">
        Access Denied
      </h1>
      <p className="text-2xl font-semibold mb-8">
        You don't have permission to view this page.
      </p>
      <p className="text-lg text-center mb-8">
        It looks like you're trying to access a page that is restricted to
        certain user roles.
      </p>
      <Link
        to={redirectTo}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-200 ease-in-out"
      >
        {role ? `Go to Your Dashboard` : `Go to Login`}
      </Link>
    </div>
  );
};

export default Unauthorized;
