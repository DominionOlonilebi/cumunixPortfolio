import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./Header";
import Navbars from "./Navbars";
import Footer from "./Footer";

const Login = () => {
  return (
    <>
      <Header />
      <Navbars />
      <Container fluid className="login_container">
        <Row className="d-flex flex-row justify-content-center">
          <Col md={3}>
            <div className="login">
              <h1>Sign In</h1>

              <form className="form-group" autoComplete="off">
                <input
                  type="email"
                  className="form-control my-4"
                  required
                  placeholder="Email"
                />
                <input
                  type="password"
                  className="form-control my-4"
                  required
                  placeholder="Password"
                  name=""
                />
                <Button className="login_button">Sign In</Button>
                <br /> <br />
                <div className="signlog_button">
                  <span>
                    Don't have an account?&nbsp;
                    <Link to="/signup" className="logsign_link">
                      Signup
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

export default Login;
