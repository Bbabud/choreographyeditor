import React, { Component } from "react";
import Menu from "./components/navbar";
import LayOut from "./components/layout";
import "./css/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Step from "./components/steps";

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
        require("./assets/BasicForwardStep.png")
      ),
      new Step(
        2,
        "Basic Backward Step",
        0,
        0,
        0,
        -1,
        -1,
        require("./assets/BasicBackwardStep.png")
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
