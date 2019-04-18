import React, { Component } from "react";
import FilterBar from "../../containers/FilterBar/FilterBar";
import ProductList from "../../containers/ProductList/ProductList";
import Pagination from "../../components/Pagination/Pagination";
import { getProductAction } from "../../actions/productAction";
import { connect } from "react-redux";


class Home extends Component {
  componentWillMount() {
    this.props.getProductAction();
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid" style={{ paddingTop: "6rem" }}>
          <div className="row">
            <FilterBar />
            <ProductList />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProp = state => {
  return {
    products: state.product
  };
};
export default connect(
  mapStateToProp,
  { getProductAction }
)(Home);
