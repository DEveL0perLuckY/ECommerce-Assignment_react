import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = ({ startLoadingBar }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          E Commerce Assignment
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarSupportedContent" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-link"
                activeClassName="active"
                onClick={startLoadingBar}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/productListing"
                className="nav-link"
                activeClassName="active"
                onClick={startLoadingBar}
              >
                List Your Product
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
