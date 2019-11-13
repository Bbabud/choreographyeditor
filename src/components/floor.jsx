import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Board from "./board";
import Edit from "./edit";
import Tile from "./tile";

class Floor extends Component {
  render() {
    return (
      <Container
        className="DanceFloor"
        style={{
          width: this.props.floorWidth,
          height: this.props.floorHeight,
          left: this.props.floorLeft
        }}
      >
        <h2>Ez itt a tánctér</h2>
      </Container>
    );
  }
}

export default Floor;
