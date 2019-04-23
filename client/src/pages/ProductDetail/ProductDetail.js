import React, { Component } from "react";
import { connect } from "react-redux";
import ProductDetailComponent from "../../components/ProductDetail/ProductDetail";
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import { getAProductAction } from "../../actions/productAction";
import Spinner from "../../components/commonFeilds/Spinner";

class ProductDetail extends Component {
  componentDidMount() {
    const productId = this.props.match.params.id;
    this.props.getAProductAction(productId);
  }
  render() {
    const { product } = this.props.product.product;
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    product: state.product
  };
};

export default connect(
  mapStateToProps,
  { getAProductAction }
)(ProductDetail);

/* 




*/
