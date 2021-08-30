import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../store/actions/projectActions";
import { Redirect } from "react-router-dom";

class CreateProject extends Component {
  state = {
    title: "",
    content: "",
  };
  handelChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handelSbmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.newProject(this.state);
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container">
        <form onSubmit={this.handelSbmit} className="white">
          <h5 className="grey-text text-darken-3">Create New Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handelChange} />
          </div>

          <div className="input-field">
            <label htmlFor="content">Content Project</label>
            <textarea
              type="text"
              id="content"
              onChange={this.handelChange}
              className="materialize-textarea"
            ></textarea>
            <div className="input-field"></div>
          </div>

          <button className="btn pink light">Add Project</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    newProject: (project) => dispatch(createProject(project)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
