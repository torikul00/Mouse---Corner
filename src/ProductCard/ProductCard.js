import React from 'react';
import './ProductCard.css'

const ProductCard = (props) => {
    const {name,id,image,price} = props.products
    return (
        <div className='card'>
            <div className="card-info">
                <img src={image} alt="" />
                <h3>{name}</h3>
                <h3> Price : $ {price}</h3>
                <button>ADD TO CART</button>
            </div>
        </div>
    );
};

export default ProductCard;