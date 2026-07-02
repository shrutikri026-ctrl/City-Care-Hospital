import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavbarSection() {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4 text-dark">
          City Care Hospital
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto gap-3">
            <Nav.Link as={Link} to="/" className="fw-medium text-dark">Home</Nav.Link>
            <Nav.Link as={Link} to="/services" className="fw-medium text-secondary">Services</Nav.Link>
            <Nav.Link as={Link} to="/doctors" className="fw-medium text-secondary">Doctors</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="fw-medium text-secondary">Contact</Nav.Link>
          </Nav>
          <Button as={Link} to="/contact" variant="primary" className="fw-semibold px-4">
            Book Appointment
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarSection;