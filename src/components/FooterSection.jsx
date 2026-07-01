import { Container, Row, Col } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function FooterSection() {
  return (
    <footer style={{ background: "#1a1a2e", color: "#ccc" }} className="pt-5 pb-3">
      <Container>
        <Row className="g-4 mb-4">
          <Col md={3}>
            <h5 className="text-white fw-bold mb-3">City Care Hospital</h5>
            <p className="small">Providing trusted medical care with experienced doctors and modern facilities.</p>
            <div className="d-flex gap-3 mt-3">
              <FaFacebook size={20} color="#0d6efd" />
              <FaInstagram size={20} color="#e1306c" />
              <FaTwitter size={20} color="#1da1f2" />
            </div>
          </Col>
          <Col md={3}>
            <h6 className="text-white fw-bold mb-3">Quick Links</h6>
            <p className="small mb-1">🔗 Home</p>
            <p className="small mb-1">🔗 Services</p>
            <p className="small mb-1">🔗 Doctors</p>
            <p className="small mb-1">🔗 Contact</p>
          </Col>
          <Col md={3}>
            <h6 className="text-white fw-bold mb-3">Our Services</h6>
            <p className="small mb-1">Cardiology</p>
            <p className="small mb-1">Neurology</p>
            <p className="small mb-1">Pediatrics</p>
            <p className="small mb-1">Orthopedics</p>
          </Col>
          <Col md={3}>
            <h6 className="text-white fw-bold mb-3">Contact Us</h6>
            <p className="small mb-2"><FaMapMarkerAlt className="me-2" />123 Medical Lane, Patna</p>
            <p className="small mb-2"><FaPhone className="me-2" />+91 98765 43210</p>
            <p className="small mb-2"><FaEnvelope className="me-2" />info@citycare.com</p>
          </Col>
        </Row>
        <hr style={{ borderColor: "#333" }} />
        <p className="text-center small mb-0" style={{ color: "#888" }}>
          © 2026 City Care Hospital. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

export default FooterSection;