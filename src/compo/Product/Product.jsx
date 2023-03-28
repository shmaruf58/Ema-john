import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";


const Product = (props) => {
  const { name, img, seller, ratings, quantity, price } = props.product;
  const handleCart = props.handleCart;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h3>{name}</h3>
        <h4>Manufacturer: {seller}</h4>
        <p>price : ${price}</p>
        <p>Rating:{ratings} star</p>
      </div>
      <button onClick={() => handleCart(props.product)} className="btn-cart">
        Add to Cart
        <FontAwesomeIcon className="icon" icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
