import React from "react";
import './css/product.css';
import { useContext } from "react";
import { ProductDispath } from "../context/ContextProvider";

const Product =(props) =>{
    const { dispath } = useContext(ProductDispath);
    // const { state } = useContext(ProductContext);

    // const datas = state.allProducts.find((product) => product.id === props.id);
    // const checkBasket = state.basket.some((product) => product.id === props.id);
  
    return(
        <div className="groupfeature">
            <h3 className="hometitle">{props.type}</h3>
            {/* {props.map( node => 
            <div className="col-lg-3 " id="card" >
                <div className="card">
                    <img className="card-img-top" alt='image' src={node.image}/>
                    <div className="card-body">
                        <h5>{node.name}</h5>
                        <div className="d-flex flex-row my-2">
                            <div className="text-muted price"><del>33.000đ</del>{node.price}<label id="sale">{node.sale}</label></div>                   
                        </div>                         
                        <button className="butn w-100" onClick={() => dispath({ type: "ADD_TO_CART", payload: props.id })} >CHỌN MUA</button>
                    </div>
                </div>
            </div>)} */}
        </div>
        
    )

}
export default Product