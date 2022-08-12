import React from 'react';
import { useContext } from 'react';
import { ProductContext } from '../../context/ContextProvider';

const CartItem =({product}) =>{
    const {onAdd, onRemove} = useContext(ProductContext)
    const style = {
        color : 'blue'
    }
    return(
        <>
            <div className="item"><img src ={product.image}/></div>
            <div className='infor'><p class="card-text">{product.name}</p></div>
            <div className="quantity">
                <div class="quantitynum">
                    <button className="noselect nochange" onClick={() => onRemove(product)}>-</button> 
                    <input autocomplete="off" type="number" min="0" max="50" className="qty"></input> 
                    <button className="noselect" onClick={() => onAdd(product)}>+</button>
                </div> 
                <a class="delete" style={style}>Xóa</a> 
            </div>
        </>
    )
}
export default CartItem