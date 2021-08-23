import React from "react";

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title"> Project Title - {id}</span>
          <p>
            Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum est
            le faux texte standard de l'imprimerie depuis les années 1500,
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by the Name</div>
          <div>2nd September , 2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
