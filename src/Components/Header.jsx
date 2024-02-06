import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaServicestack } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <Container fluid className="header_container bg-dark">
        <Container>
          <Row>
            <Col md={6}>
              <h4>
                <span className="faservice">
                  <FaServicestack />
                </span>{" "}
                CUM<span className="unix">UNIX</span>
              </h4>
              <p>COMMUNICATION COMPANY</p>
            </Col>
            <Col>
              <h6 className="d-flex flex-row justify-content-end">
                <a href="/login" className="signin">
                  SIGN IN
                </a>
                <a href="/signup" className="signup mx-3">
                  SIGN UP
                </a>
              </h6>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Header;
