import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
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

  useEffect(() => {
    const storedCart = getShoppingCart;
    const savedCart = [];

    //step 1: get id
    for (const id in storedCart) {
      //step 2: get the product by using id
      const addedPrduct = products.find((product) => product.id === id);

      //step 3: get quantity of the product
      if (addedPrduct) {
        const quantity = storedCart[id];
        addedPrduct.quantity = quantity;

        //step:4 added product to the saved cart
        savedCart.push(addedPrduct);
      }
     
    }

     //step:5 saved the cart
     setCart(savedCart);
    
  }, [products]);

  const handleCart = (product) => {
    //cART.PUSH(product)
    let newCart = [];

    const exist = cart.find((pd) => pd.id === product.id);
    if (!exist) {
      product.quantity = 1;
       newCart = [...cart, product];
    } 
    else {
      exist.quantity = exist.quantity + 1;
      const remain = cart.filter((pd) => pd.id !== product.id);
      newCart = [...remain, exist];
    }

    setCart(newCart);
    addToDb(product.id);
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
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
