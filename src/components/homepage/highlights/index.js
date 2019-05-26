import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
//import PropTypes from "prop-types";
import ProductFeatured from "../../posts/postfeatured";
class Highlights extends Component {
  render() {
    const { products, auth } = this.props;

    return (
      <div className="section_wrapper highlight_wrapper">
        <h3>FEATURED PRODUCTS</h3>
        {/* <div class="carousel slide" id="myCarousel">
          <div class="carousel-inner">
            <div class="item active">
              <ul class="thumbnails">
                <li class="span3">
                  <div class="thumbnail">
                    <a href="#">
                      <img src="images/products/elecguitar.png" alt="" />
                    </a>
                  </div>
                  <div class="caption">
                    <h4>Fender Stardocaster</h4>
                    <p>Nullam Condimentum Nibh Etiam Sem</p>
                    <a class="btn btn-danger" href="#">
                      &raquo; Read More
                    </a>
                  </div>
                </li>
                <li class="span3">
                  <div class="thumbnail">
                    <a href="#">
                      <img src="images/products/elecguitar.png" alt="" />
                    </a>
                  </div>
                  <div class="caption">
                    <h4>Fender Stardocaster</h4>
                    <p>Nullam Condimentum Nibh Etiam Sem</p>
                    <a class="btn btn-danger" href="#">
                      &raquo; Read More
                    </a>
                  </div>
                </li>
                <li class="span3">
                  <div class="thumbnail">
                    <a href="#">
                      <img src="images/products/elecguitar.png" alt="" />
                    </a>
                  </div>
                  <div class="caption">
                    <h4>Fender Stardocaster</h4>
                    <p>Nullam Condimentum Nibh Etiam Sem</p>
                    <a class="btn btn-danger" href="#">
                      &raquo; Read More
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="control-box">
            <a
              data-slide="prev"
              href="#myCarousel"
              class="carousel-control left"
            >
              ‹
            </a>
            <a
              data-slide="next"
              href="#myCarousel"
              class="carousel-control right"
            >
              ›
            </a>
          </div> 
        </div>*/}
        <div className="col-md-12 product-wrapper-featured">
          {products && products.length > 0 ? (
            <ul>
              {products.map(product => (
                <ProductFeatured key={product.id} product={product} />
              ))}
            </ul>
          ) : (
            <div className="item">
              <p>No current products</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    products: state.firestore.ordered.products,
    auth: state.firebase.auth
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "products" }])
)(Highlights);
