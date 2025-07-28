import React, { useState, useEffect } from "react";
import {
  Container,
  Nav,
  Form,
  FormControl,
  Dropdown,
  Table,
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap";
import { BsThreeDotsVertical, BsPeopleFill } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa"; // Added FaTimes for close button
import { Link } from "react-router-dom";
import { type IconType } from "react-icons";
import logoImg from "../../assets/CHS-Logo.png";
import Calendar from "../../components/Calendar";

const AdminDashboard = () => {
  const today = new Date().toLocaleDateString();
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

  const IconWrapper =
    (Icon: IconType) => (props: React.ComponentProps<IconType>) =>
      <Icon {...props} />;

  const PeopleFillIcon = IconWrapper(BsPeopleFill);
  const ThreeDotsVerticalIcon = IconWrapper(BsThreeDotsVertical);

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
      <Container fluid className="p-4 flex-grow-1 main-content">
        {/* Sidebar Toggle Button for smaller screens */}
        <div className="d-lg-none mb-3">
          <Button variant="outline-dark" onClick={toggleSidebar}>
            <FaBars />
          </Button>
        </div>

        {/* Header Section */}
        <Row className="mb-4 align-items-center justify-content-between">
          <Col xs={12} md={6} className="mb-3 mb-md-0">
            <h5>Hi Samuel Isaiah</h5>
            <strong style={{ color: "black" }}>Welcome back, Admin</strong>
          </Col>
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-md-end align-items-center"
          >
            <Form className="d-flex me-3 flex-grow-1">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
            <img
              src="/image 5.png"
              height="40"
              width="40"
              className="rounded-circle"
              alt="User Avatar"
            />
          </Col>
        </Row>

        {/* Overview Section */}
        <Row className="mb-4">
          <Col xs={12} lg={8} className="mb-4 mb-lg-0">
            <Card className="p-3">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6>Overview</h6>
                <div className="d-flex align-items-center">
                  <span className="me-2">{today}</span>
                  <Dropdown>
                    <Dropdown.Toggle size="sm" variant="secondary">
                      &#9660;
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Last 7 days</Dropdown.Item>
                      <Dropdown.Item>This Month</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>

              <Row className="mt-3">
                <Col xs={12} md={4} className="mb-3 mb-md-0">
                  <Card className="p-3 bg-light">
                    <div className="d-flex justify-content-between">
                      <PeopleFillIcon size={30} />
                      <ThreeDotsVerticalIcon />
                    </div>
                    <h5>4,588</h5>
                    <p>Total Students</p>
                  </Card>
                </Col>
                <Col xs={12} md={4} className="mb-3 mb-md-0">
                  <Card className="p-3 bg-light">
                    <div className="d-flex justify-content-between">
                      <PeopleFillIcon size={30} />
                      <ThreeDotsVerticalIcon />
                    </div>
                    <h5>34</h5>
                    <p>Total Teachers</p>
                  </Card>
                </Col>
                <Col xs={12} md={4}>
                  <Card className="p-3 bg-light">
                    <div className="d-flex justify-content-between">
                      <PeopleFillIcon size={30} />
                      <ThreeDotsVerticalIcon />
                    </div>
                    <h5>1,545</h5>
                    <p>Total Parents</p>
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>

          {/* Incomplete Profiles Section */}
          <Col xs={12} lg={4}>
            <Card className="p-4 text-center bg-light h-100">
              <h6 className="text-black">Incomplete Teacher Profiles</h6>
              <div className="my-3">
                <div
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    border: "12px solid #464590",
                    borderTopColor: "#e0e0e0",
                    margin: "0 auto",
                  }}
                ></div>
                <h4 className="mt-3 text-black">62.5%</h4>
              </div>
            </Card>
          </Col>
        </Row>

        {/* Registrations and Calendar */}
        <Row className="mb-4">
          <Col xs={12} md={6} className="mb-4 mb-md-0">
            <Card className="p-3">
              <h6>Registrations</h6>
              <div className="table-responsive">
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Entrance Class</th>
                      <th>Sex</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Justina Ifidon</td>
                      <td>JSS 1</td>
                      <td>F</td>
                    </tr>
                    <tr>
                      <td>Victor Akubugwo</td>
                      <td>SSS 1</td>
                      <td>M</td>
                    </tr>
                    <tr>
                      <td>Justina Ifidon</td>
                      <td>JSS 1</td>
                      <td>F</td>
                    </tr>
                    <tr>
                      <td>Victor Akubugwo</td>
                      <td>SSS 1</td>
                      <td>M</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <span
                style={{
                  color: "red",
                  fontWeight: "400",
                  fontSize: "16.89px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                }}
              >
                View All Registrations
              </span>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card className="p-3">
              <h6>Create a Static Calendar</h6>
              <div style={{ height: "250px", backgroundColor: "#05022B" }}>
                <Calendar />
              </div>
            </Card>
          </Col>
        </Row>

        {/* Transactions Table */}
        <Card className="p-3">
          <h6>Transactions</h6>
          <div className="table-responsive">
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mr. Joseph Achibong</td>
                  <td>School fees</td>
                  <td>N350,000</td>
                  <td>12/04/2023</td>
                  <td>3:33pm</td>
                </tr>
                <tr>
                  <td>Mrs. Victoria Ihechukwudere</td>
                  <td>Complete school uni...</td>
                  <td>N23,000</td>
                  <td>12/04/2023</td>
                  <td>3:12pm</td>
                </tr>
                <tr>
                  <td>Mrs. Justina Lucas</td>
                  <td>School fees</td>
                  <td>N280,000</td>
                  <td>12/04/2023</td>
                  <td>3:02pm</td>
                </tr>
                <tr>
                  <td>Mrs. Victoria Igando</td>
                  <td>Complete school uni...</td>
                  <td>N23,000</td>
                  <td>12/04/2023</td>
                  <td>3:00pm</td>
                </tr>
                <tr>
                  <td>Mrs. Victoria Ihechukwudere</td>
                  <td>Complete school uni...</td>
                  <td>N23,000</td>
                  <td>12/04/2023</td>
                  <td>3:12pm</td>
                </tr>
                <tr>
                  <td>Mrs. Justina Lucas</td>
                  <td>School fees</td>
                  <td>N280,000</td>
                  <td>12/04/2023</td>
                  <td>3:02pm</td>
                </tr>
                <tr>
                  <td>Mrs. Victoria Igando</td>
                  <td>Complete school uni...</td>
                  <td>N23,000</td>
                  <td>12/04/2023</td>
                  <td>3:00pm</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <span
            style={{
              color: "red",
              fontWeight: "400",
              fontSize: "16.89px",
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            View All Registrations
          </span>
        </Card>
      </Container>
    </div>
  );
};

export default AdminDashboard;
