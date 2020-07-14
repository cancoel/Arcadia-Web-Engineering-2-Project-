import React, { Component } from "react";
import "./App.css";
import PublicPage from "./components/public/PublicPage";
import PrivatePage from "./components/private/PrivatePage";
import { connect } from "react-redux";
// import Router from "./components/shared/Routy";
import { BrowserRouter as Router, Switch, Route, withRouter, NavLink } from "react-router-dom";
import PrivateRoute from "./components/private/PrivateRoute";

// class App extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <Switch>
//           <Route path="/private" component={PrivatePage} />
//           <Route path="/" component={PublicPage} />
//         </Switch>
//       </BrowserRouter>
//     );
//   }

// render() {
//   const user = this.props.users.item;
//   const content = user ? <PrivatePage /> : <PublicPage />;
//   return <div className="App">{content}</div>;
// }
// }

// const mapStateToProps = (state) => {
//   return state
// }

// export default withRouter(connect(mapStateToProps)(App));
// export default connect(mapStateToProps)(App);

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/private" component={PrivatePage} />
        <Route path="/" component={PublicPage} />
      </Switch>
    </Router>
  );
};

export default App;