import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

class Listing extends Component {
  render() {
    console.log(this.props.match.params.id);
    const { filteredProducts } = this.props;
    return (
      <div className="page_content margin-top">
        {filteredProducts && filteredProducts.length > 0 ? (
          <ul>
            {filteredProducts.map(product => (
              <li>{product.name}</li>
            ))}
          </ul>
        ) : (
          <div>no products matching criteria </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ firestore: { ordered } }) => ({
  filteredProducts: ordered.filteredProducts
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => [
    {
      collection: "products",
      where: ["category", "==", props.match.params.id],
      storeAs: "filteredProducts"
    }
  ])
)(Listing);
