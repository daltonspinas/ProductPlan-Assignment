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

class LaneDropTarget extends Component {
  constructor() {
    super();
    this.state = { laneGrabbed: false };
  }
  componentDidMount() {
    ee.addListener("lane-grabbed", () => {
      this.setState({ laneGrabbed: true });
    });
    ee.addListener("lane-dropped", () => {
      this.setState({ laneGrabbed: false });
    });
  }
  render() {
    const { connectDropTarget } = this.props;
    return connectDropTarget(
      <div>{this.state.laneGrabbed ? <div>Drop lane here</div> : null}</div>
    );
  }
}
export default DropTarget(ItemTypes.lane, spec, collect)(LaneDropTarget);
