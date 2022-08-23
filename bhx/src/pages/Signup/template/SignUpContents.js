import React from 'react';
import '../css/signin.css';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import NotificationManager from 'react-notifications/lib/NotificationManager';
import { db,auth } from '../../../App';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from "firebase/database";

function SignUpContents(){
  const { register, formState: { errors }} = useForm();
  // const {onSubmit} = useContext(ProductContext)
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    function onRegister() {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          set(ref(db, "users/" + userCredential.user.uid), {
            name : name,
            phone :phone,
            email: email,
          });
        })
        .catch((error) => {});
      navigate("/");
    }
    onRegister();
  };

    return(
      <div className='cards signcard'>
        <form onSubmit={ handleSubmit}>
          <div class="card-form">
            <p className='text-center'>ĐĂNG KÝ THÀNH VIÊN</p>
            <div className='input-group'>
              <label id='name'>Danh xưng</label>
                <input type='radio' id='persons' name="selection"/><label>Anh</label>
                <input type='radio' id='persons' name="selection"/><label>Chị</label>
            </div>
            <i className="glyphicon glyphicon-user" id="user"/>
            {/* <input id="user" placeholder="Nhập họ và tên (bắt buộc)..." type="text" {...register("user", { required: true, maxLength: 20 })}/> */}
            <input
              id='user'
              placeholder="Nhập họ và tên (bắt buộc)..."
              onChange={(e) => setName(e.target.value)}
              required
              type="text"
            ></input>
            <i className="glyphicon glyphicon-earphone" id="phone2"/>
            {/* <input id="Phone" name="Phone" placeholder="Nhập số điện thoại (bắt buộc)..." type="tel" {...register("phone", { required: true, maxlength: 10 })}/> */}
            <input
              id='Phone'
              placeholder="Nhập số điện thoại (bắt buộc)..."
              onChange={(e) => setPhone(e.target.value)}
              required
              type="tel"
            ></input>
            <i className="glyphicon glyphicon-envelope" id="email"/>
            <input id="Email" name="Email" placeholder="Nhập Email (bắt buộc)..." type="email" onChange={(e) => setEmail(e.target.value)}/>
            {/* <input id="Password" name="pass" placeholder="Nhập Password (bắt buộc)..." type="password" maxLength={11} {...register("password", { required: true })}/>
            */}
            <input
              id='Password'
              placeholder="Nhập Password (bắt buộc)..."
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
            ></input>
            <input id="Password" name="pass" placeholder="Nhập lại Password..." type="password" {...register("resetpassword", { required: true})}/>
            {/* {errors.user?.type === 'required' && <span className="text-danger">Vui lòng nhập họ và tên</span>}
            {errors.phone?.type === 'required' && <span className="text-danger">Vui lòng nhập số điện thoại</span>}
            {errors.password?.type === 'required' && <span className="text-danger">Vui lòng nhập mật khẩu</span>} */}
           
            <input className="btni" value='ĐĂNG KÝ' type="submit" onClick={() => NotificationManager.success('Đăng ký thành công !')}/>
            <Link to='/login'><span href="#" className="remove">Quay lại Đăng nhập</span></Link>
          </div>
        </form>        
      </div>
      )
    }
    
export default SignUpContents;