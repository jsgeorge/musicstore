import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getDateString } from "../../helpers/misc";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import moment from "moment";
class ProductFeatured extends Component {
  render() {
    const {
      id,
      name,
      price,
      discount,
      descS,
      image,
      category,
      featured,
      dateAdded,
      sold
    } = this.props.product;
    const renderCardImage = image => {
      if (image && image.length > 0) {
        return image;
      } else {
        return "/images/image_not_availble.png";
      }
    };
    return (
      <li className="proj-item-feat">
        <Link to={`/shop/products/${id}/${category}`}>
          <div
            className="prod-image"
            style={{
              background: `#fff url(${renderCardImage(image)}) no-repeat`
            }}
          />
        </Link>
        <div className="prod-info-sm">
          <Link to={`/shop/products/${id}/${category}`}>
            <h6 className="product-name">{name}</h6>
          </Link>
          <p>
            {/* {descS} */}
            <br />
            Category:{category}
          </p>
          {/* <p>
            {" "}
            {featured ? <span>featured</span> : null}
            <br />
            Date Added:
            {moment(dateAdded.toDate()).format("MMM DD")}
            <br />
            Qty Sold: {sold}
          </p> */}
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
          <button className="btn btn-danger bt-sm btnAddCart">
            Add to cart
          </button>
        </div>
      </li>
    );
  }
}

export default ProductFeatured;
