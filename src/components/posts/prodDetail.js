import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getDateString } from "../../helpers/misc";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

class ProductDetail extends Component {
  render() {
    const {
      id,
      name,
      price,
      descS,
      descL,
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
      <div className="prod-detail">
        <div
          className="prod-image"
          style={{
            background: `url(${renderCardImage(image)}) no-repeat`
          }}
        />

        <div className="prod-info-lg">
          <h4>{name}</h4>

          <p>{descS}</p>
        </div>
        <div className="item-cmds">
          <div className="item-prices">
            {discount > 0 ? (
              <div>
                <span class="item-price reg">${price}</span>
                <br />
                <span class="item-price sale">${price - discount * price}</span>
              </div>
            ) : (
              <span class="item-price"> ${price}</span>
            )}
          </div>
          <button className="btn btn-danger bt-sm ">Add to cart</button>
        </div>
        <div className="section_wrapper">
          <p>{descL}</p>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
