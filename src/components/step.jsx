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
    draggable: false,
    highlighted: false,
    activeDrags: 0,
    deltaPosition: {
      x: 0,
      y: 0
    } /* 
    controlledPosition: {
      x: -400,
      y: 200
    } */
  };

  constructor(
    id,
    name,
    startDegree,
    endDegree,
    turnDegree,
    fD,
    sD,
    img,
    draggable
  ) {
    super();
    this.id = id;
    this.name = name;
    this.startDegree = startDegree;
    this.endDegree = endDegree;
    this.turnDegree = turnDegree;
    this.forwardDistance = fD;
    this.sidewaysDistance = sD;
    this.image = img;
    this.draggable = draggable;
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
    this.setState(prevState => ({
      activeDrags: ++prevState.activeDrags
    }));
  };

  onStop = () => {
    this.setState(prevState => ({
      activeDrags: --prevState.activeDrags
    }));
  };

  handleHighlightedColor(step) {
    return step.highlighted ? "rgba(244,151,151,0.6)" : "transparent";
  }
  /*   handleDisabled = () => {
    this.setState({ isClicked: !this.state.isClicked });
  }; */

  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    return (
      <Draggable
        disabled={!this.props.step.draggable}
        grid={[25, 25]}
        bounds="parent"
        {...dragHandlers}
      >
        <div className="stepBox">
          <Container
            id={this.props.id}
            className="DndStep"
            style={{
              height: 50,
              width: 50,
              backgroundImage: "url(" + this.props.step.image + ")",
              backgroundSize: "50px 50px",
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
