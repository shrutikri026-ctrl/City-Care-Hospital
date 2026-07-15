import { Modal, Form, Button, Row, Col } from "react-bootstrap";

function AppointmentModal({ show, onHide }) {
  return (
    <Modal show={show} onHide={onHide} centered size="md">
      <Modal.Header closeButton style={{ background: "#0d6efd", color: "white" }}>
        <Modal.Title className="fw-bold">📋 Book an Appointment</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-4">
        <Row className="g-3">
          <Col sm={12}>
            <Form.Label className="fw-semibold">Patient Name *</Form.Label>
            <Form.Control placeholder="Enter patient name" />
          </Col>
          <Col sm={12}>
            <Form.Label className="fw-semibold">Guardian Name</Form.Label>
            <Form.Control placeholder="Enter guardian name" />
          </Col>
          <Col sm={6}>
            <Form.Label className="fw-semibold">Age *</Form.Label>
            <Form.Control type="number" placeholder="Age" />
          </Col>
          <Col sm={6}>
            <Form.Label className="fw-semibold">Gender *</Form.Label>
            <Form.Select>
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </Form.Select>
          </Col>
          <Col sm={12}>
            <Form.Label className="fw-semibold">Phone Number *</Form.Label>
            <Form.Control type="tel" placeholder="Enter phone number" />
          </Col>
          <Col sm={12}>
            <Form.Label className="fw-semibold">Select Department</Form.Label>
            <Form.Select>
              <option>Select Department</option>
              <option>Cardiology</option>
              <option>Orthopedics</option>
              <option>Pediatrics</option>
              <option>Neurology</option>
              <option>Ophthalmology</option>
              <option>Dentistry</option>
            </Form.Select>
          </Col>
          <Col sm={12}>
            <Form.Label className="fw-semibold">Preferred Date</Form.Label>
            <Form.Control type="date" />
          </Col>
        </Row>

        {/* Bottom Message */}
        <div className="mt-4 p-3 rounded text-center" style={{ background: "#e8f4fd" }}>
          <p className="mb-0 text-primary fw-semibold">
            ⏰ We will contact you within <strong>15-20 minutes</strong> of booking!
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={onHide}>Cancel</Button>
        <Button variant="primary" className="px-4 fw-semibold">
          Confirm Appointment ✅
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AppointmentModal;