import React, { Component } from "react";
import { Container, Navbar, Button } from "react-bootstrap";

class Edit extends Component {
  render() {
    return (
      <Container>
        <Navbar expand="lg" variant="dark" bg="info">
          <Navbar.Brand href="#">Szerkesztés</Navbar.Brand>{" "}
          {/* kattintásra majd tünjön el */}
        </Navbar>
        <Button
          onClick={this.props.onZoomIn}
          className="btn btn-secondary btn-sm"
        >
          ZoomIn
        </Button>
        <Button
          onClick={this.props.onZoomOut}
          className="btn btn-secondary btn-sm"
        >
          ZoomOut
        </Button>{" "}
        <Button
          onClick={this.props.onRotateRight}
          className="btn btn-secondary btn-sm"
        >
          RotateRight
        </Button>{" "}
        <Button
          onClick={this.props.onRotateLeft}
          className="btn btn-secondary btn-sm"
        >
          RotateLeft
        </Button>
      </Container>
    );
  }
}

export default Edit;
