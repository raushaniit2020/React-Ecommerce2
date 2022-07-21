import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
// import CheckoutProduct from './CheckoutProduct';
// import { useStateValue } from './StateProvider';
// import Subtotal from './Subtotal';

function Checkout({ cart, removeFromCart }) {
    // const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img src="https://m.media-amazon.com/images/G/01/AmazonGo/Engagment/2021/NewLP2021/LPRound3August/Header_TakeIt_1500x300.jpg" alt="" className="checkout__add" />
                {/* <img src="" alt="" className="checkout__add" /> */}

                {/* <h3>Hello, {!user ? 'Guest' : user?.email.split('@')[0]}</h3> */}
                <h3>Hello, Guest</h3>
                <div className="checkout__title"><h2>
                    Your Amazon Cart
                </h2>
                    {/* {basket.map((item) => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}

                        />
                    ))} */}
                    {cart?.line_items?.map((added_item) => {
                        return (

                            <CheckoutProduct removeFromCart={removeFromCart} id={added_item.id}
                                title={added_item.name} price={added_item.price.formatted_with_symbol} image={added_item.image.url} rating={5}
                                quantity={added_item.quantity}
                                total_cost_unique_item={added_item.line_total.formatted_with_symbol}


                            />
                        )
                    })}


                </div>
            </div>

            <div className="checkout__right">

                <Subtotal num_items={cart?.total_items} 
                total_cost={cart?.subtotal?.formatted_with_symbol} />
            </div>



        </div>
    )
}

export default Checkout