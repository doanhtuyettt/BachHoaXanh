import React from "react";
import './css/category.css'
import Cate from "../Cate/cate";
import { products } from "../../Data";
import { useContext } from "react";
import { ProductContext } from "../Context/ContextProvider";

const Category =() =>{
    const {onAdd} = useContext(ProductContext);

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
                            <img className="card-img-top" alt='image' src={item.image}/>
                            <div className="card-body">
                                <h5>{item.name}</h5>
                                <div className="discount">new</div>
                                <div className="d-flex flex-row my-2">
                                    <div className="text-muted price"><del>155.000đ</del><span className="price">{item.price}</span><label id="sale">{item.sale}</label></div>                   
                                </div> 
                                <button className="butn w-100" onClick={() => onAdd(item)}>CHỌN MUA</button>      
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
            <Cate type = 'THỊT, CÁ, TRỨNG, HẢI SẢN' />
            <Cate type = 'RAU, CỦ, TRÁI CÂY' />
            <Cate type = 'BÁNH KẸO CÁC LOẠI' />
            <Cate type = 'BIA, NƯỚC GIẢI KHÁT' />
        </section>
    )
}
export default Category