import React, { useState, useEffect } from 'react';
import '../css/login.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import NotificationManager from 'react-notifications/lib/NotificationManager';
import { Navigate } from 'react-router-dom';

function LoginContents(){
  const [user,setUser] = useState({});
  const [error,setError] = useState({});
  const [isSubmited,setIsSubmited] = useState(false);  
  const [state,setState] = useState({
    mail : '',
    pass : '',
  });
  const auth = getAuth();

  const handleChange = (event) => {

    setState({
      ...state,
      [event.target.name]: event.target.value,
    })
  }
  const email = state.mail;
  const password = state.pass;

  useEffect(() => {
		const unSubcribe = auth.onAuthStateChanged((authUser) => {
			if(authUser) {
				setUser(authUser);

			} else {
				setUser({});
			}
		});
		return () => {
			unSubcribe();
		}
	}, [user, email])

  const handleSubmit=(event)  =>{
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      setIsSubmited(true) ;
      setUser(userCredential);
    })
    .catch( (error)=> {
      if(error.code === 'auth/user-not-found'){
        return 'Sai email !'
      }
      if( error.code === 'auth/wrong-password'){
        return 'Sai mật khẩu !'
      }
      NotificationManager.error(error.code)
      setError({ error });
    })
  }

 return (
    <div className='cards'>
      {isSubmited && user && (<Navigate to='/' replace='true' />)}
      <form id ="form" onSubmit={handleSubmit}>
        <div class ="card-form">
          <p className='text-center'>ĐĂNG NHẬP</p>
          <i className="glyphicon glyphicon-earphone" id="phone"/>
          <input id="phone" name="mail" placeholder="Nhập email" type="email" value={state.mail}
            onChange={handleChange}/>

          <i className="glyphicon glyphicon-lock" id="lock"/>
          <input id="pass" name="pass" placeholder="Nhập mật khẩu" type='password' value={state.pass}
            onChange={handleChange}/>

          <input href="#" className="btni" type='submit' value='TIẾP TỤC'/>

          <div className='rules'>
            <span>Bằng cách đăng ký tài khoản, bạn đã đồng ý với 
              <a href="#" > Điều khoản sử dụng và Chính sách bảo mật</a> của Bachoaxanh.com.
            </span>
          </div>
        </div>
      </form>        
      
    </div>   
  )


}
    
export default LoginContents;