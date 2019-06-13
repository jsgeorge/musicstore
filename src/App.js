import React, { Component } from "react";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
//import "./App.css";
//import "./resources/slider-styles.css";
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
import Faq from "./components/pages/faq";
import PageModel from "./components/pages/pagemodel";
import NewProducts from "./components/pages/newproducts";
import PopularProducts from "./components/pages/popularproducts";
import SpecialsProducts from "./components/pages/specials";
import AllProducts from "./components/pages/allproducts";
import Cart from "./components/shopping/cart";
class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Header />
          <div>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/products/:id/:category/" component={Listing} />
              <Route path="/products/add" component={AddProject} />
              <Route path="/shop/products/:id/:category" component={Detail} />
              <Route path="/products/:id/edit" component={EditProject} />
              <Route path="/settings" component={Settings} />
              <Route path="/user" component={User} />
              <Route path="/pages/faq" component={Faq} />
              <Route path="/pages/pagemodel" component={PageModel} />
              <Route path="/pages/new" component={NewProducts} />
              <Route path="/pages/specials" component={SpecialsProducts} />

              <Route
                path="/pages/popularproducts"
                component={PopularProducts}
              />
              <Route path="/pages/allproducts" component={AllProducts} />
              <Route path="/shopping/cart" component={Cart} />
              <Route
                render={() => (
                  <div className="pageNotFound">
                    {" "}
                    <h3>404 Page not Found</h3>
                  </div>
                )}
              />
            </Switch>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
