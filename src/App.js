import React, { Component } from "react";
import Menu from "./components/navbar";
import LayOut from "./components/layout";
import "./css/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Step from "./components/step";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <LayOut />
      </React.Fragment>
    );
  }
}

export default App;
