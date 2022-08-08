import React from 'react';
import {Link} from "react-router-dom";

function LoginContents(){
    return(
        <>
          <div className="wrap lg_contents">
            <div className="container">
              <h3 className="title">Đăng nhập</h3>
              <div className="lg-box">
                <input type="text" placeholder="ID" className="login-id"/>
                <input type="password" placeholder="PASSWORD" className="login-pw"/>
              </div>
    
              <div className="bt-box">
                <button type="button" className="bt">
                  Đăng nhập
                </button>
                <Link to="/signin" className="bt">
                  Đăng ký
                </Link>
              </div>
            </div>
          </div>
        </>
      )
    }
    
export default LoginContents;