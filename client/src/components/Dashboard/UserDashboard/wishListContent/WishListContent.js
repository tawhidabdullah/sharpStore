import React, { Component } from "react";
import { connect } from "react-redux";
import { getWishListsAction } from "../../../../actions/userAction";
import "./WishListContent.scss";

class WishListContent extends Component {
  componentWillMount() {
    this.props.getWishListsAction();
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="header-wrapper">
            <div className="title">All the Wish lists here !</div>
            <div className="note">
              Recent: <span className="focus">$250 </span>to{" "}
              <span className="focus">Best Buy</span> on Saturday, June 5.
            </div>
            <div class="produc-wrap ">
              <div class="search">
                <input
                  type="text"
                  class="searchTerm searchTerm__red"
                  placeholder="search wish lists"
                />
                <button type="submit" class="searchButton searchButton__red">
                  <i class="fa fa-search" />
                </button>
              </div>
            </div>
            <span className="material-button">
              <i className="fa fa-plus" />
            </span>
          </div>
          <div className="content-wrapper">
            <div className="table-wrapper">
              <ul className="horizontal col header">
                <li className="content">Updated Date</li>
                <li className="content">Payee</li>
                <li className="content ">Description</li>
                <li className="content right">Remaining</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProp = state => {
  return {
    wishlist: state.wishList
  };
};

export default connect(
  mapStateToProp,
  { getWishListsAction }
)(WishListContent);
