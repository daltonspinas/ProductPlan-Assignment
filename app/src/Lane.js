import React, { Component } from "react";
import ee from "./Event";

class Lane extends Component {
  constructor() {
    super();
    this.state = { bars: 0 };
  }

  componentDidMount() {
    ee.addListener("bar-placed", () => {
      this.setState({ bars: this.state.bars++ });
    });
  }

  render() {
    console.log("hello from lane");
    return (
      <div id='lane'>
        <div>&#9661; Lane</div>
        <table>
          <tbody>
            <tr />
            <tr />
          </tbody>
        </table>
      </div>
    );
  }
}

export default Lane;
