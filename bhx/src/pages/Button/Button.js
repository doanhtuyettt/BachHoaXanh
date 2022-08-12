import React, { useContext } from "react";
import { ProductContext, ProductDispath } from "../context/ContextProvider";

export default function Buttons(props) {
  const { dispath } = useContext(ProductDispath);
  const { state } = useContext(ProductContext);
  const { id } = props;
  const countItem = state.basket.find((product) => product.id === id);
  return (
    <div className="basket_buttons">
      <span
        onClick={() => dispath({ type: "INCREASE", payload: id })}
        className="basket_plus"
      >
        
      </span>
      <span className="counter_number">{props.count}</span>
      {countItem.count === 1 ? (
        <span
          onClick={() => dispath({ type: "REMOVE_FROM_BASKET", payload: id })}
          className="basket_minus"
        >
          
        </span>
      ) : (
        <span
          onClick={() => dispath({ type: "DECREASE", payload: id })}
          className="basket_minus"
        >
        </span>
      )}
    </div>
  );
}
