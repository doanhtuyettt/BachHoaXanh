import Header from "../Header/header";
import './css/cart.css';
import React, { useContext } from "react";
import CartItem from "./template/CartItem";
import { ProductContext } from "../Context/ContextProvider";

const CartContainer = () =>{
    const { cartItems } = useContext(ProductContext);
    const itemsPrice = cartItems.reduce((sum, b) => sum + b.qty * b.price, 0);
    console.log(itemsPrice)
    const shippingPrice = itemsPrice > 500000 ? 0 : 15000;
    const totalPrice = itemsPrice + shippingPrice;
    console.log(cartItems)
    return(
        <div>
            <Header />
            <div class="card cardnormal">
                <div class="card-header">
                    Giỏ hàng của bạn
                </div>
                {cartItems.length > 0 ? (
                <div class="card-bodies">
                    <h5 class="card-title">HÀNG CÓ SẴN</h5>
                    {cartItems.map((product) => (
                        <CartItem key={product.id} product={product} />
                    ))}   
                </div>
                ) : (
                <div className="favorite_empty">
                    <h5 class="card-title">HÀNG CÓ SẴN</h5>
                    <img
                        src ={require('../../assets/image/empty-cart.png')}
                        alt="khong co san pham"
                    />
                    <span className="favorite_empty_title"> Giỏ hàng trống</span>
                </div>
                )}
                <br/>
                <div class="card-bodies">
                    <h5 class="card-text text-right">Tiền hàng : {itemsPrice}</h5>
                    {console.log(cartItems)}
                    <p class="card-text text-right">Phí giao hàng : {shippingPrice}</p>
                    <p class="card-text text-right">Tổng cộng : {totalPrice}</p>
                    <a href="#" className="btncart">ĐẶT HÀNG</a>
                    <a href="#" className="remove">XÓA GIỎ HÀNG</a>
                </div>
            </div>
        </div>
    )
}
export default CartContainer