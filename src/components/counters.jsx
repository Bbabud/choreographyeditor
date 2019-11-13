import React, { Component } from "react";
/* import Counter from "./counter"; */
import { Navbar, Container } from "react-bootstrap";
import Collapsible from "./collapsible";
import Step from "./steps";
import Draggable from "react-draggable";

import Board from "./board";

class Counters extends Component {
  state = {
    danceTypes: [
      { id: 1, name: "Waltz" },
      { id: 2, name: "Tango" },
      { id: 3, name: "Quick-step" }
    ]
  };
  constructor(props) {
    super(props);
  }
  togglePanel(e) {
    this.togglePanel.bind(this);
    this.setState({ open: !this.state.open });
  }
  render() {
    /* const { counters, onDelete, onReset, onIncrement } = this.props; */
    return (
      <div>
        <Navbar expand="lg" variant="light" bg="warning">
          <Navbar.Brand href="#">Eszközök</Navbar.Brand>
        </Navbar>
        <Collapsible title="Standard" className="Dances">
          <Container className="TypeGroups">
            <Collapsible title={this.state.danceTypes[0].name}>
              <Board id="board-1" className="Waltz">
                {this.props.waltzSteps.map(step => (
                  <Step
                    id={"#element" + step.id}
                    draggable="true"
                    key={step.id}
                    step={step}
                  />
                ))}
              </Board>
            </Collapsible>
            <Collapsible title={this.state.danceTypes[1].name} />
            <Collapsible title={this.state.danceTypes[2].name} />
          </Container>
        </Collapsible>
        {/*         <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          /> 
        ))}*/}
      </div>
    );
  }
}

export default Counters;
