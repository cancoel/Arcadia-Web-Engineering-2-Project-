import React, { Fragment } from "react";
import CategoryCards from "../shared/cards/CategoryCards";
import TopMenu, { WelcLabel, SettingsButton, SignOutButton } from "../shared/header";
import { Redirect } from 'react-router';

function PrivatePage() {
  // const loggedIn = false; //get from redux store
  // if (loggedIn === false) {
  //   return <Redirect to="/" />
  // }

  return (
    <Fragment>
      <TopMenu buttons={[WelcLabel, SettingsButton, SignOutButton]} />
      <CategoryCards />
    </Fragment>
  );
}

export default PrivatePage;
