import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li>
        {/* class Active react */}
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
        <NavLink to="/">Log Out</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          EM
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
