import React from 'react';
import './Fictionitems.css';
import Fullfictionitems from './fullfictionitems';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Paginator from './Paginator';
import { bookDetails } from './App';

function Fictionitems() {
    return (
        <div>
            <img className="binsimage" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/PrimeRewards/LP_Revamp/PC_Header_Banner._CB468631809_.jpg" />
           <img className="binsimage" src="https://i.insider.com/5e8cd57715ea4b59b5091755?width=1100&format=jpeg&auto=webp"/>
           <div>
                <Link to="/"><p className="backtohome">Back to home</p></Link>
            </div>
            <Fullfictionitems/>
        </div>
    )

}

export default Fictionitems;