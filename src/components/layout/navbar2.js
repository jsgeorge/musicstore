import React from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
//import { DisplayUser } from "./displayuser";
import { UserLogout } from "../../actions/authActions";

const Navbar2 = props => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-tranparent navbar2 mb-3 py-0   ">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/products/Guitars" className="nav-link">
              Guitars
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/new-products" className="nav-link">
              Bases
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/specials" className="nav-link">
              Drums
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/reviews /" className="nav-link">
              Live Sound
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/contacts" className="nav-link btnNew">
              Keyboards
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contacts" className="nav-link btnNew">
              Recording
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar2;
