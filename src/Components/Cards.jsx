import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Cards = () => {
  return (
    <Container fluid className="cards_container">
      <h2>THE COMPANY'S MAJOR DEPARTMENT</h2>
      <Row>
        <Col md={3}>
          <Card className="cards">
            <Card.Header className="cards_header bg-dark text-white">
              HARDWARE
            </Card.Header>
            <Card.Img src="Images/men5.jpg" alt="" className="img-fluid" />
            <Card.Body>
              <Card.Text className="cards_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
              <Button className="cards_button bg-dark border-0">
                READ MORE
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="cards">
            <Card.Header className="cards_header bg-dark text-white">
              NETWORKING
            </Card.Header>
            <Card.Img src="Images/men11.jpg" alt="" className="img-fluid" />
            <Card.Body>
              <Card.Text className="cards_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
              <Button className="cards_button bg-dark border-0">
                READ MORE
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="cards">
            <Card.Header className="cards_header bg-dark text-white">
              INNOVATION
            </Card.Header>
            <Card.Img src="Images/men6.jpg" alt="" className="img-fluid" />
            <Card.Body>
              <Card.Text className="cards_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
              <Button className="cards_button bg-dark border-0">
                READ MORE
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="cards">
            <Card.Header className="cards_header bg-dark text-white">
              DEVELOPMENT
            </Card.Header>
            <Card.Img src="Images/men10.jpg" alt="" className="img-fluid" />
            <Card.Body>
              <Card.Text className="cards_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
              <Button className="cards_button bg-dark border-0">
                READ MORE
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cards;
