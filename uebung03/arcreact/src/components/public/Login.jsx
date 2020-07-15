import React, { Component } from "react";
//import "../../stylesheets/Login.css";
import Avatar from "../../arcfrontend/layout/img/avatar.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { loginUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.onLogin = this.onLogin.bind(this);
  }

  onLogin(event) {
    const user = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.loginUser(user);
    // $(document).on('hidden.bs.modal','#signin', function () {
    //   window.location = $("#lol").attr("href");
    // });
  }

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
                    value={this.state.username}
                    onChange={(event) =>
                      this.setState({ username: event.target.value })
                    }
                    type="text"
                    className="form-control"
                    name="username"
                    placeholder="Username"
                    required="required"
                  />
                </div>
                <div className="form-group">
                  <input
                    value={this.state.password}
                    onChange={(event) =>
                      this.setState({ password: event.target.value })
                    }
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    required="required"
                  />
                </div>
                <div className="form-group">
                  <a
                    id="lol"
                    type="submit"
                    href="/private"
                    onClick={this.onLogin}
                    className="btn btn-primary btn-lg btn-block login-btn"
                    data-dismiss="modal"
                  >
                    Login
                  </a>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <a href="*">Forgot Password?</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
};

export default connect(null, { loginUser })(Login);
