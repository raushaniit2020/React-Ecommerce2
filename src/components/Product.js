import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Product.css';
// import { useStateValue } from './StateProvider';

function Product({ id, title, price, image, rating, addToCart, setProductByCategory }) {

    return (
        <div className='product'>
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>🌟</p>
                    ))}

                </div>
            </div>
            <img src={image} alt="" />
            {/* onClick={addToCart} */}
            <button onClick={()=>addToCart(id, 1)}>Add to Cart</button>
        </div>
    )
}

export default Product