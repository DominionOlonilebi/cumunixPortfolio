import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <Container fluid className="footers">
        <Row>
          <Col md={3}>
            <h6>NAVIGATION</h6>
            <p>
              <FaArrowRight className="bg-secondary" /> &nbsp; Home{" "}
            </p>
            <p>
              <FaArrowRight className="bg-secondary" /> &nbsp; Company{" "}
            </p>
            <p>
              <FaArrowRight className="bg-secondary" /> &nbsp; Solutions{" "}
            </p>
            <p>
              <FaArrowRight className="bg-secondary" /> &nbsp; Services{" "}
            </p>
            <p>
              <FaArrowRight className="bg-secondary" /> &nbsp; Blog{" "}
            </p>
            <p>
              <FaArrowRight className="bg-secondary" /> &nbsp; Contact{" "}
            </p>
          </Col>
          <Col md={3}>
            <h6>POPULAR</h6>
            <p>
              <FaArrowRight className="bg-secondary" /> &nbsp; consectetur
              adipiscing{" "}
            </p>
            <p>
              <FaArrowRight className="bg-secondary" /> &nbsp; Accumsan in nisl{" "}
            </p>
            <p>
              <FaArrowRight className="bg-secondary" /> &nbsp; Habitant morbi{" "}
            </p>
            <p>
              <FaArrowRight className="bg-secondary" /> &nbsp; Malesuada fames{" "}
            </p>
            <p>
              <FaArrowRight className="bg-secondary" /> &nbsp; Aliquam ultrices{" "}
            </p>
            <p>
              <FaArrowRight className="bg-secondary" /> &nbsp; Elit eget gravida{" "}
            </p>
          </Col>
          <Col md={3}>
            <h6>SOCIAL PAGES</h6>
            <p>
              <FaArrowRight className="bg-secondary" /> &nbsp; Twitter{" "}
            </p>
            <p>
              <FaArrowRight className="bg-secondary" /> &nbsp; Instagram{" "}
            </p>
            <p>
              <FaArrowRight className="bg-secondary" /> &nbsp; Facebook{" "}
            </p>
            <p>
              <FaArrowRight className="bg-secondary" /> &nbsp; Google Plus
            </p>
            <p>
              <FaArrowRight className="bg-secondary" /> &nbsp; RSS{" "}
            </p>
          </Col>
          <Col md={3}>
            <h6>NEWSLETTER</h6>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
