import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import { FaHome, FaSearch } from "react-icons/fa";

const Navbars = () => {
  return (
    <Navbar expand="lg" className="navbarss">
      <Container fluid className="navbars">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav>
            <Nav.Link href="/" className="mx-2 links">
              <FaHome />
            </Nav.Link>

            <Nav.Link href="#company" className="mx-2 links">
              COMPANY
            </Nav.Link>
            <Nav.Link href="#solutions" className="mx-2 links">
              SOLUTIONS
            </Nav.Link>
            <Nav.Link href="#services" className="mx-2 links">
              SERVICES
            </Nav.Link>
            <Nav.Link href="#blog" className="mx-2 links">
              BLOG
            </Nav.Link>
            <Nav.Link href="#contacts" className="mx-2 links">
              CONTACTS
            </Nav.Link>
            <Form className="d-flex">
              <Form.Control
                type="search"
                className="mx-2 bg-dark text-white border-0"
                aria-label="Search"
              />{" "}
              <Button className="bg-dark border-0">Search</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
