import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Draggable from "react-draggable";

class Step extends Component {
  state = {
    id: 1,
    name: "Basic Forward Step",
    startDegree: 0,
    endDegree: 0,
    turnDegree: 0,
    forwardDistance: 1,
    sidewaysDistance: 1,
    image: "",
    activeDrags: 0,
    deltaPosition: {
      x: 0,
      y: 0
    },
    controlledPosition: {
      x: -400,
      y: 200
    }
  };

  constructor(id, name, startDegree, endDegree, turnDegree, fD, sD, img) {
    super();
    this.id = id;
    this.name = name;
    this.startDegree = startDegree;
    this.endDegree = endDegree;
    this.turnDegree = turnDegree;
    this.forwardDistance = fD;
    this.sidewaysDistance = sD;
    this.image = img;
  }

  handleDrag = (e, ui) => {
    const { x, y } = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY
      }
    });
  };
  onStart = () => {
    this.setState({ activeDrags: ++this.state.activeDrags });
  };

  onStop = () => {
    this.setState({ activeDrags: --this.state.activeDrags });
  };

  handleDisabled = () => {
    console.log(this.state.deltaPosition);
  };

  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    return (
      <Draggable
        disabled={this.handleDisabled()}
        bounds="parent"
        {...dragHandlers}
      >
        <div className="box">
          <img
            id={this.props.id}
            className="DndStep"
            style={{ height: 50, width: 50 }}
            src={this.props.step.image}
            alt={this.props.step.name}
            onClick={() => {
              this.props.onAddStep(this.props.step, this.props.id);
              this.props.onHighlightStep(this.props.id);
            }}
          />
          {this.props.children}
        </div>
      </Draggable>
    );
  }
}

export default Step;
