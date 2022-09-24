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
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders';

const promise = loadStripe("pk_test_51LkkMkSELcwMLRfIFUzquOw2roTfCNJmuWiah6r2TtB5pPGKDZJhUQ53tiBpUgHbNV0rv8RUNkiq3skHfsCKSM0T00gBXzOTD6");



function App() {
  
      // runs once app components runs
      const [state, dispatch] = useStateValue();
      // const user = auth.currentUser;

      useEffect(() => {


        onAuthStateChanged(auth, (user) => {
          // console.log("the user is >>> ",user);
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
          //   const uid = user.uid;
            dispatch({
              type: 'SET_USER',
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

<Route path="/payment" element={
        <Fragment>
          <Header/>
          <Elements stripe={promise}>
              <Payment/>
          </Elements>
        </Fragment>
        }/>

<Route path="/orders" element={
        <Fragment>
          <Orders />
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
