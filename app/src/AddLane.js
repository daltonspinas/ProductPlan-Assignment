import React, { Component } from "react";
import { ItemTypes } from "./Constants";
import { DragSource } from "react-dnd";
import ee from "./Event";

const itemSource = {
  beginDrag(props) {
    ee.emit("lane-grabbed");
    return { type: "lane" };
  },
  endDrag(props, monitor) {
    ee.emit("lane-dropped");
    if (monitor.didDrop()) {
      ee.emit("lane-placed");
    } else {
      console.log("invalid");
    }
  },
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
}
class AddLane extends Component {
  render() {
    const { isDragging, connectDragSource, src } = this.props;
    return connectDragSource(<div>Add Lane</div>);
    /* code here */
  }
}
export default DragSource(ItemTypes.lane, itemSource, collect)(AddLane);
