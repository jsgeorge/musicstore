import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import CartItem from "../cartItem";

class Cart extends Component {
  state = {
    isAuthenticated: false
  };
  renderCartHeading = () => (
    <div className="cart-row" id="cart-header">
      <div className="product">Product</div>
      <div className="price">Price</div>
      <div className="qty">Qty</div>
      <div className="price">Total</div>
      <div className="cmd" />
    </div>
  );
  render() {
    const { auth, profile, user, cartItems } = this.props;
    console.log(auth.uid);
    if (user) console.log(user[0].cart);

    return (
      <div className="page_content margin-top">
        <div className="page_header">
          <h3>
            Shopping <span className="fontRed">Cart</span>{" "}
            {user && user[0].cart.length > 0 ? (
              <span>{user[0].cart.length} items</span>
            ) : null}
          </h3>
        </div>

        {user && user[0].cart.length > 0 ? (
          <div>
            {this.renderCartHeading()}
            <div>
              {user[0].cart.map(item => (
                // <div key={item.id}>{item.name}</div>
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        ) : (
          <div>No items in cart</div>
        )}
      </div>
    ); //return
  }
}

// const mapStateToProps = state => {
//   return {
//     auth: state.firebase.auth
//   };
// };
//export default Cart;
// const mapStateToProps = ({ firebase: { auth }, firestore: { ordered } }) => ({
//   auth,
//   cartItems: ordered.cartItems
// });

// export default compose(
//   connect(mapStateToProps),
//   firestoreConnect(props => [
//     {
//       collection: "users",
//       doc: props.auth.uid,
//       subcollections: [{ collection: "cart", storeAs: "cartItems" }]
//     }
//   ]),
//   connect(({ firebase: { auth }, firestore: { ordered } }, props) => ({
//     auth,
//     cartItems: ordered.cartItems
//   }))
// )(Cart);

function mapStateToProps(state, props) {
  // const cartItems =
  //   state.firestore.ordered.users &&
  //   state.firestore.ordered.users[0] &&
  //   state.firestore.ordered.users[0].cart;
  return {
    auth: state.firebase.auth,
    user: state.firestore.ordered.users
  };
}

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
)(Cart);
