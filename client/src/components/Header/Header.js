import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { logoutUser } from "../../actions/authAction";

class Header extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser(); // firing the action here
  };
  render() {
    const { isAuthenticate, user } = this.props.auth;

    const logedInUserLinks = (
      <React.Fragment>
        <li className="nav-item">
          <Link className="nav-link" to="/feed">
            {" "}
            PostsFeed{" "}
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            {" "}
            Dashboard{" "}
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={this.onLogoutClick}>
            <img
              src={user.avatar}
              alt={user.name}
              className="rounded-circle"
              style={{
                width: "25px",
                marginRight: "5px"
              }}
              title="you must have a Gravatar connect to your email for displaying image"
            />
            Logout
          </a>
        </li>
      </React.Fragment>
    );
    const newUserLinks = (
      <React.Fragment>
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </React.Fragment>
    );
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Ecommerce
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              {/* Conditional rendering */}
              {isAuthenticate ? logedInUserLinks : newUserLinks}{" "}
              <li className="nav-item">
                <NavLink className="nav-link" to={"/cart"}>
                  <i className="fa fa-shopping-cart mr-2" aria-hidden="true" />
                  Cart{" "}
                  {this.props.cartLength ? `(${this.props.cartLength})` : ""}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartLength: state.shop.cart.length,
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  { logoutUser }
)(Header);
