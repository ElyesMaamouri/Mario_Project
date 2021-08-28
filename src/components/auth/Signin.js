import React, { Component } from "react";
import { connect } from "react-redux";
import { logIn } from "../store/actions/authActions";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    messageErr: null,
  };
  handelChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handelSbmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.sigIn(this.state); // la fonction sigIn() qui se trouve dans mapDispatchToPops
    console.log("im here", this.props);
  };

  render() {
    const { auth_error } = this.props; //destruction du variable auth_error à partir de l'objet props
    console.log("ERRRR", this.props.auth_error);
    return (
      <div className="container">
        <form onSubmit={this.handelSbmit} className="white">
          <h5 className="grey-text text-darken-3">SignIn</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handelChange} />
          </div>

          <div className="input-field">
            <label htmlFor="password">Email</label>
            <input type="password" id="password" onChange={this.handelChange} />
            <div className="input-field">
              <button className="btn pink light">Login</button>
              {console.log("rendering....")}
              {auth_error ? <p>{auth_error}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth_error: state.auth.authError, // (auth c'est la proprieté dans authReducer) (authError : variable qui se trouve dans le state)
  };
};

const mapDispatchToPops = (dispatch) => {
  return {
    sigIn: (creds) => dispatch(logIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToPops)(SignIn);
