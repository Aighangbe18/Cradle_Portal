import { useState } from "react";
import { Button, Modal, Form, Table } from "react-bootstrap";

const CreatedCategoryTab = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div>
      <h5 className="fw-bold mb-3">Created Category</h5>

      <div className="d-flex mb-3">
        <Form.Control type="text" placeholder="Search..." className="me-3" />
        <Button onClick={handleShow} variant="primary">
          <i className="bi bi-plus-circle me-2"></i>Create New Category
        </Button>
      </div>

      <div className="d-flex justify-content-between mb-3">
        <Button variant="primary" disabled>
          Created Category
        </Button>
        <div>
          <Button variant="outline-secondary" className="me-2">
            Year 7. Mercury ▼
          </Button>
          <Button variant="outline-secondary">1st Term</Button>
        </div>
      </div>

      <Table bordered responsive>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Name</th>
            <th>Authorized Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 11 }, (_, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>
                {
                  ["School Fees", "Uniform", "Books", "Sport", "Lorem Ipsum"][
                    i % 5
                  ]
                }
              </td>
              <td>N{[350000, 23000, 280000][i % 3].toLocaleString()}</td>
              <td>12/04/2023</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-between align-items-center mt-3">
        <div>
          <Button variant="dark" className="me-2">
            Edit
          </Button>
          <Button variant="danger">Save</Button>
        </div>
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
              <Form.Select>
                <option>Select School</option>
              </Form.Select>
              <Form.Select>
                <option>Select Class</option>
              </Form.Select>
            </div>
            <div className="d-flex gap-2 mb-3">
              <Form.Select>
                <option>Select Term</option>
              </Form.Select>
              <Form.Select>
                <option>Authorized Amount</option>
              </Form.Select>
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

export default CreatedCategoryTab;
