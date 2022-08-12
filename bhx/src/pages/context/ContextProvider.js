import React, { createContext, useReducer } from "react";
import {products} from '../../Data'

const initialState = {
  products,
  cart: [],
  totalPrice: 0
};

const reduce = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const hasProduct = state.cart.find(
        (product) => product.id === action.payload
      );
      if (!hasProduct) {
        const mainItem = state.products.find(
          (product) => product.id === action.payload
        );
        state.cart.push(mainItem);
      }

      return {
        ...state,
      };
    }
    
    default:
      return state;
  }
};

export const ProductContext = createContext();
export const ProductDispath = createContext();

export default function ContextProvider({ children }) {
  const [state, dispath] = useReducer(reduce, initialState);
  return (
    <ProductContext.Provider value={{ state }}>
      <ProductDispath.Provider value={{ dispath }}>
        {children}
      </ProductDispath.Provider>
    </ProductContext.Provider>
  );
}
