import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
//import PropTypes from "prop-types";
import ProductFeatured from "../../posts/prodFeatured";

class Highlights extends Component {
  render() {
    const { products, featured, auth } = this.props;
    if (featured) {
      return (
        <div className="section_wrapper">
          <div className="highlight_wrapper">
            <h2>
              FEATURED<span className="fontRed"> PRODUCTS</span>
            </h2>
            {/* <div className="carousel slide" id="myCarousel">
          <div className="carousel-inner">
            <div className="item active">
              <ul className="thumbnails">
                <li className="span3">
                  <div className="thumbnail">
                    <a href="#">
                      <img src="images/products/elecguitar.png" alt="" />
                    </a>
                  </div>
                  <div className="caption">
                    <h4>Fender Stardocaster</h4>
                    <p>Nullam Condimentum Nibh Etiam Sem</p>
                    <a className="btn btn-danger" href="#">
                      &raquo; Read More
                    </a>
                  </div>
                </li>
                <li className="span3">
                  <div className="thumbnail">
                    <a href="#">
                      <img src="images/products/elecguitar.png" alt="" />
                    </a>
                  </div>
                  <div className="caption">
                    <h4>Fender Stardocaster</h4>
                    <p>Nullam Condimentum Nibh Etiam Sem</p>
                    <a className="btn btn-danger" href="#">
                      &raquo; Read More
                    </a>
                  </div>
                </li>
                <li className="span3">
                  <div className="thumbnail">
                    <a href="#">
                      <img src="images/products/elecguitar.png" alt="" />
                    </a>
                  </div>
                  <div className="caption">
                    <h4>Fender Stardocaster</h4>
                    <p>Nullam Condimentum Nibh Etiam Sem</p>
                    <a className="btn btn-danger" href="#">
                      &raquo; Read More
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="control-box">
            <a
              data-slide="prev"
              href="#myCarousel"
              className="carousel-control left"
            >
              ‹
            </a>
            <a
              data-slide="next"
              href="#myCarousel"
              className="carousel-control right"
            >
              ›
            </a>
          </div> 
        </div>*/}
            <div className="col-md-12 product-wrapper-featured">
              {featured && featured.length > 0 ? (
                <ul>
                  {featured.map(product => (
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
        </div>
      );
    } else {
      return <div className="page_content">loading..</div>;
    }
  }
}

// const mapStateToProps = state => {
//   console.log(state);
//   return {
//     products: state.firestore.ordered.products,
//     featured: state.firestore.data[colFeatured],
//     auth: state.firebase.auth
//   };
// };
// export default compose(
//   connect(mapStateToProps),
//   firestoreConnect([
//     {
//       collection: "products",
//       where: [["featured", "==", true]],
//       limit: 4
//     }
//   ])
export default compose(
  firestoreConnect(props => [
    {
      collection: "products",
      where: [["featured", "==", true]],
      limit: 4,
      storeAs: "featured"
    }
  ]),
  connect(({ firestore: { ordered } }, props) => ({
    featured: ordered.featured
  }))
)(Highlights);
