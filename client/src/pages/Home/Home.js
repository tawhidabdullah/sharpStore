import React, { Component } from "react";
import FilterBar from "../../containers/FilterBar/FilterBar";
import ProductList from "../../containers/ProductList/ProductList";
import Pagination from "../../components/Pagination/Pagination";
import { getProductAction } from "../../actions/productAction";
import { connect } from "react-redux";
import "./Home.scss";

class Home extends Component {
  componentWillMount() {
    this.props.getProductAction();
  }

  render() {
    let fiveProducts;
    if (this.props.products.products) {
      fiveProducts = this.props.products.products.splice(0, 5);
    }

    const fiveImages = fiveProducts.map(product => {
      return product.productImage;
    });
    const imgOne = fiveImages[0];
    const imgTwo = fiveImages[1];
    const imgThree = fiveImages[2];
    console.log("imgg22", imgTwo);

    return (
      <React.Fragment>
        <div className="container-fluid" style={{ paddingTop: "4rem" }}>
          <div className='row carousel-row'>
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                />
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                />
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                />
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    class="carousel-img-top "
                    src="https://images.pexels.com/photos/682933/pexels-photo-682933.jpeg?cs=srgb&dl=cellular-telephone-communication-connection-682933.jpg&fm=jpg"
                    alt="Second slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="carousel-img-top "
                    src="https://images.pexels.com/photos/1153418/pexels-photo-1153418.jpeg?cs=srgb&dl=apple-cellphone-cellular-1153418.jpg&fm=jpg"
                    alt="Third slide"
                  />
                </div>
                <div class="carousel-item">
                  <img
                    class="carousel-img-top "
                    src="https://images.pexels.com/photos/2148216/pexels-photo-2148216.jpeg?cs=srgb&dl=blur-business-cafe-2148216.jpg&fm=jpg"
                    alt="First slide"
                  />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span class="carousel-control-prev-icon" aria-hidden="true" />
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span class="carousel-control-next-icon" aria-hidden="true" />
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div className="row product-section">
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
