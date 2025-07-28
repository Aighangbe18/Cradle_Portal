import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Row, Col } from "react-bootstrap";
import TopImage from "../../components/TopImage";
import "../../App.css";

import { type IconBaseProps } from "react-icons/lib";
import { FaArrowLeft, FaArrowRight, FaPlus } from "react-icons/fa";

import { Nav } from "react-bootstrap";

import { FaTimes } from "react-icons/fa"; // Added FaTimes for close button
import { Link } from "react-router-dom";
import logoImg from "../../assets/CHS-Logo.png";

const TeacherCommunication = () => {
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

  // Wrapper components for icons to ensure correct typing for JSX
  const PlusIcon: React.FC<IconBaseProps> = (props) => <FaPlus {...props} />;

  const ArrowLeftIcon: React.FC<IconBaseProps> = (props) => (
    <FaArrowLeft {...props} />
  );
  const ArrowRightIcon: React.FC<IconBaseProps> = (props) => (
    <FaArrowRight {...props} />
  );

  const [activeTab, setActiveTab] = useState("announcements");
  const [showAnnouncementModal, setShowAnnouncementModal] = useState(false);
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const openEventModal = (day: number) => {
    const date = new Date(currentMonth);
    date.setDate(day);
    setSelectedDay(date);
    setShowEventModal(true);
  };

  const monthName = currentMonth.toLocaleString("default", { month: "long" });

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
      <div className="flex-grow-1 p-4">
        <div
          style={{
            marginBottom: "100px",
          }}
        >
          <TopImage />
        </div>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <h2>Communication</h2>
          <Form.Select style={{ width: "200px" }}>
            <option>High School</option>
            {/* Add more options as needed */}
          </Form.Select>
        </div>

        <div className="d-flex mt-3">
          <Form.Control type="text" placeholder="Search..." className="me-2" />
          <Button onClick={() => setShowAnnouncementModal(true)}>
            <PlusIcon className="me-2" />
            Create an Announcement
          </Button>
        </div>

        {/* Toggle Buttons */}
        <div className="mt-4">
          <Button
            variant={
              activeTab === "announcements" ? "primary" : "outline-primary"
            }
            className="me-2"
            onClick={() => setActiveTab("announcements")}
          >
            Announcements
          </Button>
          <Button
            variant={activeTab === "events" ? "primary" : "outline-primary"}
            onClick={() => setActiveTab("events")}
          >
            Events
          </Button>
        </div>

        {/* Announcements View */}
        {activeTab === "announcements" && (
          <div className="mt-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="border rounded p-3 mb-3">
                <div className="d-flex justify-content-between">
                  <strong>Talent Show</strong>
                  <span>Posted on May 15, 2023, 7pm</span>
                </div>
                <p className="mt-2">
                  {i === 0
                    ? `We are excited to announce an upcoming event that you won't want to miss. On May 15th, we
will be hosting a school-wide talent show in the auditorium from 7 PM to 9 PM.
This is your chance to showcase your skills and creativity, whether it's singing, dancing, playing 
an instrument, or performing a skit. Sign up sheets will be available in the main office starting 
tomorrow, April 26th. Don't hesitate to share your talent with the rest of the school community....`
                    : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor lectus justo, nec 
fringilla nunc bibendum ac. Vivamus eget magna dui. Fusce aliquam orci a efficitur volutpat. 
Sed vitae nulla bibendum, finibus mauris ut, sollicitudin quam. Praesent et libero eget dolor 
vestibulum efficitur. Donec mollis, quam sit amet euismod ultrices, magna ante rhoncus ex, non 
efficitur urna nisi non odio. Duis posuere nunc ac sapien fermentum, quis pretium dolor gravida....`}
                </p>
              </div>
            ))}
            <div className="d-flex justify-content-end mt-4">
              <Button variant="light" className="me-2">
                <ArrowLeftIcon /> Prev
              </Button>
              <Button variant="primary" className="me-2">
                1
              </Button>
              <Button variant="outline-primary" className="me-2">
                2
              </Button>
              <Button variant="outline-primary" className="me-2">
                3
              </Button>
              <Button variant="light">
                Next <ArrowRightIcon />
              </Button>
            </div>
          </div>
        )}

        {/* Events View */}
        {activeTab === "events" && (
          <div className="mt-4">
            <div className="d-flex justify-content-between mb-2 align-items-center">
              <Button
                variant="outline-secondary"
                size="sm"
                onClick={() => {
                  const newMonth = new Date(currentMonth);
                  newMonth.setMonth(currentMonth.getMonth() - 1);
                  setCurrentMonth(newMonth);
                }}
              >
                <ArrowLeftIcon className="me-1" /> Prev
              </Button>

              <h5 className="mb-0">
                {monthName} {currentMonth.getFullYear()}
              </h5>

              <Button
                variant="outline-secondary"
                size="sm"
                onClick={() => {
                  const newMonth = new Date(currentMonth);
                  newMonth.setMonth(currentMonth.getMonth() + 1);
                  setCurrentMonth(newMonth);
                }}
              >
                Next <ArrowRightIcon className="ms-1" />
              </Button>
            </div>

            {/* Days of the week */}
            <div className="d-flex text-center fw-bold">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div
                  key={day}
                  className="border p-2"
                  style={{ width: "14.28%", backgroundColor: "#05022B" }}
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="d-flex flex-wrap text-center">
              {(() => {
                const year = currentMonth.getFullYear();
                const month = currentMonth.getMonth();
                const firstDayOfMonth = new Date(year, month, 1).getDay();
                const daysInMonth = new Date(year, month + 1, 0).getDate();

                const calendarSquares = [];

                for (let i = 0; i < firstDayOfMonth; i++) {
                  calendarSquares.push(
                    <div
                      key={`empty-${i}`}
                      className="calendar-day empty"
                    ></div>
                  );
                }

                for (let day = 1; day <= daysInMonth; day++) {
                  calendarSquares.push(
                    <div
                      key={day}
                      className="calendar-day"
                      onClick={() => openEventModal(day)}
                    >
                      <div className="day-number">{day}</div>
                    </div>
                  );
                }

                return calendarSquares;
              })()}
            </div>
          </div>
        )}

        {/* Create Announcement Modal */}
        <Modal
          show={showAnnouncementModal}
          onHide={() => setShowAnnouncementModal(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title className="fw-bold">Create Announcement</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Add Title" />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Type in content here"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary">Create</Button>
          </Modal.Footer>
        </Modal>

        {/* Event Scheduling Modal */}
        <Modal show={showEventModal} onHide={() => setShowEventModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title className="fw-bold">Event Scheduling</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Add Title" />
              </Form.Group>
              <Row className="mb-3">
                <Col>
                  <Form.Select>
                    <option>
                      {selectedDay
                        ? selectedDay.toLocaleDateString("en-US", {
                            weekday: "long",
                          })
                        : "Select Day"}
                    </option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Control type="time" placeholder="Add Time" />
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Participants" />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Description"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary">Save</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default TeacherCommunication;
