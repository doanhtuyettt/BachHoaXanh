import React from 'react';
import '../css/signin.css'

function SignInContents(){
    return(
      <div className='card cardnormal'>
        <form>
          <div class="card-form">
            <p className='text-center'>ĐĂNG KÝ THÀNH VIÊN</p>
            <input placeholder="Danh xưng" type="text"/>
            <i className="glyphicon glyphicon-user" id="phone"/>
            <input id="user" name="User" placeholder="Nhập họ và tên (bắt buộc)..." type="text" value=""/>
            <i className="glyphicon glyphicon-earphone" id="phone"/>
            <input id="phone" maxlength="10" name="Phone" placeholder="Nhập số điện thoại (bắt buộc)..." type="tel" value=""/>
            <i className="glyphicon glyphicon-lock" id="lock"/>
            <input id="phone" maxlength="10" name="Phone" placeholder="Nhập Email (không bắt buộc)..." type="email" value=""/>
            <a href="#" className="btni">ĐĂNG KÝ</a>

          </div>
        </form>        
      </div>
          
        
      )
    }
    
export default SignInContents;