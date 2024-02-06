import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselItem,
} from "mdb-react-ui-kit";
import React from "react";
import { Button, Container } from "react-bootstrap";

const Background = () => {
  return (
    <>
      <Container fluid className="background_container">
        <h1>PERFECT</h1>
        <h3>COMMUNICATION SERVICE</h3>
        <Button className="background_button">MORE</Button>
      </Container>
    </>
  );
};

export default Background;
