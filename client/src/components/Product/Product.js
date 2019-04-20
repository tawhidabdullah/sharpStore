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
    <div className="card" id="my-card">
      <Link to={`/products/${_id}`} className="product__link">
        <img
          alt="Card image cap"
          className="card-img-top img-fluid"
          src={productImage}
        />
      </Link>

      <div className="card-body">
        <p
          className=""
          style={{
            fontSize: "15px",
            color: "#333",
            fontWeight: "500"
          }}
        >
          {category}
        </p>
        <p
          className="lead"
          style={{
            marginTop: "-20px",
            fontSize: "22px"
          }}
        >
          {title}
        </p>
        <div className="card-price__ratings">
          <div className="card__price">
            <p>${price}</p>
          </div>
          <div className="card__ratings">
            3.24 <i className="fa fa-star" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect()(Product);

/*
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
          
          <div class="price">   
            <h4>${`${formatMoney(price)}`}</h4>
          </div>
            </div>
        </figcaption>
      </figure>
    </div>



*/
