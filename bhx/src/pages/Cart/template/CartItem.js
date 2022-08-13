import React from 'react';
import { useContext } from 'react';
import { ProductContext } from '../../Context/ContextProvider';

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
                <div className="quantitynum">
                    <button className="noselect nochange" onClick={() => onRemove(product)}>-</button> 
                    <input value={product.qty} className='quantity'/> 
                    <button className="noselect" onClick={() => onAdd(product)}>+</button>
                    <p>{product.qty} x {product.price}</p>
                </div> 
                <a className="delete" style={style}>Xóa</a> 
            </div>
        </>
    )
}
export default CartItem