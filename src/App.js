import React, { Component } from 'react';
import './App.css';
import Home from './component/Home';
import Search from './component/Search';

class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <Home />
      </div>
    )
  }
}

export default App;
