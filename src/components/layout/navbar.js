import React from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
//import { DisplayUser } from "./displayuser";
import { UserLogout } from "../../actions/authActions";

const Navbar = props => {
  const onLogout = () => {
    props.UserLogout();
    window.location.href = `/`;
  };

  const { profile, auth } = props;
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-tranparent navbar1  mb-3 py-0   ">
        <div className="container">
          {auth.uid ? (
            <Link to="/projects" className="navbar-brand" />
          ) : (
            <Link to="/" className="navbar-brand" />
          )}

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/home" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/new-products" className="nav-link">
                  New Products
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/specials" className="nav-link">
                  Specials
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/reviews /" className="nav-link">
                  Reviews
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/contacts" className="nav-link btnNew">
                  Contacts
                </Link>
              </li>

              {/* <li className="nav-item">
                  <Link to="/user" className="nav-link">
                    <span className="user-logo">{profile.initials}</span>
                  </Link>
                </li> */}
              {auth.uid ? (
                <li className="nav-item">
                  <button onClick={() => onLogout()} className="nav-link">
                    Logout
                  </button>
                </li>
              ) : (
                <li className="nav-item">
                  <Link to="/auth/login" className="nav-link">
                    Login
                  </Link>
                </li>
              )}
            </ul>
            <form class="form-inline ml-auto srchForm">
              <div class="md-form my-0">
                SEARCH
                <input
                  class="form-control"
                  type="text"
                  placeholder="Enter search keyword here"
                  aria-label="Search"
                />
              </div>
              <button
                href="#!"
                class="btn btn-outline-white btn-md my-0 ml-sm-2"
                type="submit"
              >
                <i class="fas fa-search" aria-hidden="true" />
              </button>
            </form>
            {/* 
            <form class="form-inline md-form form-sm mt-0 srchForm">
              SEARCH
              <input
                class="form-control form-control-sm ml-3 w-75"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />{" "}
              <button
                href="#!"
                class="btn btn-outline-black btn-md my-0 ml-sm-2"
                type="submit"
              >
                <i class="fas fa-search" aria-hidden="true" />
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
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
  )
)(Navbar);
