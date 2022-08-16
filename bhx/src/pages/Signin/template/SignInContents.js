import React from 'react';
import '../css/signin.css';
import { Link } from 'react-router-dom';

function SignInContents(){
    return(
      <div className='cards signcard'>
        <form>
          <div class="card-form">
            <p className='text-center'>ĐĂNG KÝ THÀNH VIÊN</p>
            <div className='input-group'>
              <label id='name'>Danh xưng</label>
                <input type='radio' id='persons' name="selection"/><label>Anh</label>
                <input type='radio' id='persons' name="selection"/><label>Chị</label>
            </div>
            <i className="glyphicon glyphicon-user" id="user"/>
            <input id="user" name="User" placeholder="Nhập họ và tên (bắt buộc)..." type="text" />
            <i className="glyphicon glyphicon-earphone" id="phone2"/>
            <input id="Phone" maxlength="10" name="Phone" placeholder="Nhập số điện thoại (bắt buộc)..." type="tel" />
            <i className="glyphicon glyphicon-envelope" id="email"/>
            <input id="Email" name="Email" placeholder="Nhập Email (không bắt buộc)..." type="email"/>
            <input id="Password" name="pass" placeholder="Nhập Password (bắt buộc)..." type="password"/>
            <input id="Password" name="pass" placeholder="Nhập lại Password..." type="password"/>
            <a href="#" className="btni">ĐĂNG KÝ</a>
            <Link to='/login'><span href="#" className="remove">Quay lại Đăng nhập</span></Link>
          </div>
        </form>        
      </div>
          
        
      )
    }
    
export default SignInContents;