import React, { Component } from "react";
//import { firebaseConnect } from "react-redux-firebase";
// import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
//import { DisplayUser } from "./displayuser";
//import { UserLogout } from "../../actions/authActions";
import Navbar from "./navbar";
import Navbar2 from "./navbar2";
class Header extends Component {
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
      <header>
        <Navbar
          auth={auth}
          profile={profile}
          isAuthenticated={isAuthenticated}
        />
        <Navbar2 />
      </header>
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

export default compose(connect(mapStateToProps))(Header);
//export default Header;
