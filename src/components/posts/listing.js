import React, { Component } from "react";
//import { Redirect } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
//import PropTypes from "prop-types";
import ProductGrid from "./prodGrid";
//import { getproducts } from "../../actions/productActions";
//import { unwatchFile } from "f";
//import HomePage from "../homepage";
import CategorySpecials from "../posts/specials";
import ProductsBlock from "../posts/productsbloc";

class Listing extends Component {
  state = {
    isAuthenticated: false
  };

  // static getDerivedStateFromProps(props, state) {
  //   const { auth } = props;
  //   if (auth.uid) {
  //     return { isAuthenticated: true };
  //   } else {
  //     return { isAuthenticated: false };
  //   }
  // }

  render() {
    const {
      products,
      filterProducts,
      filterSpecials,
      filterGuitars,
      filterBases,
      filterDrums,
      filterKeyboards,
      filterHeadphones,
      filterLivesound,
      filterRecording,
      filterSpecialsGuitars,
      filterSpecialsBases,
      filterSpecialsDrums,
      filterSpecialsKeyboards,
      filterSpecialsHeadphones
    } = this.props;
    const { id, category } = this.props.match.params;
    // const { isAuthenticated } = this.state;
    if (products) {
      return (
        <div className="page_wrapper margin-top">
          <div className="page_content">
            <div className="page_header">
              <h3>
                <span className="fontRed">{category}</span>
              </h3>
            </div>
            {/* <CategorySpecials products={filterSpecials} /> */}
            {id == 1 ? (
              <CategorySpecials products={filterSpecialsGuitars} />
            ) : null}
            {id == 2 ? (
              <CategorySpecials products={filterSpecialsBases} />
            ) : null}
            {id == 3 ? (
              <CategorySpecials products={filterSpecialsDrums} />
            ) : null}
            {id == 4 ? (
              <CategorySpecials products={filterSpecialsKeyboards} />
            ) : null}
            {id == 7 ? (
              <CategorySpecials products={filterSpecialsHeadphones} />
            ) : null}

            <div className="section_wrapper">
              {/* <ProductsBlock products={filterProducts} /> */}
              {id == 1 ? <ProductsBlock products={filterGuitars} /> : null}
              {id == 2 ? <ProductsBlock products={filterBases} /> : null}
              {id == 3 ? <ProductsBlock products={filterDrums} /> : null}
              {id == 4 ? <ProductsBlock products={filterKeyboards} /> : null}
              {id == 5 ? <ProductsBlock products={filterLivesound} /> : null}
              {id == 6 ? <ProductsBlock products={filterRecording} /> : null}
              {id == 7 ? <ProductsBlock products={filterHeadphones} /> : null}
            </div>
          </div>
        </div>
      );
    } else {
      return <div className="page_content">no pruddcts in database</div>;
    }
  }
}
// Listing.propTypes = {
//   firestore: PropTypes.object.isRequired,
//   products: PropTypes.array
// };

// export default compose(
//   firestoreConnect([{ collection: "products" }]),
//   connect((state, props) => ({
//     auth: state.firebase.auth,
//     products: state.firestore.ordered.products
//   }))
// )(Listing);

// const mapStateToProps = state => {

//   return {
//     auth: state.firebase.auth
//   };
// };
// export default compose(
//   connect(mapStateToProps),
//   firestoreConnect([
//     {
//       collection: "products"
//     }
//   ])
// )(Listing);

// export default compose(
//   connect(mapStateToProps),
//   firestoreConnect(props => [
//     {
//       collection: "products",
//       where: [["category", "==", props.match.params.id]]
//     }
//   ])
// )(Listing);
// const mapStateToProps = state => {
//   console.log(state);
//   return {
//     products: state.firestore.ordered.products,
//     products: state.firestore.data[collectionName],
//     auth: state.firebase.auth
//   };
// };
// const mapStateToProps = state => {
//   return {
//     products: state.firestore.ordered.products,
//     auth: state.firebase.auth
//   };
// };
// export default compose(
//   connect(mapStateToProps),
//   firestoreConnect(props => {
//     console.log(props.match.params.id);
//     if (!props.match.params.id) return [];
//     return [
//       {
//         collection: "products",
//         where: [["category", "==", props.match.params.id]]
//       }
//     ];
//   })
// )(Listing);
// export default connect((state, props) => ({
//   auth: state.firebase.auth
// }))(Listing);

