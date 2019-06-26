import React, { Component } from "react";
import AddLane from "./AddLane";

class SideMenu extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id='side-menu'>
        Side Menu
        <AddLane />
      </div>
    );
  }
}

export default SideMenu;
