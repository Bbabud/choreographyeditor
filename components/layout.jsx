import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
/* import Board from "./board"; */
import Counters from "./counters";
import Floor from "./floor";
import Edit from "./edit";
import Step from "./step";

class LayOut extends Component {
  state = {
    floorWidth: 640,
    floorHeight: 400,
    floorLeft: 155,
    imgDegree: 0,
    stepHighlighted: [
      {
        id:0,
      stepId:""}
    ],
    stepCount: 0,
    floorSteps: []
  };

  handleAddStep = (newStep, token) => {
    console.log(newStep);
    const {
      id,
      name,
      startDegree,
      endDegree,
      turnDegree,
      forwardDistance,
      sidewaysDistance,
      image
    } = newStep;
    if (token.includes("counter")) {
      this.setState(prevState => ({
        stepCount: prevState.stepCount + 1,
        floorSteps: [
          ...prevState.floorSteps,
          new Step(
            id,
            name,
            startDegree,
            endDegree,
            turnDegree,
            forwardDistance,
            sidewaysDistance,
            image
          )
        ]
      }));
    }
    console.log("adding was successful");
  };

  handleRemoveStep = id => {
    this.setState(prevstate => {
      const steps = prevstate.steps.filter((step, j) => id !== j);
      return {
        steps
      };
    });
  };

  handleRotateFloor = () => {
    this.setState(prevState => ({
      floorWidth: prevState.floorHeight,
      floorHeight: prevState.floorWidth,
      floorLeft: (950 - prevState.floorHeight) / 2
    }));
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
    this.setState(prevState => ({
      imgDegree: prevState.imgDegree + 5
    }));
  };

  handleRotateLeft = () => {
    this.setState(prevState => ({
      imgDegree: prevState.imgDegree - 5
    }));
  };

  handleWidthSelect = value => {
    this.setState({
      floorWidth: value * 40,
      floorLeft: (950 - value * 40) / 2
    });
  };

  handleHeightSelect = value => {
    this.setState({ floorHeight: value * 40 });
  };

  handleClickStep = () => {};

  handleHighlightStep = (id) => {
    this.setState(prevState => ({
      this.stepHighlighted.includes(id)?
      stepHighlighted: !prevState.stepHighlighted
    }));
  };

  render() {
    /* const { counters, onReset, onIncrement, onDelete } = this.props; */
    return (
      <Row className="Surface">
        <Col className="Col-1">
          {" "}
          <Container>
            <Counters
              waltzSteps={this.props.waltzSteps}
              onAddStep={this.handleAddStep}
              onHighlighstStep={this.handleHighlightStep}
            />
          </Container>
        </Col>
        <Col className="Col-2" xs={6}>
          {/* <Board
            key={"Board-1"}
            id={"#element-1"}
            draggable="true"
            className="FloorBoard"
          > */}
          <Floor
            floorWidth={this.state.floorWidth}
            floorHeight={this.state.floorHeight}
            floorLeft={this.state.floorLeft}
            floorSteps={this.state.floorSteps}
            onAddStep={this.handleAddStep}
          />
          {/* </Board> */}
        </Col>
        <Col className="Col-3">
          <Edit
            onZoomIn={this.handleZoomIn}
            onZoomOut={this.handleZoomOut}
            onRotateRight={this.handleRotateRight}
            onRotateLeft={this.handleRotateLeft}
            onRotateFloor={this.handleRotateFloor}
            onWidthSelect={this.handleWidthSelect}
            onHeightSelect={this.handleHeightSelect}
          />
        </Col>
      </Row>
    );
  }
}

export default LayOut;
