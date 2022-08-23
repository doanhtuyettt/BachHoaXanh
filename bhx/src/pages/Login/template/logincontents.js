import React, { useEffect, useState } from 'react';
import '../css/login.css';
import { isEmpty } from 'lodash';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../App';
import NotificationManager from 'react-notifications/lib/NotificationManager';
import { useNavigate } from 'react-router-dom';
import { async } from '@firebase/util';

function LoginContents() {
  // const [user,setUser] = useState({});
  // const [error,setError] = useState({});
  // const [isSubmited,setIsSubmited] = useState(false);  
  // const [state,setState] = useState({
  //   mail : '',
  //   pass : '',
  // });
  // const auth = getAuth();

  // const handleChange = (event) => {

  //   setState({
  //     ...state,
  //     [event.target.name]: event.target.value,
  //   })
  // }
  // const email = state.mail;
  // const password = state.pass;

  // useEffect(() => {
  // 	const unSubcribe = auth.onAuthStateChanged((authUser) => {
  // 		if(authUser) {
  // 			setUser(authUser);

  // 		} else {
  // 			setUser({});
  // 		}
  // 	});
  // 	return () => {
  // 		unSubcribe();
  // 	}
  // }, [user, email])

  // const handleSubmit=(event)  =>{
  //   event.preventDefault();
  //   signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
  //     setIsSubmited(true) ;
  //     setUser(userCredential);
  //   })
  //   .catch( (error)=> {
  //     if( error.code === 'auth/wrong-password'){
  //       NotificationManager.error('Nhập sai mật khẩu !')
  //     }
  //     if( error.code === 'auth/user-not-found'){
  //       NotificationManager.error('Nhập sai email !')
  //     }
  //     setError({ error });
  //   })
  // }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const navigate = useNavigate();

  //access key => localStorage.
  //useGetUser =>

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    }
    catch (error) {
      if (error.code === 'auth/wrong-password') {
        NotificationManager.error('Nhập sai mật khẩu !')
      }
      if (error.code === 'auth/user-not-found') {
        NotificationManager.error('Nhập sai email !')
      }
      setError({ error });
    }
    ;

  };

  return (
    <div className='cards'>
      {/* {isSubmited && user && (<Navigate to='/' replace='true' />)} */}
      <form id="form" onSubmit={handleSubmit}>
        <div class="card-form">
          <p className='text-center'>ĐĂNG NHẬP</p>
          <i className="glyphicon glyphicon-earphone" id="phone" />
          <input id="phone" name="mail" placeholder="Nhập email" type="email"
            onChange={(e) => setEmail(e.target.value)} />

          <i className="glyphicon glyphicon-lock" id="lock" />
          <input id="pass" name="pass" placeholder="Nhập mật khẩu" type='password'
            onChange={(e) => setPassword(e.target.value)} />

          <div class="form-groups text-center">
            <button class="btnGoogle" type="button"> 
              <img src='https://i.pinimg.com/originals/74/65/f3/7465f30319191e2729668875e7a557f2.png'/>Đăng nhập với Google
            </button>
          </div>
          <input href="#" className="btni" type='submit' value='TIẾP TỤC' />

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