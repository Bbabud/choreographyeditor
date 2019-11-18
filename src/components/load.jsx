import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Load extends Component {
  render() {
    return (
      <Container className="input-group">
        <Container className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="inputGroupFile04"
            aria-describedby="inputGroupFileAddon04"
          />
          <label className="custom-file-label" for="inputGroupFile04">
            Choose file
          </label>
        </Container>
        <Container className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="inputGroupFileAddon04"
          >
            Button
          </button>
        </Container>
      </Container>
    );
  }
}

export default Load;
