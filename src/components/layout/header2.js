import React, { Component } from "react";
import { Link } from "react-router-dom";

//import { firebaseConnect } from "react-redux-firebase";
// import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
//import { DisplayUser } from "./displayuser";
//import { UserLogout } from "../../actions/authActions";
// import Navbar from "./navbar";
// import Navbar2 from "./navbar2";
class Header2 extends Component {
  state = {
    isAuthenticated: false
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
    const { branding, auth, profile } = this.props;
    const { isAuthenticated } = this.state;

    return (
      <div className="container">
        <header>
          <div class="logoDiv">
            <Link to="/" class="logo" />
          </div>
          <div class="top_navigation">
            <div id="headnav1">
              <ul class="topnav1">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
              <form id="currencyForm">
                Currencies{" "}
                <select class="cboCurrencies">
                  <option value="0" selected>
                    US Dollar
                  </option>
                  <option value="1">EURO</option>
                  <option value="2">GB Pound</option>
                  <option value="3">Austriian Dollar</option>
                </select>
                <button class="btnCur">En</button>
              </form>
            </div>
            <div class="shopcart">
              <Link to="/cart" class="cartlink">
                <span class="visible">SHOPPING CART:</span>
              </Link>{" "}
              0 items
              <Link to="/cart" class="btnShowCart" />
            </div>
            <div id="headnav2">
              <ul class="topnav2">
                <li>
                  <Link to="/" id="home" class="topnavSel">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/new-products" id="newProducts">
                    New Products
                  </Link>
                </li>
                <li>
                  <Link to="/specials" id="specials">
                    Specials
                  </Link>
                </li>
                <li>
                  <Link to="/page" id="about">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link to="/reviews" id="reviews">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link to="/contact" id="contact">
                    Contacts
                  </Link>
                </li>
                <li>
                  <Link to="/faq" id="faq">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <form id="srchForm">
                <span class="srchFont">SEARCH</span>
                <input
                  type="text"
                  placeholder="Enter search keywords here"
                  id="srchText"
                />
                <input type="submit" id="srchBtn" value="" />
              </form>
            </div>
            <Link to="/" class="menu_mobile" />
          </div>
        </header>
        <nav>
          <div>
            <ul>
              <li class="mobilenav_head">
                <Link to="/" class="shopLink">
                  &lt SHOP OUR STORE
                </Link>
              </li>
              <li>
                <Link to="/products/Guitars" id="guitars">
                  GUITARS
                </Link>
              </li>
              <li>
                <Link to="/products/Baseses" id="bases">
                  BASSES
                </Link>
              </li>
              <li>
                <Link to="/products/Drums" id="drums">
                  DRUMS
                </Link>
              </li>
              <li>
                <Link to="/products/Livesound" id="livesound">
                  LIVE SOUND
                </Link>
              </li>
              <li>
                <Link to="//products/keyboards" id="keyboards">
                  KEYBORDS
                </Link>
              </li>
              <li>
                <Link to="/products/Recording" id="recording">
                  RECORDING
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <mobilenav>
          <div>
            <ul>
              <li>
                <Link to="/" id="home">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" class="shopStore">
                  Shop our Store
                </Link>
              </li>

              <li>
                <Link to="/new-products" id="newProducts">
                  New Products
                </Link>
              </li>
              <li>
                <Link to="/specials" id="specials">
                  Specials
                </Link>
              </li>
              <li>
                <Link to="/page" id="about">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/reviews" id="reviews">
                  Reviews
                </Link>
              </li>
              <li>
                <Link to="/contact" id="contact">
                  Contacts
                </Link>
              </li>
              <li>
                <Link to="/faq" id="faq">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </mobilenav>
      </div>
    );
  }
}
// Header.propTypes = {
//   firebase: PropTypes.object.isRequired,
//   auth: PropTypes.object.isRequired
// };
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default compose(connect(mapStateToProps))(Header2);
//export default Header;
