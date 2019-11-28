import React, { Component } from "react";
import { Container, Button, Card, Accordion, Alert } from "react-bootstrap";
import Load from "./load";

class Edit extends Component {
  state = {
    width: 16,
    height: 10,
    area: 160
  };

  sizeQualification() {
    const tempArea = this.state.width * this.state.height;
    if (tempArea < 140)
      return (
        <Alert variant="danger">Size is not accepted in comptetitions!</Alert>
      );
    else
      return tempArea < 160 ? (
        <Alert variant="primary">Accepted in regional competitions</Alert>
      ) : (
        <Alert variant="success">
          Accepted in regional and national competitions
        </Alert>
      );
  }

  render() {
    return (
      <Container>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Szerkesztés
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                      Step editor
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        {" "}
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
                        </Button>{" "}
                        <Button
                          onClick={this.props.onRemoveStep}
                          className="btn btn-secondary btn-sm"
                        >
                          RemoveStep
                        </Button>{" "}
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                      Floor editor
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        {" "}
                        <Button
                          onClick={this.props.onZoomIn}
                          className="btn btn-secondary btn-sm"
                        >
                          ZoomIn
                        </Button>{" "}
                        <Button
                          onClick={this.props.onZoomOut}
                          className="btn btn-secondary btn-sm"
                        >
                          ZoomOut
                        </Button>{" "}
                        <Button
                          onClick={this.props.onRotateFloor}
                          className="btn btn-secondary btn-sm"
                        >
                          RotateFloor
                        </Button>{" "}
                        <Button
                          onClick={this.props.onClearFloor}
                          className="btn btn-secondary btn-sm"
                        >
                          ClearFloor
                        </Button>{" "}
                        <Button
                          onClick={this.props.onSave}
                          className="btn btn-secondary btn-sm"
                        >
                          Save
                        </Button>{" "}
                        <Button
                          onClick={this.props.onLoad}
                          className="btn btn-secondary btn-sm"
                        >
                          Load
                        </Button>{" "}
                        <Alert style={{ margin: "5px" }} variant="dark">
                          Set the size of the floor in meters!
                        </Alert>
                        <div className="input-group">
                          <select
                            defaultValue="16"
                            className="sideLength-select"
                            ref="width"
                            id="WidthSelect"
                            aria-label="Example select with button addon"
                          >
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                          </select>
                          <div className="input-group-append">
                            <button
                              onClick={() => {
                                this.props.onWidthSelect(this.refs.width.value);
                                this.setState({ width: this.refs.width.value });
                              }}
                              className="btn btn-outline-secondary"
                              type="button"
                            >
                              Width
                            </button>
                          </div>
                        </div>
                        <div className="input-group">
                          <select
                            defaultValue="10"
                            className="sideLength-select"
                            ref="height"
                            id="HeightSelect"
                            aria-label="Example select with button addon"
                          >
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                          </select>
                          <div className="input-group-append">
                            <button
                              onClick={() => {
                                this.props.onHeightSelect(
                                  this.refs.height.value
                                );
                                this.setState({
                                  height: this.refs.height.value
                                });
                              }}
                              className="btn btn-outline-secondary"
                              type="button"
                            >
                              Height
                            </button>
                          </div>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>{" "}
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                      File
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>
                        {" "}
                        <Load />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>

        <Container style={{ margin: "15px" }}>
          {" "}
          {this.sizeQualification()}
        </Container>
      </Container>
    );
  }
}

export default Edit;
