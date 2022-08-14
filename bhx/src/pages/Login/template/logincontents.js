import React from 'react';
import '../css/login.css'
// import {Link} from "react-router-dom";

function LoginContents(){
    return(
      <div className='card cardnormal'>
        <form>
          <div class="card-form">
            <p className='text-center'>ĐĂNG NHẬP</p>
            <i className="glyphicon glyphicon-earphone" id="phone"/>
            <input id="phone" maxlength="10" name="Phone" placeholder="Nhập số điện thoại" type="tel" value=""/>
            <i className="glyphicon glyphicon-lock" id="lock"/>
            <input id="pass" name="objectId" placeholder="Nhập mật khẩu"/>
            <a href="#" className="btni">TIẾP TỤC</a>

            <div className='rules'>
              <span>Bằng cách đăng ký tài khoản, bạn đã đồng ý với 
                <a href="#"> Điều khoản sử dụng và Chính sách bảo mật</a> của Bachoaxanh.com.
              </span>
            </div>

          </div>
        </form>        
      </div>
          
        
      )
    }
    
export default LoginContents;