import { Container, Row, Col, Card } from "react-bootstrap";
import { FaStethoscope } from "react-icons/fa";
import doctorsTeam from "../assets/doctors-team.png";

const doctors = [
  { img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300", name: "Dr. Rajesh Kumar", spec: "Cardiologist", exp: "15 years experience" },
  { img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300", name: "Dr. Priya Sharma", spec: "Pediatrician", exp: "10 years experience" },
  { img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300", name: "Dr. Amit Singh", spec: "Neurologist", exp: "12 years experience" },
  { img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300", name: "Dr. Neha Gupta", spec: "Orthopedic", exp: "8 years experience" },
];

function DoctorSection() {
  return (
    <section id="doctors" className="py-5 bg-white">
      <Container>
        <div className="text-center mb-5">
          <p className="text-primary fw-semibold" style={{ letterSpacing: "2px" }}>MEET THE TEAM</p>
          <h2 className="fw-bold text-dark">Our Doctors</h2>
          <div style={{ width: "60px", height: "4px", background: "#0d6efd", margin: "12px auto" }}></div>
        </div>

        {/* Team Image */}
        <Row className="mb-5">
          <Col md={12} className="text-center">
            <img
              src={doctorsTeam}
              alt="Our Doctor Team"
              style={{
                width: "100%",
                maxHeight: "400px",
                objectFit: "cover",
                borderRadius: "20px",
              }}
            />
          </Col>
        </Row>

        {/* Doctor Cards */}
        <Row className="g-4">
          {doctors.map((d, i) => (
            <Col key={i} md={3} sm={6}>
              <Card className="h-100 border-0 shadow-sm text-center p-4">
                <img
                  src={d.img}
                  alt={d.name}
                  style={{
                    width: "90px",
                    height: "90px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    margin: "0 auto 16px",
                    display: "block"
                  }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold fs-6">{d.name}</Card.Title>
                  <p className="text-primary fw-semibold small mb-1">
                    <FaStethoscope size={12} className="me-1" />
                    {d.spec}
                  </p>
                  <p className="text-secondary small">{d.exp}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default DoctorSection;