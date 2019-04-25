import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ProductDetailComponent from "../../components/ProductDetail/ProductDetail";
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import Breadcrumb from "../../components/styles_components/Breadcrumb";
import {
  getAProductAction,
  addProductReview
} from "../../actions/productAction";
import Spinner from "../../components/commonFeilds/Spinner";
import ReviewContent from "../../components/ReviewContent/ReviewContent";
import AddReview from "../../components/AddReview/AddReview";

import "./ProductDetail.scss";

class ProductDetail extends Component {
  state = {
    clickedAddReview: false
  };

  componentDidMount() {
    const productId = this.props.match.params.id;
    this.props.getAProductAction(productId);
  }

  onAddRateButtonClick = () => {
    const { isAuthenticate } = this.props.user;
    if (!isAuthenticate) {
      this.props.history.push("/login");
    } else {
      const clickedAddReview = this.state.clickedAddReview;
      this.setState({
        clickedAddReview: !clickedAddReview
      });
    }
  };

  render() {
    const productId = this.props.match.params.id;
    const { product } = this.props.product.product;
    let ProductDetailContent = <Spinner />;
    if (product) {
      const { productImage } = product;
      ProductDetailContent = (
        <div className="row">
          <ProductSlider imgData={product.productImage} />
          <ProductDetailComponent product={product} />
        </div>
      );
    }

    return (
      <div className="container" style={{ padding: "6rem 0" }}>
        <div className="card">{ProductDetailContent}</div>
        <div class="row mt-2 no-pad">
          <div class="col-sm-9">
            <div className="card">
              <Breadcrumb onAddRateButtonClick={this.onAddRateButtonClick} />
              {this.state.clickedAddReview ? (
                <AddReview productId={productId} />
              ) : (
                ""
              )}
              <ReviewContent productId={productId} />
            </div>
          </div>
          <div class="col-sm-3">
            <div className="card ">
              <div class="card-header text-center font-weight-bold">
                Best Sellers
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    product: state.product,
    user: state.auth
  };
};

export default connect(
  mapStateToProps,
  { getAProductAction, addProductReview }
)(withRouter(ProductDetail));

/* 




*/
