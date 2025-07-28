import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuthStore } from "./auth/authStore";
import "bootstrap/dist/css/bootstrap.min.css";
// Components

import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import TeacherDashboard from "./pages/teacher/TeacherDashboard";
import StudentDashboard from "./pages/student/StudentDashboard";
import NotFound from "./pages/NotFound";
import Unauthorized from "./pages/Unauthorized";
import LoginPage from "./pages/LoginPage";
import Footer from "./components/Footer";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminFinancial from "./pages/admin/AdminFinancial";
import AdminCommunication from "./pages/admin/AdminCommunication";
import AdminAcademic from "./pages/admin/AdminAcademic";
import TeacherUsers from "./pages/teacher/TeacherUsers";
import TeacherFinancial from "./pages/teacher/TeacherFinancial";
import TeacherCommunication from "./pages/teacher/TeacherCommunication";
import TeacherAcademic from "./pages/teacher/TeacherAcademic";
import StudentUsers from "./pages/student/StudentUsers";
import StudentFinancial from "./pages/student/StudentFinancial";
import StudentCommunication from "./pages/student/StudentCommunication";
import StudentAcademic from "./pages/student/StudentAcademic";

// Public/Common Pages (you can add more)

function App() {
  const checkAuth = useAuthStore((state) => state.checkAuth);

  // Check authentication status on initial app load
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <Router>
      {/* Navbar is always visible */}
      <Routes>
        {/* Public Routes */}

        <Route path="/" element={<LoginPage />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Protected Routes - Admin */}
        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/Users" element={<AdminUsers />} />
          <Route path="/Financial" element={<AdminFinancial />} />
          <Route path="/Communication" element={<AdminCommunication />} />
          <Route path="/Academic" element={<AdminAcademic />} />
          <Route
            path="/admin/users"
            element={
              <div className="pt-24 p-8 bg-gray-50 min-h-screen">
                <h1 className="text-3xl font-bold text-gray-800">
                  Manage Users (Admin)
                </h1>
              </div>
            }
          />
          <Route
            path="/admin/settings"
            element={
              <div className="pt-24 p-8 bg-gray-50 min-h-screen">
                <h1 className="text-3xl font-bold text-gray-800">
                  Admin Settings
                </h1>
              </div>
            }
          />
        </Route>

        {/* Protected Routes - Teacher */}
        <Route element={<ProtectedRoute allowedRoles={["teacher"]} />}>
          <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
          <Route path="/teacher/Users" element={<TeacherUsers />} />
          <Route path="/teacher/Financial" element={<TeacherFinancial />} />
          <Route
            path="/teacher/Communication"
            element={<TeacherCommunication />}
          />
          <Route path="/teacher/Academic" element={<TeacherAcademic />} />
          <Route
            path="/teacher/courses"
            element={
              <div className="pt-24 p-8 bg-gray-50 min-h-screen">
                <h1 className="text-3xl font-bold text-gray-800">
                  My Courses (Teacher)
                </h1>
              </div>
            }
          />
          <Route
            path="/teacher/grade"
            element={
              <div className="pt-24 p-8 bg-gray-50 min-h-screen">
                <h1 className="text-3xl font-bold text-gray-800">
                  Grade Students (Teacher)
                </h1>
              </div>
            }
          />
        </Route>

        {/* Protected Routes - Student */}
        <Route element={<ProtectedRoute allowedRoles={["student"]} />}>
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/student/Users" element={<StudentUsers />} />
          <Route path="/student/Financial" element={<StudentFinancial />} />
          <Route
            path="/student/Communication"
            element={<StudentCommunication />}
          />
          <Route path="/student/Academic" element={<StudentAcademic />} />
          <Route
            path="/student/courses"
            element={
              <div className="pt-24 p-8 bg-gray-50 min-h-screen">
                <h1 className="text-3xl font-bold text-gray-800">
                  My Courses (Student)
                </h1>
              </div>
            }
          />
          <Route
            path="/student/grades"
            element={
              <div className="pt-24 p-8 bg-gray-50 min-h-screen">
                <h1 className="text-3xl font-bold text-gray-800">
                  View Grades (Student)
                </h1>
              </div>
            }
          />
        </Route>

        {/* Catch-all for 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
