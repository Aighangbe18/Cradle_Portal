import { useState } from "react";
import { Button, Modal, Form, Table, Col } from "react-bootstrap";

const FinancialTab = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeYear, setActiveYear] = useState("Year 7");

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleRowClick = (index: number) => {
    window.location.href = `/financial/details/${index}`;
  };

  const yearButtons = ["Year 7", "Year 8", "Year 9", "Year 10"];

  return (
    <div>
      {/* Search + Button */}
      <div className="d-flex mb-3">
        <Col md={9}>
          <Form.Control type="search" placeholder="Search cousrse..." />
        </Col>
        <Col md={2} className="text-end">
          <Button onClick={handleShow} variant="primary">
            <i className="bi bi-plus-circle me-2"></i>Payment Category
          </Button>
        </Col>
      </div>

      {/* Filters */}
      <div className="d-flex justify-content-between mb-3">
        <div className="btn-group">
          {yearButtons.map((year) => (
            <Button
              key={year}
              variant={year === activeYear ? "primary" : "outline-primary"}
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
          <Button variant="outline-secondary">Tuition payments</Button>
        </div>
      </div>

      {/* Table */}
      <Table hover bordered responsive>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Name</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 11 }, (_, i) => (
            <tr
              key={i}
              onClick={() => handleRowClick(i + 1)}
              style={{ cursor: "pointer" }}
            >
              <td>{i + 1}</td>
              <td>Jane Doe</td>
              <td>School fees</td>
              <td>N{[350000, 23000, 280000][i % 3].toLocaleString()}</td>
              <td>12/04/2023</td>
              <td>3:33pm</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination & Print */}
      <div className="d-flex justify-content-between align-items-center mt-3">
        <Button variant="dark">Print</Button>
        <div>
          <Button variant="light">← Previous</Button>
          <Button variant="primary" className="mx-1">
            1
          </Button>
          <Button variant="light">2</Button>
          <Button variant="light">3</Button>
          <Button variant="light">Next →</Button>
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <strong>New Payment Category</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Company Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <div className="d-flex gap-2 mb-3">
              <Form.Select defaultValue="">
                <option disabled value="">
                  Select School
                </option>
                <option>High School</option>
                <option>Primary</option>
              </Form.Select>
              <Form.Select defaultValue="">
                <option disabled value="">
                  Select Class
                </option>
                <option>Year 7</option>
                <option>Year 8</option>
              </Form.Select>
            </div>
            <div className="d-flex gap-2 mb-3">
              <Form.Select defaultValue="">
                <option disabled value="">
                  Select Term
                </option>
                <option>Term 1</option>
                <option>Term 2</option>
              </Form.Select>
              <Form.Control type="number" placeholder="Authorized Amount" />
            </div>
            <div className="text-center">
              <Button variant="primary">Create</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default FinancialTab;
