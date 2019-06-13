import React, { Component } from "react";
import { firestoreConnect } from "react-redux-firebase";
// import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { Link, Redirect, withRouter } from "react-router-dom";

class ShoppingCart extends Component {
  render() {
    const { auth, profile, user, cartItems } = this.props;
    //if (user) console.log(user[0].cart);
    // const cartItems = user[0].cart;
    // if (user) console.log(cartItems);
    return (
      <div className="shopcart">
        <Link to="/shopping/cart" className="cartlink">
          SHOPPING CART:
          <span id="cart-font">
            {user && user[0].cart.length > 0 ? (
              <span>{user[0].cart.length} items</span>
            ) : (
              "0 items"
            )}
          </span>
        </Link>
        <Link to="/shopping/cart" className="mobileCart">
          <span id="cart-font">
            {user && user[0].cart.length > 0 ? (
              <span>{user[0].cart.length} items</span>
            ) : (
              "0 items"
            )}
          </span>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // const cartItems =
  //   state.firestore.ordered.users &&
  //   state.firestore.ordered.users[0] &&
  //   state.firestore.ordered.users[0].cart;
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    user: state.firestore.ordered.users
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => {
    if (!props.auth.uid) return [];
    return [
      {
        collection: "users",
        doc: props.auth.uid,
        subcollections: [
          {
            collection: "cart"
          }
        ]
      }
    ];
  })
)(withRouter(ShoppingCart));
//export default connect(mapStateToProps)(withRouter(ShoppingCart));
