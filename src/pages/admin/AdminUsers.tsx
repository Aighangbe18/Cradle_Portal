import React, { useEffect, useState } from "react";
import {
  Container,
  Nav,
  Row,
  Col,
  Button,
  Form,
  Modal,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import { type IconBaseProps } from "react-icons/lib";
import {
  FaPlus,
  FaTrash,
  FaArrowLeft,
  FaArrowRight,
  FaTimes,
  FaBars, // Added FaBars for the hamburger icon
} from "react-icons/fa";
import logoImg from "../../assets/CHS-Logo.png";
import "../../App.css"; // Ensure this CSS file exists for custom styles

const AdminUsers = () => {
  const PlusIcon: React.FC<IconBaseProps> = (props) => <FaPlus {...props} />;
  const TrashIcon: React.FC<IconBaseProps> = (props) => <FaTrash {...props} />;
  const ArrowLeftIcon: React.FC<IconBaseProps> = (props) => (
    <FaArrowLeft {...props} />
  );
  const ArrowRightIcon: React.FC<IconBaseProps> = (props) => (
    <FaArrowRight {...props} />
  );

  const [activeTab, setActiveTab] = useState("administrators");
  const [showModal, setShowModal] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); // Default to closed on small screens

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  // Effect to manage body overflow when sidebar is open on small screens
  useEffect(() => {
    // Only apply overflow hidden if sidebar is open AND screen is small
    const handleResize = () => {
      if (window.innerWidth < 992) {
        // Bootstrap's 'lg' breakpoint
        if (sidebarOpen) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "unset";
        }
      } else {
        document.body.style.overflow = "unset"; // Always unset on larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call initially to set correct overflow state

    return () => {
      window.removeEventListener("resize", handleResize);
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
        className={`text-white p-3 d-flex flex-column justify-content-between sidebar ${
          sidebarOpen ? "sidebar-open" : "sidebar-closed"
        } d-lg-flex`}
        // Removed inline style, will move to App.css or a custom class
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
              aria-label="Close sidebar"
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
              to="/admin/dashboard"
              onClick={() => window.innerWidth < 992 && toggleSidebar()} // Close sidebar on nav click on small screens
            >
              Dashboard
            </Nav.Link>
            <Nav.Link
              className="text-white"
              as={Link}
              to="/users"
              onClick={() => window.innerWidth < 992 && toggleSidebar()}
            >
              Users
            </Nav.Link>
            <Nav.Link
              className="text-white"
              as={Link}
              to="/Academic"
              onClick={() => window.innerWidth < 992 && toggleSidebar()}
            >
              Academic
            </Nav.Link>
            <Nav.Link
              className="text-white"
              as={Link}
              to="/Financial"
              onClick={() => window.innerWidth < 992 && toggleSidebar()}
            >
              Financial
            </Nav.Link>
            <Nav.Link
              className="text-white"
              as={Link}
              to="/Communication"
              onClick={() => window.innerWidth < 992 && toggleSidebar()}
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
            <Nav.Link
              className="text-white"
              as={Link}
              to="/"
              onClick={() => window.innerWidth < 992 && toggleSidebar()}
            >
              Logout
            </Nav.Link>
          </Nav>
        </div>
      </div>

      {/* Main Content */}
      <Container fluid className="p-4 flex-grow-1">
        {/* Hamburger menu for small screens */}
        <Row className="mb-3 d-lg-none">
          <Col>
            <Button
              variant="link"
              onClick={toggleSidebar}
              className="text-dark p-0"
              aria-label="Open sidebar"
            >
              <FaBars size={25} />
            </Button>
          </Col>
        </Row>

        <Row className="mb-3 align-items-center justify-content-between">
          <Col xs={12} md={6}>
            <h4>User</h4>
          </Col>
          <Col xs={12} md={6} className="text-end mt-3 mt-md-0">
            {" "}
            {/* Adjust margin for small screens */}
            <img
              src="/image 5.png"
              alt="User Avatar"
              width="40"
              height="40"
              className="rounded-circle"
            />
          </Col>
        </Row>

        {/* User Category Buttons */}
        <Row className="mb-2">
          <Col className="d-flex flex-wrap gap-2">
            {" "}
            {/* Use flex-wrap and gap for responsiveness */}
            {["administrators", "teachers", "parents", "students"].map(
              (tab) => (
                <Button
                  key={tab}
                  variant={activeTab === tab ? "primary" : "outline-primary"}
                  onClick={() => setActiveTab(tab)}
                  className="flex-grow-1 flex-md-grow-0" // Buttons grow on small screens, fixed on larger
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </Button>
              )
            )}
          </Col>
        </Row>

        <hr />

        {activeTab === "administrators" && (
          <>
            <h5>Administrators</h5>
            <Row className="mb-3">
              <Col xs={12} md={9} className="mb-2 mb-md-0">
                {" "}
                {/* Adjust margin for small screens */}
                <Form.Control
                  type="search"
                  placeholder="Search administrators..."
                />
              </Col>
              <Col xs={12} md={3} className="text-md-end">
                {" "}
                {/* Align button right on medium and up */}
                <Button
                  variant="success"
                  onClick={handleShow}
                  className="w-100 w-md-auto"
                >
                  {" "}
                  {/* Full width on small, auto on medium+ */}
                  <PlusIcon /> Add New Administrator
                </Button>
              </Col>
            </Row>
            <div className="responsive-table-container mb-5">
              {" "}
              {/* Custom class for table styling */}
              <div className="d-flex justify-content-end text-danger fw-normal fs-5 mb-2 me-3">
                {" "}
                {/* Using Bootstrap utility classes */}
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => console.log("Delete clicked")}
                >
                  Delete <TrashIcon />
                </span>
              </div>
              <Table striped bordered hover responsive className="mt-2">
                {" "}
                {/* Removed mt-5 as it was too much space */}
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Date Created</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-active">
                    <td>Samuel Isaiah</td>
                    <td>samuel@cradleschool.ng</td>
                    <td>12/04/2023</td>
                    <td>
                      <span className="text-success">●</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Director</td>
                    <td>director@cradleschool.ng</td>
                    <td>12/04/2023</td>
                    <td>
                      <span className="text-dark">●</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Principal</td>
                    <td>principal@cradleschool.ng</td>
                    <td>12/04/2023</td>
                    <td>
                      <span className="text-success">●</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Directress</td>
                    <td>directress@cradleschool.ng</td>
                    <td>12/04/2023</td>
                    <td>
                      <span className="text-success">●</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Head Teacher</td>
                    <td>eunice@cradleschool.ng</td>
                    <td>12/04/2023</td>
                    <td>
                      <span className="text-success">●</span>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <Row className="align-items-center">
              <Col
                xs={12}
                md={6}
                className="text-center text-md-start mb-2 mb-md-0"
              >
                {" "}
                {/* Center on small, start on medium+ */}
                <strong>Total = 5</strong>
              </Col>
              <Col xs={12} md={6} className="text-center text-md-end">
                {" "}
                {/* Center on small, end on medium+ */}
                <Button size="sm" variant="outline-secondary" className="me-2">
                  <ArrowLeftIcon /> Prev
                </Button>
                <Button size="sm" variant="primary">
                  1
                </Button>{" "}
                <Button size="sm" variant="outline-secondary">
                  2
                </Button>{" "}
                <Button size="sm" variant="outline-secondary">
                  3
                </Button>{" "}
                <Button size="sm" variant="outline-secondary">
                  Next <ArrowRightIcon />
                </Button>
              </Col>
            </Row>
          </>
        )}

        {/* Teachers Tab Content */}
        {activeTab === "teachers" && (
          <>
            <h5>Teachers</h5>
            <Row className="mb-3">
              <Col xs={12} md={9} className="mb-2 mb-md-0">
                <Form.Control type="search" placeholder="Search..." />
              </Col>
              <Col xs={12} md={3} className="text-md-end">
                <Button
                  variant="success"
                  onClick={handleShow}
                  className="w-100 w-md-auto"
                >
                  <PlusIcon /> Add New Teachers
                </Button>
              </Col>
            </Row>

            {/* High School Teachers Section */}
            <div className="responsive-table-container mb-5">
              <div className="d-flex justify-content-between align-items-center mb-2 mx-3 mt-3">
                <span className="fw-bold fs-4 text-dark">High School</span>
                <span
                  className="text-danger fw-normal fs-5"
                  style={{ cursor: "pointer" }}
                  onClick={() => console.log("Delete clicked")}
                >
                  Delete <TrashIcon />
                </span>
              </div>
              <Table striped bordered hover responsive className="mt-2">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Subjects</th>
                    <th>Class</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-active">
                    <td>Samuel Isaiah</td>
                    <td>samuel@cradleschool.ng</td>
                    <td>Computer</td>
                    <td>
                      <span className="text-success">Year 7</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Head Teacher</td>
                    <td>eunice@cradleschool.ng</td>
                    <td>Mathematics</td>
                    <td>
                      <span className="text-success">Year 7</span>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <Row className="align-items-center mb-5">
              <Col
                xs={12}
                md={6}
                className="text-center text-md-start mb-2 mb-md-0"
              >
                <strong>Total = 5</strong>
              </Col>
              <Col xs={12} md={6} className="text-center text-md-end">
                <Button size="sm" variant="outline-secondary" className="me-2">
                  <ArrowLeftIcon /> Prev
                </Button>
                <Button size="sm" variant="primary">
                  1
                </Button>{" "}
                <Button size="sm" variant="outline-secondary">
                  2
                </Button>{" "}
                <Button size="sm" variant="outline-secondary">
                  3
                </Button>{" "}
                <Button size="sm" variant="outline-secondary">
                  Next <ArrowRightIcon />
                </Button>
              </Col>
            </Row>

            {/* Primary Teachers Section */}
            <div className="responsive-table-container mb-5">
              <div className="d-flex justify-content-between align-items-center mb-2 mx-3 mt-3">
                <span className="fw-bold fs-4 text-dark">Primary</span>
                <span
                  className="text-danger fw-normal fs-5"
                  style={{ cursor: "pointer" }}
                  onClick={() => console.log("Delete clicked")}
                >
                  Delete <TrashIcon />
                </span>
              </div>
              <Table striped bordered hover responsive className="mt-2">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Subjects</th>
                    <th>Class</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-active">
                    <td>Samuel Isaiah</td>
                    <td>samuel@cradleschool.ng</td>
                    <td>All</td>
                    <td>
                      <span className="text-success">None</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Head Teacher</td>
                    <td>eunice@cradleschool.ng</td>
                    <td>Mathematics</td>
                    <td>
                      <span className="text-success">None</span>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <Row className="align-items-center mb-5">
              <Col
                xs={12}
                md={6}
                className="text-center text-md-start mb-2 mb-md-0"
              >
                <strong>Total = 5</strong>
              </Col>
              <Col xs={12} md={6} className="text-center text-md-end">
                <Button size="sm" variant="outline-secondary" className="me-2">
                  <ArrowLeftIcon /> Prev
                </Button>
                <Button size="sm" variant="primary">
                  1
                </Button>{" "}
                <Button size="sm" variant="outline-secondary">
                  2
                </Button>{" "}
                <Button size="sm" variant="outline-secondary">
                  3
                </Button>{" "}
                <Button size="sm" variant="outline-secondary">
                  Next <ArrowRightIcon />
                </Button>
              </Col>
            </Row>

            {/* Montessori Teachers Section */}
            <div className="responsive-table-container mb-5">
              <div className="d-flex justify-content-between align-items-center mb-2 mx-3 mt-3">
                <span className="fw-bold fs-4 text-dark">Montessori</span>
                <span
                  className="text-danger fw-normal fs-5"
                  style={{ cursor: "pointer" }}
                  onClick={() => console.log("Delete clicked")}
                >
                  Delete <TrashIcon />
                </span>
              </div>
              <Table striped bordered hover responsive className="mt-2">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Subjects</th>
                    <th>Class</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-active">
                    <td>Samuel Isaiah</td>
                    <td>samuel@cradleschool.ng</td>
                    <td>All</td>
                    <td>
                      <span className="text-success">None</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Head Teacher</td>
                    <td>eunice@cradleschool.ng</td>
                    <td>Mathematics</td>
                    <td>
                      <span className="text-success">None</span>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <Row className="align-items-center mb-5">
              <Col
                xs={12}
                md={6}
                className="text-center text-md-start mb-2 mb-md-0"
              >
                <strong>Total = 35</strong>
              </Col>
              <Col xs={12} md={6} className="text-center text-md-end">
                <Button size="sm" variant="outline-secondary" className="me-2">
                  <ArrowLeftIcon /> Prev
                </Button>
                <Button size="sm" variant="primary">
                  1
                </Button>{" "}
                <Button size="sm" variant="outline-secondary">
                  2
                </Button>{" "}
                <Button size="sm" variant="outline-secondary">
                  3
                </Button>{" "}
                <Button size="sm" variant="outline-secondary">
                  Next <ArrowRightIcon />
                </Button>
              </Col>
            </Row>
          </>
        )}

        {/* Parents Tab Content */}
        {activeTab === "parents" && (
          <>
            <h5>Parents</h5>
            <Row className="mb-3">
              <Col xs={12} md={9} className="mb-2 mb-md-0">
                <Form.Control type="search" placeholder="Search ..." />
              </Col>
              <Col xs={12} md={3} className="text-md-end">
                <Button
                  variant="success"
                  onClick={handleShow}
                  className="w-100 w-md-auto"
                >
                  <PlusIcon /> Add New Parent
                </Button>
              </Col>
            </Row>

            <div className="responsive-table-container mb-5">
              <div className="d-flex justify-content-end text-danger fw-normal fs-5 mb-2 me-3">
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => console.log("Delete clicked")}
                >
                  Delete <TrashIcon />
                </span>
              </div>
              <Table striped bordered hover responsive className="mt-2">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Date Created</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-active">
                    <td>Samuel Isaiah</td>
                    <td>samuel@cradleschool.ng</td>
                    <td>12/04/2023</td>
                    <td>
                      <span className="text-success">●</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Head Teacher</td>
                    <td>eunice@cradleschool.ng</td>
                    <td>12/04/2023</td>
                    <td>
                      <span className="text-success">●</span>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>

            <Row className="align-items-center">
              <Col
                xs={12}
                md={6}
                className="text-center text-md-start mb-2 mb-md-0"
              >
                <strong>Total = 5</strong>
              </Col>
              <Col xs={12} md={6} className="text-center text-md-end">
                <Button size="sm" variant="outline-secondary" className="me-2">
                  <ArrowLeftIcon /> Prev
                </Button>
                <Button size="sm" variant="primary">
                  1
                </Button>{" "}
                <Button size="sm" variant="outline-secondary">
                  2
                </Button>{" "}
                <Button size="sm" variant="outline-secondary">
                  3
                </Button>{" "}
                <Button size="sm" variant="outline-secondary">
                  Next <ArrowRightIcon />
                </Button>
              </Col>
            </Row>
          </>
        )}

        {/* Students Tab Content */}
        {activeTab === "students" && (
          <>
            <h5>Students</h5>
            <Row className="mb-3">
              <Col xs={12} md={9} className="mb-2 mb-md-0">
                <Form.Control type="search" placeholder="Search..." />
              </Col>
              <Col xs={12} md={3} className="text-md-end">
                <Button
                  variant="success"
                  onClick={handleShow}
                  className="w-100 w-md-auto"
                >
                  <PlusIcon /> Add New Students
                </Button>
              </Col>
            </Row>

            {/* High School Students */}
            <div className="responsive-table-container mb-5">
              <div className="d-flex justify-content-between align-items-center mb-2 mx-3 mt-3">
                <span className="fw-bold fs-4 text-dark">High School</span>
                <span
                  className="text-danger fw-normal fs-5"
                  style={{ cursor: "pointer" }}
                  onClick={() => console.log("Delete clicked")}
                >
                  Delete <TrashIcon />
                </span>
              </div>
              <Table striped bordered hover responsive className="mt-2">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Year</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-active">
                    <td>Samuel Isaiah</td>
                    <td>samuel@cradleschool.ng</td>
                    <td>Year 7</td>
                    <td>
                      <span className="text-success">●</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Directress</td>
                    <td>directress@cradleschool.ng</td>
                    <td>Year 7</td>
                    <td>
                      <span className="text-success">●</span>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <Row className="align-items-center mb-5">
              <Col
                xs={12}
                md={6}
                className="text-center text-md-start mb-2 mb-md-0"
              >
                <strong>Total = 5</strong>
              </Col>
              <Col xs={12} md={6} className="text-center text-md-end">
                <Button size="sm" variant="outline-secondary" className="me-2">
                  <ArrowLeftIcon /> Prev
                </Button>
                <Button size="sm" variant="primary">
                  1
                </Button>{" "}
                <Button size="sm" variant="outline-secondary">
                  2
                </Button>{" "}
                <Button size="sm" variant="outline-secondary">
                  3
                </Button>{" "}
                <Button size="sm" variant="outline-secondary">
                  Next <ArrowRightIcon />
                </Button>
              </Col>
            </Row>

            {/* Primary Students */}
            <div className="responsive-table-container mb-5">
              <div className="d-flex justify-content-between align-items-center mb-2 mx-3 mt-3">
                <span className="fw-bold fs-4 text-dark">Primary</span>
                <span
                  className="text-danger fw-normal fs-5"
                  style={{ cursor: "pointer" }}
                  onClick={() => console.log("Delete clicked")}
                >
                  Delete <TrashIcon />
                </span>
              </div>
              <Table striped bordered hover responsive className="mt-2">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>PRY</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-active">
                    <td>Samuel Isaiah</td>
                    <td>samuel@cradleschool.ng</td>
                    <td>PRY 1</td>
                    <td>
                      <span className="text-success">●</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Directress</td>
                    <td>directress@cradleschool.ng</td>
                    <td>PRY 1</td>
                    <td>
                      <span className="text-success">●</span>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <Row className="align-items-center mb-5">
              <Col
                xs={12}
                md={6}
                className="text-center text-md-start mb-2 mb-md-0"
              >
                <strong>Total = 35</strong>
              </Col>
              <Col xs={12} md={6} className="text-center text-md-end">
                <Button size="sm" variant="outline-secondary" className="me-2">
                  <ArrowLeftIcon /> Prev
                </Button>
                <Button size="sm" variant="primary">
                  1
                </Button>{" "}
                <Button size="sm" variant="outline-secondary">
                  2
                </Button>{" "}
                <Button size="sm" variant="outline-secondary">
                  3
                </Button>{" "}
                <Button size="sm" variant="outline-secondary">
                  Next <ArrowRightIcon />
                </Button>
              </Col>
            </Row>
          </>
        )}
      </Container>

      {/* Add New Administrator Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Administrator</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminUsers;
