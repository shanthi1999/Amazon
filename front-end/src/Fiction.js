import React, { useState, useEffect, useContext } from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Paginator from './Paginator';
import { bookDetails } from './App';
import { useReducer } from 'react';
import { useStateValue } from './Stateprovider';

function Fiction() {
    const booksend = useContext(bookDetails);

    // const [{ bookDetail }, dispatch] = useStateValue();

    useEffect(() => {
        fetchitems();
    }, []);

    const [datas, setDatas] = useState([])
    const [itemperpage, setItemperpage] = useState(4)
    const [currentpage, setCurrentpage] = useState(1)
    const [star, setStar] = useState([1, 2, 3, 4, 5])


    const fetchitems = async () => {
        const datas = await axios.get('http://localhost:5000/ficiton');
        // console.log(datas.data)
        setDatas(datas.data)
    }

    var lastitem = currentpage * itemperpage;
    var firstitem = lastitem - itemperpage;
    var totalitems = datas.slice(firstitem, lastitem)
    // console.log(totalitems[0])

    var paginator = (e) => {
        setCurrentpage(e)
    }

    const addtocart = (e) => {
        const pushtocart = axios.post(`http://localhost:5000/add`, e)
        console.log(e)
    }
    const books = () => {
        console.log("done")
    }


    return (
        <div className="product__outer">
            {totalitems.map(e => (
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
            <div class="product__paginator">
                <Paginator className="paginator" itemperpage={itemperpage} totalitem={datas.length} paginator={paginator} />
            </div>
        </div >

    );
}
export default Fiction;