import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Home from'./Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (

      //BEM convention
      <div className="app">
        <Switch>
          <Route path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/checkout">
            <Header />
            <h1>This is checkout session.</h1>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
