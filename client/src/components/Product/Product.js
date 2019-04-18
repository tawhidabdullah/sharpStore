import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { formatMoney } from "../../pipes/priceFormatter";
import { cumulativeOffSet } from "../../utilities/cumulativeOffset";

import "./Product.scss";
import SlideDots from "../SlideDots/SlideDots";
import { addProductToCart } from "../../actions";

const Product = props => {
  const { title, price, productImage, category, desc, _id } = props.product;


  return (
    <div id="product_item">
      <figure class="snip1268">
        <div class="image">
          <Link to={`/products/${_id}`} className="product__link">
            <img
              className="card-img-top product__img"
              src={productImage}
              alt={title}
            />
          </Link>
          <div class="icons">
            <a href="#">
              <i class="ion-star" />
            </a>
            <a href="#">
              {" "}
              <i class="ion-share" />
            </a>
            <a href="#">
              {" "}
              <i class="ion-search" />
            </a>
          </div>
          <a
            href="#"
            class="add-to-cart"
            onClick={() => {
              props.dispatch(addProductToCart({ ...props.product }));
            }}
          >
            Add to Cart
          </a>
        </div>
        <figcaption>
          <p class='pb-1'>{title} </p>
            <div id="bodyOfCard">
            <div
            style={{
              background: "darkslategrey",
              color: "white",
              display: "inlineBlock",
              padding : "2px 8px",
              margin: "0"
            }}
          >
            3.24 <i className='fa fa-star'></i>
          </div>
          <div class="price">   
            <h4>${`${formatMoney(price)}`}</h4>
          </div>
            </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default connect()(Product);
