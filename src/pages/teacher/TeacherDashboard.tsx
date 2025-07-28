import React, { useState, useEffect } from "react";
import { Container, Nav, Button } from "react-bootstrap";
import { FaBars, FaTimes } from "react-icons/fa"; // Added FaTimes for close button
import { Link } from "react-router-dom";
import logoImg from "../../assets/CHS-Logo.png";

import { useAuthStore } from "../../auth/authStore";

const TeacherDashboard: React.FC = () => {
  const { user } = useAuthStore();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Effect to manage body overflow when sidebar is open on small screens
  useEffect(() => {
    if (sidebarOpen && window.innerWidth < 992) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset"; // Cleanup on unmount
    };
  }, [sidebarOpen]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="d-flex admin-dashboard-wrapper">
      {/* Sidebar */}
      <div
        className={`text-white p-3 w-0 md:min-w-[250px] d-flex flex-column justify-content-between sidebar ${
          sidebarOpen ? "sidebar-open" : "sidebar-closed"
        } d-lg-flex`} /* Always display flex on lg and up */
        style={{ background: "#05022B" }}
      >
        {/* Sidebar content */}
        <div>
          <div className="d-flex justify-content-between align-items-center mb-4 d-lg-none">
            {/* Show only on small screens for the close button */}
            <h4 className="text-white">Admin Menu</h4>
            <Button
              variant="link"
              onClick={toggleSidebar}
              className="text-white p-0"
            >
              <FaTimes size={25} />
            </Button>
          </div>
          <Nav className="flex-column">
            <div>
              <img
                src={logoImg}
                alt="School Logo"
                className="img-fluid mb-5 mt-3"
              />
            </div>
            <Nav.Link
              className="text-white bg-primary rounded mb-2"
              as={Link}
              to="/teacher/dashboard"
            >
              Dashboard
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/teacher/Users">
              Users
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/teacher/Academic">
              Academic
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/teacher/Financial">
              Financial
            </Nav.Link>
            <Nav.Link
              className="text-white"
              as={Link}
              to="/teacher/Communication"
            >
              Communication
            </Nav.Link>
          </Nav>
        </div>
        <div>
          <Nav className="flex-column">
            <Nav.Link className="text-white" href="#">
              Settings
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/">
              Logout
            </Nav.Link>
          </Nav>
        </div>
      </div>

      {/* Main Content */}
      <Container fluid className="p-4 flex-grow-1 main-content">
        {/* Sidebar Toggle Button for smaller screens */}
        <div className="d-lg-none mb-3">
          <Button variant="outline-dark" onClick={toggleSidebar}>
            <FaBars />
            <span className="ms-2">Menu</span>
          </Button>
        </div>

        {/* Header Section */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Hello, {user?.username} (Teacher)!
        </h1>
        <p className="text-lg text-gray-700">
          This is your teacher dashboard. Here you can:
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-600">
          <li>View your assigned courses and classes</li>
          <li>Manage student attendance</li>
          <li>Enter and review grades</li>
          <li>Upload course materials and assignments</li>
          <li>Communicate with students and parents</li>
        </ul>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Upcoming Classes
            </h3>
            <p className="text-gray-900">Math - Grade 7 (10:00 AM)</p>
            <p className="text-gray-900">Science - Grade 8 (11:30 AM)</p>
            <p className="text-gray-500 text-sm mt-2">
              Next class in 30 minutes
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-semibold text-yellow-600 mb-2">
              Assignments Due Soon
            </h3>
            <p className="text-gray-900">History Essay - Grade 9 (Tomorrow)</p>
            <p className="text-gray-900">
              Physics Lab Report - Grade 11 (Monday)
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Don't forget to remind students!
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TeacherDashboard;
