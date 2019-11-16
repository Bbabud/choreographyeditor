import React, { Component } from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import Collapsible from "./collapsible";
import Step from "./step";

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
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#">Eszközök</Navbar.Brand>
        </Navbar>
        <Collapsible title="Standard" className="Dances">
          <Col>
            <Container className="TypeGroups">
              <Row>
                <Collapsible title={this.state.danceTypes[0].name}>
                  {this.props.waltzSteps.map(step => (
                    <Step
                      id={"#counter" + step.id}
                      draggable="true"
                      key={step.id}
                      step={step}
                      onAddStep={this.props.onAddStep}
                      onHighlightStep={this.props.onHighlightStep}
                    />
                  ))}
                </Collapsible>
              </Row>
              <Row>
                <Collapsible title={this.state.danceTypes[1].name} />
              </Row>
              <Row>
                <Collapsible title={this.state.danceTypes[2].name} />
              </Row>
            </Container>
          </Col>
        </Collapsible>
      </div>
    );
  }
}

export default Counters;
