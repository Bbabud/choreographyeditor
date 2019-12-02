import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Draggable from "react-draggable";
import Images from "../files/images";

class Step extends Component {
  state = {
    /*     id: 1,
    name: "Basic Forward Step",
    startDegree: 0,
    endDegree: 0,
    turnDegree: 0,
    forwardDistance: 1,
    sidewaysDistance: 1,
    image: "",
    draggable: false, */
    activeDrags: 0,
    controlledPosition: {
      x: 0,
      y: 0
    }
  };

  constructor(id, name, startDegree, endDegree, turnDegree, fD, sD, draggable) {
    super();
    this.id = id;
    this.name = name;
    this.startDegree = startDegree;
    this.endDegree = endDegree;
    this.turnDegree = turnDegree;
    this.forwardDistance = fD;
    this.sidewaysDistance = sD;
    this.draggable = draggable;
  }

  handleHighlightedColor(step) {
    return step.highlighted ? "rgba(244,151,151,0.6)" : "transparent";
  }

  onStart = () => {
    this.setState(prevState => ({
      activeDrags: ++prevState.activeDrags
    }));
  };

  onStop = () => {
    this.setState(prevState => ({
      activeDrags: --prevState.activeDrags
    }));
  };

  handleImage = name => {
    return Images.adata.Waltz.filter(step => step.name === name)[0].image;
  };

  onControlledDrag = (e, position) => {
    const { x, y } = position;
    this.setState({ controlledPosition: { x, y } });
  };

  handleState = () => {
    this.props.onPosition(this.props.id, this.state.controlledPosition);
    this.onStop();
  };

  handleControlledPosition = () => {
    if (this.props.step.position !== undefined) {
      const { x, y } = this.props.step.position;
      this.setState({ controlledPosition: { x, y } });
    }
    this.onStart();
  };

  render() {
    /* const dragHandlers = { onStart: this.onStart, onStop: this.onStop }; */
    const { stepWidth, stepHeight } = this.props.floor;
    return (
      <Draggable
        disabled={!this.props.step.draggable}
        grid={[stepWidth / 2, stepHeight / 2]}
        bounds="parent"
        /* {...dragHandlers} */
        onStart={this.handleControlledPosition}
        position={this.props.step.position}
        onDrag={this.onControlledDrag}
        onStop={this.handleState}
      >
        <div
          className="stepBox"
          style={{
            width: stepWidth,
            height: stepHeight
          }}
        >
          <Container
            id={this.props.id}
            className="DndStep"
            style={{
              height: stepHeight,
              width: stepWidth,
              backgroundImage:
                "url(" + this.handleImage(this.props.step.name) + ")",
              backgroundSize: `${stepWidth}px ${stepHeight}px`,
              backgroundColor: this.handleHighlightedColor(this.props.step),
              transform: `rotate(${this.props.step.startDegree}deg)`
            }}
            alt={this.props.step.name}
            onClick={() => {
              this.props.onAddStep(this.props.step, this.props.id);
              this.props.onHighlighted(this.props.id);
            }}
          >
            {this.props.children}
          </Container>
        </div>
      </Draggable>
    );
  }
}

export default Step;
