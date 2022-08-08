import React from "react";
import './css/nav.css';
import Product from "../Product/product";

const Nav = () =>{
    const img = {
        width :45
    }
    const data =[
        {
            content : 'Thịt heo các loại',
            image : require('../assets/image/thit-heo.png')
        },
        {
            content : 'Kem các loại',
            image : require('../assets/image/kem.png')
        },
        {
            content:'Nước giặt',
            image:require('../assets/image/giay.png')
        },
        {
            content:'Nước giặt',
            image:require('../assets/image/nuoc-giat.png')
        },
        {
            content:'Nước giặt',
            image:require('../assets/image/mi.png')
        },
        {
            content:'Nước giặt',
            image:require('../assets/image/nuoc-mam.png')
        },
        {
            content:'Nước giặt',
            image:require('../assets/image/nuoc-ngot.png')
        },
        {
            content:'Nước giặt',
            image:require('../assets/image/rau-cu.png')
        },
        {
            content:'Nước giặt',
            image:require('../assets/image/nuoc-giat.png')
        }
    ]
    return (
        <div class="container">
            <div class="row">
                <div class="col-lg-10">
                  <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="item active">
                            <img src="https://cdn.tgdd.vn/bachhoaxanh/banners/3562/banner-landingpage-3562-1507202211153.jpg" alt="pic 1" style={{ width: "100%" }} />
                        </div>
                        
                        <div className="item">
                            <img src="https://cdn.tgdd.vn/bachhoaxanh/banners/3355/banner-landingpage-3355-0707202202323.jpg" alt="pic 2" style={{ width: "100%" }} />
                        </div>
                        <div className="item">
                            <img src="https://cdn.tgdd.vn/bachhoaxanh/banners/2798/goi-xa-nhuom-30-1907202294837.jpg" alt="pic 3" style={{ width: "100%" }} />
                        </div>
                    </div>
                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right"></span>
                        <span className="sr-only">Next</span>
                    </a>
                    </div>
                    <br />
                    <div className="row featured__filter" >
                        <h4>Nhóm hàng thường mua</h4>
                        {data.map(item =>
                        <div className="col-lg-1 mix">
                            <div className="featured__item">
                                <div className="featured__item__pic ">
                                    <img src={item.image} style={img}/>
                                </div>
                                <div className="featured__item__text">
                                    <a href="#">{item.content}</a>
                                </div>
                            </div>
                        </div>)}
                    </div>
                    <br />
                    <Product />
                </div>
            </div>    
        </div>
            
    )

}
export default Nav