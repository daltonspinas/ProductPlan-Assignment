import React, { Component } from "react";
import LaneDropTarget from "./LaneDropTarget";
import Lane from "./Lane";
import ee from "./Event";

class Board extends Component {
  constructor() {
    super();
    this.state = { lanePlaced: false };
  }

  componentDidMount() {
    ee.addListener("lane-placed", () => {
      console.log("lane placed");
      this.setState({ lanePlaced: true });
    });
  }

  render() {
    return (
      <div id='board'>
        {this.state.lanePlaced ? <Lane /> : <LaneDropTarget />}
      </div>
    );
  }
}

export default Board;
