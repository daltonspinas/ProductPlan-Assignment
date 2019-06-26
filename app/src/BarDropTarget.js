import React, { Component } from "react";
import { DropTarget } from "react-dnd";
import { ItemTypes } from "./Constants";
import ee from "./Event";

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
  };
}

const spec = {
  drop: (props, monitor) => {
    if (!monitor.didDrop()) {
      console.log("success from the target");
    }
  },
};

class BarDropTarget extends Component {
  constructor() {
    super();
    this.state = { barGrabbed: false };
  }
  componentDidMount() {
    ee.addListener("bar-grabbed", () => {
      this.setState({ barGrabbed: true });
    });
    ee.addListener("bar-dropped", () => {
      this.setState({ barGrabbed: false });
    });
  }
  render() {
    const { connectDropTarget } = this.props;
    return connectDropTarget(
      <div>
        {this.state.barGrabbed ? (
          <div id='bar-drop-target'>Drop bar here</div>
        ) : null}
      </div>
    );
  }
}
export default DropTarget(ItemTypes.lane, spec, collect)(BarDropTarget);
