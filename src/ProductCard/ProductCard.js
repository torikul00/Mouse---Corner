import React from 'react';
import './ProductCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const ProductCard = (props) => {
    const {name,image,price} = props.products
    return (
        <div className='cards'>
            <div className="card-info">
                <div className="img"><img src={image} alt="mouses" /></div>
                <h3>{name}</h3>
                <h3> Price : $ {price}</h3>
                <button>ADD TO CART  <FontAwesomeIcon icon={faCartShopping} /></button>
            </div>
        </div>
    );
};

export default ProductCard;