import React, { Component } from "react";
import FileUploads from "../commonFeilds/FileUploads";
import { connect } from "react-redux";

class AddProducts extends Component {
  state = {
    product: {}
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.product) {
      this.setState({
        product: nextProps.product
      });
    }
  }

  render() {
    const productImage = this.state.product;
    console.log(productImage);

    return (
      <div className="container mt-5">
        {/* <img src={productImage} alt="productImage" /> */}
        <h4 className="display-4 text-center mb-4">Add your Product</h4>
        <FileUploads />
      </div>
    );
  }
}

const mapStateToProp = state => {
  return {
    Product: state.product
  };
};

export default connect(mapStateToProp)(AddProducts);
