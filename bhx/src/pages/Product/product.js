import React from "react";
import './css/product.css';

const Product =() =>{
    const product =[
        {
            name : 'Nấm kim châm',
            image : require('../assets/image/nam-hai-san.png')
        },
        {
            name : 'Nấm kim châm',
            image : require('../assets/image/nam-hai-san.png')
        },
        {
            name : 'Nấm kim châm',
            image : require('../assets/image/nam-hai-san.png')
        },
        {
            name : 'Nấm kim châm',
            image : require('../assets/image/nam-hai-san.png')
        },
        {
            name : 'Nấm kim châm',
            image : require('../assets/image/nam-hai-san.png')
        },
        {
            name : 'Nấm kim châm',
            image : require('../assets/image/nam-hai-san.png')
        },
        {
            name : 'Nấm kim châm',
            image : require('../assets/image/nam-hai-san.png')
        },
        {
            name : 'Nấm kim châm',
            image : require('../assets/image/nam-hai-san.png')
        }
    ]
    return(
        <section id="products">
             <div className="container">
                <div className="row product">
                    <h3>SẢN PHẨM MỚI</h3>
                    {product.map(item =>
                    <div className="col-lg-3 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
                        <div className="card">
                            <img className="card-img-top" src={item.image}/>
                            <div className="card-body">
                                <h5><b>{item.name}</b> </h5>
                                <div className="discount">new</div>
                                <div className="d-flex flex-row my-2">
                                <div className="text-muted price"><del>155.000đ</del> 50.000đ</div>
                                    <div className="ml-auto">
                                        <span id="orange">-24%</span>
                                    </div>
                                </div> 
                                <button className="butn w-100 rounded my-2">CHỌN MUA</button>      
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </section>
    )
}
export default Product