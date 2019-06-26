import React, { Component } from "react";
import { ItemTypes } from "./Constants";
import { DragSource } from "react-dnd";
import ee from "./Event";

const itemSource = {
  beginDrag(props) {
    ee.emit("bar-grabbed");
    return { type: "bar" };
  },
  endDrag(props, monitor) {
    ee.emit("bar-dropped");
    if (monitor.didDrop()) {
      console.log("bar was placed");
      ee.emit("bar-placed");
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
class AddBar extends Component {
  render() {
    const { isDragging, connectDragSource, src } = this.props;
    return connectDragSource(<div>Add Bar</div>);
    /* code here */
  }
}
export default DragSource(ItemTypes.lane, itemSource, collect)(AddBar);
