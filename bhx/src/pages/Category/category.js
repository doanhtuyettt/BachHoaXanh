import React from "react";
import './css/category.css'
import Product from "../Product/product";
import { products } from "../../Data";

const Category =() =>{
   
    return(
        <section id="products">
            <div className="container">
                <div className="row product">
                    <h3 className="hometitle">SẢN PHẨM MỚI</h3>
                    {products.filter((product) => {
                        return product.newProduct === 'true'
                    }).map(item =>
                    <div className="col-lg-3" id="card" key={item.id}>
                        <div className="card">
                            <img className="card-img-top" alt='image' src={item.image}/>
                            <div className="card-body">
                                <h5>{item.name}</h5>
                                <div className="discount">new</div>
                                <div className="d-flex flex-row my-2">
                                    <div className="text-muted price"><del>155.000đ</del><span className="price">{item.price}</span><label id="sale">{item.sale}</label></div>                   
                                </div> 
                                <button className="butn w-100">CHỌN MUA</button>      
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
            {products.filter((product) => {return product.type === 'BÁNH KẸO CÁC LOẠI'}).map(({type}) => <Product type={type}/>)}
            {products.filter((product) => {return product.type === 'BIA, NƯỚC GIẢI KHÁT'}).map(({type}) => <Product type={type}/>)}
            {products.filter((product) => {return product.type === 'THỊT, CÁ, TRỨNG, HẢI SẢN'}).map(({type}) => <Product type={type}/>)}

        </section>
    )
}
export default Category