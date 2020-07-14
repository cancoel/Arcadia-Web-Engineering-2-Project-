import React, { Component, Fragment } from "react";
import CategoryCards from "../shared/cards/CategoryCards";
import Login from "./Login";
import TopMenu, { HomeButton, RegButton, SignInButton } from "../shared/header";

class PublicPage extends Component {
  render() {
    return (
      <Fragment>
        <TopMenu buttons={[HomeButton, RegButton, SignInButton]} />
        <CategoryCards />
        <Login/>
      </Fragment>
    );
  }
}

export default PublicPage;
