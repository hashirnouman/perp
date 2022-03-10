import { Button, Navbar } from "react-bootstrap";
import React from "react";
import { Col } from "react-bootstrap";
import logo from "../images/logo.png";
const Navtop = () => {
  return (
    <Navbar>
      <Col xs={10} >
        <img src={logo} alt="logo" height={80} width={80} />
      </Col>
      <Col>
        <Button variant="primary">Login</Button>
        <Button variant="outline-primary" className="m-3">
          Signup
        </Button>
      </Col>
    </Navbar>
  );
};

export default Navtop;
