import Header from "../Header/header";
import './css/cart.css';
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "./template/CartItem";
import { ProductContext } from "../Context/ContextProvider";
import PayCart from "./template/payCart";
import { NotificationManager } from 'react-notifications';

const CartContainer = () =>{
    const { cartItems } = useContext(ProductContext);
    return(
        <div>
            <Header />
            <div className="card cardnormal">
                <div className="card-header">
                    Giỏ hàng của bạn
                </div>
                {cartItems.length > 0 ? (
                <div className="card-bodies">
                    <h5 className="card-title">HÀNG CÓ SẴN</h5>
                    {cartItems.map((product) => (
                        <CartItem key={product.id} product={product} />
                    ))}   
                </div>
                ) : (
                <div className="favorite_empty">
                    <h5 className="card-title">HÀNG CÓ SẴN</h5>
                    <img
                        src ={require('../../assets/image/empty-cart.png')}
                        alt="khong co san pham"
                    />
                    <span className="favorite_empty_title"> Giỏ hàng trống</span>
                </div>
                )}
                <br/>
                <PayCart />
                {cartItems.length != 0 
                ? <Link to="/pay"><span href="#" className="btncart">ĐẶT HÀNG</span></Link> 
                : <button onClick={()=>NotificationManager.error('Hãy cho sản phẩm vào giỏ hàng nhé!', 'Lỗi!')} className="btncart">ĐẶT HÀNG</button> }
                <a href="#" className="remove">XÓA GIỎ HÀNG</a>
            </div>
        </div>
    )
}
export default CartContainer