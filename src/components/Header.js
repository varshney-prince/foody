import React from "react";
import { ICON } from "../Config/config";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const HeaderComponent = ()=>{
    const cartItems = useSelector(store => store.cart.items);
    // console.log(cartItems);
    return (
        <>
          <div className="container main-nav flex">
            <a href="/" className="company-logo">
                <img src={ICON} alt="company logo"/>
            </a>
            <div className="nav-links">
                <ul className="flex ul">
                    <li><a href="#" className="hover-link"><Link to="/">Home</Link></a></li>
                    <li><a href="#" className="hover-link"><Link to="/about">About</Link></a></li>
                    <li><a href="#" className="hover-link"><Link to="/contact">Contact</Link></a></li>
                    <li><a href="#" className="hover-link"><Link to="/cart">Cart - {cartItems.length}</Link></a></li>
                    <li><a href="#" className="hover-link secondary-button">Sign In</a></li>
                    <li><a href="#" className="hover-link primary-button">Sign Up</a></li>
                </ul>
            </div>
        </div>
        </>
    )
}