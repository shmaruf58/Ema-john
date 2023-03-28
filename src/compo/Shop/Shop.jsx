import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((producty) => (
          <Product
            key={producty.id}
            product={producty}
            handleCart={handleCart}
          ></Product>
        ))}
      </div>

      <div className="cart-container">
        <h2>order summery</h2>  
        <p>Selected item : {cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;
