import React from 'react';
import '../css/signin.css';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { auth } from '../../../App';
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignInContents(){
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data) => {
    createUserWithEmailAndPassword(auth, data.email, data.password); 
    console.log(data) 
  }
    return(
      <div className='cards signcard'>
        <form onSubmit={ handleSubmit(onSubmit) }>
          <div class="card-form">
            <p className='text-center'>ĐĂNG KÝ THÀNH VIÊN</p>
            <div className='input-group'>
              <label id='name'>Danh xưng</label>
                <input type='radio' id='persons' name="selection"/><label>Anh</label>
                <input type='radio' id='persons' name="selection"/><label>Chị</label>
            </div>
            <i className="glyphicon glyphicon-user" id="user"/>
            <input id="user" placeholder="Nhập họ và tên (bắt buộc)..." type="text" {...register("user", { required: true, maxlength: 5 })}/>
            {errors.user?.type === 'required' && "Nhập họ và tên"}
            
            <i className="glyphicon glyphicon-earphone" id="phone2"/>
            <input id="Phone" maxlength="10" name="Phone" placeholder="Nhập số điện thoại (bắt buộc)..." type="tel" {...register("phone", { required: true, maxlength: 10 })}/>
            <i className="glyphicon glyphicon-envelope" id="email"/>
            <input id="Email" name="Email" placeholder="Nhập Email (không bắt buộc)..." type="email" {...register("email", { required: true, maxlength: 5 })}/>
            <input id="Password" name="pass" placeholder="Nhập Password (bắt buộc)..." type="password" {...register("password", { required: true, maxlength: 8 })}/>
            <input id="Password" name="pass" placeholder="Nhập lại Password..." type="password"/>
            <input className="btni" value='ĐĂNG KÝ' type="submit"/>
            <Link to='/login'><span href="#" className="remove">Quay lại Đăng nhập</span></Link>
          </div>
        </form>        
      </div>
          
        
      )
    }
    
export default SignInContents;