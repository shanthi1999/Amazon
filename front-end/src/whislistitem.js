import React, { useState, useEffect } from 'react';
import './whislistitem.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Whishlistitem({ Name, Price, Year, id, Image,Rating, remove }) {

    //  const remove = async (e) => {
    //      console.log(e)
    //      await axios.post(`http://localhost:5000/add/delete`, e)
    //      .then((i)=>{
    //          console.log(i.data)
    //      })
    //      .catch(()=>{
    //          console.log('error')
    //      })
    //  }

     return (
           
             <div className="product__outer">
             <div className="checkoutProduct">
                 <img className="checkoutProduct__image" src = {Image}/>
                <div className="checkoutProduct__info">
                    <p className="checkoutProduct__title">{Name}</p>
                    <p className="checkoutProduct__price">
                        <small>$</small>
                        <small>{Price}.00</small>
                        </p>
                    <div className="checkoutProduct__rating">
                   
                        {/* <p>🌟🌟🌟🌟🌟</p> */}
                   
                    </div>
                    <button className="checkoutProduct__button" onClick={() => remove( id )}>Remove from Basket</button>
                </div>
             </div>
             
         </div>
      

     )
}


export default Whishlistitem;