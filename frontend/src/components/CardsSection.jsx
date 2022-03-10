import React from "react";
import {  Col, Container, Row } from "react-bootstrap";
import Cards from "./Cards";
import medication from "../images/medication.png";
import transfer from "../images/transfer.png"
import money from "../images/money.png";
import "./styles/CardsSection.css";
const CardsSection = () => {
  return (
    <div className="cards-section">
      <Container>
        <Row>
          <Col xs={4}>
            <Cards title="Manage finance" source={money} />
          </Col>
          <Col xs={4}>
            <Cards title="Keep the record of inventory" source={medication} />
          </Col>
          <Col xs={4}>
            <Cards title="Track record of supply" source={transfer} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CardsSection;
