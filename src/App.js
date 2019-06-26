import React from "react";
import Header from "./Header";
import RoadmapDash from "./RoadmapDash";
import Board from "./Board";
import SideMenu from "./SideMenu";
import { DndProvider, DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

function App() {
  return (
    <div className='app'>
      <DndProvider backend={HTML5Backend} />
      <Header />
      <RoadmapDash />
      <Board />
      <SideMenu />
    </div>
  );
}

export default DragDropContext(HTML5Backend)(App);
