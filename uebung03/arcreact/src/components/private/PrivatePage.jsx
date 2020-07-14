import React, { Fragment } from "react";
import CategoryCards from "../shared/cards/CategoryCards";
import TopMenu, {
  WelcLabel,
  SettingsButton,
  SignOutButton,
} from "../shared/header";
import { Switch, Route } from "react-router";
import Forum from "../shared/forum/Forum";

function PrivatePage() {
  // const loggedIn = false; //get from redux store
  // if (loggedIn === false) {
  //   return <Redirect to="/" />
  // }

  return (
    <Fragment>
      <TopMenu buttons={[WelcLabel, SettingsButton, SignOutButton]} />
      <CategoryCards/>
      {/* <Switch>
        <Route component={CategoryCards} />
        <Route path="/gaming">
          <Forum type="gaming" />
        </Route>
      </Switch> */}
      
      {/* <Route path="/offtopic">
        <Forum type="offtopic" />
      </Route>
      <Route path="/announcements">
        <Forum type="announcements" />
      </Route> */}
    </Fragment>
  );
}

export default PrivatePage;
