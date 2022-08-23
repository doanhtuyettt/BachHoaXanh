import React from 'react';
import './css/header.css'
import { Link } from 'react-router-dom';
import { ProductContext } from '../Context/ContextProvider';
import { useContext,useEffect,useState } from 'react';
import Menu from './template/menu';
import { ref,onValue } from 'firebase/database';
import { db } from '../../App';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../../App';
import { data } from '../../Data';


const Header = () => {
    const padding = {
        padding: 15
    };
    const {cartItems,setQuery} = useContext(ProductContext);
    const { currentUser } = useContext(ProductContext);
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    const clickLogin = () => {
        if (currentUser) {
          signOut(auth);
        } else {
          navigate("/login");
        }
      };
    
      const clickSignup = () => {
        navigate("/signup");
      };
    
   
    useEffect(() => {
        if (currentUser) {
        const starCountRef = ref(db, "users/" + currentUser.uid);
        onValue(starCountRef, (snapshot) => {
            if (snapshot.exists()) {
            var data = snapshot.val();
            setUsername(data.name);
            }
        });
        }
    }, [currentUser]);

    
    return (
        <nav className="navbar navbar-expand-lg navigation-wrap">
            <div className="container-fluid">
            <div className="navbar-header">
                <div className="col-lg">
                    <Menu />
                </div>
                </div>
                <div className="navbar-header">
                    <Link to='/'><img src="https://cdn.haitrieu.com/wp-content/uploads/2022/03/Logo-Bach-Hoa-Xanh-H.png"/></Link>
                </div>
                <ul className="nav navbar-nav">
                    <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">Các cơ sở </a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Miền Bắc</a></li>
                            <li><a href="#">Miền Trung</a></li>
                            <li><a href="#">Miền Nam</a></li>
                        </ul>
                    </li>
                    <li><Link style={padding} to="/cart"><span className="glyphicon glyphicon-shopping-cart"></span> Giỏ hàng
                        {cartItems.length > 0 && (
                        <span className="badge">{cartItems.length}</span>)}
                    </Link>
                    </li>
                </ul>
               
                <ul className="nav navbar-nav navbar-right">
                    <li><span className="glyphicon glyphicon-user"/>{currentUser && `Xin chào ${currentUser.email.slice(0,5)} !` }<button className='btnh'onClick={clickLogin}>{currentUser ? "ĐĂNG XUẤT" : "ĐĂNG NHẬP"}</button>
                    {!currentUser && <button className='btnh'onClick={clickSignup}>ĐĂNG KÝ</button>}</li>
                </ul>


                <form>
                    <input type="text" placeholder="Tìm kiếm món hàng tại đây ..." onChange={(e) => setQuery(e.target.value)}/>
                    <div className="input-group-btn">
                        <button className="btn btn-default" type="submit">
                            <i className="glyphicon glyphicon-search"></i>
                        </button>
                    </div>
                </form>
            </div>
        </nav>
    )
}
export default Header;