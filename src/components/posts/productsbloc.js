import React, { Component } from "react";
import { Redirect } from "react-router-dom";
// import { compose } from "redux";
// import { connect } from "react-redux";
// import { firestoreConnect } from "react-redux-firebase";
//import PropTypes from "prop-types";
import ProductGrid from "./prodGrid";
//import { getproducts } from "../../actions/productActions";
import Notifications from "./categories";
import { unwatchFile } from "fs";
//import HomePage from "../homepage";
class ProductsBlock extends Component {
  state = {
    isAuthenticated: false
  };

  render() {
    const { products, category } = this.props;
    return (
      <div>
        {products && products.length > 0 ? (
          <div className="row">
            <div className="filter-box">
              Filter Products by
              <select>
                <option value="0">All brands</option>
                <option value="1">Ibinez</option>
                <option value="2">Fender</option>
                <option value="3">Yamaha</option>
              </select>
              <input type="text" placeholder="enter filter" />
            </div>
            <div className="col-md-12 product-wrapper">
              <h6>Displaying {products.length} products</h6>
              <ul>
                {products.map(product => (
                  <ProductGrid
                    key={product.id}
                    product={product}
                    category={category}
                  />
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="item">
            <p>No current products</p>
          </div>
        )}
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

// const mapStateToProps = state => {
//   console.log(state);
//   return {
//     products: state.firestore.ordered.products,
//     auth: state.firebase.auth
//   };
// };
// export default compose(
//   connect(mapStateToProps),
//   firestoreConnect([
//     {
//       collection: "products"
//     }
//   ])
// )(Listing);

// export default compose(
//   connect(mapStateToProps),
//   firestoreConnect([
//     {
//       collection: "products",
//       where: [["category", "==", 1]]
//     }
//   ])
// )(ProductsBlock);
// export default compose(
//   connect(mapStateToProps),
//   firestoreConnect(props => [
//     {
//       collection: "products",
//       where: [["category", "==", props.id]]
//     }
//   ])
// )(ProductsBlock);
export default ProductsBlock;
