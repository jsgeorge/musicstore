import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
//import PropTypes from "prop-types";
import ProductDetail from "./prodDetail";

class Detail extends Component {
  render() {
    const { product, category } = this.props;
    if (product) {
      return (
        <div className="page_content">
          <div className="page_header">
            <h3>{category ? category.name : null}</h3>
          </div>
          <div className="row">
            <div className="col-md-12 product-wrapper-featured">
              <ProductDetail key={product.id} product={product} />
            </div>
          </div>
        </div>
      );
    } else {
      return <div className="page_content">loading..</div>;
    }
  }
}

// const mapStateToProps = (state, ownProps) => {
//   const id = ownProps.match.params.id;
//   const products = state.firestore.data.products;
//   const product = products ? products[id] : null;

//   return {
//     product: product
//   };
// };
// export default compose(
//   connect(mapStateToProps),
//   firestoreConnect([
//     {
//       collection: "products"
//     }
//   ])
// )(Detail);

// const mapStateToProps = state => {
//   return {
//     product: state.firestore.dproducts
//   };
// };
export default compose(
  firestoreConnect(props => [
    {
      collection: "products",
      doc: props.match.params.id,
      storeAs: "product"
    },
    {
      collection: "categories2",
      doc: props.match.params.category,
      storeAs: "category"
    }
  ]),
  connect(({ firestore: { ordered } }, props) => ({
    product: ordered.product && ordered.product[0],
    category: ordered.category && ordered.category[0]
  }))
)(Detail);
