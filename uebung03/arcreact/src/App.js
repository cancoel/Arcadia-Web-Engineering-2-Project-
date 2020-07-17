import React, { Component } from "react";
import Content from "./components/shared/Content";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./stylesheets/style.css";
import { connect } from "react-redux";

class App extends Component {
  render() {
    const user = this.props.users.item; // user from redux store
    const isLoggedIn = user !== null; // is someone logged in?
    return (
      <div className="App">
        <Content isLoggedIn={isLoggedIn} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(App);

