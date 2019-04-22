import React, { Component } from "react";
import { connect } from "react-redux";
import ShowCategory from "./ShowCategory";

// import actions
import { getCategoriesAction } from "../../../../../actions/categoryAction";

class ShowCategoryContent extends Component {
  componentWillMount() {
    this.props.getCategoriesAction();
  }
  render() {
    const categories = this.props.category.categories;
    let categoryItem;
    if (categories) {
      categoryItem = categories.map(category => {
        return (
          <ShowCategory
            title={category.title}
            category_id={category._id}
            date={category.date}
            onTrashClick={this.props.onTrashClick}
          />
        );
      });
    }

    return (
      <div className="showCategorycontent">
        <div>
          <div className="search">
            <input
              type="text"
              className="searchTerm searchTerm__green"
              placeholder="Search products by name.."
            />
            <button type="submit" className="searchButton searchButton__green">
              <i className="fa fa-search" />
            </button>
          </div>
          <div className="cont_princ_lists">
            <ul>{categoryItem}</ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProp = state => {
  return {
    category: state.category
  };
};

export default connect(
  mapStateToProp,
  { getCategoriesAction }
)(ShowCategoryContent);
