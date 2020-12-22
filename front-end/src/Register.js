import React, { useState, useEffect, useContext } from 'react';
import './login.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Register() {

    const [userDetails, setUserDetails] = useState({ name: '', email: '', password: '' })

    var passuser = (e) => {
        e.preventDefault();
        console.log("okay");
        const user = axios.post('http://localhost:5000/register', userDetails)
    }

    return (

        <div className="login">
            <img className="amazon_sign" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
            <div>
                <div className="login__container">
                    <h1>Register</h1>
                    <form onSubmit={passuser}>
                      
                        <h5>Name</h5>
                            <input type="name" placeholder="Enter Name" onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })} />
                        
                        
                            <h5>Email</h5>
                            <input
                                type="email" placeholder="Enter Email" onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} />
                        
                        
                            <h5>Password</h5>
                            <input type="password" placeholder="Create Password" onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} />
                        

                        <button type="submit" className="login__signInButton">Register</button>

                    </form>

                    <p>By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
                    <button className="login__registerButton"><a href="/Login">Login Here</a></button>
                </div>
            </div>
        </div>
    )
}

export default Register;