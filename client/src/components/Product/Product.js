import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { formatMoney } from "../../pipes/priceFormatter";
import { cumulativeOffSet } from "../../utilities/cumulativeOffset";

import "./Product.scss";
import SlideDots from "../SlideDots/SlideDots";
import { addProductToCart } from "../../actions";

const Product = props => {
  const { title, price, images, description, id } = props.product;

  const imageRef = React.createRef();
  const [img, setImg] = useState(images[0]);
  const [aItem, setAItem] = useState(0);

  const handleImageChange = e => {
    let clientX;

    if (e.type === "touchmove") {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }

    const currentX = clientX - cumulativeOffSet(imageRef.current).left;

    // console.dir(imageRef.current);

    const part = imageRef.current.clientWidth / images.length;
    // console.log(Math.ceil(currentX / part) - 1);

    let imgIndex = Math.ceil(currentX / part) - 1;
    if (imgIndex < 0) {
      imgIndex = 0;
    }

    if (imgIndex >= images.length) {
      imgIndex = images.length - 1;
    }
    setAItem(imgIndex);
    setImg(images[imgIndex]);
  };

  const handleMouseOut = e => {
    setImg(images[0]);
    setAItem(0);
  };

  const changeImage = i => {
    setImg(images[i]);
    setAItem(i);
  };

  return (
    <div id="product_item">
      <figure class="snip1268">
        <div class="image">
          <Link to={`/products/${id}`} className="product__link">
            <img
              className="card-img-top product__img"
              src={img}
              alt={title}
              ref={imageRef}
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

//
{
  /**/
}
