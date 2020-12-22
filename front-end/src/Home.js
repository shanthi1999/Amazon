import React, { useState, useEffect } from 'react';
import "./Home.css";
import Product from './Product';
import Fiction from './Fiction';
import NonFiction from './NonFiction';
import Authors from './Authors';
import { Link } from 'react-router-dom';
import Chart from './Chart.js';

function Home() {

    return (
        <div className="home">
            <div className="home__container">
                <div>
                    <img className="homes__image" src="https://www.janegreen.com/wp-content/uploads/2019/05/TheFriendsWeKeep-banner.jpg" alt="Banner_image" />
                </div>
                {/* <strong className="Top__title"><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/PrimeRewards/LP_Revamp/PC_Header_Banner._CB468631809_.jpg"/></strong> */}
                <strong className="Top__title">Top 20 Books</strong>
                <div className="home__row container">
                    <Product />
                </div>
                {/* <Link to="/Topitems" className="home__seemore">See more Items</Link> */}
            </div>
            <div>
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonBooksMarketing/Holiday2020/Stripe_Holiday_B2_1500x100.png" className="binimage" />
            </div>
            <div className="home__fiction">

                <div className="fiction__row">
                    <strong className="fiction__title">Items Related to Fiction Books <Link to="/Fictionitems" className="view__more">View more &#8594;</Link></strong>
                    <Fiction />
                </div>
            </div>
            <div>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Books/122017/selfhelp/pavitb_2017-12-20T12-46_3acad9_1500x300.jpg" className="binerimage" />
                {/* <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonBooksMarketing/Holiday2020/Holiday20_LP_Stripe_Desktop_Books.png" className="binerimage" /> */}
            </div>
            <div className="home__nonfiction">

                <div className="nonfiction__row">
                    <strong className="nonfiction__title">Items Related to Non-Fiction Books<Link to="/Nonfictionitems" className="view__more">View more &#8594;</Link></strong>
                    <NonFiction />
                </div>
            </div>
            {/* <div className="home__authors">

                <div className="authors__row">
                    <strong className="authors__title">Popular Authors and series </strong>
                    <Authors />
                </div>
            </div> */}

            <div className="home__notes">
                <div className="authors__row">
                    <strong className="charts__title">Amazon Charts </strong>
                    <Chart />
                </div>
            </div>

            <div className="copyrights">

                <p>&copy; copyrights claimed</p>

            </div>
        </div>

    )
}

export default Home;