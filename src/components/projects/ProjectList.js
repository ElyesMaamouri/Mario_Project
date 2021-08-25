import React from "react";
import ProjectSummary from "./ProjectSummary";

const ProjectList = ({ projects }) => {
  console.log("ProjectList =>", projects);
  return (
    <div className="project-list section">
      {projects &&
        projects.map((item) => {
          return <ProjectSummary project={item} key={item.id} />;
        })}
    </div>
  );
};

export default ProjectList;
