import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { logoutUser } from "../../actions/authAction";
import "./Header.scss";
class Header extends Component {
  state = {
    dropdownToggle: false
  };

  toggleDrodown = () => {
    const dt = this.state.dropdownToggle;
    this.setState({
      dropdownToggle: !dt
    });
  };

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser(); // firing the action here
  };
  render() {
    const { isAuthenticate, user } = this.props.auth;

    const logedInUserLinks = (
      <React.Fragment>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            {" "}
            Dashboard{" "}
          </Link>
        </li>

        <div className="header__avatar" onClick={this.toggleDrodown}>
          <img
            className="header__avatar-img"
            src={user.avatar}
            title="you must have a Gravatar connect to your email for displaying image"
          />
          <div
            className={`dropdown ${
              this.state.dropdownToggle ? "dropdown--active" : "deactive"
            }`}
          >
            <ul className="dropdown__list ">
              <li className="dropdown__list-item">
                <span className="dropdown__icon">
                  <i className="fa fa-user" />
                </span>
                <span className="dropdown__title">my profile</span>
              </li>
              <li className="dropdown__list-item">
                <span className="dropdown__icon">
                  <i className="fa fa-clipboard" />
                </span>
                <span className="dropdown__title">my account</span>
              </li>
              <li className="dropdown__list-item" onClick={this.onLogoutClick}>
                <span className="dropdown__icon">
                  <i className="fa fa-sign-out" />
                </span>
                <span className="dropdown__title">log out</span>
              </li>
            </ul>
          </div>
        </div>
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
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger fixed-top">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <span className="lead">SharpStore</span>
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              {/* Conditional rendering */}
              <li className="nav-item">
                <NavLink className="nav-link" to={"/cart"}>
                  <i className="fa fa-shopping-cart mr-2" aria-hidden="true" />
                  Cart{" "}
                  {this.props.cartLength ? `(${this.props.cartLength})` : ""}
                </NavLink>
              </li>
              {isAuthenticate ? logedInUserLinks : newUserLinks}{" "}
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
