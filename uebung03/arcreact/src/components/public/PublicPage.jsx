import React, { Component, Fragment } from "react";
import CategoryCards from "../shared/cards/CategoryCards";
import Login from "./Login";
import TopMenu, { HomeButton, RegButton, SignInButton } from "../shared/header";
import Content from '../shared/Content';

const PublicPage = () => {
  return (
    <Fragment>
      <TopMenu buttons={[HomeButton, RegButton, SignInButton]} />
      {/* <Content defaultComponent={CategoryCards}/> */}
      <CategoryCards/>
      <Login />
    </Fragment>
  );
};

export default PublicPage;
