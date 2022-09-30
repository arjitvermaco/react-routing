import React, { useState } from "react";
import toast from "react-hot-toast";
import AppContext from "./AppContext";

export default function AppState(props) {
  const [cartItems, setCartItems] = useState([]);

  let addProductToCart = (product) => {
    let matchProduct = false;
    let i;

    for (i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === product.id) {
        matchProduct = true;
      }
    }

    if (matchProduct) {
      toast.error("Product is already in cart");
    } else {
      setCartItems([...cartItems, product]);
      toast.success("Product Added To Cart");
    }
  };

  let removeItemFromCart= (product)=>{
    let updatedCartItems = cartItems.filter((item)=>{
        return item.id !== product.id;
    })

    setCartItems(updatedCartItems);
    toast.success("Item deleted successfully");

  }

  return (
    <AppContext.Provider value={{ cartItems, setCartItems, addProductToCart,removeItemFromCart }}>
      {props.children}
    </AppContext.Provider>
  );
}
