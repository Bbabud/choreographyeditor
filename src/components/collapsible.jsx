import React, { Component } from "react";
import { Container, Navbar } from "react-bootstrap";

//created by me, switched to bootsrap's own later on

class Collapsible extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.togglePanel = this.togglePanel.bind(this);
  }

  togglePanel(e) {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <Container className="DanceType">
        <Navbar onClick={e => this.togglePanel(e)} className="header">
          <h3>{this.props.title}</h3>
        </Navbar>
        {this.state.open ? (
          <Container className="content">{this.props.children}</Container>
        ) : null}
      </Container>
    );
  }
}

export default Collapsible;
