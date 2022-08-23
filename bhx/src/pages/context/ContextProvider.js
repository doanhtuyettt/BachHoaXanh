import React, { createContext, useState, useEffect } from "react";
import { auth} from "../../App";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";


export const ProductContext = createContext();
export default function ContextProvider({ children }) {
  const [cartItems,setCartItems] = useState([])
  const [query, setQuery] = useState('');
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) { 
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
  }, [currentUser]);

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

  const onSubmit = (data) => {
    createUserWithEmailAndPassword(auth, data.email, data.password); 
    console.log(data) 
  }
  
  const value ={
    cartItems,
    query,
    onAdd,
    onRemove,
    setQuery,
    onSubmit,
    currentUser
  }
  
  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
}