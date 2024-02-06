import React from "react";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import {
  FaArrowRight,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaStar,
} from "react-icons/fa";

const Services = () => {
  return (
    <div>
      <Container className="services_container">
        <Row>
          <Col md={6} className="mb-4">
            <h1>WELCOME</h1>
            <h5>TO OUR COMPANY SITE</h5>
            <h4>A PLACE OF EXCELLENCE & QUALITY SERVICE</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue
              neque gravida in fermentum. Amet venenatis urna cursus eget nunc
              scelerisque. <br /> Amet consectetur adipiscing elit duis
              tristique. Eros in cursus turpis massa tincidunt dui ut. Lobortis
              feugiat vivamus at augue.{" "}
            </p>
          </Col>
          <Col md={3} className="mb-4">
            <h3>KEY SERVICES</h3>
            <h6>
              <FaArrowRight className="faarrow" /> &nbsp; COMPUTER SUPPORT{" "}
            </h6>
            <h6>
              <FaArrowRight className="faarrow" /> &nbsp; IT SYSTEMS{" "}
            </h6>
            <h6>
              <FaArrowRight className="faarrow" /> &nbsp; REMOTE ACCESS{" "}
            </h6>
            <h6>
              <FaArrowRight className="faarrow" /> &nbsp; REMOTE DESKTOP{" "}
            </h6>
            <h6>
              <FaArrowRight className="faarrow" /> &nbsp; BLACKBERRY MOBILE{" "}
            </h6>
            <h6>
              <FaArrowRight className="faarrow" /> &nbsp; IT CONSULTANCY{" "}
            </h6>
            <h6>
              <FaArrowRight className="faarrow" /> &nbsp; HOSTED EXCHANGE{" "}
            </h6>
          </Col>
          <Col md={3} className="mb-4">
            <h3 className="mb-3">TESTIMONIAL</h3>
            <Carousel slide>
              <Carousel.Item>
                <Card className="card-fluid py-2">
                  <h6 className="">
                    <strong>GRACE PAUL</strong>
                  </h6>
                  <Card.Body className="testify_text">
                    Accumsan in nisl nisi scelerisque eu. Habitant morbi
                    tristique senectus et netus. Malesuada turpis egestas sed
                    tempus eget gravida natoque.
                  </Card.Body>
                  <div className="">
                    <FaStar /> <FaStar /> <FaStar /> <FaStar />
                  </div>
                </Card>
              </Carousel.Item>

              <Carousel.Item>
                <Card className="card-fluid py-2">
                  <h6 className="">
                    <strong>LOVE BRENDA</strong>
                  </h6>
                  <Card.Body className="testify_text">
                    Accumsan in nisl nisi scelerisque eu. Habitant morbi
                    tristique senectus et netus. Malesuada turpis egestas sed
                    tempus eget gravida natoque.
                  </Card.Body>
                  <div className="">
                    <FaStar /> <FaStar /> <FaStar /> <FaStar />
                  </div>
                </Card>
              </Carousel.Item>
              <Carousel.Item>
                <Card className="card-fluid py-2">
                  <h6 className="">
                    <strong>BLESSING CHUKS</strong>
                  </h6>
                  <Card.Body className="testify_text">
                    Accumsan in nisl nisi scelerisque eu. Habitant morbi
                    tristique senectus et netus. Malesuada turpis egestas sed
                    tempus eget gravida natoque.
                  </Card.Body>
                  <div className="">
                    <FaStar /> <FaStar /> <FaStar /> <FaStar />
                  </div>
                </Card>
              </Carousel.Item>
            </Carousel>
            <FaLongArrowAltRight className="longarrow" />{" "}
            <span>
              <FaLongArrowAltLeft className="longarrows" />{" "}
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
