import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../auth/authStore";
import { type UserRole } from "../types/auth";

interface ProtectedRouteProps {
  allowedRoles?: UserRole[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles }) => {
  const { isAuthenticated, role } = useAuthStore();

  if (!isAuthenticated) {
    // Not authenticated, redirect to login page
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && role && !allowedRoles.includes(role)) {
    // Authenticated but not authorized for this role, redirect to a forbidden page or their own dashboard
    // For simplicity, we'll redirect to a generic unauthorized page or login (can be improved)
    return <Navigate to="/unauthorized" replace />; // You might create an /unauthorized page
  }

  return <Outlet />; // User is authenticated and authorized, render child routes
};

export default ProtectedRoute;
