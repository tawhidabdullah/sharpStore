import React from "react";
import { connect } from "react-redux";
import { formatMoney } from "../../pipes/priceFormatter";
import { addProductToCart } from "../../actions";

const ProductDetail = props => {
  const { title, category, price, desc } = props.product;

  const onCart = () => {
    props.dispatch(addProductToCart(props.product));
  };

  return (
    <aside className="col-sm-7">
      <article className="card-body p-5">
        <h3 className="title mb-3">{title}</h3>

        <p className="price-detail-wrap">
          <span className="price h3 text-warning">
            <span className="currency">$</span>
            <span className="num">{price}</span>
          </span>
        </p>
        <dl className="item-property">
          <dt>Description</dt>
          <dd>
            <p className="text-capitalize">{desc}</p>
          </dd>
        </dl>
        <dl className="param param-feature">
          <dt>Category</dt>
          <dd className="text-capitalize">{category}</dd>
        </dl>

        <hr />
        <hr />
        <button
          onClick={onCart}
          className="btn btn-lg btn-outline-danger text-uppercase"
        >
          <i className="fa fa-shopping-cart" /> Add to cart
        </button>
      </article>
    </aside>
  );
};

export default connect()(ProductDetail);
