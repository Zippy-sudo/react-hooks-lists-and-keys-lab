import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects}) {
  const projectslist = projects.map(element => ProjectItem (element))
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectslist}</div>
    </div>
  );
}

export default ProjectList;
