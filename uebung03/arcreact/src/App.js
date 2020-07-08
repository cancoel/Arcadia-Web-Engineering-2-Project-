import React from "react";
import "./App.css";
import TopMenu from "./components/TopMenu";
import PublicPage from "./components/public/PublicPage";
import Login from "./components/public/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

function App() {
  return (
    <div className="App">
      <TopMenu />
      <PublicPage />
      <Login />
    </div>
  );
}

export default App;
