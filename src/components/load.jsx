import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Load extends Component {
  fileSelectedHandler = event => {
    console.log(event.target.files[0]);
  };

  render() {
    return (
      <Container className="input-group">
        <Container className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="inputGroupFile"
            aria-describedby="inputGroupFileAddon"
          />
          <label className="custom-file-label" for="inputGroupFile">
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
