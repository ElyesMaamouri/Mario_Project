import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => {
  console.log("ProjectList =>", projects);
  return (
    <div className="project-list section">
      {projects &&
        projects.map((item) => {
          return (
            <Link to={"/project/" + item.id}>
              <ProjectSummary project={item} key={item.id} />
            </Link>
          );
        })}
    </div>
  );
};

export default ProjectList;
