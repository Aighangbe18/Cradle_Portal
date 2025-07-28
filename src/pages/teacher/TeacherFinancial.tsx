import TopImage from "../../components/TopImage";
import FinancialTab from "../../components/FinancialTab";
import CreatedCategoryTab from "../../components/CreatedCategoryTab";
import { useEffect, useState } from "react";
import { Button, Nav } from "react-bootstrap";

import { FaTimes } from "react-icons/fa"; // Added FaTimes for close button
import { Link } from "react-router-dom";
import logoImg from "../../assets/CHS-Logo.png";

const TeacherFinancial = () => {
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

  const [activeTab, setActiveTab] = useState<"financial" | "category">(
    "financial"
  );

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
      <div className="flex-grow-1 d-flex flex-column">
        <div className="d-flex justify-content-end align-items-start p-3">
          <TopImage />
        </div>

        <div className="px-4">
          {/* Header */}
          <h3 className="fw-bold mb-3">Financial</h3>

          {/* Horizontal Navbar */}
          <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
            <div className="btn-group">
              <button
                className={`btn ${
                  activeTab === "financial"
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
                onClick={() => setActiveTab("financial")}
              >
                Financial
              </button>
              <button
                className={`btn ${
                  activeTab === "category"
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
                onClick={() => setActiveTab("category")}
              >
                Created Category
              </button>
            </div>

            <div className="dropdown">
              <button
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
              >
                High School
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item">Primary</button>
                </li>
                <li>
                  <button className="dropdown-item">Montessori</button>
                </li>
              </ul>
            </div>
          </div>

          {/* Dynamic Content */}
          {activeTab === "financial" ? (
            <FinancialTab />
          ) : (
            <CreatedCategoryTab />
          )}
        </div>
      </div>
    </div>
  );
};

export default TeacherFinancial;
