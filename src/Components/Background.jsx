import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselItem,
} from "mdb-react-ui-kit";
import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Background = () => {
  return (
    <>
      <Container fluid className="background_container">
        <h1>PERFECT</h1>
        <h3>COMMUNICATION SERVICE</h3>
        <Button className="background_button">
          <Link to="/login" className="btn_link">
            MORE
          </Link>{" "}
        </Button>
      </Container>
    </>
  );
};

export default Background;
