import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import Featured from "./featured";
import VenueInfo from "./venueInfo";
import Highlights from "./highlights";
import Pricing from "./pricing";
import Ads from "./ads";
import NewProducts from "./newproducts";
import PopularProducts from "./popularproducts";

class HomePage extends Component {
  render() {
    const { auth } = this.props;

    return (
      <div className="homePageWrapper margin-top">
        <div className="page_content">
          <Featured />
          <Pricing />
          <Highlights />
          {/* <NewProducts /> */}
          {/* <PopularProducts /> */}
          <div className="clear-left" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};
export default compose(connect(mapStateToProps))(HomePage);
