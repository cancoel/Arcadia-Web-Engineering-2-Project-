import React from "react";
import { Switch, Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Forum from "./forum/Forum";
import CategoryCards from "./cards/CategoryCards";
import TopMenu, {
  WelcLabel,
  SettingsButton,
  SignOutButton,
  HomeButton,
  RegButton,
  SignInButton,
} from "../shared/header";
import Login from "../public/Login";

const headerItems = {
  public: [HomeButton, RegButton, SignInButton],
  private: [WelcLabel, SettingsButton, SignOutButton],
};

function Content({ isLoggedIn }) {
  const username = localStorage.getItem("username"); // user from localStorage
  const isPrivate = username !== null; // is user in localstorage?
  const items =
    isLoggedIn || isPrivate ? headerItems.private : headerItems.public;
  return (
    <Router>
      <TopMenu buttons={items} />
      <Login />
      <Switch>
        <Route path="/gaming">
          <Forum type="Gaming" />
        </Route>
        <Route path="/off-topic">
          <Forum type="Off Topic" />
        </Route>
        <Route path="/announcements">
          <Forum type="Announcements" />
        </Route>
        <Route component={CategoryCards} />
      </Switch>
    </Router>
  );
}

export default Content;
