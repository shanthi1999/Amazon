import React from 'react';
import './About.css';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import { Link } from 'react-router-dom';

function About() {
    return (
        <div>
            {/* <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonBooksMarketing/LandingPage/banner_books_3000x1122._CB1198675309_.jpg"/> */}
        
            <h4 className="tag">Follow Us</h4>
        <div className="icon__nav">
       
        <a href="https://www.youtube.com/amazonnews" className="icon" target="blank">
        <YouTubeIcon style={{ fontSize: 50 }} />
        </a>
        <a href="https://www.instagram.com/amazon/" className="icon" target="blank">
            <InstagramIcon style={{ fontSize: 50 }} />
        </a>
        <a href="https://www.facebook.com/Amazon/" className="icon fb" target="blank">
           <FacebookIcon style={{ fontSize: 50 }} />
        </a>
        <a href="https://www.linkedin.com/company/amazon" className="icon fb" target="blank">
            <LinkedInIcon  style={{ fontSize: 50 }}/>
        </a>
        </div>
        <div className="deivery">
        <h3>Delivery Partners</h3>
        <p>In 2018, we launched our Delivery Service Partner program to share our experience in operations and logistics to aspiring entrepreneurs. The program empowered these entrepreneurs to build their own last mile delivery companies from the ground up with the support infrastructure, technology, and a suite of exclusive services. This has enabled many to create thriving small businesses and deliver for customers.
</p>
</div>
        </div>
    );
}

export default About;