import React, { Component } from "react";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };
  handelChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handelSbmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
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
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
