import React from 'react';
import './css/header.css'
import { Link } from 'react-router-dom';
import { products } from '../../Data';
import { ProductContext } from '../Context/ContextProvider';
import { useContext } from 'react';
import Menu from '../Menu/menu';

const Header = () => {
    const padding = {
        padding: 15
    };
    const {cartItems,setQuery,query} = useContext(ProductContext);

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
                    <li><Link style={padding} to="/login"><span className="glyphicon glyphicon-user"></span>Đăng nhập</Link></li>
                    <li><Link style={padding} to="/signup"><span className="glyphicon glyphicon-log-in"></span>Đăng ký</Link></li>
                </ul>
                <form>
                    <input type="text" placeholder="Tìm kiếm món hàng tại đây ..." onChange={(e) => setQuery(e.target.value)}/>
                    {console.log(products.filter((item) => item.name.toLowerCase().includes(query)))}
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