import React, { Component } from 'react';
import './App.css';
import Header from './Header';

class App extends Component {
  render() {
    return (

      //BEM convention
      <div className="app">
        <Header />
        {/*Home*/}
      </div>
    );
  }
}

export default App;
