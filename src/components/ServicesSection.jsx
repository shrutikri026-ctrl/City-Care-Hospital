import { Container, Row, Col, Card } from "react-bootstrap";
import { FaHeart, FaBone, FaBaby, FaBrain, FaEye, FaTooth } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import surgeryImg from "../assets/surgery.jpg";

const sliderImages = [
  { img: surgeryImg, caption: "Advanced Surgery" },
  { img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800", caption: "Modern ICU" },
  { img: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800", caption: "Expert Consultation" },
  { img: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800", caption: "Lab Diagnostics" },
  { img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800", caption: "Patient Care" },
];

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

        {/* Image Slider */}
        <div className="mb-5">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            loop={true}
            style={{ borderRadius: "20px" }}
          >
            {sliderImages.map((s, i) => (
              <SwiperSlide key={i}>
                <div style={{ position: "relative" }}>
                  <img
                    src={s.img}
                    alt={s.caption}
                    style={{
                      width: "100%",
                      height: "400px",
                      objectFit: "cover",
                      borderRadius: "20px",
                    }}
                  />
                  <div style={{
                    position: "absolute",
                    bottom: "30px",
                    left: "30px",
                    background: "rgba(13, 110, 253, 0.8)",
                    color: "white",
                    padding: "8px 20px",
                    borderRadius: "30px",
                    fontWeight: "600",
                    fontSize: "18px"
                  }}>
                    {s.caption}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

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