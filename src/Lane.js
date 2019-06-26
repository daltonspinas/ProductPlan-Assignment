import React, { Component } from "react";
import ee from "./Event";
import BarDropTarget from "./BarDropTarget";
import Bar from "./Bar";

class Lane extends Component {
  constructor() {
    super();
    this.state = { bars: 0 };
  }

  componentDidMount() {
    ee.addListener("bar-placed", () => {
      console.log("lane knows bar was placed");
      this.setState({ bars: (this.state.bars += 1) });
    });
  }

  render() {
    return (
      <div id='lane'>
        <div id='lane-header'>
          <p style={{ fontFamily: "font-awesome" }}>caret-down Lane</p>
        </div>
        <table>
          <tbody>
            <tr>
              <td>
                {this.state.bars === 0 && <BarDropTarget />}
                {this.state.bars >= 1 && <Bar barNumber={1} />}
              </td>
              <td />
              <td />
              <td />
              <td>
                {this.state.bars === 2 && <BarDropTarget />}
                {this.state.bars >= 3 && <Bar barNumber={3} />}
              </td>
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
              <td />
            </tr>
            {this.state.bars >= 1 && (
              <tr>
                <td />
                <td />
                <td>
                  {this.state.bars === 1 && <BarDropTarget />}
                  {this.state.bars >= 2 && <Bar barNumber={2} />}
                </td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Lane;
