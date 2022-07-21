import React from 'react';
import './CheckoutProduct.css';
// import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, price, title, rating, quantity, total_cost_unique_item, removeFromCart }) {
    // const [{ basket }, dispatch] = useStateValue();

    // const removeFromBasket = () =>{
    //         remove the item from basket
    //     dispatch({
    //         type:"REMOVE_FROM_BASKET",
    //         id: id,
    //     })
    // }
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    
                    <strong>{price} * {quantity} = {total_cost_unique_item}</strong>

                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>🌟</p>
                    ))}

                </div>
                <button onClick={()=>removeFromCart(id)}>Remove from Cart</button>

            </div>

        </div>
    )
}

export default CheckoutProduct