import React, { createContext, useState } from "react";
import { products } from "../../Data";

export const ProductContext = createContext();

export default function ContextProvider({ children }) {
  const [cartItems,setCartItems] = useState([])
  const [query, setQuery] = useState('');

  const onAdd =(product) =>{
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
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const value ={
    cartItems,
    query,
    onAdd,
    onRemove,
    setQuery
  }

  return (
    <ProductContext.Provider value={value}>
        {children}
    </ProductContext.Provider>
  );
}
