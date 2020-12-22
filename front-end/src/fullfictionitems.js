import React, { useState,useEffect,useContext } from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Paginator from './Paginator';
import { bookDetails } from './App';

function Fullfictionitems() {
   
    const booksend = useContext(bookDetails);

    useEffect(() => {
        fictionitems();
    }, []);

    const [fictions, setFictions] = useState([])
    
    const fictionitems = async () => {
        const d = await axios.get('http://localhost:5000/ficiton');
        console.log(d.data)
        setFictions(d.data)
    }

    const addtocart = (e) => {
        const pushtocart = axios.post(`http://localhost:5000/add`, e)
        console.log(e)
    }

    return (
        
            
                 <div className="product__outer">
                 {fictions.map(e=>(
                     <div className="product">
                         <div className="product__info">
                             <Link to={`/Details/${e._id}`}>
                                 <p className="product__name" onClick={() => booksend.dispatch({ type: 'click', value: e })}>{e.Name}</p>
                             </Link>
                             <p className="product__price">
                                 <small className="p__price">$</small>
                                 <strong className="p__price">{e.Price}.00</strong>
                             </p>
                             <div>
                                 <small className="product__year">({e.Year})</small>
                             </div>
     
                             <div className="product__rating">
                                 <p className="product__rate">Ratings:🌟🌟🌟🌟🌟</p>
     
                             </div>
                         </div>
                         <img src={e.Image} />
                         <button onClick={() => addtocart(e)} className="btn"><span>Add to Basket</span></button>
                     </div>
                 ))
                 }
            
        
        </div>
    )}
export default Fullfictionitems;
