import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getDateString } from "../../helpers/misc";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

class ProductFeatured extends Component {
  render() {
    const { id, name, price, descS, image } = this.props.product;
    const renderCardImage = image => {
      if (image && image.length > 0) {
        return image;
      } else {
        return "/images/image_not_availble.png";
      }
    };
    return (
      <li className="proj-item-feat">
        <div
          className="prod-image"
          style={{
            background: `#fff url(${renderCardImage(image)}) no-repeat`
          }}
        />
        <div className="prod-info-sm">
          <Link to={`products/${id}`}>
            <h6>{name}</h6>
          </Link>
          <p>{descS}</p>
          <p> ${price}</p>
        </div>
        <div className="item-cmds">
          <button className="btn btn-danger bt-sm">Add to cart</button>
        </div>
      </li>
    );
  }
}

const mapStateToProps = state => {
  return {
    levels: state.firestore.ordered.levels,
    priorities: state.firestore.ordered.priorities
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "levels" }, { collection: "priorities" }])
)(ProductFeatured);
