import React, { useState } from 'react'
import './Header.css'
// import SearchIcon from '@material-ui/icons/Search';
// import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import SellProduct from './SellProduct'
function Header() {
    const [{ user, basket }, dispatch] = useStateValue()
    const handleLogin = (e) => {
        e.preventDefault()
        localStorage.clear()
        dispatch({
            type: 'REMOVE_USER',
            user: null
        },
            {
                type: 'CLEAR_BASKET',
                basket: null
            })
    }
    return (
        <div className="header">
            <Link to="/">
                <img className="header_logo" src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' />
            </Link>


            <div className="header_search">
                <input className="header_searchInput" type="text" />

            </div>

            <div
                className="header_nav">
                <Link to={!user && "/login"}>
                    <div className="header_option">
                        <span className="option_lienOne">Hello  {!user ? 'Guest' : user.name}</span>
                        {
                            !user ? (<span className="option_lienTwo">Sign In</span>) :
                                (<span onClick={(e) => handleLogin(e)} className="option_lienTwo">Sign Out</span>)

                        }

                    </div>
                </Link>
                <Link to='/orders'>
                    <div className="header_option">
                        <span className="option_lienOne">Check </span>
                        <span className="option_lienTwo"> Orders</span>
                    </div>
                </Link>

                <Link to='/sellProduct'>
                    <div className="header_option">
                        <span className="option_lienOne">Sell</span>
                        <span className="option_lienTwo">Product</span>
                    </div>
                </Link>

                <Link to='/checkout'>
                    <div className="header_optionBasket">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
                        </svg>
                        <span className="header_optionLienTwo header_BasketCount" >{basket && user ? basket.length : '0'}</span>
                    </div>
                </Link>


            </div>

        </div>

    )
}

export default Header
