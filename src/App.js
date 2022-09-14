import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './Header';
import Home from'./Home';
import Checkout from './Checkout';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './Login';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { useStateValue } from './StateProvider';
// import {auth} from "./firebase"

class App extends Component {
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
