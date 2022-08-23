import { products } from "../../Data";
import Product from "../Product/product";
import './css/cate.css'

const Cate =({type}) =>{
    return (
        <div className="cate" id={type}>
            <div className="groupfeature">
                <h3 className="hometitle">{type}</h3>
                {products.filter((product) => {return product.type === type}).map((item) =>                                                      
                    <Product item={item} key ={item.id}/>
                )}
            </div>
            <div className="view">
                <p className="seemore">Xem thêm</p>
            </div>
       </div>
    )
}
export default Cate