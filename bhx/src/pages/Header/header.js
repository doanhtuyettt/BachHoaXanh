import React from 'react';
import './css/header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    const padding = {
        padding: 5
    }
    const list = [
        {
            name : "THỊT, CÁ, TRỨNG, HẢI SẢN",
            sub:["Thịt các loại","Cá,hải sản","Trứng gà,vịt,cút"],
            id: 1,
        },
        {
            name : "RAU, CỦ, TRÁI CÂY",
            sub:["Rau xanh các loại","Củ các loại","Trái cây các loại"],
            id: 2,
        },
        {
            name : "THỰC PHẨM ĐÔNG-MÁT",
            sub:['Kem các loại','Xúc xích,lạp xưởng,chả lụa,cá-bò viên','Há cảo, sủi cảo'],
            id: 3,
        },
        {
            name : "MÌ, MIẾN, CHÁO, PHỞ",
            sub:['Mì,Phở,Bún ăn liền','Hủ tiếu,miến, bánh canh','Cháo gói,cháo tươi'],
            id: 4,
        },
        {
            name : "GẠO, BỘT, ĐỒ KHÔ",
            sub:['Gạo,bột các loại','Đồ hộp các loại','Đồ chay'],
            id: 5,
        },
        {
            name : "DẦU ĂN, NƯỚC CHẤM, GIA VỊ",
            sub:['Dầu ăn','Đường các loại','Hạt nêm,bột ngọt,bột canh'],
            id: 6,
        },
        {
            name : "SỮA CÁC LOẠI",
            sub:['Sữa tươi','Sữa chua uống liền','Sữa hạt,đậu,lúa mạch, ngũ cốc'],
            id: 7,
        },
        {
            name : "BIA, NƯỚC GIẢI KHÁT",
            sub:['Bia,nước có cồn','Rượu các loại','Nước tăng lực,bù khoáng'],
            id: 8,
        },
        {
            name : "BÁNH KẸO",
            sub:['Bánh quy,bánh xốp','Bánh tươi,bánh mềm','Kẹo,mứt,thạch các loại'],
            id: 9,
        },
        {
            name : "SẢN PHẨM CHO MẸ VÀ BÉ",
            sub:['Dầu tắm-gội cho bé','Giặt-xả cho bé','Bình sữa,khăn sữa, đồ chơi...'],
            id: 10,
        },
    ]
    return (
        <nav className="navbar navbar-expand-lg navigation-wrap">
            <div className="container-fluid">
            <div className="navbar-header">
                <div className="col-lg">
                    <div className="hero__categories">
                        <div className="hero__categories__all">
                            <i className="glyphicon glyphicon-menu-hamburger"></i>
                            <span>DANH MỤC SẢN PHẨM</span>
                        </div>
                        <ul className="list-unstyled components">
                            <li class="active">
                                <a href="#" >KHUYẾN MÃI HOT</a>
                            </li>
                            {list.map( item =>
                            <li key={item.id}>
                                <a href={`#${item.id}`} data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><b>{item.name}</b></a>
                                <ul className="collapse list-unstyled" id= {item.id}>
                                    <li>
                                        <a href="#">{item.sub[0]}</a>
                                    </li>
                                    <li>
                                        <a href="#">{item.sub[1]}</a>
                                    </li>
                                    <li>
                                        <a href="#">{item.sub[2]}</a>
                                    </li>
                                </ul>
                            </li>)}
                        </ul>
                    </div>
                </div>
                </div>
                <div className="navbar-header">
                    <a className="navbar-brand" href="#"><img src="https://cdn.haitrieu.com/wp-content/uploads/2022/03/Logo-Bach-Hoa-Xanh-H.png"/></a>
                </div>
                <ul className="nav navbar-nav">
                <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">Các cơ sở <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                        <li><a href="#">Miền Bắc</a></li>
                        <li><a href="#">Miền Trung</a></li>
                        <li><a href="#">Miền Nam</a></li>
                    </ul>
                </li>
                <li><a href="#"><span className="glyphicon glyphicon-shopping-cart"></span> Giỏ hàng<span class="badge badge-pill badge-warning">3</span></a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="#"><span className="glyphicon glyphicon-user"></span><Link style={padding} to="/login">Đăng nhập</Link></a></li>
                    <li><a href="#"><span className="glyphicon glyphicon-log-in"></span><Link style={padding} to="/signin">Đăng ký</Link></a></li>
                </ul>
                <form>
                    <input type="text" placeholder="Tìm kiếm món hàng tại đây ..."/>
                    <div className="input-group-btn">
                        <button className="btn btn-default" type="submit">
                            <i className="glyphicon glyphicon-search"></i>
                        </button>
                    </div>
                </form>
            </div>
        </nav>
    )
}
export default Header;