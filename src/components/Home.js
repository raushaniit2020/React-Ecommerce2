import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Home.css';
import Product from './Product';

function Home({ products, addToCart }) {
    
    
    return (
        <div className='home'>
            <div className="home__container">
                <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/GW/Unrec/Heros/under_1999_Tallhero_3000x1200._CB634376407_.jpg" alt="" />
                <div className="home__row">
               

                    {products.map((item) => {
                        return (
                            <Product id={item.id} title={item.name} price={item.price.formatted_with_symbol} image={item.image.url} rating={5} addToCart={addToCart}/>
                        )
                    })}
         
                    {/* Product */}
                    {/* <Product id={1232} title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl" price={239.0} image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg" rating={4}/> */}
                    {/* Product */}
                    {/* <Product id={1245} title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" price={199.99} image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" rating={3}/> */}
                    {/* Product */}
                </div>
                {/* <div className="home__row">

                
                    <Product id={1233} title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" price={199.99} image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" rating={3} />
                    <Product id={1249} title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" price={199.99} image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" rating={3} />
                
                    <Product id={1234} title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric" price={98.99} image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$" rating={5} />
                
                    <Product id={1235} title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)" price={598.99} image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg" rating={4} />
                </div> */}
                {/* <div className="home__row">
                    
                    <Product id={1236} title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440" price={1094.98} image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg" rating={4} /> */}
            </div>
            {/* <div className="home__row">
                   
                    <Product id={1231} title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback" price={11.96} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" rating={5} />
                    
                    <Product id={1232} title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl" price={239.0} image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg" rating={4} />
                   
                    <Product id={1245} title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" price={199.99} image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" rating={3} />
                    
                </div> */}
            {/* <div className="home__row">

                    
                    <Product id={1233} title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" price={199.99} image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" rating={3} />
                    <Product id={1249} title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" price={199.99} image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" rating={3} />
                    
                    <Product id={1234} title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric" price={98.99} image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$" rating={5} />
                    
                    <Product id={1235} title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)" price={598.99} image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg" rating={4} />
                </div> */}
            {/* <div className="home__row">
                   
                    <Product id={1236} title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440" price={1094.98} image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg" rating={4} />
                </div> */}
        </div>

    )
}

export default Home