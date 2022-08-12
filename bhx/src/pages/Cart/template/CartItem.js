
const CartItem =(props) =>{
    const style = {
        color : 'blue'
    }
    return(
        <>
        {console.log(props)}
            <div className="item"><img src ={props.products.image}/></div>
            <div className='infor'><p class="card-text">{props.products.name}</p></div>
            <div class="quantity">
                <div class="quantitynum">
                    <i class="noselect nochange">-</i> 
                    <input autocomplete="off" type="number" min="0" max="50" class="qty"/> 
                    <i class="noselect">+</i>
                </div> 
                <a class="delete" style={style}>Xóa</a> 
            </div>
        </>
    )
}
export default CartItem