import React, { Fragment, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from'./Home';
import Checkout from './Checkout';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './Login';
import { onAuthStateChanged } from 'firebase/auth';
import { useStateValue } from './StateProvider';
import {auth} from "./firebase";

function App() {
  
      // runs once app components runs
      const [{}, dispatch] = useStateValue();
      // const authUser = auth.currentUser;

      useEffect(() => {


        onAuthStateChanged(auth, (authUser) => {
          // console.log("the user is >>> ",authUser);
          if (authUser) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
          //   const uid = user.uid;
            dispatch({
              type: ' SET_USER',
              user: authUser
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

      }, []);

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

export default App;
