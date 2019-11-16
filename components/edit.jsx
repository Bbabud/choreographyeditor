import React, { Component } from "react";
import { Container, Navbar, Button } from "react-bootstrap";

class Edit extends Component {
  state = {
    width: 16,
    height: 10,
    area: 160
  };

  sizeQualification() {
    const tempArea = this.state.width * this.state.height;
    if (tempArea < 140) return "Verseny szabályzatilag nem elfogadott";
    else
      return tempArea < 160
        ? "Kerületi versenyen elfogadott"
        : "OB méretű táncparkett";
  }
  render() {
    return (
      <Container>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#">Szerkesztés</Navbar.Brand>{" "}
          {/* kattintásra majd tünjön el */}
        </Navbar>
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
        <Button
          onClick={this.props.onRotateFloor}
          className="btn btn-secondary btn-sm"
        >
          RotateFloor
        </Button>
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
                this.props.onHeightSelect(this.refs.height.value);
                this.setState({ height: this.refs.height.value });
              }}
              className="btn btn-outline-secondary"
              type="button"
            >
              Height
            </button>
          </div>
        </div>
        <span> {this.sizeQualification()}</span>
      </Container>
    );
  }
}

export default Edit;
