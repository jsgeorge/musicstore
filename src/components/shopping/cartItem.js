import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getDateString } from "../../helpers/misc";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

class CartItem extends Component {
  render() {
    const { id, name, price, descS, image, discount, qty } = this.props.item;
    const renderCardImage = image => {
      if (image && image.length > 0) {
        return image;
      } else {
        return "/images/image_not_availble.png";
      }
    };
    return (
      <div className="cart-row">
        <div className="cart-image">
          <div
            className="prod-image"
            style={{
              background: `url(${renderCardImage(image)}) no-repeat`
            }}
          />
        </div>
        <div className="name">
          <h6>{name}</h6>
        </div>
        <div className="price">
          ${discount > 0 ? price : price - discount * price}
        </div>
        <div className="qty">{qty}</div>
        <div className="price">${qty * price}</div>
        <div className="cmd">
          <button className="btn btn-danger bt-sm ">x</button>
        </div>
      </div>
    );
  }
}

export default CartItem;
