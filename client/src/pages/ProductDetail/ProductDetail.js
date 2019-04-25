import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ProductDetailComponent from "../../components/ProductDetail/ProductDetail";
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import { getAProductAction } from "../../actions/productAction";
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
    const { product } = this.props.product.product;

    console.log();
    let ProductDetailContent = <Spinner />;
    console.log(product);
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
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="#">Ratings</a>
                  </li>
                  <li class="breadcrumb-item">
                    <a href="#">Add Reviews</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Reviews
                  </li>
                  <li class="rate-product">
                    <button
                      className="rate-product-button"
                      onClick={this.onAddRateButtonClick}
                    >
                      Rate Product
                    </button>
                  </li>
                </ol>
              </nav>
              {this.state.clickedAddReview ? <AddReview /> : ""}
              <ReviewContent />
            </div>
          </div>
          <div class="col-sm-3">
            <div className="card">
              <div className="card" id="my-card">
                <img
                  alt="Card image cap"
                  className="card-img-top img-fluid"
                  src="https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwijsZ277OnhAhWWUn0KHY74CXoQjRx6BAgBEAU&url=https%3A%2F%2Fwww.tekneitalia.com%2Fcatalog%2Fplaceholder-thumb-imgs%2F&psig=AOvVaw3ByAKDwCUaJfk_6dT3lNOR&ust=1556233700403608"
                />

                <div className="card-body">
                  <p
                    className=""
                    style={{
                      fontSize: "15px",
                      color: "#333",
                      fontWeight: "500"
                    }}
                  >
                    category
                  </p>
                  <p
                    className="lead"
                    style={{
                      marginTop: "-20px",
                      fontSize: "22px"
                    }}
                  >
                    title
                  </p>
                  <div className="card-price__ratings">
                    <div className="card__price">
                      <p>price</p>
                    </div>
                    <div className="card__ratings">
                      3.24 <i className="fa fa-star" />
                    </div>
                  </div>
                </div>
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
  { getAProductAction }
)(withRouter(ProductDetail));

/* 




*/
