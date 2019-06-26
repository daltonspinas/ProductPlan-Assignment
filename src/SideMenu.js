import React, { Component } from "react";
import AddLane from "./AddLane";
import AddBar from "./AddBar";

class SideMenu extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id='side-menu'>
        <AddLane />
        <AddBar />
      </div>
    );
  }
}

export default SideMenu;
