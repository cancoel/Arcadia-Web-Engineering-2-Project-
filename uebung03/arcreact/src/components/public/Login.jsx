import React, { Component } from "react";
import "../../stylesheets/Login.css";
import Avatar from "../../arcfrontend/layout/img/avatar.png";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";

class Login extends Component {
  render() {
    return (
      <div id="signin" className="modal fade">
        <div className="modal-dialog modal-login">
          <div className="modal-content">
            <div className="modal-header">
              <div className="avatar">
                <img src={Avatar} alt="Avatar" />
              </div>
              <h4 className="modal-title">Member Login</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    placeholder="Username"
                    required="required"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    required="required"
                  />
                </div>
                <div className="form-group">
                  <a
                    href="privateIndex.html"
                    className="btn btn-primary btn-lg btn-block login-btn"
                  >
                    Login
                  </a>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <a href="#">Forgot Password?</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
