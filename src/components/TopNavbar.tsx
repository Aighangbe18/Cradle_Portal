import { Navbar, Button } from "react-bootstrap";

const TopNavbar = () => (
  <Navbar>
    <div>Admissions are ongoing — register your kids for the exam</div>
    <div>
      <span className="me-2">Portal</span>
      <Button variant="outline-primary">Register</Button>
    </div>
  </Navbar>
);

export default TopNavbar;
