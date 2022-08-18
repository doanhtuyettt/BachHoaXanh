import { list } from "../../Data"
const Menu =() => {
    return(
        <div className="hero__categories">
            <div className="hero__categories__all">
                <i className="glyphicon glyphicon-menu-hamburger"></i>
                <span>DANH MỤC SẢN PHẨM</span>
            </div>
            <ul className="list-unstyled components">
                <li className="active">
                    <a href="#" >KHUYẾN MÃI HOT</a>
                </li>
                {list.map( item =>
                <li key={item.id}>
                    <a href={`#${item.id}`} data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><b>{item.name}</b></a>
                        <ul className="collapse list-unstyled" id= {item.id}>
                        <li>
                            <a href="#">{item.sub[0]}</a>
                        </li>
                        <li>
                            <a href="#">{item.sub[1]}</a>
                        </li>
                        <li>
                            <a href="#">{item.sub[2]}</a>
                        </li>
                        </ul>
                </li>)}
            </ul>
        </div>
    )
}
export default Menu