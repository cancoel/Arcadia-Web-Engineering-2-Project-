import React from "react";

const HomeButton = (
  <a href="/" className="nav-link text-white">
    Home
  </a>
);

const RegButton = (
  <a href="#register" className="nav-link">
    Register
  </a>
);

const SignInButton = (
  <a href="#signin" className="nav-link" data-toggle="modal">
    Sign In
  </a>
);

const WelcLabel = (
  <a href="#" className="nav-link text-white">
    Welcome
    <span role="img" aria-label="Heart">
      &nbsp; 💌
    </span>
  </a>
);

const SettingsButton = (
  <a href="#settings" className="nav-link">
    Settings
  </a>
);

const SignOutButton = (
  <a href="/" className="nav-link">
    Sign Out
  </a>
);

export {
  HomeButton,
  RegButton,
  SignInButton,
  WelcLabel,
  SettingsButton,
  SignOutButton,
};
