import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
//import PropTypes from "prop-types";
import ProductList from "../../posts/prodList";
class SpecialsProducts extends Component {
  render() {
    const { products, auth } = this.props;

    return (
      <div className="page_content margin-top">
        <div className="page_header">
          <h3>
            This Weeks <span class="fontRed">Specials</span>
            <div className="row">
              <div className="col-md-12 product-wrapper-featured">
                {products && products.length > 0 ? (
                  <ul>
                    {products.map(product => (
                      <ProductList key={product.id} product={product} />
                    ))}
                  </ul>
                ) : (
                  <div className="item">
                    <p>No current products</p>
                  </div>
                )}
              </div>
            </div>
          </h3>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.firestore.ordered.products,
    auth: state.firebase.auth
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "products",
      where: [["discount", ">", 0]]
    }
  ])
)(SpecialsProducts);
