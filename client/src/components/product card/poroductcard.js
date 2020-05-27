import React from "react";
import "./productcard.css";
import Link from "react-router-dom";
import sample from "./product-sample.png"

class ProductCard extends React.Component {
  state = {};
  render() {
    return (
      <div id="container">
          <div id="img">
          <img className="sample" src={sample} alt="product" />
          </div>
          
          <div id="description">
              <div id="description-line1" >
              <div id="right"></div>
              <div id="left"></div>
              </div>
              <div id="description-line2">
              <div id="right"></div>
              <div id="left"></div>
              </div>
          </div>
      </div>
    );
  }
}

export default ProductCard;