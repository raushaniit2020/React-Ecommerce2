import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// https://www.amazon.in/ref=nav_logo
import { Link } from 'react-router-dom';
// import { Card } from '@mui/material';
// import { Cart } from '@chec/commerce.js/features/cart';
// import { useStateValue } from './StateProvider';
// import { auth } from '../Firebase';


function Header({ cart, categories }) {
    // const [{ basket, user }, dispatch] = useStateValue();

    // const handleAuthentication = () => {
    //     if (user){
    //         auth.signOut(); 
    //     }
    // } 

    return (
        <>
        <div className='header'>
            <Link to='/'>
                <img className='header__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchicon">

                </SearchIcon>
            </div>
            <div className="header__nav">
                {/* <Link to={!user && '/login'}> */}
                <Link to='/login'>
                {/* onClick={handleAuthentication} */}
                    <div  className="header__option">
                        <span className="header__optionLineone">
                            Hello Guest
                            {/* Hello {!user ? 'Guest' : user?.email.split('@')[0]} */}
                        </span>
                        <span className="header__optionLinetwo">
                            Sign In
                            {/* { user ? 'Sign Out': 'Sign In'} */}
                        </span>

                    </div>

                </Link>
                <div className="header__option">
                    <span className="header__optionLineone">
                        Returns
                    </span>
                    <span className="header__optionLinetwo">
                        &Orders
                    </span>

                </div>
                <div className="header__option">
                    <span className="header__optionLineone">
                        Your
                    </span>
                    <span className="header__optionLinetwo">
                        Prime
                    </span>

                </div>
                <Link to='/checkout'>
                    <div className="header__optionBasket">
                        <ShoppingCartIcon></ShoppingCartIcon>
                        {/* <img className='header__optionBasket__cart' src="https://www.clipartmax.com/png/full/130-1303615_shopping-cart-icons-amazon-shopping-cart-icon.png" alt="" /> */}
                        <span className="header__optionLinetwo header__basketCount">
                            {/* {basket?.length} */}
                            {cart?.total_items}
                        </span>
                    </div>
                </Link>

            </div>
        </div>
        <div className="header__bottom">
            <ul>
                {categories.map((category) => {
                    return (
                        <li key={category.id}>
                            <Link to={`/category/${category.slug}`}>
                            {category.name}
                            </Link>
                            </li>
                    )
                })}
                {/* <li>All</li>
                <li>Best Sellers</li>
                <li>Mobiles</li>
                <li>Customer Services</li>
                <li>Today's Deals</li>
                <li>Fashion</li>
                <li>Electronics</li>
                <li>Books</li>
                <li>Prime</li>
                <li>New Releases</li>
                <li>Home & Kitchen</li>
                 */}
                 <li>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/PD22/LU/IN-PD-22-GW-SWM_400x39._CB634187897_.jpg" alt="" />
                </li>
                
            </ul>
        </div>
        </>
    )
}

export default Header
