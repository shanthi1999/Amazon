import React, { useState, useEffect, useContext } from 'react';
import './details.css';
import axios from 'axios';

function Comments(commentid) {

    useEffect(()=>{
       
        let cm =async()=>{
        let d = await axios.post(`http://localhost:5000/onebook`,{commentid});
      console.log(d)
    };
    cm();
    },[])

   return(
    <p>comment</p>
    );
}

export default Comments;
