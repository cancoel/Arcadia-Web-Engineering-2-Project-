import React, { Component } from "react";
import "./App.css";
import Content from './components/shared/Content';
import { connect } from "react-redux";

class App extends Component {
  render() {
    const user = this.props.users.item; // user from redux store
    const isLoggedIn = user !== null; // is someone logged in?
    return (
      <div className="App">
        <Content isLoggedIn={isLoggedIn}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(App);

// const App = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/private" component={PrivatePage} />
//         <Route path="/" component={PublicPage} />
//       </Switch>
//     </Router>
//   );
// };

// export default App;
