import { useContext } from "react"
import { useParams } from "react-router-dom";
import { products } from "../../../Data";
import { ProductContext } from "../../Context/ContextProvider"

const ItemContents = () =>{
    const {onAdd, onRemove} = useContext(ProductContext);
    let param = useParams()
    const datas = products.find((product) => product.id == param.id);
    console.log(datas)
    return(
      <div className="card cardnormal">
        <div className="card-header">
          Quay lại Trang chủ
        </div>
        <div className="card-bodies">
          <h5 className="card-title">HÀNG CÓ SẴN</h5>
          <div className="card_img"><img src ={datas.image}/></div>
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
            <a href="#" class="choosebuy hide">CHỌN MUA</a>
            <div class="noti-promotion">(Khuyến mãi chỉ áp dụng mua Online)</div>
            <div class="shipping"><div><i class="bhx-sship"></i> 
            <span> Đặt online giao tận nhà ĐÚNG GIỜ (nếu trễ tặng PMH 50.000₫)</span></div><div><i class="bhx-swap"></i> 
            <span> Đổi, trả sản phẩm trong 7 ngày </span>
            </div>
          </div>
        </aside>
   
          <div className="quantity">
                <div className="quantitynum">
                    <button className="noselect nochange" onClick={() => onRemove(datas)}>-</button> 
                    <input value={datas.qty} className='quantity'/> 
                    <button className="noselect" onClick={() => onAdd(datas)}>+</button>
                </div>
          </div>
        </div>
      </div>
  )
}
export default ItemContents