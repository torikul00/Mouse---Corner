import React from 'react';
import './Cart.css'

const Cart = ({cartProduct}) => {
   const {name,image} =cartProduct
    return (
        <div className='cart-product'>
            <img src={image} alt="" />
            <h4>{name}</h4>
        </div>
    );
};

export default Cart;