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
    // let prods = products.product;
    // let images;
    // if (prods) {
    //   prods.forEach(element => {
    //     images = <ShowImage imgData={element.productImage} />;
    //   });
    // }

    return (
      <div className="">
        <h4 className="display-4 text-center mb-4">Add your Product</h4>
        <div className="row">
          <div className="col-md-6">
            {" "}
            <FileUploads />
          </div>
          <div className="col-md-6">
            <p className="lead text-muted">
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
              I am alone, and feel the charm of existence in this spot, which
              was created for the bliss of souls like mine. I am so happy, my
              dear friend, so absorbed in the exquisite sense of mere tranquil
              existence, that I neglect my talents. I should be incapable of
              drawing a single stroke at the present moment; and yet I feel that
              I never was a greater artist than now. When, while the lovely
              valley teems with vapour around me, and the meridian sun strikes
              the upper surface of the impenetrable foliage of my trees, and but
              a few stray gleams steal into the inner sanctuary, I throw myself
              down among the tall grass by the trickling stream; and, as I lie
              close to the earth, a thousand unknown plants are noticed by me:
              when I hear the buzz of the little world among the stalks, and
              grow familiar with the countless indescribable forms of the
              insects and flies, then I feel the presence of the Almighty, who
              formed us in his own image, and the breath
            </p>
          </div>
        </div>
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
