import React, { useState, useEffect,useContext } from 'react';
import './Wishlist.css';
import Wishlistitem from './whislistitem';
import Itemtotal from './itemtotal';

import axios from 'axios';
import { Link } from 'react-router-dom';
import { bookDetails } from './App';

function Wishlist() {
    const bookadd = useContext(bookDetails);
    
    const [addcart, setAddCart] = useState([]);
    
  
    useEffect(()=>{
       
        let datass=async()=>{
        let d = await axios.get(`http://localhost:5000/add`);
        setAddCart(d.data)
    };
    datass();
    },[])
   
    

    // useEffect(() => {
    //     let datass = async () => {
    //         let d = await axios.get(`http://localhost:5000/add`);
    //         // setIteme(d.data)
    //     };
    //     datass();
    // }, []);

    const remove = async (e) => {
        console.log(e)
        await axios.post(`http://localhost:5000/add/delete`, e)
        .then((i)=>{
            console.log(i.data)
            setAddCart(i.data)
        })
        .catch(()=>{
            console.log('error')
        })
    }


    return (
        <div>
            <div className="checkout" >
                <div className="checkout__left">
                    <img className="checkout__image" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" />

                    <div>
                        <h2 className="checkout__title">Your shopping basket</h2>
                    </div>
                </div>
                <div className="checkout__right">
                    <Itemtotal item={addcart.length} Price={addcart} />
                  
                </div>
            </div>
            <div className="back">
                <Link to="/" ><p>&larr;Back to home</p></Link>
            </div>
            <div className="addtocart">
                {addcart.map(e => (
                    <Wishlistitem Name={e.Name} Image={e.Image} Price={e.Price} Rating={e.User_Rating} Year={e.Year} id={e._id} remove={remove}/>
                ))}
            </div>
        </div >
    );
}


export default Wishlist;