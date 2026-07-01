import { Container, Row, Col, Card, Badge } from "react-bootstrap";

const updates = [
  { tag: "NEW", color: "primary", title: "EEG Diagnostics Available", desc: "Advanced brain diagnostics now available at our center." },
  { tag: "EVENT", color: "success", title: "Sunday 10am Open", desc: "We are now open on Sundays for consultation." },
  { tag: "FREE", color: "warning", title: "Free Health Camp", desc: "Free health checkup camp this Saturday." },
  { tag: "NEW", color: "primary", title: "New Pediatric Neurologist", desc: "Dr. Sharma joins our expert team." },
  { tag: "INFO", color: "info", title: "Online Appointment Booking", desc: "Book appointments online easily." },
  { tag: "EVENT", color: "success", title: "Vaccination Program", desc: "Monthly vaccination awareness program." },
];

function UpdatesSection() {
  return (
    <section className="py-5" style={{ background: "#f8f9ff" }}>
      <Container>
        <div className="text-center mb-5">
          <p className="text-primary fw-semibold" style={{ letterSpacing: "2px" }}>LATEST UPDATES</p>
          <h2 className="fw-bold text-dark">What's New</h2>
          <div style={{ width: "60px", height: "4px", background: "#0d6efd", margin: "12px auto" }}></div>
        </div>
        <Row className="g-4">
          {updates.map((u, i) => (
            <Col key={i} md={4} sm={6}>
              <Card className="h-100 border-0 shadow-sm p-3">
                <Badge bg={u.color} className="mb-2 w-25">{u.tag}</Badge>
                <Card.Title className="fw-bold fs-6">{u.title}</Card.Title>
                <Card.Text className="text-secondary small">{u.desc}</Card.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default UpdatesSection;