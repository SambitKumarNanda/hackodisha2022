import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";

function ContactUs() {
  return (
    <Container className="contact-us-container">
      <Row className="mb-5 mt-3">
        <Col lg="8">
          <h1 className="display-4 mb-4 contact-us-primary-heading">
            Contact us
          </h1>
        </Col>
      </Row>

      <Row className="sec_sp">
        <Col lg="5" className="mb-5">
          <h3 className="color_sec py-4 contact-us-tertiary-heading">
            Get in touch with us
          </h3>
          <address>
            <strong className="contact-email">Email : sehat@gmail.com</strong>
            <br />
            <br />
            <p>
              <strong className="contact-phone">Phone : +91 0123456789</strong>
            </p>
          </address>
          <p className="contact-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            temporibus sit ad officiis neque illo assumenda rem earum. Quisquam,
            optio. Cumque qui rerum architecto numquam voluptatibus blanditiis
            animi commodi id!
          </p>
        </Col>

        <Col lg="7" className="d-flex align-items-center">
          <form className="contact__form w-100">
            <Row>
              <Col lg="6" className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Name"
                />
              </Col>
              <Col lg="6" className="form-group">
                <input
                  type="text"
                  className="form-control rounded-0"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
              </Col>
            </Row>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              rows="5"
              className="form-control rounded-0 mt-2"
            ></textarea>
            <br />
            <Row>
              <Col lg="12" className="form-group">
                <button className="btn ac_btn" type="submit">
                  Send
                </button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactUs;
