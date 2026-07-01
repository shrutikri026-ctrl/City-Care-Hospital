import { Container, Row, Col, Card, Button } from "react-bootstrap";

const articles = [
  { img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400", title: "Understanding Childhood Epilepsy", desc: "Early signs and symptoms parents should know about epilepsy in children." },
  { img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400", title: "Early Signs of Developmental Delay", desc: "How to identify developmental delays in toddlers and young children." },
  { img: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=400", title: "When to See a Neuro Specialist", desc: "Key warning signs that indicate you should consult a neurologist." },
  { img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400", title: "Importance of EEG Testing", desc: "Why EEG is a critical diagnostic tool in modern neurology." },
];

function ArticlesSection() {
  return (
    <section className="py-5 bg-white">
      <Container>
        <div className="text-center mb-5">
          <p className="text-primary fw-semibold" style={{ letterSpacing: "2px" }}>HEALTH TIPS</p>
          <h2 className="fw-bold text-dark">Latest Health Articles</h2>
          <div style={{ width: "60px", height: "4px", background: "#0d6efd", margin: "12px auto" }}></div>
        </div>
        <Row className="g-4">
          {articles.map((a, i) => (
            <Col key={i} md={3} sm={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Img
                  variant="top"
                  src={a.img}
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold fs-6">{a.title}</Card.Title>
                  <Card.Text className="text-secondary small">{a.desc}</Card.Text>
                  <Button variant="outline-primary" size="sm">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default ArticlesSection;