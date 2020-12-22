import React from 'react';
import './Fictionitems.css';
import Fullnonfictionitems from './fullnonfictionitems';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Paginator from './Paginator';
import { bookDetails } from './App';

function Nonfictionitems() {
    return (
        <div>
             <img className="banner" src="https://notionpress.com/new-rewamp/images/store_slider/amazon_banner.webp"/>
                   <div>
                     <Link to="/"><p className="backtohome">Back to home</p></Link>
                     </div>
            <Fullnonfictionitems/>
        </div>
    )

}

export default Nonfictionitems;