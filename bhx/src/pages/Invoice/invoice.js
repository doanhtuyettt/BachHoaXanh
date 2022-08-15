import PayCart from "../Cart/template/payCart";
import Header from "../Header/header";
import '../Invoice/css/invoice.css';
import { address } from "../../Data";

const Invoice = () => {
    return(
        <div>
            <Header />
            <div className="card cardnormal">
                <div className="card-header">
                    THÔNG TIN ĐƠN HÀNG
                </div>
                <div className="card-bodies">
                    <form className='form-pay'>
                        <p><b>1. Thông tin người mua hàng:</b></p>
                        <br/>
                        <input type="radio" id="male" name="fav_language" value="Anh"/>
                        <label for="male">Anh</label>
                        <br/>
                        <input type="radio" id="female" name="fav_language" value="Chị"/>
                        <label for="female">Chị</label>
                    </form>
                    <br/>
                    <div className="pay-input ">
                        <input type="text" id="name" placeholder="Họ và tên"/>
                        <input type="text" id='phone'placeholder="Số điện thoại"/>
                    </div>
                </div>

                <div className="card-bodies">
                    <form className='form-pay'>
                        <p><b>2. Địa chỉ nhận hàng:</b></p>
                    </form>
                    <div className="pay-input ">
                    <select name="address" id="address">
                        {address.map((item) => <option value={item.ward}>{item.ward}</option>)}
                    </select>
                    <select name="address" id="address">
                        {address.map((item) => <option value={item.district}>{item.district}</option>)}
                    </select>
                    <select name="address" id="address">
                        {address.map((item) => <option value={item.city}>{item.city}</option>)}
                    </select>
                    </div>
                </div>

                <div className="card-bodies">
                    <form className='form-pay'>
                        <p><b>3. Chọn hình thức thanh toán</b></p>
                    </form>
                    <div className="pay-input">
                        <input type="radio" id='payment'/>
                        <img src={require('../../assets/image/visa.png')}/>
                        <label>Thẻ Visa,Master,JCB</label>
                        <input type="radio" id='payment'/>
                        <img src={require('../../assets/image/momo.png')}/>
                        <label>Ví Momo</label>
                        <input type="radio" id='payment'/>
                        <i className="glyphicon glyphicon-piggy-bank"/>
                        <label>Tiền mặt</label>
                    </div>
                    
                </div>
                
                <br/>
                <PayCart />
                <a href="#" className="btncart">TIẾP TỤC THANH TOÁN</a>
                <a href="#" className="remove">XÓA GIỎ HÀNG</a>
            </div>
        </div>

    )

}
export default Invoice