import React from "react";
import './css/product.css';

const Product =() =>{
    const product =[
        {
            cate :"SẢN PHẨM MỚI",
            name : 'Chả giò chay cao cấp nấm kim châm Phi Long hộp 500g',
            image : require('../assets/image/cha-gio-chay.png'),
            price : ' 30.000đ',
            sale : '-24%'
        },
        {   
            cate :"SẢN PHẨM MỚI",
            name : 'Bánh xốp nhân phô mai Nabati hộp 340g',
            image : require('../assets/image/banh-xop-nhan-pho-mai.png'),
            price : ' 39.000đ',
            sale : '-15%'
        },
        {
            cate :"SẢN PHẨM MỚI",
            name : 'Sữa tươi có đường Vinamilk Happy Star bịch 220ml',
            image : require('../assets/image/sua-dinh-duong.png'),
            price : ' 5.200đ',
            sale : '-21%'
        },
        {
            cate :"SẢN PHẨM MỚI",
            name : 'Hạt nêm chay nấm hương Knor gói 170g',
            image : require('../assets/image/hat-nem.png'),
            price : ' 30.000đ',
            sale : '-24%'
        },
        {
            cate :"SẢN PHẨM MỚI",
            name : 'Đường tinh luyện Lin gói 1kg',
            image : require('../assets/image/duong-tin.png'),
            price : ' 10.000đ',
            sale : '-24%'
        },
        {
            cate :"SẢN PHẨM MỚI",
            name : 'Nấm hải sản',
            image : require('../assets/image/nam-hai-san.png'),
            price : ' 30.000đ',
            sale : '-24%'
        },
        {
            cate :"SẢN PHẨM MỚI",
            name : 'Miến Phú Hương sườn 58g',
            image : require('../assets/image/mien-phu-huong.png'),
            price : ' 30.000đ',
            sale : '-24%'
        },
        {
            cate :"SẢN PHẨM MỚI",
            name : 'Sữa chua TH True Yogurt',
            image : require('../assets/image/sua-chua.png'),
            price : ' 30.000đ',
            sale : '-24%'
        }
    ];

    const product2 =[
        {
            cate :"SẢN PHẨM MỚI",
            name : 'Thùng bia 24 chai Hoegaarden 330ml',
            image : require('../assets/image/bia-1.png'),
            price : ' 630.000đ',
            sale : '-24%'
        },
        {   
            cate :"SẢN PHẨM MỚI",
            name : 'Khay 24 lon bia Heineken Silver 330ml',
            image : require('../assets/image/bia-2.png'),
            price : ' 439.000đ',
            sale : '-15%'
        },
        {
            cate :"SẢN PHẨM MỚI",
            name : 'Khay 24 lon bia Heineken Sleek 330ml',
            image : require('../assets/image/bia-3.png'),
            price : ' 445.200đ',
            sale : '-21%'
        },
        {
            cate :"SẢN PHẨM MỚI",
            name : 'Thùng 24 lon bia Tiger Crystal 330ml',
            image : require('../assets/image/bia-4.png'),
            price : ' 410.000đ',
            sale : '-24%'
        } 
    ]
    return(
        <section id="products">
            <div className="container">
                <div className="row product">
                    <h3 className="hometitle">SẢN PHẨM MỚI</h3>
                    {product.map(item =>
                    <div className="col-lg-3 col-md-6 col-sm-10 offset-md-0 offset-sm-1" id="card">
                        <div className="card">
                            <img className="card-img-top" src={item.image}/>
                            <div className="card-body">
                                <h5>{item.name}</h5>
                                <div className="discount">new</div>
                                <div className="d-flex flex-row my-2">
                                    <div className="text-muted price"><del>155.000đ</del><span className="price">{item.price}</span><label id="sale">{item.sale}</label></div>                   
                                </div> 
                                <button className="butn w-100 rounded my-2">CHỌN MUA</button>      
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
            <div className="groupfeature">
                <h3 className="hometitle"> BIA, NƯỚC GIẢI KHÁT</h3>
                {product2.map( node => 
                <div className="col-lg-3 col-md-6 col-sm-10 offset-md-0 offset-sm-1" id="card">
                    <div className="card">
                        <img className="card-img-top" src={node.image}/>
                        <div className="card-body">
                            <h5>{node.name}</h5>
                            <div className="d-flex flex-row my-2">
                                <div className="text-muted price"><del>33</del>{node.price}<label id="sale">{node.sale}</label></div>                   
                            </div> 
                            <button className="butn w-100 rounded my-2">CHỌN MUA</button>      
                        </div>
                    </div>
                </div>)}
            </div>
        </section>
    )
}
export default Product