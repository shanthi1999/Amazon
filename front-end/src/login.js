import React, { useState, useEffect, useContext } from 'react';
import './login.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login(props, { getUser }) {


    const [loginDetails, setLoginDetails] = useState({ email: '', password: '' })

    var loginuser = (e) => {
        e.preventDefault();
        console.log("okay");
        axios.post('http://localhost:5000/logins', loginDetails)
            .then((res) => {
                var result = res.data;
                localStorage.setItem('token', result.token);
                console.log(result.token)
            })
            .then(() => {
                props.history.push("/Wishlist");
            })

    }

    // export var userLogin = React.createContext();

    return (
        <div className="login">
            <img className="amazon_sign" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
            <div>
                <div className="login__container">
                    <h1>Sign-in</h1>
                    <form onSubmit={loginuser}>

                        <h5>Email</h5>
                        <input type="email" placeholder="Enter Email" onChange={(e) => setLoginDetails({ ...loginDetails, email: e.target.value })} />


                        <h5>Password</h5>
                        <input type="password" placeholder="Create Password" onChange={(e) => setLoginDetails({ ...loginDetails, password: e.target.value })} />

                        <button type="submit" className="login__signInButton">Login</button>
                    </form>
                    {/* <p>New user? <a href="/Register">Create and account</a></p> */}
                    <p>By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
                    <button className="login__registerButton"><a href="/Register">Create your Amazon account</a></button>
                </div>
            </div>
        </div>
        // </userDetails.Provider>
    )
}

export default Login;