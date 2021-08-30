import React from "react";
import { NavLink } from "react-router-dom";
import { signOut } from "../store/actions/authActions";
import { connect } from "react-redux";

const SignedInLinks = (props) => {
  return (
    <ul className="right">
      <li>
        {/* class Active react */}
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
        <a onClick={props.logOut}>Log Out</a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          {props.profileUser.initials}
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToPops = (dispatch) => {
  return {
    logOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToPops)(SignedInLinks);