// const mapStateToProps = ({ firestore: { ordered } }) => ({
//   filterProducts: ordered.filterProducts
// });

// export default compose(
//   connect(mapStateToProps),
//   firestoreConnect(props => [
//     {
//       collection: "products",
//       where: ["category", "==", props.match.params.id],
//       storeAs: "filterProducts"
//     }
//   ])
// )(Listing);

/*WORKS*/
export default compose(
  firestoreConnect(props => [
    { collection: "products" },
    // {
    //   collection: "products",
    //   where: [["category", "==", props.match.params.id]],
    //   storeAs: "filterProducts"
    // },
    // {
    //   collection: "products",
    //   where: [["category", "==", props.match.params.id]],
    //   queryParams: [["discount", ">", 0]],
    //   limit: 1,
    //   storeAs: "filterSpecials"
    // },
    {
      collection: "products",
      where: [["category", "==", 1]], // props.match.params.id]],
      storeAs: "filterGuitars"
    },
    {
      collection: "products",
      where: [["category", "==", 2]], //props.match.params.id]],
      storeAs: "filterBases"
    },
    {
      collection: "products",
      where: [["category", "==", 3]], //props.match.params.id]],
      storeAs: "filterDrums"
    },
    {
      collection: "products",
      where: [["category", "==", 4]], //props.match.params.id]],
      storeAs: "filterKeyboards"
    },
    {
      collection: "products",
      where: [["category", "==", 5]], //props.match.params.id]],
      storeAs: "filterLivesound"
    },
    {
      collection: "products",
      where: [["category", "==", 6]], //props.match.params.id]],
      storeAs: "filterRecording"
    },
    {
      collection: "products",
      where: [["category", "==", 7]], //props.match.params.id]],
      storeAs: "filterHeadphones"
    },
    {
      collection: "products",
      where: [["category", "==", 1]], //props.match.params.id]],
      queryParams: [["discount", ">", 0]],
      limit: 1,
      storeAs: "filterSpecialsGuitars"
    },
    {
      collection: "products",
      where: [["category", "==", 2]], //props.match.params.id]],
      queryParams: [["discount", ">", 0]],
      limit: 1,
      storeAs: "filterSpecialsBases"
    },
    {
      collection: "products",
      where: [["category", "==", 3]], //props.match.params.id]],
      queryParams: [["discount", ">", 0]],
      limit: 1,
      storeAs: "filterSpecialsDrums"
    },
    {
      collection: "products",
      where: [["category", "==", 4]], //props.match.params.id]],
      queryParams: [["discount", ">", 0]],
      limit: 1,
      storeAs: "filterSpecialsKeyboards"
    },
    {
      collection: "products",
      where: [["category", "==", 7]], //props.match.params.id]],
      queryParams: [["discount", ">", 0]],
      limit: 1,
      storeAs: "filterSpecialsHeadphones"
    }
  ]),
  connect(({ firestore: { ordered } }, props) => ({
    products: ordered.products,
    filterProducts: ordered.filterProducts,
    filterSpecials: ordered.filterSpecials,
    filterGuitars: ordered.filterGuitars,
    filterBases: ordered.filterBases,
    filterDrums: ordered.filterDrums,
    filterHeadphones: ordered.filterHeadphones,
    filterKeyboards: ordered.filterKeyboards,
    filterRecording: ordered.filterRecording,
    filterSpecialsGuitars: ordered.filterSpecialsGuitars,
    filterSpecialsBases: ordered.filterSpecialsBases,
    filterSpecialsDrums: ordered.filterSpecialsDrums,
    filterSpecialsKeyboards: ordered.filterSpecialsKeyboards,
    filterHeadphones: ordered.filterSpecialsHeadphones
  }))
)(Listing);
