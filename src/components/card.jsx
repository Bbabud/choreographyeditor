import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

class StepCard extends Component {
  render() {
    return (
      <Card className="stepCard">
        <Card.Img
          className="stepCard-img"
          variant="top"
          src={this.props.image}
          style={{
            width: "80px",
            height: "80px",
            position: "relative",
            left: "1rem"
          }}
        />
        <Card.Body>
          <Card.Title style={{ fontSize: "20px" }}>
            {this.props.step.name}
          </Card.Title>
          <Card.Text style={{ fontSize: "10px", margin: 0 }}>
            Ez egy figura
          </Card.Text>
          <Button
            variant="success"
            size="sm"
            style={{
              position: "absolute",
              bottom: "5px",
              left: "1.5rem",
              margin: "auto"
            }}
            onClick={() => {
              this.props.onAddStep(this.props.step, this.props.id);
            }}
          >
            Add step
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default StepCard;
