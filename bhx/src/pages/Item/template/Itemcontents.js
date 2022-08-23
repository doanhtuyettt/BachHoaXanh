import { useContext } from "react"
import { useParams } from "react-router-dom";
import { products } from "../../../Data";
import { ProductContext } from "../../Context/ContextProvider";
import { useNavigate } from "react-router-dom";
import '../css/item.css'

const ItemContents = () =>{
    const navigate = useNavigate()
    const {onAdd, currentUser} = useContext(ProductContext);
    let param = useParams()
    const datas = products.find((product) => product.id == param.id);
    return(
      <div className="card cardnormals">
        <div className="card-header">
          <span onClick={() => navigate(-1)} className='glyphicon glyphicon-chevron-left'></span>Quay lại Trang chủ
        </div>
        <div className="card-bodies">
          <h5 className="card-title">HÀNG CÓ SẴN</h5>
          <div className="card_img"><img src ={datas.image}/>
            <aside class="infosell infosell-" data-product="172180" data-exp_store="8819" data-pre_store="9426">
              <h1 class="nameproduct">{datas.name}</h1><div class="expireddate">
                <div class="box-expire">
                  <span>HSD còn 11 tháng</span>
                </div>
              </div>
              <div class="ratinglist-price">
                <div class="boxprice">
                  <strong>{datas.price}</strong> 
                  <span class="strike">56.500₫</span> <label>-10%</label>
                </div>
              </div>
              <div class="noti-promotion">(Khuyến mãi chỉ áp dụng mua Online)</div>
              <div class="shipping"><div><i class="bhx-sship"></i> 
              
              </div>
            </div>
          </aside>
            {currentUser 
            ? <button className="butto w-100" onClick={() => onAdd(datas)} >CHỌN MUA</button> 
            : <button className="butto w-100" >CHỌN MUA</button>}
          </div>
        </div>
      </div>
  )
}
export default ItemContents