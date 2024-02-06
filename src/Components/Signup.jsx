import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import Header from "./Header";
import Navbars from "./Navbars";
import Footer from "./Footer";

const Signup = () => {
  return (
    <>
      <Header />
      <Navbars />
      <Container fluid className="signup_container">
        <Row className="d-flex flex-row justify-content-center">
          <Col md={6}>
            <div className="signup">
              <h1>Sign Up</h1>

              <form className="form-group" autoComplete="off">
                <input
                  type="text"
                  id="name"
                  className="form-control my-4 "
                  required
                  placeholder="Full Name"
                />
                <input
                  type="email"
                  id="email"
                  className="form-control my-4 "
                  required
                  placeholder="Email"
                />
                <input
                  type="password"
                  id="password"
                  className="form-control my-4 "
                  required
                  placeholder="Password"
                />
                <Button className="signup_button mt-4 py-2 px-4">
                  Sign Up
                </Button>
                <br /> <br />
                <div className="signlog_button">
                  <span>
                    Already have an account?&nbsp;
                    <Link to="/login" className="logsign_link">
                      Login
                    </Link>
                  </span>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Signup;
