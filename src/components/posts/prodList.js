import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getDateString } from "../../helpers/misc";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

class ProductList extends Component {
  render() {
    const {
      id,
      name,
      price,
      descS,
      image,
      discount,
      category
    } = this.props.product;
    const renderCardImage = image => {
      if (image && image.length > 0) {
        return image;
      } else {
        return "/images/image_not_availble.png";
      }
    };
    return (
      <li className="proj-item-list">
        <div
          className="prod-image"
          style={{
            background: `url(${renderCardImage(image)}) no-repeat`
          }}
        />

        <div className="prod-info-sm">
          <Link to={`/shop/products/${id}/${category}`}>
            <h6>{name}</h6>
          </Link>
          <p>{descS}</p>
        </div>
        <div className="item-cmds">
          <div className="item-prices">
            {discount > 0 ? (
              <div>
                <span className="item-price reg">${price}</span>
                <br />
                <span className="item-price sale">
                  ${price - discount * price}
                </span>
              </div>
            ) : (
              <span className="item-price"> ${price}</span>
            )}
          </div>
          <button className="btn btn-danger bt-sm ">Add to cart</button>
        </div>
      </li>
    );
  }
}

export default ProductList;
