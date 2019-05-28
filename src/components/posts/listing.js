import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
//import PropTypes from "prop-types";
import Product from "./post";
//import { getproducts } from "../../actions/productActions";
import Notifications from "./categories";
//import HomePage from "../homepage";

class Listing extends Component {
  state = {
    isAuthenticated: false
  };

  // static getDerivedStateFromProps(props, state) {
  //   const { auth } = props;
  //   if (auth.uid) {
  //     return { isAuthenticated: true };
  //   } else {
  //     return { isAuthenticated: false };
  //   }
  // }
  render() {
    const { products, auth } = this.props;
    const { categoryName } = this.props.match.params.category;
    // const { isAuthenticated } = this.state;
    return (
      <div className="page_content">
        <div className="page_header">
          {/* <a href="#" class="shopLinkBack">
            &lt Shop Products
          </a> */}
          <h3 class="fontRed">
            {this.props.match.params.id} {this.props.match.params.category}
          </h3>
        </div>
        <div className="row">
          <div className="col-md-12 product-wrapper">
            {products && products.length > 0 ? (
              <ul>
                {products.map(product => (
                  <Product key={product.id} product={product} />
                ))}
              </ul>
            ) : (
              <div className="item">
                <p>No current products</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
// Listing.propTypes = {
//   firestore: PropTypes.object.isRequired,
//   products: PropTypes.array
// };
// export default compose(
//   firestoreConnect([{ collection: "products" }]),
//   connect((state, props) => ({
//     auth: state.firebase.auth,
//     products: state.firestore.ordered.products
//   }))
// )(Listing);

const mapStateToProps = state => {
  return {
    products: state.firestore.ordered.products,
    auth: state.firebase.auth
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => [
    {
      collection: "products",
      where: [["category", "==", 1]]
    }
  ])
)(Listing);
