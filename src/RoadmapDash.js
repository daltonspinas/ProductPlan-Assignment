import React from "react";

function RoadmapDash() {
  const subTitles = ["Roadmap", "Planning board", "Parking lot"];
  return (
    <div className='roadmap-dash'>
      <div style={{ height: "100%", width: "40%", float: "left" }}>
        <p id='roadmap-title'>Product roadmap</p>
      </div>
      <div id='sub-titles'>
        <div>
          {subTitles.map(title => (
            <span className='sub-span'>{title}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RoadmapDash;
