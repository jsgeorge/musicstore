import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { getDateString } from "../../helpers/misc";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { AddToCart } from "../../actions/projectActions";

class ProductGrid extends Component {
  onAddToCart = () => {
    const { auth } = this.props;
    const { id, name, price, image, discount } = this.props.product;
    let newCartItem = {
      id: id,
      name: name,
      price: price,
      discount: discount,
      image: image
    };
    console.log(newCartItem);
    if (auth.uid) {
      this.props.AddToCart(newCartItem);
      // .then(response => {
      //   console.log("Product added to cart");
      // })
      // .catch(err => {
      //   console.log("Error in adding item to cart");
      // });

      this.props.history.push("/shopping/cart");
    } else {
      this.props.history.push("/login");
    }
  };

  render() {
    const {
      id,
      name,
      price,
      descS,
      image,
      discount,
      featured
    } = this.props.product;
    const { auth, category } = this.props;
    const onAddToCart = id => {};
    const renderCardImage = image => {
      if (image && image.length > 0) {
        return image;
      } else {
        return "/images/image_not_availble.png";
      }
    };
    return (
      <li className="proj-item">
        <Link to={`/shop/products/${id}/${category}`}>
          <div
            className="prod-image"
            style={{
              background: `url(${renderCardImage(image)}) no-repeat`
            }}
          />
        </Link>
        <div className="prod-info-sm">
          <Link to={`/shop/products/${id}/${category}`}>
            <h6 className="product-name">{name}</h6>
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
          <button
            onClick={() => this.onAddToCart()}
            className="btn btn-danger bt-sm btnAddCart"
          >
            Add to cart
          </button>
        </div>
      </li>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    AddToCart: product => dispatch(AddToCart(product))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProductGrid));
