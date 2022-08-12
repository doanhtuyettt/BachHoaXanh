import React, { createContext, useState } from "react";
import { products } from "../../Data";

export const ProductContext = createContext();

export default function ContextProvider({ children }) {
  const [cartItems,setCartItems] = useState([])
  const onAdd =(product) =>{
    console.log(cartItems)
    const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
          setCartItems(
            cartItems.map((x) =>
              x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
            )
          );
        } else {
          setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
  };
  const onRemove =(product) =>{
    const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
          setCartItems(
            cartItems.map((x) =>
              x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
            )
          );
        } else {
          setCartItems([...cartItems, { ...product, qty: 0 }]);
        }
  };
  const value ={
    cartItems,
    onAdd,
    onRemove,
    products
  }

  return (
    <ProductContext.Provider value={value}>
        {children}
    </ProductContext.Provider>
  );
}
