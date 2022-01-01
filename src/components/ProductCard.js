import React from "react";
import "./ProductCardStyling.css";

const ProductCard = (props) => {
  return (
    
    <div class="product-card">
      <div class="product-image">
        <img src={props.img} alt="" />
      </div>
      <div class="product-details">
        <h2>
          <a href="">{props.title}</a>
        </h2>
        <p>{props.detail}</p>
        <div class="product-bottom">
          <div class="product-price">
            <small>{props.discount}</small>
            {props.price}
          </div>
          <div class="product-links">
            <a href="">
              <i class="fa fa-heart"></i>
            </a>
            <a href="">
              <i class="fa fa-shopping-cart"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
