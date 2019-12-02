import React, { Component } from "react";

import { Row, Col, Button, Badge } from "react-bootstrap";
import Counters from "./counters";
import Floor from "./floor";
import Edit from "./edit";
import Step from "./step";
import nextId from "react-id-generator";
import FolderDirectory from "../files/floor.json";


class LayOut extends Component {
  state = {
    floorWidth: 640,
    floorHeight: 400,

    floorLeft: 155,
    stepWidth: 40,
    stepHeight: 40,
    zoomRate: 1.1,
    zoomCount: 0,
    stepCount: 0,
    floorSteps: []
  };
  constructor(props) {
    super(props);
    this.handleLoad.bind(this);
  }

  handleSave = () => {
    let fs = require("browserify-fs");
    const data = JSON.stringify(this.state, null, 2);
    fs.writeFile(FolderDirectory, data, finished);

    function finished(err) {
      fs.close(FolderDirectory, function() {
        console.log("wrote the file successfully");
      });
      console.log("all set.");
      console.log(data);
    }
  };
  handleLoad = () => {
    let fs = require("browserify-fs");
    fs.readFile(FolderDirectory, "utf-8", (err, data) => {
      //console.log(data);

      const floor = JSON.parse(data);
      //console.log(floor);
      this.setState({
        floorWidth: floor.floorWidth,
        floorHeight: floor.floorHeight,
        floorLeft: floor.floorLeft,
        stepWidth: floor.stepWidth,
        stepHeight: floor.stepHeight,
        zoomCount: floor.zoomCount,
        zoomRate: floor.zoomRate,
        floorSteps: floor.floorSteps
      });
      return floor;
    });
  };

  handleUpload = file => {};

  handlePosition = (id, position) => {
    const { x, y } = position;
    if (id.includes("floor"))
      return this.setState(prevState => ({
        floorSteps: prevState.floorSteps.map(step =>
          "#floor" + step.id === id ? { ...step, position: { x, y } } : step
        )
      }));
    else return null;
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
      sidewaysDistance
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

    style.zoomCount += 1;
    style.floorWidth *= style.zoomRate;
    style.floorHeight *= style.zoomRate;
    style.floorLeft -= (style.floorWidth - this.state.floorWidth) / 2;
    style.stepWidth *= style.zoomRate;
    style.stepHeight *= style.zoomRate;

    this.setState(style);
  };

  handleZoomOut = () => {
    let style = { ...this.state };

    style.zoomCount -= 1;
    style.floorWidth /= style.zoomRate;
    style.floorHeight /= style.zoomRate;
    style.floorLeft -= (style.floorWidth - this.state.floorWidth) / 2;
    style.stepWidth /= style.zoomRate;
    style.stepHeight /= style.zoomRate;

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
      floorWidth:
        value *
        this.state.stepWidth *
        Math.pow(this.state.zoomRate, this.state.zoomCount),
      floorLeft:
        (950 -
          value *
            this.state.stepWidth *
            Math.pow(this.state.zoomRate, this.state.zoomCount)) /
        2
    });
  };

  handleHeightSelect = value => {
    this.setState({
      floorHeight:
        value *
        this.state.stepHeight *
        Math.pow(this.state.zoomRate, this.state.zoomCount)
    });
  };

  render() {
    return (
      <Row className="Surface">
        <Col className="Col-1">
          {" "}

          <Counters
            onAddStep={this.handleAddStep}
            onHighlighted={this.handleHighlighted}
          />
        </Col>
        <Col className="Col-2" xs={6}>
          <Floor
            floor={this.state}
            onAddStep={this.handleAddStep}
            onHighlighted={this.handleHighlighted}
            onPosition={this.handlePosition}
          />
          <Button variant="Info">
            Zoom{" "}
            <Badge variant="light">
              {Math.round(
                Math.pow(this.state.zoomRate, this.state.zoomCount) * 100
              )}
              %<span className="sr-only">Zoom in percentage</span>
            </Badge>
          </Button>
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
            onSave={this.handleSave}
            onLoad={this.handleLoad}
          />
        </Col>
      </Row>
    );
  }
}

export default LayOut;
