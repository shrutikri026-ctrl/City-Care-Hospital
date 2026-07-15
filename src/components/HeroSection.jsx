import { Container, Row, Col, Button } from "react-bootstrap";
import doctorImg from "../assets/doctor-hero.png";
import { FaUserMd, FaHeartbeat, FaHospital, FaStar } from "react-icons/fa";
function HeroSection({ onBookClick }) {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #e8f4fd 0%, #f0f8ff 100%)", minHeight: "85vh" }}>
        <Container className="h-100">
          <Row className="align-items-center" style={{ minHeight: "85vh" }}>
            <Col lg={6} className="py-5">
              <p className="text-primary fw-semibold mb-2" style={{ fontSize: "0.9rem", letterSpacing: "2px" }}>
                ❤️ WELCOME TO CITY CARE HOSPITAL
              </p>
              <h1 className="display-4 fw-bold text-dark mb-2">
                Welcome to
              </h1>
              <h1 className="display-4 fw-bold text-primary mb-3">
                City Care Hospital
              </h1>
              <div style={{ width: "60px", height: "4px", background: "#0d6efd", marginBottom: "24px" }}></div>
              <p className="text-secondary fs-5 mb-4">
                We provide trusted medical care with experienced doctors and modern facilities.
              </p>
              <Button variant="primary" size="lg" className="px-5 py-3 fw-semibold" onClick={onBookClick}>
  Book Appointment →
</Button>
            </Col>
            <Col lg={6} className="text-center py-5">
  <div style={{ position: "relative" }}>
    <img
      src={doctorImg}
      alt="Doctor"
      style={{
        width: "100%",
        borderRadius: "20px",
        maxHeight: "450px",
        objectFit: "cover",
      }}
    />
  </div>
   </Col>
          </Row>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-4 bg-white shadow-sm">
  <Container>
    <Row className="text-center">
      <Col xs={6} md={3} className="py-3 border-end">
        <FaUserMd size={40} color="#0d6efd" className="mb-2" />
        <h4 className="fw-bold text-dark">10+</h4>
        <p className="text-secondary small mb-0">Expert Doctors</p>
      </Col>
      <Col xs={6} md={3} className="py-3 border-end">
        <FaHeartbeat size={40} color="#0d6efd" className="mb-2" />
        <h4 className="fw-bold text-dark">24/7</h4>
        <p className="text-secondary small mb-0">Emergency Care</p>
      </Col>
      <Col xs={6} md={3} className="py-3 border-end">
        <FaHospital size={40} color="#0d6efd" className="mb-2" />
        <h4 className="fw-bold text-dark">Modern</h4>
        <p className="text-secondary small mb-0">Facilities</p>
      </Col>
      <Col xs={6} md={3} className="py-3">
        <FaStar size={40} color="#0d6efd" className="mb-2" />
        <h4 className="fw-bold text-dark">100%</h4>
        <p className="text-secondary small mb-0">Patient Satisfaction</p>
      </Col>
    </Row>
  </Container>
</section>
    </>
  );
}

export default HeroSection;