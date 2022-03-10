import React from "react";
import "./styles/Header.css";
import { Button, Col, Row } from "react-bootstrap";
import image from "../images/online-pharmacy.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
const Header = () => {
  return (
    <>
      <div className="main">
        <Row>
          <Col xs={8}>
            <div className="ml">
              <img src={image} alt="laptop" height={512} width={512} />
            </div>
          </Col>
          <Col>
            <div className="text-light mt">
              <h1>Solution for</h1>
              <h1>your pharmacies</h1>
            </div>
          </Col>
        </Row>
      </div>
      <div className="mt-4 d-flex justify-content-center">
        <Button variant="primary px-5 py-3" size="lg">
          Get Started
          <i className="p-3">
            <BsFillArrowRightCircleFill />
          </i>
        </Button>
      </div>
    </>
  );
};

export default Header;
