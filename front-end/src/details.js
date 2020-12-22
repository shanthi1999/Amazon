import React, { useState, useEffect, useContext } from 'react';
import './details.css';
import axios from 'axios';
import { bookDetails } from './App';
import { Link } from 'react-router-dom';

function Details() {
    const bookreceive = useContext(bookDetails);   


    useEffect(() => {
        getComments();
    }, []);


    const [book, setBook] = useState({})
    var [review, setReview] = useState([])
    const [id, setId] = useState(bookreceive.value._id)
    console.log(id)
    
    const [comments, setComments] = useState({userId:'5',UserName:'',TextArea:'',ids:bookreceive.value._id})  
     
 

    let getComments= async ()=>{ 
        var one = await axios.post(`http://localhost:5000/onebook`,{id})
        setBook(one.data);
        var c = one.data.comment;
        console.log(c.length)
        console.log(c)
        setReview(c);
        console.log(review)
     }

    const display = async (e)=>{
        e.preventDefault();
        axios.post(`http://localhost:5000/singlebook`,comments)
        .then(l=>{
            var a = l.data.comment
            setReview(l)
        })
    }

    return (
        <div className="detail">
            <div>
            <img className="banner" src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/events/2020/Q4/Holiday_2020_hero_banner_desktop_Text_1500x150_BooksGG.png" />
            </div>
            <div>
            <img className="shopbanner" src="https://images-na.ssl-images-amazon.com/images/G/01/img20/events/Q4/Holiday/Gifthub/Q4_2020_HolidayGifting_LU_reciprocal_desktop_1500x50.jpg" />
            </div>
            <div>
                <Link to="/"><p className="backtohome">Back to home</p></Link>
            </div>
            <div className="detail__card">

                {/* <h4 className="view__detail">View More Details...!</h4> */}
               <div className="detail__out">
                    <div>
                        <img className="detail__img" src={book.Image} />
                    </div>
                    <div className="detail__nameyear" >
                        <p className="name">{book.Name}</p>
                        <p className="detail__year">Hard Cover - {book.Year}</p>
                        <p>by {book.Author} (Author)</p>
                        <p>Ratings: 🌟🌟🌟🌟 <small>{book.User_Rating} </small>({book.Reviews})</p>
                        {/* <p>Dimensions:<p className="dimensions"> 6.43 x 1.53 x 9.55 inches</p></p> */}
                        <p>Price: ${book.Price}  only at Amazon (Free Delivery)</p>
                        <p>Genre: {book.Genre}</p>
                        <div>
                            <p>Publisher: {book.Author}({book.Year})</p>
                            <p>Language: English</p>
                            <p>Hardcover: 768 pages</p>
                            <p>ISBN-10: 1524763160</p>
                            <p>ISBN-13: 978-1524763169</p>
                            <p>Item Weight: 2.44 pounds</p>
                            {/* <p>Dimensions: <p>6.43 x 1.53 x 9.55 inchess</p></p> */}
                        </div>
                    </div>
                </div>
                </div>
                <div className="Comment">
                    <form onSubmit={display}>
                    <h3 className="comment__heading">Post Your Comment</h3>
                    <h5>User Name</h5>
                    <input type="text" name="username" placeholder="Your Name" className="user__name" onChange={(e)=>setComments({...comments,UserName: e.target.value})} size="62"/>
                    <br/>
                    <h5>Your Comment</h5>
                    <textarea type="text" placeholder="Your Comments" rows="10" name="comment" className="inbox" onChange={(e) => setComments({ ...comments, TextArea: e.target.value })}/>
                    <br/>
                    <button type="submit" className="submit__button">Submit</button>
                    </form>
                </div>
            

           <div className="comments">
               <div className="comment__card">
               <p className="topic">Our Latest Reviews (All Reviews)</p>
               {review.map(e=>(
              
               <div className="comment__single">
                   <img className="avatar" src="https://cdn2.iconfinder.com/data/icons/audio-16/96/user_avatar_profile_login_button_account_member-512.png" height="40px" width="40px"/>
                 <div className="text">
                  <p className="username">{e.Username?e.Username:"no username"}
                   <p className="textarea">{e.text}</p></p>
                   </div>
               </div>
           ))}
               </div>
             

           
        </div>
</div>
    );
}


export default Details;
