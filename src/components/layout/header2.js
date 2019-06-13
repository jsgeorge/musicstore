import React, { Component } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";

import { firestoreConnect } from "react-redux-firebase";
// import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
//import { DisplayUser } from "./displayuser";
import { UserLogout } from "../../actions/authActions";
// import Navbar from "./navbar";
// import Navbar2 from "./navbar2";
import ShoppingCart from "./shoppingcart";
class Header2 extends Component {
  state = {
    isAuthenticated: false,
    mobileMnuOpen: false,
    mobileCategoriesOpen: false
  };
  onClickBtnMobileMenu = () => {
    this.setState({ mobileMnuOpen: !this.state.mobileMnuOpen });
  };
  onClickCtgryMenu = () => {
    this.setState({ mobileCategoriesOpen: !this.state.mobileCategoriesOpen });
    this.setState({ mobileMnuOpen: false });
  };
  onClickMobileLink = linkTo => {
    this.setState({ mobileCategoriesOpen: false });
    this.setState({ mobileMnuOpen: false });
    this.props.history.push(linkTo);
  };
  onReturnToMenu = () => {
    this.setState({ mobileCategoriesOpen: false });
    this.setState({ mobileMnuOpen: true });
  };
  onLogout = () => {
    this.props.UserLogout();
    window.location.href = `/`;
  };
  static getDerivedStateFromProps(props, state) {
    const { auth } = props;

    if (auth.uid) {
      return { isAuthenticated: true };
    } else {
      return { isAuthenticated: false };
    }
  }

  render() {
    const { branding, auth, profile, categories } = this.props;
    const { isAuthenticated } = this.state;

    return (
      <div>
        <header>
          <div className="logoDiv">
            <Link to="/" className="logo" />
          </div>
          <div className="top_navigation">
            <div id="headnav1">
              <ul className="topnav1">
                <li>
                  <Link to="/">Home</Link>
                </li>
                {!auth.uid ? (
                  <span>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                  </span>
                ) : (
                  <li style={{ color: "red" }}>
                    {profile.firstname} {profile.lastname}
                    <button onClick={() => this.onLogout()}>Logout</button>
                  </li>
                )}
              </ul>
              <form id="currencyForm">
                Currencies{" "}
                <select className="cboCurrencies">
                  <option value="0" defaultValue>
                    US Dollar
                  </option>
                  <option value="1">EURO</option>
                  <option value="2">GB Pound</option>
                  <option value="3">Austriian Dollar</option>
                </select>
                <button className="btnCur">En</button>
              </form>
            </div>
            <ShoppingCart />
            <div id="headnav2">
              <ul className="topnav2">
                <li>
                  <Link to="/" id="home" className="topnavSel">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/pages/new" id="newProducts">
                    New Products
                  </Link>
                </li>
                <li>
                  <Link to="/pages/specials" id="specials">
                    Specials
                  </Link>
                </li>
                <li>
                  <Link to="/pages/allproducts" id="about">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link to="/pages/pagemodel" id="reviews">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link to="/pages/pagemodel" id="contact">
                    Contacts
                  </Link>
                </li>
                <li>
                  <Link to="/pages/faq" id="faq">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div className="srchPanel">
              <form id="srchForm">
                <span className="srchFont">SEARCH</span>
                <input
                  type="text"
                  placeholder="Enter search keywords here"
                  id="srchText"
                />
                <input type="submit" id="srchBtn" value="" />
              </form>
            </div>
          </div>
          <button
            onClick={() => this.onClickBtnMobileMenu()}
            className="btn_menu_mobile"
          />
        </header>
        <nav>
          {categories && categories.length > 0 ? (
            <ul>
              {categories.map(category => (
                <li key={category.id}>
                  <Link to={`/products/${category.id}/${category.name}`}>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </nav>

        {this.state.mobileMnuOpen ? (
          <div className="mobilenav">
            <ul>
              <li>
                <button onClick={() => this.onClickMobileLink("/")}>
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => this.onClickCtgryMenu()}>
                  Shop Our Store
                </button>
              </li>

              <li>
                <button
                  onClick={() => this.onClickMobileLink("/pages/newproducts")}
                >
                  New Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => this.onClickMobileLink("/pages/specials")}
                >
                  Specials
                </button>
              </li>
              <li>
                <button
                  onClick={() => this.onClickMobileLink("/pages/allproducts")}
                >
                  All Products
                </button>
              </li>
              <li>
                <Link to="/pages/pagemodel" id="reviews">
                  Reviews
                </Link>
              </li>
              <li>
                <Link to="/pages/pagemodel" id="contact">
                  Contacts
                </Link>
              </li>
              <li>
                <Link to="/pages/faq" id="faq">
                  FAQ
                </Link>
              </li>
              <li />
              {!auth.uid ? (
                <span>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </span>
              ) : (
                <li>
                  <button onClick={() => this.onLogout()}>
                    <span style={{ color: "red" }}>
                      {profile.firstname} {profile.lastname}
                    </span>
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        ) : null}
        {this.state.mobileCategoriesOpen ? (
          <div className="mobilecatgry">
            <ul>
              <li className="mobilenav_head">
                <Link to="/" className="shopLink">
                  <button onClick={() => this.onReturnToMenu()}>
                    {" "}
                    &lt; SHOP OUR STORE
                  </button>
                </Link>
              </li>
              {categories && categories.length > 0 ? (
                <ul>
                  {categories.map(category => (
                    <li key={category.id}>
                      <button
                        onClick={() =>
                          this.onClickMobileLink(
                            `/products/${category.id}/${category.name}`
                          )
                        }
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              ) : null}
            </ul>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    categories: state.firestore.ordered.categories2
  };
};
const mapDispatchToProps = dispatch => {
  return {
    UserLogout: () => dispatch(UserLogout())
  };
};
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect(props => [
    {
      collection: "categories2"
    }
  ])
)(withRouter(Header2));
//export default Header;
