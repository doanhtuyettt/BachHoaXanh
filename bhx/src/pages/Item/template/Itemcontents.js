import { useContext } from "react"
import { useParams } from "react-router-dom";
import { products } from "../../../Data";
import { ProductContext } from "../../Context/ContextProvider"

const ItemContents = () =>{
    const {onAdd} = useContext(ProductContext);
    let {index} = useParams()
    const datas = products.find((product) => product.id === index.id);
    return(
        <div className="datails_card">
        <div className="image_box">
          <img className="card_image" src={datas.image} alt="card_image" />
        </div>
        <div className="main_content_box">
          <span className="card_category">{datas.category}</span>
          <div className="card_content">
            <span className="card_title">{datas.title}</span>
            <span style={{ color: "#8fc700" }}>|</span>
            <span className="card_price">
              {datas.price.toLocaleString()} 
            </span>
          </div>
          <div className="card_information">
            <ul>
              <li></li>
              <li></li>
            </ul>
          </div>
          <button onClick={() => onAdd(datas)} className="card_buy">
            CHỌN MUA
          </button>
        </div>
      </div>
    )
}
export default ItemContents