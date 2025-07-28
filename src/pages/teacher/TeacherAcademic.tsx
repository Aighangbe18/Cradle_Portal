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

const TeacherAcademic = () => {
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
      <div className="flex-grow-1 p-4">
        {/* Top Right Image */}
        <div className="d-flex justify-content-end">
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
        <Row className="mb-2">
          <Col className="d-flex gap-3">
            {["Course", "classes", "students"].map((tab) => (
              <button
                key={tab}
                className={`btn btn-outline-primary ${
                  activeTab === tab ? "active" : ""
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </Col>
        </Row>

        {/* Tab Content */}
        <Container className="p-0 mt-4">
          {/* Contents Tab */}
          {activeTab === "Course" && (
            <>
              <hr></hr>
              <h5>Course</h5>
              <div className="d-flex mb-3">
                <Col md={9}>
                  <Form.Control type="search" placeholder="Search course..." />
                </Col>
                <Col md={2} className="text-end">
                  <button
                    className="btn btn-success"
                    onClick={() => setShowCourseModal(true)}
                  >
                    <i className="bi bi-plus"></i> Create New Course
                  </button>
                </Col>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <div className="btn-group">
                  {yearButtons.map((year) => (
                    <Button
                      key={year}
                      variant={
                        year === activeYear ? "primary" : "outline-primary"
                      }
                      onClick={() => setActiveYear(year)}
                    >
                      {year}
                    </Button>
                  ))}
                </div>
                <div>
                  <Button variant="outline-secondary" className="me-2">
                    {activeYear}. Mercury ▼
                  </Button>
                </div>
              </div>

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

              {/* Pagination */}
              <div className="d-flex justify-content-center my-3">
                <div className="btn-group">
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
              <div className="d-flex gap-2 mt-4">
                <button className="btn btn-dark">Edit</button>
                <button className="btn btn-danger">Save</button>
                <button className="btn btn-info">Print</button>
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
                    <div className="d-flex gap-2 mb-2">
                      <Form.Group className="flex-fill">
                        <Form.Label>Link Teachers</Form.Label>
                        <Form.Select>
                          <option>Select</option>
                        </Form.Select>
                      </Form.Group>
                      <Form.Group className="flex-fill">
                        <Form.Label>Number of Terms</Form.Label>
                        <Form.Select>
                          <option>Select</option>
                        </Form.Select>
                      </Form.Group>
                    </div>
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
              <hr></hr>
              <h5>Classes</h5>
              <div className="d-flex mb-3">
                <input
                  type="text"
                  className="form-control me-2"
                  placeholder="Search..."
                />
                <button
                  className="btn btn-success"
                  onClick={() => setShowClassModal(true)}
                >
                  <i className="bi bi-plus"></i> Create New Class
                </button>
              </div>

              <button className="btn btn-outline-primary mb-2">
                Created Classes
              </button>
              <select className="form-select w-auto mb-3">
                <option>Year 7. Mercury</option>
              </select>

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

              {/* Pagination */}
              <div className="d-flex justify-content-center my-3">
                <div className="btn-group">
                  <button className="btn btn-outline-secondary">&laquo;</button>
                  <button className="btn btn-primary">1</button>
                  <button className="btn btn-outline-secondary">2</button>
                  <button className="btn btn-outline-secondary">3</button>
                  <button className="btn btn-outline-secondary">
                    Next &raquo;
                  </button>
                </div>
              </div>

              <div className="d-flex gap-2 mt-4">
                <button className="btn btn-dark">Edit</button>
                <button className="btn btn-danger">Save</button>
                <button className="btn btn-info">Print</button>
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
                    <div className="d-flex gap-2 mb-2">
                      <Form.Group className="flex-fill">
                        <Form.Label>Link Teachers</Form.Label>
                        <Form.Select>
                          <option>Select</option>
                        </Form.Select>
                      </Form.Group>
                      <Form.Group className="flex-fill">
                        <Form.Label>Select School</Form.Label>
                        <Form.Select>
                          <option>Select</option>
                        </Form.Select>
                      </Form.Group>
                    </div>
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
              <hr></hr>
              <h5>Students</h5>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Search..."
              />
              <div className="d-flex gap-2 mb-3">
                {["Year 7", "Year 8", "Year 9", "Year 10"].map((year) => (
                  <button key={year} className="btn btn-outline-secondary">
                    {year}
                  </button>
                ))}
              </div>
              <select className="form-select w-auto mb-3">
                <option>Year 7. Mercury</option>
              </select>

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

              {/* Pagination */}
              <div className="d-flex justify-content-center my-3">
                <div className="btn-group">
                  <button className="btn btn-outline-secondary">&laquo;</button>
                  <button className="btn btn-primary">1</button>
                  <button className="btn btn-outline-secondary">2</button>
                  <button className="btn btn-outline-secondary">3</button>
                  <button className="btn btn-outline-secondary">
                    Next &raquo;
                  </button>
                </div>
              </div>

              <div className="d-flex gap-2 mt-4">
                <button className="btn btn-dark">Edit</button>
                <button className="btn btn-danger">Save</button>
                <button className="btn btn-info">Print</button>
              </div>
            </>
          )}
        </Container>
      </div>
    </div>
  );
};

export default TeacherAcademic;
