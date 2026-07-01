import { Container, Row, Col, Card } from "react-bootstrap";
import { FaHeart, FaBone, FaBaby, FaBrain, FaEye, FaTooth } from "react-icons/fa";
import surgeryImg from "../assets/surgery.jpg";

const services = [
  { icon: <FaHeart size={45} color="#0d6efd" />, title: "Cardiology", desc: "Expert heart care and treatment." },
  { icon: <FaBone size={45} color="#0d6efd" />, title: "Orthopedics", desc: "Bone, joint and muscle specialists." },
  { icon: <FaBaby size={45} color="#0d6efd" />, title: "Pediatrics", desc: "Quality healthcare for children." },
  { icon: <FaBrain size={45} color="#0d6efd" />, title: "Neurology", desc: "Brain and nervous system care." },
  { icon: <FaEye size={45} color="#0d6efd" />, title: "Ophthalmology", desc: "Complete eye care services." },
  { icon: <FaTooth size={45} color="#0d6efd" />, title: "Dentistry", desc: "Modern dental treatments." },
];

function ServicesSection() {
  return (
    <section id="services" className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <p className="text-primary fw-semibold" style={{ letterSpacing: "2px" }}>WHAT WE OFFER</p>
          <h2 className="fw-bold text-dark">Our Services</h2>
          <div style={{ width: "60px", height: "4px", background: "#0d6efd", margin: "12px auto" }}></div>
        </div>

        {/* Surgery Image */}
        <Row className="mb-5">
          <Col md={12}>
            <img
              src={surgeryImg}
              alt="Our Services"
              style={{
                width: "100%",
                maxHeight: "400px",
                objectFit: "cover",
                borderRadius: "20px",
              }}
            />
          </Col>
        </Row>

        {/* Service Cards */}
        <Row className="g-4">
          {services.map((s, i) => (
            <Col key={i} md={4} sm={6}>
              <Card className="h-100 border-0 shadow-sm text-center p-4">
                <div className="mb-3">{s.icon}</div>
                <Card.Body>
                  <Card.Title className="fw-bold">{s.title}</Card.Title>
                  <Card.Text className="text-secondary">{s.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default ServicesSection;