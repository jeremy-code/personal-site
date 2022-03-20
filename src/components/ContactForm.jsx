import React from "react";
import { Form, Button, Col, FloatingLabel } from "react-bootstrap";

function ContactForm() {
  return (
    <Col lg={4}>
      <form method="POST" name="contact">
        <input type="hidden" name="form-name" value="contact" />
        <FloatingLabel controlId="floatingInput" label="Name" className="mb-4">
          <Form.Control
            as="input"
            type="text"
            name="name"
            placeholder="John Doe"
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-4"
        >
          <Form.Control
            as="input"
            type="email"
            name="email"
            placeholder="name@example.com"
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingTextarea" label="Message">
          <Form.Control
            as="textarea"
            name="message"
            placeholder="Leave a message here"
            style={{ height: "100px" }}
          />
        </FloatingLabel>
        <Button variant="primary" className="w-100 py-2 mt-4" type="submit">
          Get in touch
        </Button>
      </form>
    </Col>
  );
}

export default ContactForm;
