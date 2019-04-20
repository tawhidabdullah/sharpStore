import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { logoutUser } from "../../actions/authAction";
import "./Header.scss";
import "../styles_components/searchBar.scss";

class Header extends Component {
  state = {
    dropdownToggle: false,
    fosttrapToggle: false,
    searchInput: ""
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

  onnavFostrapclick = () => {
    const fosttrapToggle = this.state.fosttrapToggle;
    this.setState({
      fosttrapToggle: !fosttrapToggle
    });
  };

  onSearchInputChange = () => {};
  render() {
    const { isAuthenticate, user } = this.props.auth;

    const logedInUserLinks = (
      <React.Fragment>
        <li>
          <Link to="/dashboard"> Dashboard </Link>
        </li>

        <li className="header__avatar" onClick={this.toggleDrodown}>
          <img
            className="header__avatar-img"
            src={user.avatar}
            title="you must have a Gravatar connect to your email for displaying image"
          />
          <div
            className={`dropdownx ${
              this.state.dropdownToggle ? "dropdown--active" : "deactive"
            }`}
          >
            <div className="dropdown__list">
              <a className="dropdown__list-item">
                <span className="dropdown__icon">
                  <i className="fa fa-user" />
                </span>
                <span className="dropdown__title">my profile</span>
              </a>
              <a className="dropdown__list-item">
                <span className="dropdown__icon">
                  <i className="fa fa-clipboard" />
                </span>
                <span className="dropdown__title">my account</span>
              </a>
              <a className="dropdown__list-item" onClick={this.onLogoutClick}>
                <span className="dropdown__icon">
                  <i className="fa fa-sign-out" />
                </span>
                <span className="dropdown__title">log out</span>
              </a>
            </div>
          </div>
        </li>

        <div id="styleSearchBar">
          <div class="header-wrap">
            <div class="search">
              <input
                onChange={this.onSearchInputChange}
                value={this.state.searchInput}
                type="text"
                class="searchTerm searchTerm__white"
                placeholder="Search products by name.."
              />
              <button type="submit" class="searchButton searchButton__white">
                <i class="fa fa-search" />
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
    const newUserLinks = (
      <React.Fragment>
        <li>
          <Link to="/register">Sign Up</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </React.Fragment>
    );
    return (
      <nav className="fixed-top">
        <div
          class={
            this.state.fosttrapToggle ? "nav-fostrap visible" : "nav-fostrap"
          }
        >
          <ul>
            <li>
              <NavLink to="/">
                <span className="lead">SharpStore</span>
              </NavLink>
            </li>
            <li>
              <a href="javascript:void(0)">
                Category
                <span class="arrow-down" />
              </a>
              <ul class="dropdown">
                <li>
                  <a>Computer</a>
                </li>
                <li>
                  <a>Phone</a>
                </li>
                <li>
                  <a>Programming</a>
                </li>
                <li>
                  <a>Gadgets</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="javascript:void(0)">
                Blogger
                <span class="arrow-down" />
              </a>
              <ul class="dropdown">
                <li>
                  <a>Widget</a>
                </li>
                <li>
                  <a>Tips</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Business</a>
            </li>
            <li>
              <NavLink to={"/cart"}>
                <i className="fa fa-shopping-cart mr-2" aria-hidden="true" />
                Cart {this.props.cartLength ? `(${this.props.cartLength})` : ""}
              </NavLink>
            </li>
            {isAuthenticate ? logedInUserLinks : newUserLinks}{" "}
          </ul>
        </div>
        <div class="nav-bg-fostrap">
          <div class="navbar-fostrap" onClick={this.onnavFostrapclick}>
            {" "}
            <span /> <span /> <span />{" "}
          </div>
          <a class="title-mobile">SharpStore</a>
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

/*

  <nav className="navbar navbar-expand-lg navbar-dark bg-danger fixed-top">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <span className="lead">SharpStore</span>
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
            
             
              {isAuthenticate ? logedInUserLinks : newUserLinks}{" "}
            </ul>
          </div>
        </div>
      </nav>


*/
