import { Container, Row, Col, Button } from "react-bootstrap";
import doctorImage from "../assets/doctor.png"; // Change path if needed

function HeroSection() {
  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #EAF4FF 0%, #FFFFFF 100%)",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Row className="align-items-center">

          {/* Left Side */}
          <Col lg={6}>
            <span className="badge bg-primary px-3 py-2 mb-3">
              Trusted Healthcare Since 2005
            </span>

            <h1
              className="fw-bold display-4 mb-4"
              style={{ color: "#1F2937" }}
            >
              Your Health Is Our
              <span className="text-primary"> Top Priority</span>
            </h1>

            <p className="lead text-muted mb-4">
              Providing compassionate healthcare with experienced doctors,
              advanced technology, and 24/7 emergency services.
            </p>

            <div className="d-flex gap-3">
              <Button size="lg" variant="primary">
                Book Appointment
              </Button>

              <Button size="lg" variant="outline-primary">
                Learn More
              </Button>
            </div>

            {/* Statistics */}
            <Row className="mt-5">
              <Col xs={4}>
                <h3 className="fw-bold text-primary">20+</h3>
                <small>Doctors</small>
              </Col>

              <Col xs={4}>
                <h3 className="fw-bold text-primary">15K+</h3>
                <small>Patients</small>
              </Col>

              <Col xs={4}>
                <h3 className="fw-bold text-primary">24/7</h3>
                <small>Emergency</small>
              </Col>
            </Row>
          </Col>

          {/* Right Side */}
          <Col lg={6} className="text-center mt-5 mt-lg-0">
            <img
              src={doctorImage}
              alt="Doctor"
              className="img-fluid"
              style={{
                maxHeight: "550px",
              }}
            />
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;s