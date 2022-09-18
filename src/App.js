import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './Header';
import Home from'./Home';
import Checkout from './Checkout';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './Login';
import { onAuthStateChanged } from 'firebase/auth';
import { useStateValue } from './StateProvider';
import {auth} from "./firebase";

class App extends Component {


  constructor(props){
    super(props);
    this.state={
      user : {}
    }
}
componentDidMount(){
    this.authListener();
}
authListener() {
  const [{}, dispatch] = useStateValue();

  onAuthStateChanged(auth, (user) => {
    console.log("the user is >>> ",user);
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
    //   const uid = user.uid;
      dispatch({
        type: ' SET_USER',
        user: user
      })
      // ...
    } else {
      // User is signed out
      dispatch({
        type: 'SET_USER',
        user: null
      })
      // ...
    }
  })
}
      // runs once app components runs
      

  render() {

    return (

      //BEM convention
      <BrowserRouter>
        <div className="app">
        <Routes>
        <Route path="/checkout" element={
        <Fragment>
          <Header/>
          <Checkout/>
        </Fragment>
        }/>

<Route path="/login" element={
        <Fragment>
          <Login/>
        </Fragment>
        }/>
          
          <Route path="/" element={
            <Fragment>
              <Header/>
              <Home/>
            </Fragment>  
        }   
          />
            
              
        </Routes>
      </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
