import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";

export default class Login extends Component {
  constructor(props) {
    super(props);
    let loggedIn = false;
    // const token = localStorage.getItem("token");

    // let loggedIn = true;
    // if (token === null) {
    //   loggedIn = false;
    // }
    this.state = {
      username: "",
      password: "",
      loggedIn,
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitForm(e) {
    e.preventDefault();
    const { username, password } = this.state;
    if (username === "karyam" && password === "karyam@1234") {
      localStorage.setItem("token", "dfklheiofdskfjanfhesoifsdnifbkb");
      this.setState({
        loggedIn: true,
      });
    }
  }
  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/home" />;
    }
    return (
      <div className="row">
        <div className="col-sm-3 col-center login-wrapper">
          {/* <h1>Login</h1>
        <p><PersonIcon/></p> */}
          <form onSubmit={this.submitForm}>
            <h3>User login</h3>
            <input
              type="text"
              placeholder="username"
              className="form-control"
              name="username"
              value={this.state.username}
              onChange={this.onChange}
            />
            <br />
            <input
              type="password"
              placeholder="password"
              className="form-control"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            />
            <br />
            <input className="btn btn-primary" type="submit" />
          </form>
        </div>
      </div>
    );
  }
}
