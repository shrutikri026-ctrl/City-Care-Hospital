import { Container, Row, Col, Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

const testimonials = [
  { name: "Priya Verma", review: "Excellent care and very professional doctors. Highly recommended!", stars: 5 },
  { name: "Rahul Singh", review: "Best hospital in the city. My child recovered very quickly!", stars: 5 },
  { name: "Sunita Devi", review: "Very clean and modern facilities. Staff is very helpful.", stars: 4 },
  { name: "Amit Kumar", review: "Dr. Sharma is amazing. Treatment was very effective.", stars: 5 },
];

function TestimonialsSection() {
  return (
    <section className="py-5" style={{ background: "#f0f8ff" }}>
      <Container>
        <div className="text-center mb-5">
          <p className="text-primary fw-semibold" style={{ letterSpacing: "2px" }}>PATIENT REVIEWS</p>
          <h2 className="fw-bold text-dark">What Our Patients Say</h2>
          <div style={{ width: "60px", height: "4px", background: "#0d6efd", margin: "12px auto" }}></div>
        </div>
        <Row className="g-4">
          {testimonials.map((t, i) => (
            <Col key={i} md={3} sm={6}>
              <Card className="h-100 border-0 shadow-sm p-3 text-center">
                <div className="mb-2">
                  {[...Array(t.stars)].map((_, j) => (
                    <FaStar key={j} color="#ffc107" size={16} />
                  ))}
                </div>
                <Card.Text className="text-secondary small fst-italic">"{t.review}"</Card.Text>
                <Card.Title className="fw-bold fs-6 text-primary mt-2">— {t.name}</Card.Title>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default TestimonialsSection;