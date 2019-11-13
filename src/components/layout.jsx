import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Board from "./board";
import Counters from "./counters";
import Floor from "./floor";
import Edit from "./edit";

class LayOut extends Component {
  state = {
    floorWidth: 640,
    floorHeight: 400,
    floorLeft: 150,
    imgDegree: 0
  };

  handleZoomIn = () => {
    let style = { ...this.state };
    style.floorWidth += 20;
    style.floorHeight += 20;
    style.floorLeft -= 10;
    this.setState(style);
  };

  handleZoomOut = () => {
    let style = { ...this.state };
    style.floorWidth -= 20;
    style.floorHeight -= 20;
    style.floorLeft += 10;
    this.setState(style);
  };

  handleRotateRight = () => {
    let style = { ...this.state };
    style.imgDegree += 5;
    this.setState(style);
  };
  render() {
    /* const { counters, onReset, onIncrement, onDelete } = this.props; */
    return (
      <Row className="Surface">
        <Col className="Col-1">
          {" "}
          <Container>
            <Counters waltzSteps={this.props.waltzSteps} />
          </Container>
        </Col>
        <Col className="Col-2" xs={6}>
          <Board
            key={"Board-1"}
            id={"#element-1"}
            draggable="true"
            className="FloorBoard"
          >
            <Floor
              floorWidth={this.state.floorWidth}
              floorHeight={this.state.floorHeight}
              floorLeft={this.state.floorLeft}
            />
          </Board>
        </Col>
        <Col className="Col-3">
          <Edit
            onZoomIn={this.handleZoomIn}
            onZoomOut={this.handleZoomOut}
            onRotateRight={this.handleRotateRight}
            onRotateLeft={this.handleRotateLeft}
          />
        </Col>
      </Row>
    );
  }
}

export default LayOut;
