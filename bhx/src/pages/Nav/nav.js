import React, { useContext } from "react";
import './css/nav.css';
import Category from "../Category/category";
import { products } from "../../Data";
import { ProductContext } from "../Context/ContextProvider";
import Product from "../Product/product";
import Carousel from "./template/Carousel/carousel";
import Banner from "./template/Banner/banner";

const Nav = () =>{
    const {query} = useContext(ProductContext);
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-10">
                    <Carousel />
                    <br />
                    <Banner />
                    <br />
                    {products.filter((item) => item.name.toLowerCase().includes(query)).length <20  ?
                    products.filter((item) => item.name.toLowerCase().includes(query.toLowerCase())).map((item) =>(
                        <Product item={item}/>
                    ))
                    :
                    <Category />}
                </div>
            </div>    
        </div>
            
    )

}
export default Nav