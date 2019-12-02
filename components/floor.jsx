import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Step from "./step";

import Draggable from "react-draggable";

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
        {this.props.floorSteps.map(step => (
          <Step
            id={"#floor" + step.id}
            draggable="true"
            key={step.id}
            step={step}
            onAddStep={this.props.onAddStep}
          />
        ))}
      </Container>
    );
  }
}

export default Floor;
