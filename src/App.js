import React, { Component } from "react";
import Menu from "./components/navbar";
import LayOut from "./components/layout";
import "./css/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Step from "./components/step";

class App extends Component {
  render() {
    const waltzSteps = [
      new Step(
        1,
        "Basic Forward Step",
        0,
        0,
        0,
        1,
        1,
        require("./assets/BasicForwardStep.png"),
        false
      ),
      new Step(
        2,
        "Basic Backward Step",
        0,
        0,
        0,
        -1,
        -1,
        require("./assets/BasicBackwardStep.png"),
        false
      ),
      new Step(
        8,
        "Basic Forward Step",
        0,
        0,
        0,
        1,
        1,
        require("./assets/BasicForwardStep.png"),
        false
      ),
      new Step(
        3,
        "Basic Forward Step",
        0,
        0,
        0,
        1,
        1,
        require("./assets/BasicForwardStep.png"),
        false
      ),
      new Step(
        4,
        "Basic Forward Step",
        0,
        0,
        0,
        1,
        1,
        require("./assets/BasicForwardStep.png"),
        false
      ),
      new Step(
        5,
        "Basic Backward Step",
        0,
        0,
        0,
        -1,
        -1,
        require("./assets/BasicBackwardStep.png"),
        false
      ),
      new Step(
        6,
        "Basic Forward Step",
        0,
        0,
        0,
        1,
        1,
        require("./assets/BasicForwardStep.png"),
        false
      ),
      new Step(
        7,
        "Basic Forward Step",
        0,
        0,
        0,
        1,
        1,
        require("./assets/BasicForwardStep.png"),
        false
      )
    ];
    return (
      <React.Fragment>
        <Menu />
        <LayOut waltzSteps={waltzSteps} />
      </React.Fragment>
    );
  }
}

export default App;
