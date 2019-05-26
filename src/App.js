import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import "./App.css";
import "./resources/slider-styles.css";
//import "./resources/styles.css";
import "./resources/styles2.css";
import Header from "./components/layout/header2";
import HomePage from "./components/homepage";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Listing from "./components/posts/listing";
import Settings from "./components/pages/settings";
import AddProject from "./components/posts/add";
import Detail from "./components/posts/detail";
import EditProject from "./components/posts/edit";
import User from "./components/user";
import Footer from "./components/layout/footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />

          <div>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/products/:category/" component={Listing} />
              <Route exact path="/projects/add" component={AddProject} />
              <Route exact path="/projects/:id" component={Detail} />
              <Route exact path="/projects/:id/edit" component={EditProject} />
              <Route exact path="/settings" component={Settings} />
              <Route exact path="/user" component={User} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
