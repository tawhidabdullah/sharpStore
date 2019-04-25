import React, { Component } from "react";
import "./ReviewContent.scss";
import { connect } from "react-redux";
import { getProductReviews } from "../../actions/productAction";
import ReviewItem from "./ReviewItem";
import Spinner from "../commonFeilds/Spinner";

class ReviewContent extends Component {
  componentWillMount() {
    const productId = this.props.productId;
    this.props.getProductReviews(productId);
  }

  componentDidUpdate() {
    const productId = this.props.productId;
    this.props.getProductReviews(productId);
  }

  render() {
    const { reviews } = this.props.reviews;

    let reviewItemContent = <Spinner />;

    if (reviews.reviews) {
      console.log(reviews.reviews);
      reviewItemContent = reviews.reviews.map(review => {
        return <ReviewItem review={review} />;
      });
    }

    return <div>{reviewItemContent}</div>;
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.review
  };
};

export default connect(
  mapStateToProps,
  { getProductReviews }
)(ReviewContent);
