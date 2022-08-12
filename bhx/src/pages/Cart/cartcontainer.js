import Header from "../Header/header";
import './css/cart.css';
import React, { useContext } from "react";
import CartItem from "./template/CartItem";
import { ProductContext } from "../context/ContextProvider";

const CartContainer = () =>{
    const { CartItems } = useContext(ProductContext);

    return(
        <div>
            <Header />
            <div class="card cardnormal">
                <div class="card-header">
                    Giỏ hàng của bạn
                </div>
                {CartItems.length > 0 ? (
                <div class="card-bodies">
                    <h5 class="card-title">HÀNG CÓ SẴN</h5>
                    {CartItems.map((product) => (
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
                    <h5 class="card-text text-right">Tiền hàng :</h5>
                    <p class="card-text text-right">Phí giao hàng :</p>
                    <p class="card-text text-right">Tổng cộng :</p>
                    <a href="#" className="btncart">ĐẶT HÀNG</a>
                    <a href="#" className="remove">XÓA GIỎ HÀNG</a>
                </div>
            </div>
        </div>
    )
}
export default CartContainer