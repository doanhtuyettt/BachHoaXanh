import React from "react";
import './css/product.css';
import { useContext } from "react";
import { ProductContext } from "../Context/ContextProvider";
import { Link } from "react-router-dom";

const Product =({item}) =>{
    const { onAdd,currentUser } = useContext(ProductContext)

    return( 
            <div className="col-lg-3 " id="card" >
                <div className="card">
                    <img className="card-img-top" alt='image' src={item.image}/>
                    <div className="card-body">
                        <h5>{item.name}</h5>
                        <div className="d-flex flex-row my-2">
                            <div className="text-muted price"><del>33.000đ</del>{item.price}<label id="sale">{item.sale}</label></div>                   
                        </div>                     
                        {currentUser 
                        ? <button className="butn w-100" onClick={() => onAdd(item)} >CHỌN MUA</button> 
                        :<Link to='/login'><button className="butn w-100" >CHỌN MUA</button></Link>}
                    </div>
                </div>
            </div>
    )
}
export default Product