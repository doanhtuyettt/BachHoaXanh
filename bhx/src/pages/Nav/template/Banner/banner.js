import { data } from "../../../../Data"

const Banner = () =>{
    const img = {
        width :45    
    }
    return(
        <div className="row featured__filter" >
            <h4>Nhóm hàng thường mua</h4>
                {data.map(item =>
                <div className="col-lg-1 mix" key={item.id}>
                    <div className="featured__item">
                        <div className="featured__item__pic ">
                            <img src={item.image} alt='image' style={img}/>
                        </div>
                        <div className="featured__item__text">
                            <a href="#">{item.content}</a>
                        </div>
                    </div>
                </div>)}
        </div>
    )
}
export default Banner