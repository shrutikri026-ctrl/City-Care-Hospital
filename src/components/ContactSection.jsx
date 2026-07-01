import { Container, Row, Col, Form, Button } from "react-bootstrap";

function ContactSection() {
  return (
    <section id="contact" className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <p className="text-primary fw-semibold" style={{ letterSpacing: "2px" }}>GET IN TOUCH</p>
          <h2 className="fw-bold text-dark">Contact Us</h2>
          <div style={{ width: "60px", height: "4px", background: "#0d6efd", margin: "12px auto" }}></div>
        </div>
        <Row className="g-5">
          <Col md={5}>
            <h5 className="fw-bold mb-4">Hospital Information</h5>
            <div className="mb-3 d-flex gap-3">
              <span style={{ fontSize: "24px" }}>📍</span>
              <div>
                <p className="fw-semibold mb-0">Address</p>
                <p className="text-secondary">123 Medical Lane, Patna, Bihar - 800001</p>
              </div>
            </div>
            <div className="mb-3 d-flex gap-3">
              <span style={{ fontSize: "24px" }}>📞</span>
              <div>
                <p className="fw-semibold mb-0">Phone</p>
                <p className="text-secondary">+91 98765 43210</p>
              </div>
            </div>
            <div className="mb-3 d-flex gap-3">
              <span style={{ fontSize: "24px" }}>📧</span>
              <div>
                <p className="fw-semibold mb-0">Email</p>
                <p className="text-secondary">info@citycarehospital.com</p>
              </div>
            </div>
            <div className="d-flex gap-3">
              <span style={{ fontSize: "24px" }}>🕐</span>
              <div>
                <p className="fw-semibold mb-0">Working Hours</p>
                <p className="text-secondary">Mon–Sat: 8AM – 8PM<br />Sunday: Emergency Only</p>
              </div>
            </div>
          </Col>
          <Col md={7}>
            <h5 className="fw-bold mb-4">Book an Appointment</h5>
            <Row className="g-3">
              <Col sm={6}>
                <Form.Control placeholder="Your Name" className="py-2" />
              </Col>
              <Col sm={6}>
                <Form.Control placeholder="Phone Number" className="py-2" />
              </Col>
              <Col sm={6}>
                <Form.Control placeholder="Email Address" type="email" className="py-2" />
              </Col>
              <Col sm={6}>
                <Form.Select className="py-2">
                  <option>Select Department</option>
                  <option>Cardiology</option>
                  <option>Orthopedics</option>
                  <option>Pediatrics</option>
                  <option>Neurology</option>
                </Form.Select>
              </Col>
              <Col sm={12}>
                <Form.Control type="date" className="py-2" />
              </Col>
              <Col sm={12}>
                <Form.Control as="textarea" rows={3} placeholder="Message (optional)" />
              </Col>
              <Col sm={12}>
                <Button variant="primary" size="lg" className="w-100 fw-semibold">
                  Book Appointment →
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactSection;