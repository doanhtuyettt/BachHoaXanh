import { useContext } from "react";
import { ProductContext } from "../../Context/ContextProvider";

const PayCart = () =>{
    const { cartItems } = useContext(ProductContext);
    const itemsPrice = cartItems.reduce((sum, b) => sum + b.qty * b.price, 0);
    const shippingPrice = itemsPrice > 500000 ? 0 : 15000;
    const totalPrice = itemsPrice + shippingPrice;
    
    return(
        <div className="card-bodies">
            <h5 className="card-text text-right">Tiền hàng : {itemsPrice}</h5>
            {console.log(cartItems)}
            <p className="card-text text-right">Phí giao hàng : {shippingPrice}</p>
            <p className="card-text text-right">Tổng cộng : {totalPrice}</p>
        </div>
    )
}
export default PayCart