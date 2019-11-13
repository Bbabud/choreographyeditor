import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Steps extends Component {
  state = {
    id: 1,
    name: "Basic Forward Step",
    startDegree: 0,
    endDegree: 0,
    turnDegree: 0,
    forwardDistance: 1,
    sidewaysDistance: 1,
    image: ""
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

  render() {
    const dragStart = e => {
      const target = e.target;

      e.dataTransfer.setData("element_id", target.id);

      setTimeout(() => {
        target.style.display = "none";
      }, 0);
    };

    const dragOver = e => {
      e.stopPropagation();
    };
    return (
      <div
        className={this.props.className}
        draggable={this.props.draggable}
        onDragStart={dragStart}
        onDragOver={dragOver}
      >
        <img
          id={this.props.id}
          className="DndStep"
          style={{ height: 50, width: 50 }}
          src={this.props.step.image}
          alt={this.props.step.name}
        />
        {this.props.children}
      </div>
    );
  }
}

export default Steps;
