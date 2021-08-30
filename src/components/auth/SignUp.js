import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../store/actions/authActions";
class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };
  handelChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handelSbmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.registerUser(this.state);
  };
  render() {
    const authenticate = this.props.auth;
    const { auth_error } = this.props;
    if (authenticate.uid) return <Redirect to="/" />;
    return (
      <div className="container">
        <form onSubmit={this.handelSbmit} className="white">
          <h5 className="grey-text text-darken-3">SignUp</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handelChange} />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handelChange} />
            <div className="input-field"></div>
          </div>

          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.handelChange} />
            <div className="input-field"></div>
          </div>

          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handelChange} />
            <div className="input-field"></div>
          </div>
          <button className="btn pink light">Sign Up</button>
          {auth_error ? <p>{auth_error}</p> : null}
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state dashboard", state);
  return {
    auth: state.firebase.auth,
    auth_error: state.auth.authError,
  };
};

const mapDispatchToPops = (dispatch) => {
  return {
    registerUser: (newUser) => dispatch(signUp(newUser)),
  };
};
export default connect(mapStateToProps, mapDispatchToPops)(SignUp);
