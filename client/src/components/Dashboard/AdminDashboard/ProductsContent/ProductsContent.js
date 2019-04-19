import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "../../../commonFeilds/Spinner";
import EditProducts from "../../EditProducts";
import { getProductAction } from "../../../../actions/productAction";
import "./ProductsContent.scss";

class ProductsContent extends Component {
  state = {
    editProduct: false,
    title: "",
    desc: "",
    category: "",
    price: "",
    productImage: ""
  };

  onMaterialButtonclick = () => {
    this.props.clicked();
  };

  componentWillMount() {
    this.props.getProductAction();
  }

  onProductEdit(id, product) {
    this.setState({
      title: product.title,
      desc: product.desc,
      category: product.category,
      price: product.price,
      productImage: product.productImage,
      editProduct: true
    });

    // this.props.editProductAction(id);
  }

  render() {
    const { products } = this.props.product;
    let productsContents = <Spinner />;
    if (products.length > 0) {
      productsContents = products.map(product => {
        return (
          <ul class="data col horizontal">
            <li class="content">
              <div>Nov 3</div>
              <div class="secondary">4 months</div>
            </li>
            <li class="content has-image">
              <div>{product.title}</div>
              <div class="secondary">{product.category}</div>
            </li>
            <li class="content">
              <div>{product.desc}</div>
              <div class="secondary">In stock</div>
            </li>
            <li class="content">
              <div id="price">${product.price}</div>
              <div class="secondary">2.3</div>
            </li>
            <li class="content">
              <div class="icon-wrapper">
                <span
                  class="icon edit"
                  data-tooltip="Edit"
                  onClick={this.onProductEdit.bind(this, product._id, product)}
                />
                <span
                  class="icon delete"
                  data-tooltip="Delete"
                  onClick={this.onProductDelete}
                />
              </div>
            </li>
          </ul>
        );
      });
    }

    return (
      <div>
        <div class="container">
          <div class="header-wrapper">
            <div class="title">Welcome back, {this.props.user.name}!</div>
            <div class="note">
              Recent: <span class="focus">$250 </span>to{" "}
              <span class="focus">Best Buy</span> on Saturday, June 5.
            </div>

            <span class="material-button" onClick={this.onMaterialButtonclick}>
              <i className="fa fa-plus" />
            </span>
          </div>
          <div class="content-wrapper">
            {this.state.editProduct ? (
              <EditProducts
                title={this.state.title}
                desc={this.state.desc}
                price={this.state.price}
                category={this.state.category}
                productImage={this.state.productImage}
              />
            ) : (
              <div class="table-wrapper">
                <ul class="horizontal col header">
                  <li class="content">Updated Date</li>
                  <li class="content">Payee</li>
                  <li class="content ">Description</li>
                  <li class="content right">Remaining</li>
                </ul>
                {productsContents}
              </div>
            )}
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
)(ProductsContent);
