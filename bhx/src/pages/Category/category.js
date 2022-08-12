import React from "react";
import './css/category.css'
import Cate from "../Cate/cate";
import { products } from "../../Data";

const Category =() =>{
  
    return(
        <section id="products">
            <div className="container">
                <div className="row product">
                    <h3 className="hometitle">SẢN PHẨM MỚI</h3>
                    {products.filter((product) => {
                        return product.newProduct;
                    }).map( (item) =>
                    <div className="col-lg-3" id="card" key={item.id}>
                        <div className="card">
                            {console.log(item)}
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
            <Cate type = 'BÁNH KẸO CÁC LOẠI' />
            <Cate type = 'THỊT, CÁ, TRỨNG, HẢI SẢN' />
            <Cate type = 'BIA, NƯỚC GIẢI KHÁT' />
    

        </section>
    )
}
export default Category