import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import Ficitonitems from './Fictionitems';
import NonFicitonitems from './Nonfictionitems';
import Topitems from './Topitems';
import Details from './details';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Wishlist from './Wishlist';
import Register from './Register';
import Login from './login';
import { useContext, useReducer, useEffect, useState } from 'react';

var initialState = {
  bookdetail:{},
  basket:[],
  total:[]
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'click':
      return action.value

      case 'add':
      return {
        ...state,
        basketdet:state.basket.push(action.value),
        bookdetail: [...state.basket]
    };
    case 'total':
      return { 
        ...state,
        total:action.value
      }
    }
}
export var bookDetails = React.createContext();

function App(props) {


  const [value, dispatch] = useReducer(reducer, initialState)

  return (
    <bookDetails.Provider value={{ value, dispatch }}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/Topitems" exact component={Topitems} />
            <Route path="/Fictionitems" exact component={Ficitonitems} />
            <Route path="/Nonfictionitems" exact component={NonFicitonitems} />
            <Route path="/Details/:id" exact component={Details} />
            <Route path="/Wishlist" exact component={Wishlist} />
            <Route path="/Register" exact component={Register} />
            <Route path="/Login" exact component={Login} />
          </Switch>
        </div>
      </Router>
    </bookDetails.Provider>
  );
}

export default App;
