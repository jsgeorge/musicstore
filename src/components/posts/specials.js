import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
//import PropTypes from "prop-types";
import ProductList from "./prodList";
const colName = "specials";
class CategorySpecials extends Component {
  render() {
    const { products } = this.props;

    return (
      <div>
        {products && products.length > 0 ? (
          <div className="section_wrapper">
            <div className="ctgry-specials">
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
              <h3>Specials</h3>
              <div className="col-md-12 product-wrapper-featured">
                <ul>
                  {products.map(product => (
                    <ProductList key={product.id} product={product} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   console.log(state);
//   return {
//     products: state.firestore.ordered.products,
//     specials: state.firestore.data[colName],
//     auth: state.firebase.auth
//   };
// };
// export default compose(
//   connect(mapStateToProps),
//   firestoreConnect([
//     {
//       collection: "products",
//       where: [["featured", "==", true], ["category", "==", this.props.id]],
//       limit: 1
//     }
//   ])
// )(CategorySpecials);
// export default compose(
//   connect(mapStateToProps),
//   firestoreConnect(props => {
//     console.log(props.id);
//     if (!props.id) return [];
//     return [
//       { collection: "products" },
//       {
//         collection: "products",
//         where: [["discount", ">", 0]],
//         where: [["category", "==", props.id]],
//         limit: 1,
//         storeAs: colName
//       }
//     ];
//   })
// )(CategorySpecials);
// export default compose(
//   connect(mapStateToProps),
//   firestoreConnect([
//     {
//       path: "/products",
//       queryParams: ["discount>0", "category=1", "limit=1"]
//     }
//   ])
// )(CategorySpecials);
export default CategorySpecials;
