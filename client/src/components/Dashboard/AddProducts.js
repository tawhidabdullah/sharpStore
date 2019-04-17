import React, { Component } from "react";
import FileUploads from "../commonFeilds/FileUploads";
import { connect } from "react-redux";
import { getProductAction } from "../../actions/addProductAction";
import ShowImage from "../commonFeilds/ShowImage";

class AddProducts extends Component {
  state = {
    product: [],
    showImage: null
  };

  componentDidMount() {
    this.props.getProductAction(); // fired the getCurrentUser action
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.product) {
      this.setState({
        product: nextProps.product
      });
    }
  }

  render() {
    const { products, loading } = this.props.product;
    let prods = products.product; 
    let images; 
   if(prods){
    prods.forEach(element => {
     images =  <ShowImage imgData={element.productImage} />
    });
   }

    return (
      <div className="container mt-5">
        <h4 className="display-4 text-center mb-4">Add your Product</h4>
        <FileUploads />
       {images}
      </div>
    );
  }
}

const mapStateToProp = state => {
  return {
    product: state.product
  };
};

export default connect(
  mapStateToProp,
  { getProductAction }
)(AddProducts);
