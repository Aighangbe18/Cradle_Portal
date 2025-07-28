import { useEffect, useState } from "react";
import {
  Container,
  Nav,
  Button,
  Form,
  Modal,
  Table,
  Col,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logoImg from "../../assets/CHS-Logo.png";
import "../../App.css";
import { FaTimes } from "react-icons/fa";

const AdminAcademic = () => {
  const [activeTab, setActiveTab] = useState("Course");
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [showClassModal, setShowClassModal] = useState(false);
  const [activeYear, setActiveYear] = useState("Year 7");
  const yearButtons = ["Year 7", "Year 8", "Year 9", "Year 10"];
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
    <div className="d-flex admin-dashboard-wrapper min-vh-100">
      {/* Sidebar */}
      <div
        className={`text-white p-3 d-flex flex-column justify-content-between sidebar ${
          sidebarOpen ? "sidebar-open" : "sidebar-closed"
        } d-lg-flex`}
        style={{ background: "#05022B" }}
      >
        {/* Sidebar content */}
        <div>
          <div className="d-flex justify-content-between align-items-center mb-4 d-lg-none">
            {/* Show only on small screens for the close button */}
            <h4 className="text-white mb-0">Admin Menu</h4> {/* Added mb-0 */}
            <Button
              variant="link"
              onClick={toggleSidebar}
              className="text-white p-0"
              aria-label="Close sidebar" // Added aria-label for accessibility
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
            >
              Dashboard
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/users">
              Users
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/Academic">
              Academic
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/Financial">
              Financial
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/Communication">
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
      <div className="flex-grow-1 p-3 p-md-4">
        {" "}
        {/* Adjusted padding for smaller screens */}
        {/* Top Right Image */}
        <div className="d-flex justify-content-end mb-4">
          {" "}
          {/* Added margin-bottom */}
          <img
            src="/image 5.png"
            alt="User Avatar"
            width="40"
            height="40"
            className="rounded-circle"
          />
        </div>
        {/* Header */}
        <h3 className="mt-2">Academic</h3>
        {/* Horizontal Nav Tabs */}
        <Row className="mb-3">
          {" "}
          {/* Adjusted margin-bottom */}
          <Col xs={12} className="d-flex flex-wrap gap-2">
            {" "}
            {/* Added flex-wrap and gap */}
            {["Course", "classes", "students"].map((tab) => (
              <button
                key={tab}
                className={`btn ${
                  activeTab === tab ? "btn-primary" : "btn-outline-primary"
                } flex-grow-1 flex-md-grow-0`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </Col>
        </Row>
        {/* Tab Content */}
        <Container fluid className="p-0 mt-4">
          {" "}
          {/* Used Container fluid for full width */}
          {/* Contents Tab */}
          {activeTab === "Course" && (
            <>
              <hr />
              <h5 className="mb-3">Course</h5> {/* Added margin-bottom */}
              <Row className="mb-3 gy-2">
                {" "}
                {/* Added gy-2 for vertical gutter on small screens */}
                <Col xs={12} md={9}>
                  {" "}
                  {/* Full width on extra small, 9 cols on medium and up */}
                  <Form.Control type="search" placeholder="Search course..." />
                </Col>
                <Col xs={12} md={3} className="text-md-end">
                  {" "}
                  {/* Full width on extra small, 3 cols on medium and up, text-align on medium */}
                  <button
                    className="btn btn-success w-100 w-md-auto"
                    onClick={() => setShowCourseModal(true)}
                  >
                    <i className="bi bi-plus"></i> Create New Course
                  </button>
                </Col>
              </Row>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-3 align-items-md-center gap-2">
                {" "}
                {/* Responsive flex and gap */}
                <div className="btn-group flex-wrap">
                  {" "}
                  {/* Allow buttons to wrap */}
                  {yearButtons.map((year) => (
                    <Button
                      key={year}
                      variant={
                        year === activeYear ? "primary" : "outline-primary"
                      }
                      onClick={() => setActiveYear(year)}
                      className="flex-grow-1 flex-md-grow-0" // Make buttons grow on small screens
                    >
                      {year}
                    </Button>
                  ))}
                </div>
                <div>
                  <Button
                    variant="outline-secondary"
                    className="w-100 w-md-auto"
                  >
                    {" "}
                    {/* Full width on small, auto on medium */}
                    {activeYear}. Mercury ▼
                  </Button>
                </div>
              </div>
              <div className="table-responsive">
                {" "}
                {/* Makes table horizontally scrollable on small screens */}
                <Table bordered>
                  <thead>
                    <tr>
                      <th>Subjects</th>
                      <th>Description</th>
                      <th>Assigned Teacher</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Mathematics</td>
                      <td>Develop students' thinking</td>
                      <td>Mrs. Victoria Omoba</td>
                    </tr>
                    <tr>
                      <td>English Language</td>
                      <td>Develop students' writing</td>
                      <td>Mrs. Victoria Omoba</td>
                    </tr>
                    <tr>
                      <td>Biology</td>
                      <td>Lorem ipsum dolor sit amet, sed do</td>
                      <td>Mrs. Victoria Omoba</td>
                    </tr>
                    <tr>
                      <td>Physics</td>
                      <td>Lorem ipsum dolor sit amet, sed do</td>
                      <td>Mrs. Victoria Omoba</td>
                    </tr>
                    <tr>
                      <td>Chemistry</td>
                      <td>Lorem ipsum dolor sit amet, sed do</td>
                      <td>Mrs. Victoria Omoba</td>
                    </tr>
                    <tr>
                      <td>Basic Science & Technology</td>
                      <td>Lorem ipsum dolor sit amet, sed do</td>
                      <td>Mrs. Victoria Omoba</td>
                    </tr>
                    <tr>
                      <td>Geography</td>
                      <td>Lorem ipsum dolor sit amet, sed do</td>
                      <td>Mrs. Victoria Omoba</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              {/* Pagination */}
              <div className="d-flex justify-content-center my-3">
                <div className="btn-group flex-wrap">
                  {" "}
                  {/* Allow pagination buttons to wrap */}
                  <button className="btn btn-outline-secondary">&laquo;</button>
                  <button className="btn btn-primary">1</button>
                  <button className="btn btn-outline-secondary">2</button>
                  <button className="btn btn-outline-secondary">3</button>
                  <button className="btn btn-outline-secondary">
                    Next &raquo;
                  </button>
                </div>
              </div>
              {/* Footer Buttons */}
              <div className="d-flex flex-column flex-md-row gap-2 mt-4">
                {" "}
                {/* Responsive flex direction and gap */}
                <button className="btn btn-dark w-100 w-md-auto">Edit</button>
                <button className="btn btn-danger w-100 w-md-auto">Save</button>
                <button className="btn btn-info w-100 w-md-auto">Print</button>
              </div>
              {/* Course Modal */}
              <Modal
                show={showCourseModal}
                onHide={() => setShowCourseModal(false)}
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title>New Course</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-2">
                      <Form.Label>Subject Name</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    <Row className="mb-2 g-2">
                      {" "}
                      {/* Using Row and g-2 for responsive columns and gutter */}
                      <Col xs={12} md={6}>
                        {" "}
                        {/* Full width on extra small, half on medium and up */}
                        <Form.Group className="flex-fill">
                          <Form.Label>Link Teachers</Form.Label>
                          <Form.Select>
                            <option>Select</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col xs={12} md={6}>
                        {" "}
                        {/* Full width on extra small, half on medium and up */}
                        <Form.Group className="flex-fill">
                          <Form.Label>Number of Terms</Form.Label>
                          <Form.Select>
                            <option>Select</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group className="mb-3">
                      <Form.Label>Course Description</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <div className="text-center">
                      <Button variant="primary">Create</Button>
                    </div>
                  </Form>
                </Modal.Body>
              </Modal>
            </>
          )}
          {/* Classes Tab */}
          {activeTab === "classes" && (
            <>
              <hr />
              <h5 className="mb-3">Classes</h5> {/* Added margin-bottom */}
              <div className="d-flex flex-column flex-md-row mb-3 gap-2">
                {" "}
                {/* Responsive flex direction and gap */}
                <Form.Control
                  type="text"
                  className="me-md-2 w-100 w-md-auto flex-grow-1" // Adjusted width for responsiveness
                  placeholder="Search..."
                />
                <button
                  className="btn btn-success w-100 w-md-auto"
                  onClick={() => setShowClassModal(true)}
                >
                  <i className="bi bi-plus"></i> Create New Class
                </button>
              </div>
              <Button variant="outline-primary mb-2">Created Classes</Button>
              <Form.Select className="w-auto mb-3 d-block d-md-inline-block">
                {" "}
                {/* Make it block on small screens, inline-block on medium */}
                <option>Year 7. Mercury</option>
              </Form.Select>
              <div className="table-responsive">
                {" "}
                {/* Makes table horizontally scrollable on small screens */}
                <Table bordered>
                  <thead>
                    <tr>
                      <th>S/N</th>
                      <th>Class</th>
                      <th>Assigned Teacher</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Year 9, Mercury</td>
                      <td>Mrs. Victoria Omoba</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Year 9, Mercury</td>
                      <td>Mrs. Victoria Omoba</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Year 9, Mercury</td>
                      <td>Mrs. Victoria Omoba</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Year 9, Mercury</td>
                      <td>Mrs. Victoria Omoba</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Year 9, Mercury</td>
                      <td>Mrs. Victoria Omoba</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Year 9, Mercury</td>
                      <td>Mrs. Victoria Omoba</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Year 10, Mercury</td>
                      <td>Mrs. Victoria Omoba</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              {/* Pagination */}
              <div className="d-flex justify-content-center my-3">
                <div className="btn-group flex-wrap">
                  <button className="btn btn-outline-secondary">&laquo;</button>
                  <button className="btn btn-primary">1</button>
                  <button className="btn btn-outline-secondary">2</button>
                  <button className="btn btn-outline-secondary">3</button>
                  <button className="btn btn-outline-secondary">
                    Next &raquo;
                  </button>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row gap-2 mt-4">
                {" "}
                {/* Responsive flex direction and gap */}
                <button className="btn btn-dark w-100 w-md-auto">Edit</button>
                <button className="btn btn-danger w-100 w-md-auto">Save</button>
                <button className="btn btn-info w-100 w-md-auto">Print</button>
              </div>
              {/* Class Modal */}
              <Modal
                show={showClassModal}
                onHide={() => setShowClassModal(false)}
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title>New Class</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-2">
                      <Form.Label>Class Name</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    <Row className="mb-2 g-2">
                      {" "}
                      {/* Using Row and g-2 for responsive columns and gutter */}
                      <Col xs={12} md={6}>
                        {" "}
                        {/* Full width on extra small, half on medium and up */}
                        <Form.Group className="flex-fill">
                          <Form.Label>Link Teachers</Form.Label>
                          <Form.Select>
                            <option>Select</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col xs={12} md={6}>
                        {" "}
                        {/* Full width on extra small, half on medium and up */}
                        <Form.Group className="flex-fill">
                          <Form.Label>Select School</Form.Label>
                          <Form.Select>
                            <option>Select</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group className="mb-3">
                      <Form.Label>Class Description</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <div className="text-center">
                      <Button variant="primary">Create</Button>
                    </div>
                  </Form>
                </Modal.Body>
              </Modal>
            </>
          )}
          {/* Students Tab */}
          {activeTab === "students" && (
            <>
              <hr />
              <h5 className="mb-3">Students</h5> {/* Added margin-bottom */}
              <Form.Control
                type="text"
                className="mb-3" // Full width by default
                placeholder="Search..."
              />
              <div className="d-flex flex-wrap gap-2 mb-3">
                {" "}
                {/* Allow buttons to wrap and add gap */}
                {["Year 7", "Year 8", "Year 9", "Year 10"].map((year) => (
                  <button
                    key={year}
                    className="btn btn-outline-secondary flex-grow-1 flex-md-grow-0" // Make buttons grow on small screens
                  >
                    {year}
                  </button>
                ))}
              </div>
              <Form.Select className="w-auto mb-3 d-block d-md-inline-block">
                {" "}
                {/* Make it block on small screens, inline-block on medium */}
                <option>Year 7. Mercury</option>
              </Form.Select>
              <div className="table-responsive">
                {" "}
                {/* Makes table horizontally scrollable on small screens */}
                <Table bordered>
                  <thead>
                    <tr>
                      <th>S/N</th>
                      <th>Name</th>
                      <th>First Check</th>
                      <th>Mid Term</th>
                      <th>PNA</th>
                      <th>Exam</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>John Doe</td>
                      <td>50%</td>
                      <td>50%</td>
                      <td>50%</td>
                      <td>50%</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>John Doe</td>
                      <td>70%</td>
                      <td>70%</td>
                      <td>70%</td>
                      <td>70%</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>John Doe</td>
                      <td>70%</td>
                      <td>70%</td>
                      <td>70%</td>
                      <td>70%</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>John Doe</td>
                      <td>70%</td>
                      <td>70%</td>
                      <td>70%</td>
                      <td>70%</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>John Doe</td>
                      <td>100%</td>
                      <td>70%</td>
                      <td>70%</td>
                      <td>70%</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>John Doe</td>
                      <td>50%</td>
                      <td>50%</td>
                      <td>50%</td>
                      <td>50%</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>John Doe</td>
                      <td>50%</td>
                      <td>50%</td>
                      <td>50%</td>
                      <td>50%</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>John Doe</td>
                      <td>50%</td>
                      <td>50%</td>
                      <td>50%</td>
                      <td>50%</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>John Doe</td>
                      <td>50%</td>
                      <td>50%</td>
                      <td>50%</td>
                      <td>50%</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>John Doe</td>
                      <td>50%</td>
                      <td>50%</td>
                      <td>50%</td>
                      <td>50%</td>
                    </tr>
                    <tr>
                      <td>11</td>
                      <td>John Doe</td>
                      <td>50%</td>
                      <td>50%</td>
                      <td>50%</td>
                      <td>50%</td>
                    </tr>
                    <tr>
                      <td>12</td>
                      <td>John Doe</td>
                      <td>50%</td>
                      <td>50%</td>
                      <td>50%</td>
                      <td>50%</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              {/* Pagination */}
              <div className="d-flex justify-content-center my-3">
                <div className="btn-group flex-wrap">
                  <button className="btn btn-outline-secondary">&laquo;</button>
                  <button className="btn btn-primary">1</button>
                  <button className="btn btn-outline-secondary">2</button>
                  <button className="btn btn-outline-secondary">3</button>
                  <button className="btn btn-outline-secondary">
                    Next &raquo;
                  </button>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row gap-2 mt-4">
                {" "}
                {/* Responsive flex direction and gap */}
                <button className="btn btn-dark w-100 w-md-auto">Edit</button>
                <button className="btn btn-danger w-100 w-md-auto">Save</button>
                <button className="btn btn-info w-100 w-md-auto">Print</button>
              </div>
            </>
          )}
        </Container>
      </div>
    </div>
  );
};

export default AdminAcademic;
