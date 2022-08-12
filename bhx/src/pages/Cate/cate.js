import { products } from "../../Data";
import Product from "../Product/product";

const Cate =({type}) =>{
    return (
        <div className="groupfeature">
            <h3 className="hometitle">{type}</h3>
            {products.filter((product) => {return product.type === type}).map((item) =>                                                      
                <Product item={item} key ={item.id}/>
            )}
        </div>
    )
}
export default Cate