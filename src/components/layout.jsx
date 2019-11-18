import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Counters from "./counters";
import Floor from "./floor";
import Edit from "./edit";
import Step from "./step";
import nextId from "react-id-generator";

class LayOut extends Component {
  state = {
    floorWidth: 640,
    floorHeight: 400,
    floorLeft: 155,
    stepHighlighted: [
      {
        id: 0,
        stepId: ""
      }
    ],
    stepCount: 0,
    floorSteps: []
  };
  handleHighlighted = id => {
    if (id.includes("floor"))
      return this.setState(prevState => ({
        floorSteps: prevState.floorSteps.map(step =>
          "#floor" + step.id === id
            ? { ...step, highlighted: !step.highlighted }
            : step
        )
      }));
    else return null;
  };
  handleAddStep = (newStep, token) => {
    const {
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
            nextId(),
            name,
            startDegree,
            endDegree,
            turnDegree,
            forwardDistance,
            sidewaysDistance,
            image,
            true
          )
        ]
      }));
    }
    /*     } else
      this.setState(prevState => ({
        floorSteps: prevState.floorSteps.map(step =>
          step.id === newStep.id ? { ...step, draggable: true } : step
        )
      })); */
  };

  handleRemoveStep = () => {
    this.setState(prevState => ({
      floorSteps: prevState.floorSteps.filter(step => !step.highlighted)
    }));
  };

  handleRotateFloor = () => {
    this.setState(prevState => ({
      floorWidth: prevState.floorHeight,
      floorHeight: prevState.floorWidth,
      floorLeft: (950 - prevState.floorHeight) / 2
    }));
  };

  handleClearFloor = () => {
    this.setState({ floorSteps: [] });
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
      floorSteps: prevState.floorSteps.map(step =>
        step.highlighted
          ? { ...step, startDegree: (step.startDegree + 45) % 360 }
          : step
      )
    }));
  };

  handleRotateLeft = () => {
    this.setState(prevState => ({
      floorSteps: prevState.floorSteps.map(step =>
        step.highlighted
          ? { ...step, startDegree: (step.startDegree - 45) % 360 }
          : step
      )
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

  render() {
    /* const { counters, onReset, onIncrement, onDelete } = this.props; */
    return (
      <Row className="Surface">
        <Col className="Col-1">
          {" "}
          <Counters
            waltzSteps={this.props.waltzSteps}
            onAddStep={this.handleAddStep}
            onHighlighted={this.handleHighlighted}
          />
        </Col>
        <Col className="Col-2" xs={6}>
          <Floor
            floorWidth={this.state.floorWidth}
            floorHeight={this.state.floorHeight}
            floorLeft={this.state.floorLeft}
            floorSteps={this.state.floorSteps}
            onAddStep={this.handleAddStep}
            onHighlighted={this.handleHighlighted}
          />
        </Col>
        <Col className="Col-3">
          <Edit
            onZoomIn={this.handleZoomIn}
            onZoomOut={this.handleZoomOut}
            onRotateRight={this.handleRotateRight}
            onRotateLeft={this.handleRotateLeft}
            onRotateFloor={this.handleRotateFloor}
            onRemoveStep={this.handleRemoveStep}
            onClearFloor={this.handleClearFloor}
            onWidthSelect={this.handleWidthSelect}
            onHeightSelect={this.handleHeightSelect}
          />
        </Col>
      </Row>
    );
  }
}

export default LayOut;
