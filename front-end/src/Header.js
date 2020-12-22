import React, { useEffect, useState,useContext } from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { bookDetails } from './App';

function Header() {

    const [addscart, setAddsCart] = useState([]);
  
    useEffect(()=>{
       
        let das=async()=>{
        let d = await axios.get(`http://localhost:5000/add`);
        setAddsCart(d.data)
    };
    das();
    },[])

    return (
        <div className="header">
            <Link to="/">
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>

            {/* <div className="header__search">
                {/* <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" /> */}
            {/* </div> */}
            <div className="nav">
                <div className="header__nav">
                    <Link to="/Login">
                        <div className="header__option">
                            <span className="header__optionLineOne">HelloGuest</span>
                            <span className="header__optionLineTwo">Sign In</span>
                        </div>
                    </Link>
                    <div className="header__option">
                    <span className="header__optionLineOne">Customer Service</span>
                    <span className="header__optionLineTwo"> (312)1011376</span>
                </div>
                    
                    <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo"> &Orders</span>
                </div>
                    <Link to="/about">
                        <div className="header__option">
                            <span className="header__optionLineOne">See</span>
                            <span className="header__optionLineTwo header__about">About</span>
                        </div>
                    </Link>
                    <Link to="/Wishlist">
                        <div className="header__option">                        
                        <div className="header__optionBasket">
                            <ShoppingBasketIcon />
                            <span className="header__optionLineTwo header_basketCount">{addscart?addscart.length:" "}</span>
                        </div>
                        </div>

                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
