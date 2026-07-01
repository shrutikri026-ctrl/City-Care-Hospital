import { Container, Row, Col } from "react-bootstrap";
import { FaUserMd, FaHeartbeat, FaHospital, FaStar, FaClock, FaAward } from "react-icons/fa";

const reasons = [
  { icon: <FaUserMd size={35} color="#0d6efd" />, title: "Expert Neurologists", desc: "Highly qualified and experienced doctors." },
  { icon: <FaHeartbeat size={35} color="#0d6efd" />, title: "Advanced Treatment", desc: "Latest medical technology and techniques." },
  { icon: <FaHospital size={35} color="#0d6efd" />, title: "Modern Facilities", desc: "State-of-the-art hospital infrastructure." },
  { icon: <FaClock size={35} color="#0d6efd" />, title: "24/7 Emergency", desc: "Round the clock emergency services." },
  { icon: <FaStar size={35} color="#0d6efd" />, title: "Patient First", desc: "100% dedicated to patient satisfaction." },
  { icon: <FaAward size={35} color="#0d6efd" />, title: "Award Winning", desc: "Recognized for excellence in healthcare." },
];

function WhyUsSection() {
  return (
    <section className="py-5 bg-white">
      <Container>
        <div className="text-center mb-5">
          <p className="text-primary fw-semibold" style={{ letterSpacing: "2px" }}>OUR STRENGTHS</p>
          <h2 className="fw-bold text-dark">Why Choose City Care Hospital?</h2>
          <div style={{ width: "60px", height: "4px", background: "#0d6efd", margin: "12px auto" }}></div>
        </div>
        <Row className="g-4">
          {reasons.map((r, i) => (
            <Col key={i} md={4} sm={6}>
              <div className="d-flex gap-3 p-3 rounded shadow-sm bg-light h-100">
                <div>{r.icon}</div>
                <div>
                  <h6 className="fw-bold mb-1">{r.title}</h6>
                  <p className="text-secondary small mb-0">{r.desc}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default WhyUsSection;