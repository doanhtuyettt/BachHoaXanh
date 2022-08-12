import React from 'react';
import '../css/login.css'
// import {Link} from "react-router-dom";

function LoginContents(){
    return(
      <div className='loginForm'>
        <form>
          <div class="input-group js-float-label-wrapper">
                
                <h2>ĐĂNG NHẬP</h2>
                <i class="icon-phone"></i>
                <input id="phone" maxlength="10" name="Phone" placeholder="Nhập số điện thoại" type="tel" value=""/>
                <input id="objectId" name="objectId" placeholder="Nhập mật khẩu"/>
            </div>
        </form>
      </div>
      )
    }
    
export default LoginContents;