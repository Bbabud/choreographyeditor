import React, { Component } from "react";
import Board from "./board";

class Tile extends Component {
  render() {
    return (
      <div
        style={{ width: this.props.width, height: this.props.height }}
        tileId={"tile: [" + this.props.x + "][" + this.props.y + "]"}
        className="Tile"
      >
        <Board
          id={"board: [" + this.props.x + "][" + this.props.y + "]"}
          className="TileBoard"
        />
      </div>
    );
  }
}

export default Tile;
