import React from "react";
import { counter } from "./NavBar"

function ProjectItem({ id, technologies, name, about }) {
  let startcounternum = counter();
  const technologiesSpan = technologies.map(element=> {
    startcounternum++
    return (
      <span key={startcounternum}>{element}</span>)
  })

  return (
    <div className="project-item" key={id}>
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologiesSpan}
      </div>
    </div>
  );
}

export default ProjectItem;
